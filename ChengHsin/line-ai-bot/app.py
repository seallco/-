from flask import Flask, request, abort
from linebot import LineBotApi, WebhookHandler
from linebot.exceptions import InvalidSignatureError
from linebot.models import *
import openai
import os
from dotenv import load_dotenv
import logging

# 載入環境變數
load_dotenv()

app = Flask(__name__)

# LINE Bot 設定
line_bot_api = LineBotApi(os.getenv('LINE_CHANNEL_ACCESS_TOKEN'))
handler = WebhookHandler(os.getenv('LINE_CHANNEL_SECRET'))

# OpenAI 設定
openai.api_key = os.getenv('OPENAI_API_KEY')

# 設定日誌
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# 儲存用戶對話歷史（實際應用建議使用資料庫）
user_conversations = {}

@app.route("/", methods=['GET'])
def home():
  return "LINE Bot is running! 🤖"

@app.route("/callback", methods=['POST'])
def callback():
  # 取得 X-Line-Signature header 值
  signature = request.headers['X-Line-Signature']
  
  # 取得 request body
  body = request.get_data(as_text=True)
  logger.info("Request body: " + body)
  
  # 驗證簽名
  try:
      handler.handle(body, signature)
  except InvalidSignatureError:
      logger.error("Invalid signature. Please check your channel access token/channel secret.")
      abort(400)
  
  return 'OK'

@handler.add(MessageEvent, message=TextMessage)
def handle_message(event):
  user_id = event.source.user_id
  user_message = event.message.text
  
  logger.info(f"收到用戶 {user_id} 的訊息: {user_message}")
  
  # 檢查是否為特殊指令
  if user_message.lower() in ['清除對話', 'clear', 'reset']:
      if user_id in user_conversations:
          del user_conversations[user_id]
      reply_text = "對話歷史已清除！我們重新開始吧 😊"
  else:
      # 生成 AI 回應
      reply_text = generate_ai_response(user_id, user_message)
  
  # 回覆訊息
  line_bot_api.reply_message(
      event.reply_token,
      TextSendMessage(text=reply_text)
  )

def generate_ai_response(user_id, message):
  """生成 AI 回應"""
  try:
      # 初始化用戶對話歷史
      if user_id not in user_conversations:
          user_conversations[user_id] = [
              {"role": "system", "content": """你是一個友善的客服助理。請遵循以下規則：
1. 用繁體中文回應
2. 保持專業但親切的語調
3. 如果不確定答案，請誠實說明並建議聯絡人工客服
4. 回應長度控制在100字以內
5. 可以使用適當的表情符號增加親切感"""}
          ]
      
      # 添加用戶訊息到對話歷史
      user_conversations[user_id].append({"role": "user", "content": message})
      
      # 限制對話歷史長度（避免 token 過多）
      if len(user_conversations[user_id]) > 10:
          # 保留系統訊息和最近的8條對話
          user_conversations[user_id] = [user_conversations[user_id][0]] + user_conversations[user_id][-8:]
      
      # 呼叫 OpenAI API
      response = openai.ChatCompletion.create(
          model="gpt-3.5-turbo",
          messages=user_conversations[user_id],
          max_tokens=150,
          temperature=0.7
      )
      
      ai_response = response.choices[0].message.content.strip()
      
      # 添加 AI 回應到對話歷史
      user_conversations[user_id].append({"role": "assistant", "content": ai_response})
      
      return ai_response
      
  except Exception as e:
      logger.error(f"AI 回應生成錯誤: {str(e)}")
      return "抱歉，我現在遇到一些技術問題 😅 請稍後再試，或聯絡我們的客服人員協助您！"

@handler.add(PostbackEvent)
def handle_postback(event):
  """處理按鈕點擊事件"""
  data = event.postback.data
  
  if data == 'contact_human':
      reply_text = "正在為您轉接人工客服，請稍候... 📞\n\n或您可以直接撥打客服專線：0800-123-456"
  elif data == 'faq':
      reply_text = "常見問題：\n1. 營業時間\n2. 退換貨政策\n3. 配送資訊\n\n請直接輸入您想了解的項目！"
  else:
      reply_text = "感謝您的操作！有其他問題歡迎隨時詢問 😊"
  
  line_bot_api.reply_message(
      event.reply_token,
      TextSendMessage(text=reply_text)
  )

@handler.add(FollowEvent)
def handle_follow(event):
  """處理用戶加入好友事件"""
  welcome_message = """🎉 歡迎加入我們的官方帳號！

我是您的專屬 AI 客服助理，可以協助您：
• 產品諮詢與介紹
• 訂單狀態查詢
• 常見問題解答
• 營業資訊查詢

有任何問題都可以直接跟我說話喔！
如需人工客服，請輸入「轉接客服」"""
  
  line_bot_api.reply_message(
      event.reply_token,
      TextSendMessage(text=welcome_message)
  )

if __name__ == "__main__":
  port = int(os.environ.get('PORT', 5000))
  app.run(host='0.0.0.0', port=port, debug=True)