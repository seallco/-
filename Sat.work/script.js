// 等待DOM完全加載
document.addEventListener('DOMContentLoaded', function() {
    // 回到頂部按鈕
    const backToTopButton = document.getElementById('back-to-top');
    
    // 監聽滾動事件
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    // 點擊回到頂部
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 平滑滾動到錨點
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 建築卡片閱讀更多按鈕
    const readMoreButtons = document.querySelectorAll('.read-more');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.parentElement;
            const buildingId = card.id;
            
            // 根據不同建築顯示不同的詳細內容
            let detailContent = '';
            
            if (buildingId === 'building1') {
                detailContent = `
                    <h3>覺生紀念圖書館</h3>
                    <p>覺生紀念圖書館是淡江大學的標誌性建築，由著名建築師陳其寬設計，於1993年落成。圖書館採用後現代主義風格，外觀以白色為主，象徵知識的純淨與光明。</p>
                    <p>圖書館共有八層樓，總面積約25,000平方公尺，可容納約1,500名讀者同時使用。館內收藏豐富的圖書資源，包括中外文圖書、期刊、報紙、視聽資料等，是淡江師生重要的學習場所。</p>
                    <p>圖書館的建築設計融合了中西方元素，外觀呈現幾何形狀，內部空間寬敞明亮，採用開放式設計，營造出舒適的閱讀環境。</p>
                    <button class="read-less">收起</button>
                `;
            } else if (buildingId === 'building2') {
                detailContent = `
                    <h3>文學館</h3>
                    <p>文學館建於1970年代，是淡江大學早期的重要建築之一。建築風格簡約現代，內部設有多間教室和辦公室，是文學院的主要教學場所。</p>
                    <p>文學館位於淡江大學校園的中心位置，鄰近覺生紀念圖書館。建築外觀以紅磚為主，呈現出典雅的學術氛圍。</p>
                    <p>文學館內設有多間專業教室，包括語言學習教室、翻譯實習室等，為文學院學生提供了良好的學習環境。</p>
                    <button class="read-less">收起</button>
                `;
            } else if (buildingId === 'building3') {
                detailContent = `
                    <h3>商管大樓</h3>
                    <p>商管大樓是淡江大學較新的建築之一，採用現代化設計，配備先進的教學設施。大樓內設有多間多媒體教室、電腦教室和專業實驗室。</p>
                    <p>商管大樓位於淡江大學校園的西側，是商學院和管理學院的主要教學場所。建築外觀採用玻璃帷幕牆設計，呈現出現代化的商業氛圍。</p>
                    <p>大樓內設有多間專業教室和實驗室，包括金融交易模擬室、企業資源規劃實驗室等，為商管學院學生提供了實務操作的機會。</p>
                    <button class="read-less">收起</button>
                `;
            }
            
            // 保存原始內容
            const originalContent = card.innerHTML;
            card.setAttribute('data-original-content', originalContent);
            
            // 更新卡片內容
            card.innerHTML = detailContent;
            
            // 添加收起按鈕事件
            card.querySelector('.read-less').addEventListener('click', function() {
                card.innerHTML = card.getAttribute('data-original-content');
                // 重新添加閱讀更多按鈕事件
                card.querySelector('.read-more').addEventListener('click', function() {
                    const buildingId = card.id;
                    // 這裡需要再次調用閱讀更多的功能
                    // 為了簡化，這裡直接刷新頁面
                    window.location.reload();
                });
            });
        });
    });
    
    // 圖片集動畫效果
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.gallery-caption').style.transform = 'translateY(0)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.gallery-caption').style.transform = 'translateY(100%)';
        });
    });
    
    // 頁面加載動畫
    const sections = document.querySelectorAll('.section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // 初始設置
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // 檢查初始位置
    checkScroll();
    
    // 監聽滾動事件
    window.addEventListener('scroll', checkScroll);
});
