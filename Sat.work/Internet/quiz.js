// 題庫
const questions = [
    {
        question: "使用 RSSI 進行定位時，感測器根據何種資訊估算距離？",
        options: ["頻率", "編碼模式", "傳輸時間", "收到訊號強度"],
        answer: "收到訊號強度"
    },
    {
        question: "在無線感測網路中，何者是貪婪式路由協定所產生的缺點？",
        options: ["無法平均使用每一個節點而降低網路的生命週期", "只挑選最快傳輸的路徑而導致部分感測器快速耗盡電量", "未考慮代傳點剩餘電量而可能導致代傳點沒有足夠的電力將封包傳遞出去造成封包遺失", "全部皆是"],
        answer: "全部皆是"
    },
    {
        question: "無線感測網路的感測器主要由哪四個基本單元組成？",
        options: ["感測單元、存儲單元、加密單元、電力供應單元", "感測單元、處理單元、顯示單元、電力供應單元", "感測單元、處理單元、無線傳輸單元、顯示單元", "感測單元、處理單元、無線傳輸單元、電力供應單元"],
        answer: "感測單元、處理單元、無線傳輸單元、電力供應單元"
    },
    {
        question: "B-MAC 的缺點主要是？",
        options: ["無法重傳", "頻寬不足", "需要時間同步", "耗電與傳輸延遲高"],
        answer: "耗電與傳輸延遲高"
    },
    {
        question: "在無線感測網路中，無線傳輸單元在感測器中主要用途是什麼？",
        options: ["控制感測器功耗", "處理感測資料", "進行資料加密", "傳送感測資料"],
        answer: "傳送感測資料"
    },
    {
        question: "ZigBee在915 MHz頻段可用通道數為多少？",
        options: ["1", "5", "10", "16"],
        answer: "10"
    },
    {
        question: "ZigBee 在 868 MHz 頻段可用通道數為多少？",
        options: ["1", "5", "10", "16"],
        answer: "1"
    },
    {
        question: "Zigbee 技術有何特質？",
        options: ["高成本的無線網路技術", "低耗電的有線傳輸技術", "耗電卻可支援多節點的無線技術", "低耗電支援大量節點的無線技術"],
        answer: "低耗電支援大量節點的無線技術"
    },
    {
        question: "下列哪一項不屬於無線感測網路常見應用？",
        options: ["環境監控", "工業監控", "個人健身", "高頻金融交易"],
        answer: "高頻金融交易"
    },
    {
        question: "下列哪一項不是感測器軟體開發平台？",
        options: ["Eclipse", "TinyOS IDE", "IAR Embedded Workbench", "Visual Studio"],
        answer: "Visual Studio"
    },
    {
        question: "在無線感測網路中，Range-based 定位技術不包含下列哪種？",
        options: ["Aoa", "TDoa", "RSSI", "RIP"],
        answer: "RIP"
    },
    {
        question: "在 Zigbee 網路中，coordinator 會定時發出 beacon 來同步裝置，哪種網路拓撲沒有此功能？",
        options: ["星狀", "樹狀", "網狀", "環狀"],
        answer: "環狀"
    },
    {
        question: "在 B-MAC 中，傳送者會持續發送何種封包？",
        options: ["Poll", "ACK", "Beacon", "Preamble"],
        answer: "Preamble"
    },
    {
        question: "在 ZigBee 的 Non-Beacon Mode 中，使用哪種機制競爭傳輸？",
        options: ["FDMA 方式", "TDMA 方式", "使用 OFDMA 方式", "類似 CSMA/CA 方式"],
        answer: "類似 CSMA/CA 方式"
    },
    {
        question: "為何感測器通常以電池作為電力來源？",
        options: ["電池重量輕", "電池易於更換", "電池容量比外部電源大", "降低佈建成本且無法插電"],
        answer: "降低佈建成本且無法插電"
    },
    {
        question: "感測器微作業系統 TinyOS 的主要開發單位是哪裡？",
        options: ["MIT", "CMU", "Stanford", "UC Berkeley"],
        answer: "UC Berkeley"
    },
    {
        question: "在無線感測網路之目標物覆蓋（Target Coverage）中，Sweep Coverage 又稱為？",
        options: ["Area Coverage", "Barrier Coverage", "Spatial Coverage", "Temporal Coverage"],
        answer: "Temporal Coverage"
    },
    {
        question: "在無線感測網路之資料收集 Mobile Data Mule 模式下，資料收集站會拜訪何者？",
        options: ["所有節點", "Sink", "Anchor", "Cluster Head"],
        answer: "Cluster Head"
    },
    {
        question: "在無線感測網路路徑協定中，最基本且最不需維護拓撲的方法是？",
        options: ["Gossiping", "GPSR", "AODV", "Flooding"],
        answer: "Flooding"
    },
    {
        question: "在無線感測網路之 Barrier Coverage 主要監控何種概念？",
        options: ["點", "線", "面", "時間"],
        answer: "線"
    },
    {
        question: "在邊緣式路由中，使用何種法則繞過障礙區？",
        options: ["最短路徑法則", "泥濘法則", "左手法則", "右手法則"],
        answer: "右手法則"
    },
    {
        question: "在 2.4GHz 全球頻段中，ZigBee 實體層支援的理論速率為？",
        options: ["20kbps", "40kbps", "100kbps", "250kbps"],
        answer: "250kbps"
    },
    {
        question: "在實作感測網路時，因為容易受到環境以及軟硬體設備等影響，因此需要哪方面的考量？",
        options: ["省電機制", "感測網路的傳輸介質", "無線感測網路的網路拓樸", "全部皆是"],
        answer: "全部皆是"
    },
    {
        question: "以下哪一項不屬於 ZigBee 主要應用領域？",
        options: ["智慧電網", "智慧醫療", "智慧生活", "高頻交易"],
        answer: "高頻交易"
    },
    {
        question: "在無線感測網路中，感測單元中的訊號轉換元件主要負責什麼？",
        options: ["放大類比訊號", "儲存感測到的資料", "將數位訊號轉為類比訊號", "將類比訊號轉為數位訊號"],
        answer: "將類比訊號轉為數位訊號"
    },
    {
        question: "感測器的硬體設計主要由四個基本部分所組成，下列何者為非？",
        options: ["感測單位", "處理單位", "電力供應單位", "韌體單位"],
        answer: "韌體單位"
    },
    {
        question: "在無線感測網路中，處理單元內的儲存元件功能最類似於哪一項？",
        options: ["CPU", "網路卡", "記憶體", "硬碟"],
        answer: "硬碟"
    },
    {
        question: "下列何者為 ZigBee 不適用之場景？",
        options: ["感測無線網路", "金門大橋監控", "家庭自動化", "數位學習"],
        answer: "數位學習"
    },
    {
        question: "在 ZigBee 規定下，Beacon Mode 的活動區間，又可細分為何？",
        options: ["ASK 與 FSK", "SIFS 與 DIFS", "信標與非信標", "競爭區間與免競爭區間"],
        answer: "競爭區間與免競爭區間"
    },
    {
        question: "Asynchronous MAC protocols 不需要什麼條件？",
        options: ["Preamble", "RTS/CTS", "頻譜管理", "時間同步"],
        answer: "時間同步"
    },
    {
        question: "在無線感測網路省電機制中，Duty Cycle 機制的核心在於？",
        options: ["Beacon 同步", "多路存取", "路由重建", "醒睡週期管理"],
        answer: "醒睡週期管理"
    },
    {
        question: "感測器本身的硬體設計具有哪個優點？",
        options: ["體積小", "高效能", "成本低廉", "全部皆是"],
        answer: "全部皆是"
    },
    {
        question: "在無線感測網路中，固定式感測器資料收集繞徑樹的根節點通常是？",
        options: ["mobile node", "Cluster Head", "Sink", "Anchor"],
        answer: "Sink"
    },
    {
        question: "在無線感測網路繞徑協定中，Gossiping 相較 Flooding 的優點為？",
        options: ["傳輸更快", "必定可靠", "使用更少電力", "減少重複封包"],
        answer: "減少重複封包"
    },
    {
        question: "下列哪一種通訊的標準可以作為支援無線感測網路間通訊的一套規範？",
        options: ["IEEE 802.20", "IEEE 802.11g", "IEEE 802.11n", "IEEE 802.15.4"],
        answer: "IEEE 802.15.4"
    },
    {
        question: "討論無線感測網路覆蓋率時，通常會分成三種覆蓋類型，下列何者不屬於其中之一？",
        options: ["Area Coverage", "Barrier Coverage", "Point Coverage", "Line Coverage"],
        answer: "Line Coverage"
    },
    {
        question: "在無線感測網路中，Range-free 定位技術仰賴何者協助定位？",
        options: ["Anchor", "Beacon", "GPS", "Sink"],
        answer: "Anchor"
    },
    {
        question: "為什麼WSN在電源管理機制下需要有同步機制？",
        options: ["要讓每一部工作站在送收和框時一起醒來", "要校對每一台工作站的時間讓所有的工作站系統時鐘一致", "可以讓工作站在不需要接收和框時進入睡眠模式以節省電力", "全部都是"],
        answer: "全部都是"
    },
    {
        question: "Sensor Network之實體層與媒體存取控制層遵守以下哪個規範？",
        options: ["IEEE 802.15.4", "IEEE 802.16", "IEEE 802.3", "IEEE 802.20"],
        answer: "IEEE 802.15.4"
    },
    {
        question: "在無線感測網路之 Area Coverage 中，Spatial Coverage 要求為何？",
        options: ["週期監控", "隨機抽樣", "只需部分區域", "任意時間均被覆蓋"],
        answer: "任意時間均被覆蓋"
    },
    {
        question: "無線感測網路中，儲存元件 (Storage) 是屬於感測器哪一部分的成員？",
        options: ["感測單位", "處理單位", "無線傳輸單位", "電力供應單位"],
        answer: "處理單位"
    },
    {
        question: "下列何者為 WSN 系統的成功關鍵？",
        options: ["環境及系統穩定性", "無線感測傳輸模組", "韌體與軟體程式", "全部皆是"],
        answer: "全部皆是"
    },
    {
        question: "下列關於貪婪式路由協定 (Greedy perimeter stateless routing，GPSR) 的描述何者錯誤？",
        options: ["偵測到事件的感測器自然可以透過鄰居節點與資料收集站的位置比較而計算出距離資料收集站最近的傳遞方向", "建構方式不需要所有感測器知道自己位置", "著重在選擇離資料收集站最短的距離", "以最少跳躍次數作為下一步的傳送節點"],
        answer: "建構方式不需要所有感測器知道自己位置"
    },
    {
        question: "ZigBee 支援下列哪三種網路拓撲？",
        options: ["星型、網狀、叢集樹狀", "星型、環狀、樹型", "Aloha、TDMA、CDMA", "Ad-Hoc、Infrastructure、Mesh"],
        answer: "星型、網狀、叢集樹狀"
    },
    {
        question: "ZigBee 裝置對裝置傳輸時，下列哪種模式會先執行 RTS/CTS？",
        options: ["Cluster Mode", "Mesh Mode", "Non-Beacon Mode", "Beacon Mode"],
        answer: "Beacon Mode"
    },
    {
        question: "GPSR 路由協定在挑選下一跳節點的依據通常為？",
        options: ["最低延遲", "最少跳躍數", "最大剩餘電量", "距離 Sink 最近"],
        answer: "距離 Sink 最近"
    },
    {
        question: "ZigBee 全功能裝置不具備哪項功能？",
        options: ["任務協調者", "支援任何拓撲", "與任何裝置通訊", "只能與簡化功能裝置通訊"],
        answer: "只能與簡化功能裝置通訊"
    },
    {
        question: "Synchronous MAC protocols 主要要求節點必須？",
        options: ["定期時間同步", "使用多通道", "持續監聽", "隨機後退"],
        answer: "定期時間同步"
    },
    {
        question: "ZigBee 所採用的 IEEE 標準是哪一個？",
        options: ["802.11", "802.15.1", "802.15.4", "802.16"],
        answer: "802.15.4"
    },
    {
        question: "陀螺儀可利用來做何種功能？",
        options: ["偵測物體速度", "測量物體重量", "計算移動距離", "感測與維持方向"],
        answer: "感測與維持方向"
    },
    {
        question: "Ad Hoc 無線網路中，兩個站台可能因為距離太遠，無法以 CSMA 解決碰撞問題，稱為？",
        options: ["隱藏問題 Hidden Problem", "隱藏節點問題 Hidden-Node Problem", "多路徑效應 Multipath Effect", "暴露終端機問題 Exposed Terminal Problem"],
        answer: "隱藏節點問題 Hidden-Node Problem"
    },
    {
        question: "WPA2 僅採用哪種加密演算法？",
        options: ["SHA-1", "TKIP", "AES", "RC4"],
        answer: "AES"
    },
    {
        question: "IEEE 802.11 MAC 訊框分為哪三類？",
        options: ["Control/Management/Data", "Control/Data/Security", "Management/Security/Control", "Data/Security/Management"],
        answer: "Control/Management/Data"
    },
    {
        question: "在 IEEE 802.11訊框控制欄位中，Retry欄位表示？",
        options: ["省電模式", "有更多分段", "WEP已啟用", "此訊框為重送"],
        answer: "此訊框為重送"
    },
    {
        question: "下列哪一項不是 802.11ac 的特色？",
        options: ["多使用者 MIMO", "支援 8 個空間串流", "支援 160 MHz 頻寬", "採用 1024-QAM"],
        answer: "採用 1024-QAM"
    },
    {
        question: "IEEE 802.11be 預計將會被定義為哪個 Wi-Fi 版本？",
        options: ["Wi-Fi 6E", "Wi-Fi 7", "Wi-Fi 8", "Wi-Fi 9"],
        answer: "Wi-Fi 7"
    },
    {
        question: "在台灣，IEEE 802.11 之 2.4 GHz 頻段中，AP 使用之非重疊頻道通常是那三個為最佳？",
        options: ["1、2、3", "1、6、11", "2、5、9", "3、7、11"],
        answer: "1、6、11"
    },
    {
        question: "我們在購買無線 Wi-Fi 基地台時，其預設模式通常為？",
        options: ["存取點模式 (AP mode)", "WISP 模式 (WISP mode)", "路由器模式 (Router mode)", "中繼模式 (Repeater mode)"],
        answer: "路由器模式 (Router mode)"
    },
    {
        question: "IEEE 802.11ax 標準所使用的操作頻段不包括？",
        options: ["2.4 GHz", "5 GHz", "6 GHz", "24 GHz"],
        answer: "24 GHz"
    },
    {
        question: "Bluetooth 工作於哪個頻段？",
        options: ["2.452 GHz", "5.8 GHz", "60 GHz", "900 MHz"],
        answer: "2.452 GHz"
    },
    {
        question: "在分散式協調功能中，是使用哪種服務提供資料收送？",
        options: ["DCF", "PCF", "CFP", "CW"],
        answer: "DCF"
    },
    {
        question: "IEEE 802.11 MAC 中，用於取消聯結的服務是？",
        options: ["Association", "Disassociation", "Integration", "Reassociation"],
        answer: "Disassociation"
    },
    {
        question: "在 IEEE 802.11 中，隨機後退演算法的目的是？",
        options: ["降低功耗", "保護安全", "減少碰撞", "增加頻寬"],
        answer: "減少碰撞"
    },
    {
        question: "下列哪一項是 802.11ax 引入的新功能？",
        options: ["RTS/CTS", "SIFS", "OFDMA", "DCF"],
        answer: "OFDMA"
    },
    {
        question: "IEEE 802.11ax 的 Wi-Fi 6E 新增了哪個頻段？",
        options: ["3 GHz", "6 GHz", "60 GHz", "900 MHz"],
        answer: "6 GHz"
    },
    {
        question: "IEEE 802.11n 在 2.4 GHz 與 5.8 GHz 頻段都支持哪種調變技術？",
        options: ["IR", "FHSS", "DSSS", "OFDM"],
        answer: "OFDM"
    },
    {
        question: "SSID 指的是？",
        options: ["Station Set ID", "Secure Session ID", "System Service ID", "Service Set Identifier"],
        answer: "Service Set Identifier"
    },
    {
        question: "IEEE 802.11n 所使用的頻率為？",
        options: ["2.4 GHz", "3 GHz", "6 GHz", "60 GHz"],
        answer: "2.4 GHz"
    },
    {
        question: "在 Infrastructure 架構中，不包含下列哪個元件？",
        options: ["AP", "DS", "BSS", "中繼器"],
        answer: "中繼器"
    },
    {
        question: "在 IEEE 802.11 中，ACK 訊框主要用於？",
        options: ["發起連結", "傳送資料", "設定臨界值", "確認資料接收"],
        answer: "確認資料接收"
    },
    {
        question: "IEEE 802.11a 工作在哪個 ISM 頻段？",
        options: ["2.4 GHz", "5 GHz", "60 GHz", "900 MHz"],
        answer: "5 GHz"
    },
    {
        question: "WPA 相較 WEP 的一大改進是？",
        options: ["無鑰匙協議", "靜態金鑰", "使用 RC4", "動態產生 Session Key"],
        answer: "動態產生 Session Key"
    },
    {
        question: "在 DCF 中，哪個 IFS 最短？",
        options: ["DIFS", "EIFS", "PIFS", "SIFS"],
        answer: "SIFS"
    },
    {
        question: "IEEE 802.11ac 標準所使用的操作頻段為何？",
        options: ["1.8 GHz", "2.4 GHz", "5 GHz", "6 GHz"],
        answer: "5 GHz"
    },
    {
        question: "無基礎架構 Ad-Hoc 網路的特點是？",
        options: ["需要 AP", "只能單一用戶", "裝置可直接連接", "需有有線分散式系統"],
        answer: "裝置可直接連接"
    },
    {
        question: "工作站間通訊必須經由AP是屬於哪一種類型架構？",
        options: ["Ad-Hoc", "Infrastructure", "Infrastructure 和 Ad-Hoc 皆是", "Infrastructure 和 Ad-Hoc 皆非"],
        answer: "Infrastructure"
    },
    {
        question: "在無線區域網路中，若有無線基地台負責無線網路與其他網路之連線，無線基地台所管理的網路稱為？",
        options: ["Cell", "涵蓋範圍", "基本服務集 (Basic Service Set)", "獨立基本服務集 (Impendent Basic Service Set)"],
        answer: "基本服務集 (Basic Service Set)"
    },
    {
        question: "四向交握 (4-Way Handshake) 的正確順序是？",
        options: ["RTS → ACK → DATA → ACK", "RTS → CTS → DATA → ACK", "CTS → RTS → DATA → ACK", "CTS → ACK → DATA → ACK"],
        answer: "RTS → CTS → DATA → ACK"
    },
    {
        question: "IEEE 802.11ac 在 80 MHz 頻寬下的最大理論速率約為？",
        options: ["72.2 Mbps", "200 Mbps", "433.3 Mbps", "866.7 Mbps"],
        answer: "433.3 Mbps"
    },
    {
        question: "下列頻帶何者不受政府管轄，可提供一般無線電設計使用？",
        options: ["2.4 GHz", "6.8 GHz", "10 KHz", "16 KHz"],
        answer: "2.4 GHz"
    },
    {
        question: "WPA3於哪一年正式發布？",
        options: ["2016", "2018", "2019", "2020"],
        answer: "2018"
    },
    {
        question: "在 IEEE 802.11 PCF 之非輪詢工作站必須在哪個週期傳送訊匡？",
        options: ["免競爭和免競爭週期皆可", "免競爭和免競爭週期皆不可", "免競爭週期", "競爭週期"],
        answer: "競爭週期"
    },
    {
        question: "無線網路通訊協定 IEEE 802.11ac 單支天線且使用 20MHz 頻寬，其傳輸速率可達？",
        options: ["87.6 Mbps", "200 Mbps", "433.3 Mbps", "866.7 Mbps"],
        answer: "87.6 Mbps"
    },
    {
        question: "無線網路通訊協定 IEEE 802.11ax 單支天線且使用 40MHz 頻寬，其傳輸速度可達？",
        options: ["143.4 Mbps", "286.8 Mbps", "600.4 Mbps", "1201 Mbps"],
        answer: "286.8 Mbps"
    },
    {
        question: "無線網路通訊協定 IEEE 802.11n 單支天線且使用20MHz頻寬，其傳輸速度約可達？",
        options: ["72.2 Mbps", "150 Mbps", "300 Mbps", "450 Mbps"],
        answer: "72.2 Mbps"
    },
    {
        question: "無線區域網路使用的頻段不包括哪一個？",
        options: ["1.8~1.9 GHz", "2.4~2.483 GHz", "5.725~5.875 GHz", "902~928 MHz"],
        answer: "1.8~1.9 GHz"
    },
    {
        question: "IEEE 802.11原始標準於哪一年發布？",
        options: ["1997年", "1999年", "2003年", "2009年"],
        answer: "1997年"
    },
    {
        question: "下列何者是無線區域網路(WLAN)通訊無法避免的缺點？",
        options: ["無法網路漫遊", "無線網路連線費用高", "無線電波彼此干擾", "無線網路節點無法移動"],
        answer: "無線電波彼此干擾"
    },
    {
        question: "MIMO技術在802.11n中最高支援多少支天線？",
        options: ["2", "4", "6", "8"],
        answer: "4"
    },
    {
        question: "IEEE 802.11 網路架構中，ESA 代表？",
        options: ["Extra Service Area", "Ethernet Service Area", "Extended Service Area", "Enhanced Service Area"],
        answer: "Extended Service Area"
    },
    {
        question: "某家網路咖啡店宣稱只要顧客來店消費，並攜帶配有無線網路卡的筆記型電腦，即可享受無線上網的服務，請問此家咖啡店的無線區域網路最可能採用下列哪一種通訊協定？",
        options: ["ADSL", "RFID", "Wi-Fi", "Bluetooth"],
        answer: "Wi-Fi"
    },
    {
        question: "無線網路佈建時，哪一項屬於多重路徑干擾問題？",
        options: ["Fading", "Shadowing", "Attenuation", "Multipath Interference"],
        answer: "Multipath Interference"
    },
    {
        question: "RTS/CTS 機制主要用於解決哪一個問題？",
        options: ["頻寬不足", "多路徑衰減", "安全性弱點", "隱藏節點問題"],
        answer: "隱藏節點問題"
    },
    {
        question: "802.11ac俗稱「第幾代Wi-Fi」？",
        options: ["3rd Generation", "4rd Generation", "5rd Generation", "6rd Generation"],
        answer: "5rd Generation"
    },
    {
        question: "下列敘述何者不正確？",
        options: ["訊號的強度不會隨著距離而衰減", "通訊訊號分成數位和類比兩種訊號", "傳送端和接收端必須在同一個頻道才能通訊", "在無線通訊中，若接收端同時收到多筆資料，會有碰撞的情況發生"],
        answer: "訊號的強度不會隨著距離而衰減"
    },
    {
        question: "Wi-Fi 聯盟最初的名稱是什麼？",
        options: ["IEEE 802.11 Alliance", "Wi-Fi Standards Group", "Wireless LAN Alliance", "Wireless Ethernet Compatibility Alliance"],
        answer: "Wireless Ethernet Compatibility Alliance"
    },
    {
        question: "RF Band 指的是？",
        options: ["資料路線", "加密技術", "傳輸功率", "無線頻段"],
        answer: "無線頻段"
    },
    {
        question: "IEEE 802.11b 在 2.4 GHz 頻段上的最大傳輸速率是多少？",
        options: ["2 Mbit/s", "11 Mbit/s", "54 Mbit/s", "600 Mbit/s"],
        answer: "11 Mbit/s"
    },
    {
        question: "IEEE 802.11ax 在行業稱為哪一個認證標準？",
        options: ["Wi-Fi 4", "Wi-Fi 5", "Wi-Fi 6", "Wi-Fi 7"],
        answer: "Wi-Fi 6"
    },
    {
        question: "在無線網路中，Polling 存取方式的主要缺點是？",
        options: ["避免衝突能力弱", "需要隨機等待", "無法順序訪問", "主節點故障即整網失效"],
        answer: "主節點故障即整網失效"
    },
    {
        question: "CDMA 的核心概念在於？",
        options: ["隨機存取", "切割頻段", "分割時間", "以正交編碼區隔用戶"],
        answer: "以正交編碼區隔用戶"
    },
    {
        question: "在無線隨意網路之 Dynamic Channel Allocation (DCA) 流程中，節點 A 先發送哪種訊框以詢問通道？",
        options: ["CTS", "DATA", "RES", "RTS"],
        answer: "RTS"
    },
    {
        question: "下列何者是主動式路由策略？",
        options: ["Ad hoc On-demand Distance Vector (AODV)", "Dynamic Source Routing (DSR)", "Temporally Ordered Routing Algorithm (TORA)", "距離向量路由 Destination-Sequenced Distance-Vector（DSDV）"],
        answer: "距離向量路由 Destination-Sequenced Distance-Vector（DSDV）"
    },
    {
        question: "下列關於回應式路由策略那一項不正確？",
        options: ["不事先計算路徑，有需要時再尋找路徑。", "又稱為 On-demand Routing", "英文名稱為 Reactive Routing", "英文名稱為 Proactive Routing"],
        answer: "英文名稱為 Proactive Routing"
    },
    {
        question: "在無線隨意網路中，DSDV 每次完整式路由更新會做什麼動作？",
        options: ["只更新差異路由", "停止路由探索", "僅更新序列編號", "廣播全部路由表"],
        answer: "廣播全部路由表"
    },
    {
        question: "CSMA 偵測的機制分為 Non-persistent CSMA 與 Persistent CSMA，哪一種理論上會比較耗電？",
        options: ["二者無從比較", "二者差不多", "Non-persistent CSMA", "Persistent CSMA"],
        answer: "Persistent CSMA"
    },
    {
        question: "關於電源管理和電力控制的描述，下列何者不正確？",
        options: ["電力控制的英文是 Power Control", "電源管理的英文是 Power Management", "電源管理在手機處於長期待機狀態時進入睡眠模式以節省電力", "電源管理動態調整發送封包的電力以節省電力"],
        answer: "電源管理動態調整發送封包的電力以節省電力"
    },
    {
        question: "在 IEEE 802.11 Power Save Mode 之 BASIC 協定中，節點根據哪個訊框決定 DATA 所需最小電力？",
        options: ["RTS", "CTS", "DATA", "ACK"],
        answer: "CTS"
    },
    {
        question: "假設某一發射資料的行動台正交編碼為 01011100，而接收台在接收時收到 (-4+0-2+0+2+0+2-2，-1+1-3+3+1-1+1+1)，所得知該行動台送出位元資料為？",
        options: ["00", "01", "10", "11"],
        answer: "11"
    },
    {
        question: "在無線網路之多通道協定中，Common Hopping 解決了哪種問題？",
        options: ["APSD", "MPR 廣播負擔", "跳數限制", "隱藏終端點"],
        answer: "隱藏終端點"
    },
    {
        question: "在無線隨意網路中，共同跳躍（Common Hopping）機制的特點是在何時切換通道？",
        options: ["只有 MPR 節點切換", "每個節點獨立切換", "僅在睡眠模式下切換", "所有節點同步切換"],
        answer: "所有節點同步切換"
    },
    {
        question: "在 Ad Hoc 網路省電協定中，睡眠工作站由何者暫存封包？",
        options: ["自己", "其他睡眠站", "無線基地台", "鄰近醒著的工作站"],
        answer: "鄰近醒著的工作站"
    },
    {
        question: "在 IEEE 802.11 Power Save Mode 中，AP 透過何種信息告知有封包緩衝給睡眠工作站？",
        options: ["RES", "Beacon", "DTIM", "TIM"],
        answer: "TIM"
    },
    {
        question: "在無線隨意網路之多點跳躍（Multihop）技術主要用於何種需求？",
        options: ["降低電力消耗", "加密傳輸內容", "提升單一跳傳輸速率", "中繼封包至不在範圍內的節點"],
        answer: "中繼封包至不在範圍內的節點"
    },
    {
        question: "在無線隨意網路中，主動式路由協定的特性是？",
        options: ["完全不維護路由", "僅支援單跳來搜尋路由", "僅在需要時才搜尋路由", "定期維護全部路由資訊"],
        answer: "定期維護全部路由資訊"
    },
    {
        question: "在無線隨意網路中，Dynamic Source Routing (DSR) 協定之路由資訊附加於何處？",
        options: ["MAC 表頭", "RTS/CTS 欄位", "序列編號欄位", "資料封包的表頭"],
        answer: "資料封包的表頭"
    },
    {
        question: "下列哪一種屬於組合式 FDMA/TDMA 存取？",
        options: ["Polling", "Aloha", "CSMA/CA", "Hybrid FDMA/TDMA"],
        answer: "Hybrid FDMA/TDMA"
    },
    {
        question: "假設某行動台正交編碼為00011011，發出編碼（+1+1+1-1-1+1-1-1 ，-1-1-1+1+1-1+1+1）後，而接收台在接收時與該行動台之正交編碼做內積，所得知該行動台送出位元資料為？",
        options: ["00", "01", "10", "11"],
        answer: "01"
    },
    {
        question: "下列哪一項是廣播風暴（Broadcast Storm）問題的主要原因？",
        options: ["TIM 更新延遲", "RTS/CTS 握手失敗", "多通道切換不同步", "重複重播過多廣播封包"],
        answer: "重複重播過多廣播封包"
    },
    {
        question: "在無線隨意網路之路由探索（Route Discovery）過程中，用於廣播路由請求的訊息簡稱為？",
        options: ["RTS", "RERR", "RREP", "RREQ"],
        answer: "RREQ"
    },
    {
        question: "在無線隨意網路中，TORA 協定中，用以建立無迴圈路徑的圖形結構稱為？",
        options: ["Router Tree", "Flooded Graph", "Minimum Spanning Tree", "Destination-Oriented Directed Acyclic Graph"],
        answer: "Destination-Oriented Directed Acyclic Graph"
    },
    {
        question: "請問下列何者敘述錯誤？",
        options: ["無線網路免費頻段為 2.4GHz", "在防範天災方面，無線衛星網路的穩定性較差", "無線衛星通訊在偵查、定位、導航及通訊上廣泛被使用", "無線區域網路中的隨建即連模式無須透過 Access Point 即可連線"],
        answer: "在防範天災方面，無線衛星網路的穩定性較差"
    },
    {
        question: "在 CDMA 中，若兩個編碼為正交，則它們的內積結果應為？",
        options: ["任意值", "-1", "1", "0"],
        answer: "0"
    },
    {
        question: "在 IEEE 802.11 Power Save Mode 中，Power Control 協定的目的是何者？",
        options: ["提高序列編號", "加速 RTS/CTS 握手", "增加 MPR 節點數量", "動態調整傳輸功率以節省能量"],
        answer: "動態調整傳輸功率以節省能量"
    },
    {
        question: "將通訊的頻道分成多個時槽（Time Slot）以供多人使用的方式稱為？",
        options: ["CDMA", "FDMA", "TDMA", "OFDMA"],
        answer: "TDMA"
    },
    {
        question: "距離向量路由由協定 DBF（Distributed Bellman-Ford）傳輸時有什麼問題，使得資源造成不必要的浪費？",
        options: ["傳送訊框時會造成成資料內容碰撞而造成資料損壞", "不管有沒有資料要傳輸都要一直連結著", "無安全性而資料易被盜取", "網路鏈結失效而造成迴圈"],
        answer: "網路鏈結失效而造成迴圈"
    },
    {
        question: "下列何者最能描述無線隨意網路（Ad Hoc Network）的特性？",
        options: ["只能單跳傳輸", "僅適用於有線網路環境", "依賴中心化伺服器進行路由", "無需固定基礎架構即可自動組織"],
        answer: "無需固定基礎架構即可自動組織"
    },
    {
        question: "在無線隨意網路中，區分階段（Split Phase）機制將時間分為哪兩個階段？",
        options: ["傳輸／空閒", "資料／回應", "控制／輪詢", "控制階段與資料傳輸階段"],
        answer: "控制階段與資料傳輸階段"
    },
    {
        question: "在無線隨意網路中，ZRP 協定中，跨越 Zone 邊界的路由搜尋使用何種策略？",
        options: ["MPR 廣播", "進階鏈結狀態", "主動式路由", "回應式路由"],
        answer: "回應式路由"
    },
    {
        question: "TDMA 中，時槽（Timeslot）的作用是？",
        options: ["提供頻寬填充", "編碼多重存取", "實現多載波傳輸", "劃分時間單位以分配用戶傳輸"],
        answer: "劃分時間單位以分配用戶傳輸"
    },
    {
        question: "Media Access Control（MAC）層的主要功能不包括？",
        options: ["媒體存取控制", "避免封包衝突", "定址", "路由尋找"],
        answer: "路由尋找"
    },
    {
        question: "BASIC 電力控制協定中封包使用四向（RTS/CTS/DATA/ACK）交握，請問哪兩個封包是以最小所需電力傳送？",
        options: ["RTS/DATA", "RTS/CTS", "CTS/ACK", "DATA/ACK"],
        answer: "DATA/ACK"
    },
    {
        question: "在 CSMA/CA 中，若媒介忙碌時，節點將採取何種做法？",
        options: ["立即傳送", "廣播封包", "切換頻道", "延遲隨機時間後重試"],
        answer: "延遲隨機時間後重試"
    },
    {
        question: "關於回應式路由協定，何者正確？",
        options: ["首次尋找會耗時較多而造成封包延遲", "適合偶發流量但一旦發生則有大流量", "回應式路由只尋找與維護有需要的路由", "全部皆是"],
        answer: "全部皆是"
    },
    {
        question: "在無線隨意網路中，Location-Aided Routing（LAR）中，路由決策依據何者？",
        options: ["跳數", "收發功率", "時間同步", "節點地理位置"],
        answer: "節點地理位置"
    },
    {
        question: "動態來源路由(DSR)為回應式路由協定，當一節點打算送出一封包，而其路由表格中並沒有該目的地的資訊時，該節點會啟動什麼程序找尋？",
        options: ["路由請求(RREQ)", "路由錯誤(RERR)", "路由回應(RREP)", "路由探索(Route Discovery)"],
        answer: "路由探索(Route Discovery)"
    },
    {
        question: "在無線隨意網路中，Dynamic Source Routing (DSR) 啟動路由探索時，第一步會發送？",
        options: ["RRV", "RERR", "RREP", "RREQ"],
        answer: "RREQ"
    },
    {
        question: "關於主動式路由與回應式路由的優缺點，下列何者不正確？",
        options: ["回應式路由每次都使用最佳路徑", "回應式路由能適應不同的流量變度", "主動式路由浪費很多不必要的花費在不需要的路由上", "流量密度較低時，回應式路由優於主動式路由"],
        answer: "回應式路由每次都使用最佳路徑"
    },
    {
        question: "在無線隨意網路中，DSDV 協定中，用以避免路由迴圈的機制是？",
        options: ["MPR 節點", "源路由", "跳數限制", "序列編號"],
        answer: "序列編號"
    },
    {
        question: "在無線隨意網路中，Dynamic Channel Allocation (DCA) 中，用於控制封包交換的專用通道稱為？",
        options: ["Data Channel", "Control Channel", "Busy Tone Channel", "Reservation Channel"],
        answer: "Control Channel"
    },
    {
        question: "在無線隨意網路（Wireless Ad Hoc Network）中，下列何者不會產生多通道的隱藏終端問題？",
        options: ["全部皆是", "多通道時間同步之共同跳躍", "多通道時間同步之區分階段", "多通道時間非同步之動態頻道分配"],
        answer: "多通道時間非同步之動態頻道分配"
    },
    {
        question: "在無線隨意網路中，Dynamic Channel Allocation (DCA) 中，節點首先會維護的列表為？",
        options: ["Reservation List", "Free Channel List", "Channel Usage List", "Control Channel List"],
        answer: "Channel Usage List"
    },
    {
        question: "在無線隨意網路中，回應式路由協定的主要優點是？",
        options: ["支援靜態網路", "僅維護必要路由", "適用於高流量密度", "無須任何路由資訊"],
        answer: "僅維護必要路由"
    },
    {
        question: "在獨立型基本服務集（IBSS）模式中，節點間的通訊不需透過何者？",
        options: ["RF", "AP", "BSS", "RREQ"],
        answer: "AP"
    },
    {
        question: "FDMA技術透過何種方式讓多個使用者同時存取媒體？",
        options: ["時槽分割", "隨機後退", "編碼區隔", "頻段切割"],
        answer: "頻段切割"
    },
    {
        question: "多通道的隱藏終端點問題主要因何而生？",
        options: ["信號衰減", "編碼不正交", "時間切換不同步", "RTS/CTS 長度過大"],
        answer: "時間切換不同步"
    },
    {
        question: "在無線網路中，Aloha 協定的最大頻道使用率約為多少？",
        options: ["18%", "37%", "50%", "75%"],
        answer: "18%"
    },
    {
        question: "在無線隨意網路之多通道的環境下，若使用 Dynamic Channel Allocation (DCA) 時，至少需要幾個收發器？",
        options: ["一個", "兩個", "三個", "四個"],
        answer: "兩個"
    },
    {
        question: "當 Subnet Mask 寫成 /18 時，即表示在二進位中有幾個 1？",
        options: ["16", "18", "24", "32"],
        answer: "18"
    },
    {
        question: "子網路切割規劃中，如果使用 255.255.255.128 網路遮罩來區隔 C 級網段，每個子網路最多能分配幾個 IP 位址？",
        options: ["64", "128", "256", "512"],
        answer: "128"
    },
    {
        question: "一個私有 B 級網路可拆分成多少個 /24 子網？",
        options: ["128", "256", "512", "1024"],
        answer: "256"
    },
    {
        question: "下列哪一組為合法的 IPv4 位址？",
        options: ["114.34.72.8", "127.0.0.1", "192.168.0.256", "256.100.50.1"],
        answer: "114.34.72.8"
    },
    {
        question: "若每個子網域期望能有 600 台電腦可以同時上網，則以子網路遮罩可設定為？",
        options: ["255.255.252.0", "255.255.254.0", "255.255.255.0", "255.255.255.128"],
        answer: "255.255.252.0"
    },
    {
        question: "192.168.10.0/27 可提供多少個 IP 位址在網路主機的設備上？",
        options: ["16", "30", "32", "64"],
        answer: "30"
    },
    {
        question: "當 IP 為 10.0.5.130/26 時，其廣播位址是？",
        options: ["10.0.5.127", "10.0.5.128", "10.0.5.191", "10.0.5.255"],
        answer: "10.0.5.191"
    },
    {
        question: "若要將 Class C 網路細分為 8 個子網，子網路遮罩應為？",
        options: ["/25", "/26", "/27", "/28"],
        answer: "/27"
    },
    {
        question: "若以 255.255.255.192 做為子網路遮罩來區隔網路，則每個子網域最多能有幾個 IP 位址？",
        options: ["32", "64", "128", "256"],
        answer: "64"
    },
    {
        question: "關於子網路分割的描述，何者敘述不正確？",
        options: ["IP 的數目可自由規劃不受影響", "可減少封包傳送時出現碰撞的情況", "讓不同單位使用不同子網路以方便網路管理", "利用子網路遮罩可以分辨不同單位所使用的 IP 位址"],
        answer: "IP 的數目可自由規劃不受影響"
    },
    {
        question: "子網路遮罩 /22 相當於？",
        options: ["255.255.252.0", "255.255.253.0", "255.255.254.0", "255.255.255.0"],
        answer: "255.255.252.0"
    },
    {
        question: "TCP 協定提供何種傳輸服務？",
        options: ["僅多播傳輸", "僅廣播傳輸", "無連線且不可靠", "連線導向且可靠傳輸"],
        answer: "連線導向且可靠傳輸"
    },
    {
        question: "若 IP 為 10.1.2.3，子網路遮罩為 255.255.0.0，該主機所屬網路為？",
        options: ["0.0.0.0", "10.0.0.0", "10.1.0.0", "10.1.2.0"],
        answer: "10.1.0.0"
    },
    {
        question: "若 IP 為 10.1.2.3，子網路遮罩為 255.0.0.0，該主機所屬網路為？",
        options: ["0.0.0.0", "10.0.0.0", "10.1.0.0", "10.1.2.0"],
        answer: "10.0.0.0"
    },
    {
        question: "OSI 模型第 3 層為何？",
        options: ["資料鏈路層", "網路層", "傳輸層", "應用層"],
        answer: "網路層"
    },
    {
        question: "當 IP 為 192.168.1.10/24 時，其網路位址是？",
        options: ["192.168.0.0", "192.168.1.0", "192.168.1.1", "192.168.1.255"],
        answer: "192.168.1.0"
    },
    {
        question: "合併兩個 C 級網路 192.168.2.0/24 和 192.168.3.0/24 為/23 後，網路範圍為？",
        options: ["192.168.0.0 ~ 192.168.5.255", "192.168.2.0 ~ 192.168.2.255", "192.168.2.0 ~ 192.168.3.255", "192.168.5.0 ~ 192.168.5.255"],
        answer: "192.168.2.0 ~ 192.168.3.255"
    },
    {
        question: "在 Windows 系統中，查詢本機完整 IP 配置指令為？",
        options: ["netstat -r", "ping /all", "ifconfig -a", "ipconfig /all"],
        answer: "ipconfig /all"
    },
    {
        question: "下列何者非 UDP 的特性？",
        options: ["無連線", "提供可靠連線", "適用影音串流", "資料無重傳保證"],
        answer: "提供可靠連線"
    },
    {
        question: "IP 127.0.0.1 在 TCP/IP 中代表何者？",
        options: ["公用 DNS 伺服器", "私有網路預設閘道", "無線 AP 位址", "本機迴路位址"],
        answer: "本機迴路位址"
    },
    {
        question: "設定 IP 時，下列哪一項不是必填？",
        options: ["IP 位址", "預設閘道", "子網路遮罩", "MAC 實體位址"],
        answer: "MAC 實體位址"
    },
    {
        question: "下列哪一個數字，不會出現在十進位的子網路遮罩中？",
        options: ["252", "253", "254", "255"],
        answer: "253"
    },
    {
        question: "當 Subnet Mask 為 255.255.255.248 時，此子網每個子網路的 IP 數量為？",
        options: ["8", "16", "24", "32"],
        answer: "8"
    },
    {
        question: "192.168.5.10/28 中，其中 28 代表何者？",
        options: ["VLAN ID", "DNS 第一組", "預設閘道為 192.168.5.28", "子網路遮罩為 255.255.255.240"],
        answer: "子網路遮罩為 255.255.255.240"
    },
    {
        question: "在 192.168.32.0 的區域網路上做子網路切割，假設該子網路可用的 IP 位址數量約為 30 個，下列哪些表示方式為正確？",
        options: ["192.168.32.0/27", "192.168.32.0/28", "192.168.32.0/255.255.255.240", "192.168.32.0/255.255.255.248"],
        answer: "192.168.32.0/27"
    },
    {
        question: "某一 IP/Subnet Mask 為 192.168.100.161/255.255.255.224，請問這個 IP 可以當作什麼用途？",
        options: ["路由器", "檔案伺服器", "個人電腦主機", "全部皆可"],
        answer: "全部皆可"
    },
    {
        question: "某一 IP/Subnet Mask 為 192.168.100.128/255.255.255.224，請問這個 IP 可以當作什麼用途？",
        options: ["代表整個網路", "電腦主機", "路由器", "廣播位址"],
        answer: "代表整個網路"
    },
    {
        question: "若子網路切割規劃中，如果使用連續 23 個 1 當作二進位網路遮罩，那每個子網路最多能分配幾個 IP 位址？",
        options: ["64 個", "128 個", "256 個", "512 個"],
        answer: "512 個"
    },
    {
        question: "SOHO 網路常用哪一段做為內部私有 IP？",
        options: ["10.0.0.0/8", "172.16.0.0/16", "172.31.0.0/16", "192.168.0.0/24"],
        answer: "192.168.0.0/24"
    },
    {
        question: "DNS 反向解析指的是？",
        options: ["子網路遮罩到無類別域間路由", "網域名稱到郵件位址", "IP 位址到 MAC 位址", "IP 轉網域名稱"],
        answer: "IP 轉網域名稱"
    },
    {
        question: "DNS 正向解析是指？",
        options: ["網域名稱轉子網路識別", "網域名稱轉 IP 位址", "IP 轉網域名稱", "IP 轉區段識別"],
        answer: "網域名稱轉 IP 位址"
    },
    {
        question: "若一部電腦的IP位址為163.13.238.243，網路遮罩為255.255.255.240，則其所在網段的網路位址為？",
        options: ["163.13.238.0", "163.13.238.128", "163.13.238.240", "163.13.238.255"],
        answer: "163.13.238.240"
    },
    {
        question: "IPv4 位址主要有幾個位元所組成？",
        options: ["16 位元", "32 位元", "64 位元", "128 位元"],
        answer: "32 位元"
    },
    {
        question: "私有 Class C 位址是哪一段？",
        options: ["10.0.0.0/255.0.0.0", "127.0.0.0/255.255.255.0", "172.32.0.0/255.255.0.0", "192.168.0.0/255.255.255.0"],
        answer: "192.168.0.0/255.255.255.0"
    }
];

