import React, { useEffect, useState } from 'react'
import BannerImages from './BannerImages.json'
import './Banner.css';


function Banner(){
    const [currentIndex, setCurrentIndex] =useState(0);

    useEffect(()=>{
        const interval  =setInterval(()=>{
            setCurrentIndex((prevIndex)=>(prevIndex+1)% BannerImages.length);
        },3000);
        return()=>clearInterval(interval);

    },[]);
    const currentBanner = BannerImages[currentIndex];
    const goToSlide =(index)=>{
        setCurrentIndex(index);
    }
    return(
        <>
        <div className="banner-container">
            <div className="slider">
                <a href={currentBanner.link} className="bannerLink">
                    <img src={currentBanner.url} alt={currentBanner.name} className="banner-image" />
                </a>
            </div>
            </div>
            <div className="dot-container">
            {BannerImages.map((_,index)=>(
                <span key={index} className={`dot ${currentIndex === index ? 'active':''}`}
                onClick={()=>goToSlide(index)}
                ></span>
            ))}
        </div>
        
        
        </>
    );
}

export default Banner;