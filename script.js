// ========== 初始化設定 ==========
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initAOS();
    initSwiper();
    initGlobe();
    initStats();
    initScrollEffects();
    initParticles();
    setupEventListeners();
});

// ========== 載入動畫 ==========
function initLoader() {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            document.body.classList.remove('loading');
        }, 500);
    }, 1500);
}

// ========== 初始化AOS動畫 ==========
function initAOS() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
}

// ========== 輪播功能 ==========
function initSwiper() {
    new Swiper('.challenge-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });
}

// ========== 3D地球展示 ==========
function initGlobe() {
    const container = document.querySelector('.interactive-globe');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // 創建地球
    const geometry = new THREE.SphereGeometry(5, 64, 64);
    const texture = new THREE.TextureLoader().load('assets/earth-texture.jpg');
    const material = new THREE.MeshPhongMaterial({
        map: texture,
        bumpMap: texture,
        bumpScale: 0.1,
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // 添加光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    camera.position.z = 15;

    // 動畫循環
    function animate() {
        requestAnimationFrame(animate);
        globe.rotation.y += 0.001;
        renderer.render(scene, camera);
    }
    animate();

    // 響應式調整
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}

// ========== 統計數據動畫 ==========
function initStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetValue = parseInt(target.dataset.value);
                animateValue(target, 0, targetValue, 2000);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.5
    });

    stats.forEach(stat => observer.observe(stat));
}

function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    
    window.requestAnimationFrame(step);
}

// ========== 滾動效果 ==========
function initScrollEffects() {
    const nav = document.querySelector('.main-nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // 導航欄效果
        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // 隱藏/顯示導航欄
        if (currentScroll > lastScroll && currentScroll > 500) {
            nav.classList.add('nav-hidden');
        } else {
            nav.classList.remove('nav-hidden');
        }
        
        lastScroll = currentScroll;
    });
}

// ========== 粒子效果 ==========
function initParticles() {
    const particlesConfig = {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#e5233d"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5,
                random: false
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#e5233d",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            }
        }
    };

    particlesJS("particles-js", particlesConfig);
}

// ========== 事件監聽器 ==========
function setupEventListeners() {
    // 主題切換
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        updateThemePreference();
    });

    // 平滑滾動
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // 地球視圖切換
    const globeButtons = document.querySelectorAll('.globe-btn');
    globeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const view = button.dataset.view;
            updateGlobeView(view);
        });
    });
}

// ========== 工具函數 ==========
function updateThemePreference() {
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme-preference', isDark ? 'dark' : 'light');
}

function updateGlobeView(view) {
    // 根據選擇的視圖更新地球數據展示
    const globeData = {
        poverty: [
            // 貧窮數據點
        ],
        aid: [
            // 援助計畫數據點
        ]
    };

    updateGlobeDataPoints(globeData[view]);
}

function updateGlobeDataPoints(data) {
    // 更新地球上的數據點
}

// ========== 初始化調用 ==========
// 檢查並應用已保存的主題偏好
const savedTheme = localStorage.getItem('theme-preference');
if (savedTheme) {
    document.body.classList.toggle('dark-theme', savedTheme === 'dark');
}