// 隨機打亂陣列
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let score = 0; // 初始化分數

function loadQuiz() {
    score = 0; // 重置分數
    document.getElementById('quiz').innerHTML = ''; // 清空之前的題目
    document.getElementById('result').textContent = '';
    shuffle(questions);

    const quizDiv = document.getElementById('quiz');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.className = 'question';
        const title = document.createElement('h3');
        title.textContent = `${index + 1}. ${q.question}`;
        div.appendChild(title);

        // 如果題目有圖片，就建立並插入圖片元素
        if (q.image) {
            const img = document.createElement('img');
            img.src = q.image;
            img.className = 'question-image'; // 為了方便用CSS控制樣式
            div.appendChild(img);
        }

        const optsDiv = document.createElement('div');
        optsDiv.className = 'options';
        const options = [...q.options];
        shuffle(options);

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            btn.onclick = () => {
                // 檢查答案是否正確
                if (opt === q.answer) {
                    score++;
                } else {
                    // 如果選錯，將點擊的按鈕標為紅色
                    btn.classList.add('wrong');
                }

                // 遍歷所有選項按鈕，禁用它們並標示出正確答案
                Array.from(optsDiv.children).forEach(b => b.disabled = true);
                Array.from(optsDiv.children).find(b => b.textContent === q.answer).classList.add('correct');


                // 更新分數顯示
                document.getElementById('result').textContent = `目前分數: ${score}/${questions.length}`;
            };
            optsDiv.appendChild(btn);
        });

        div.appendChild(optsDiv);
        quizDiv.appendChild(div);
    });
}


document.getElementById('restart').onclick = loadQuiz;
loadQuiz();