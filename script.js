// 图片轮播逻辑
let currentIndex = 0; // 当前显示的图片索引
const slides = document.querySelectorAll('.slide'); // 获取所有图片元素
const totalSlides = slides.length; // 图片总数

// 显示指定索引的图片
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // 移除所有图片的 "active" 类
    });
    slides[index].classList.add('active'); // 为当前图片添加 "active" 类
}

// 点击“下一张”按钮时触发
document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides; // 计算下一个索引
    showSlide(currentIndex); // 显示下一张图片
});

// 点击“上一张”按钮时触发
document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // 计算上一个索引
    showSlide(currentIndex); // 显示上一张图片
});

// 自动轮播功能（每 5 秒切换一次）
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides; // 计算下一个索引
    showSlide(currentIndex); // 显示下一张图片
}, 5000);

// 初始化：显示第一张图片
showSlide(currentIndex);

