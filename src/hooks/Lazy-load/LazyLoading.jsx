import React,{useEffect, useRef, useState} from 'react';
import './lazyloading.css';


const LazyLoading = ({className, src, alt}) => {
    const imgRef = useRef();
    const [error, setError] = useState(false);

    // 加载成功触发的事件
    const onLoad = () => {
        setError(false);//加载成功，所以没有error
    }

    // 加载失败的事件
    const onError = () => {
        setError(true);
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                imgRef.current.src = imgRef.current.dataset.src;
                observer.unobserve(imgRef.current);
                console.log('触发');
            }
        });
        observer.observe(imgRef.current);

    },[]);
    return (
        <div className='book-item-img'>
            {/* 加载出错时显示的内容 */}
            {
                error && (
                    <div className='image-icon'>
                        {/* 加载失败的icon 可以替换 */}
                    </div>
                )
            }

            <img
            alt={alt}
            ref={imgRef}
            data-src={src}
            onLoad={onLoad}
            onError={onError}
            />
        </div>
    )
}

export default LazyLoading