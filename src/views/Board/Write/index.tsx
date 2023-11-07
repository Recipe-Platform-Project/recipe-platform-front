import React from 'react'
import "./style.css"


//          component: 게시물 작성 페이지          //
export default function BoardWrite() {

//          component: 게시물 작성 페이지 컴포넌트          //
    return (
        <div id='recipe-write-wrapper'>
            <div className='recipe-write-backgrund'></div>
            <div className='recipe-write-container'>
                <div className='recipe-write-main-title'></div>
                <div className='recipe-write-top-container'>
                <div className='recipe-write-photo'></div>
                <div className='recipe-write-title-box'>
                    <div className='recipe-write-title'></div>
                    <div className='recipe-write-write-out-title'></div>
                </div>
                <div className='introducing-simple-dishes-box'>
                    <div className='introducing-simple-dishes-title'></div>
                    <div className='introducing-simple-dishes-write-out'></div>
                </div>
                <div className='cooking-make-info-box'>
                    <div className='time-required-box'>
                        <div className='time-required-title'></div>
                        <div className='time-required-choice'></div>
                    </div>
                    <div className='level-box'>
                        <div className='level-title'></div>
                        <div className='level-choice'></div>
                    </div>
                    <div className='personnel-box'>
                        <div className='personnel-title'></div>
                        <div className='personnel-choice'></div>
                    </div>
                </div>
                <div className='category-box'>
                    <div className='category-title'></div>
                    <div className='category-choiec-box'>
                        <div className='category-by-type-choiec'></div>
                        <div className='category-by-method-choiec'></div>
                        <div className='category-by-material-choiec'></div>
                    </div>
                </div>
                <div className='tag-box'>
                    <div className='tag-title'></div>
                    <div className='tag-write'></div>
                </div>
                <div className='video-link-box'></div>
            </div>
            </div>
        </div>
        );
};