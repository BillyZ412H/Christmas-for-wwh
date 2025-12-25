// 页面切换功能
document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    const page1 = document.querySelector('.page-1');
    const page2 = document.querySelector('.page-2');
    const pageHints = document.querySelectorAll('.page-hint');
    
    // 翻页功能
    function flipPage() {
        if (page1.classList.contains('active')) {
            page1.classList.remove('active');
            setTimeout(() => {
                page2.classList.add('active');
            }, 300);
        } else {
            page2.classList.remove('active');
            setTimeout(() => {
                page1.classList.add('active');
            }, 300);
        }
    }
    
    // 点击页面提示区域翻页
    pageHints.forEach(hint => {
        hint.addEventListener('click', flipPage);
    });
    
    // 点击页面其他区域也可以翻页
    pages.forEach(page => {
        page.addEventListener('click', function(e) {
            // 确保不是点击在提示区域上（避免重复触发）
            if (!e.target.closest('.page-hint') && !e.target.closest('.music-control')) {
                flipPage();
            }
        });
    });
    
    // 创建雪花
    function createSnowflakes() {
        const snowContainer = document.getElementById('snow-container');
        const snowflakeCount = 80;
        
        for (let i = 0; i < snowflakeCount; i++) {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            
            // 随机大小
            const size = Math.random() * 10 + 5;
            snowflake.style.width = `${size}px`;
            snowflake.style.height = `${size}px`;
            
            // 随机位置
            snowflake.style.left = `${Math.random() * 100}vw`;
            
            // 随机透明度
            snowflake.style.opacity = Math.random() * 0.7 + 0.3;
            
            // 随机动画延迟和持续时间
            const animationDelay = Math.random() * 10;
            const animationDuration = Math.random() * 10 + 10;
            
            snowflake.style.animationDelay = `${animationDelay}s`;
            snowflake.style.animationDuration = `${animationDuration}s`;
            
            // 添加到容器
            snowContainer.appendChild(snowflake);
        }
    }
    
    // 添加雪花CSS样式
    function addSnowflakeStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .snowflake {
                position: absolute;
                top: -10px;
                background-color: white;
                border-radius: 50%;
                pointer-events: none;
                animation: snowfall linear infinite;
            }
            
            @keyframes snowfall {
                0% {
                    transform: translateY(0) translateX(0) rotate(0deg);
                    opacity: 0.8;
                }
                70% {
                    opacity: 0.6;
                }
                100% {
                    transform: translateY(100vh) translateX(20px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // 初始化雪花
    addSnowflakeStyles();
    createSnowflakes();
    
    // 音乐控制
    // const musicToggle = document.getElementById('music-toggle');
    // const bgMusic = document.getElementById('bg-music');
    // let musicPlaying = false;
    
    // musicToggle.addEventListener('click', function() {
    //     if (musicPlaying) {
    //         bgMusic.pause();
    //         musicToggle.innerHTML = '<i class="fas fa-music"></i><span>播放音乐</span>';
    //     } else {
    //         // 尝试播放音乐，需要用户交互
    //         bgMusic.play().then(() => {
    //             musicPlaying = true;
    //             musicToggle.innerHTML = '<i class="fas fa-volume-up"></i><span>暂停音乐</span>';
    //         }).catch(error => {
    //             console.log("自动播放被阻止，需要用户交互");
    //             // 如果自动播放被阻止，提示用户
    //             musicToggle.innerHTML = '<i class="fas fa-music"></i><span>点击播放音乐</span>';
    //         });
    //     }
    //     musicPlaying = !musicPlaying;
    // });
    
    // 添加圣诞树闪烁效果
    function addTreeGlow() {
        const tree = document.getElementById('main-tree');
        setInterval(() => {
            const colors = ['#ff6b6b', '#4ecdc4', '#ffdd59', '#c56cf0'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            // 随机选择一个装饰物
            const ornaments = tree.querySelectorAll('.ornament');
            if (ornaments.length > 0) {
                const randomOrnament = ornaments[Math.floor(Math.random() * ornaments.length)];
                randomOrnament.style.backgroundColor = randomColor;
                randomOrnament.style.boxShadow = `0 0 15px ${randomColor}`;
                
                // 短暂延迟后恢复
                setTimeout(() => {
                    randomOrnament.style.boxShadow = 'none';
                }, 500);
            }
        }, 1000);
    }
    
    // 初始化树闪烁效果
    addTreeGlow();
    
    // 添加蜡烛火焰效果
    function addCandleFlicker() {
        const candle = document.querySelector('.candle');
        if (candle) {
            setInterval(() => {
                const flame = candle.querySelector('::before');
                // 随机调整火焰大小
                const randomScale = Math.random() * 0.3 + 0.8;
                candle.style.setProperty('--flame-scale', randomScale);
            }, 300);
        }
    }
    
    // 初始化蜡烛效果
    addCandleFlicker();
});