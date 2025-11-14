// 載入必要模組
require('dotenv').config();
const express = require('express');
const { Client } = require('@line/bot-sdk');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// 初始化 Express 應用
const app = express();
const PORT = process.env.PORT || 3000;

// LINE Bot 設定
const lineConfig = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
};

// 檢查環境變數
if (!lineConfig.channelAccessToken || !lineConfig.channelSecret) {
  console.error('❌ 錯誤: 請設定 LINE_CHANNEL_ACCESS_TOKEN 和 LINE_CHANNEL_SECRET');
  process.exit(1);
}

if (!process.env.GOOGLE_API_KEY) {
  console.error('❌ 錯誤: 請設定 GOOGLE_API_KEY');
  process.exit(1);
}

// 初始化 LINE Client
const lineClient = new Client(lineConfig);

// 初始化 Google AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// 中間件
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// AI 回覆函數
async function generateAIResponse(userMessage) {
  try {
    console.log('🤖 處理訊息:', userMessage);
    
    const prompt = `請用繁體中文回答以下問題，回答要簡潔明瞭：${userMessage}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log('🧠 AI 回覆:', text);
    return text;
  } catch (error) {
    console.error('❌ AI 回覆錯誤:', error);
    return '抱歉，我現在無法處理您的問題，請稍後再試。';
  }
}

// 處理 LINE Webhook
app.post('/webhook', async (req, res) => {
  try {
    const events = req.body.events;
    
    if (!events || events.length === 0) {
      return res.status(200).send('OK');
    }

    // 處理每個事件
    for (const event of events) {
      console.log('📨 收到事件:', JSON.stringify(event, null, 2));
      
      if (event.type === 'message' && event.message.type === 'text') {
        const userMessage = event.message.text;
        const replyToken = event.replyToken;
        
        console.log('👤 使用者訊息:', userMessage);
        
        // 生成 AI 回覆
        const aiResponse = await generateAIResponse(userMessage);
        
        // 回覆訊息
        await lineClient.replyMessage(replyToken, {
          type: 'text',
          text: aiResponse
        });
        
        console.log('✅ 回覆成功');
      }
    }
    
    res.status(200).send('OK');
  } catch (error) {
    console.error('❌ Webhook 處理錯誤:', error);
    res.status(500).send('Internal Server Error');
  }
});

// 健康檢查端點
app.get('/', (req, res) => {
  res.json({
    status: 'running',
    message: 'LINE AI Bot is working!',
    timestamp: new Date().toISOString()
  });
});

// 狀態檢查端點
app.get('/status', (req, res) => {
  res.json({
    server: 'online',
    line_config: {
      access_token: lineConfig.channelAccessToken ? '已設定' : '未設定',
      channel_secret: lineConfig.channelSecret ? '已設定' : '未設定'
    },
    google_ai: process.env.GOOGLE_API_KEY ? '已設定' : '未設定',
    port: PORT
  });
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log('🚀 ================================');
  console.log('🤖 LINE Bot 伺服器運行在 http://localhost:' + PORT);
  console.log('📡 Webhook URL: http://localhost:' + PORT + '/webhook');
  console.log('🧠 使用 AI 模型: Google Gemini Pro');
  console.log('⚡ 開發模式: 檔案變更時自動重啟');
  console.log('🚀 ================================');
});

// 優雅關閉
process.on('SIGINT', () => {
  console.log('\n🛑 正在關閉伺服器...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 正在關閉伺服器...');
  process.exit(0);
});