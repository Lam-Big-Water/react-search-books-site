/* 
window.innerHeight 窗口显示区高度
getBoundingClientRect().top 图片到视窗上边的距离（高度）
intersectionObserver 是浏览器提供的构造函数（交叉观察）
*/

const images = document.querySelectorAll('img');

const callback = entries => {
    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting) {
            const image = entry.target;
            const data_src = image.getAttribute('data-src');
            image.setAttribute('src',data_src);
            ResizeObserver.unobserve(image);
            console.log('触发');
        };
    });
};

const observer = new IntersectionObserver(callback);

images.forEach(image => {
    observer.observe(image);
})