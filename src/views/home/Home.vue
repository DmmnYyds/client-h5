<template>
    <div class="box">
        <div class="title">
            <img class="title-img" src="../../assets/imgs/icon_arrow.png" alt="">
            <span>Local screencast</span>
        </div>
        <div class="index">
            <input class="index-i" type="text">
        </div>
        <div class="column">
            <img class="column-img" src="../../assets/imgs/waaw.png" alt="">
            <div class="column-text">
                <p class="column-text-top">Mirror guide</p>
                <p class="column-text-bottom">common problem </p>
            </div>
        </div>
        <div class="swiper">
            <div class="swiperC">
                <div class="swiper-one">
                    <div class="swiper-one-imgs"><img class="swiper-one-imgs-img" src="../../assets/imgs/picture.png" alt=""></div>
                    <div class="swiper-one-text">
                        <p class="swiper-one-text-top">Picture</p>
                        <p class="swiper-one-text-bottom">Local screencost</p>
                    </div>
                </div>
                <div class="swiper-one">
                    <div class="swiper-one-imgs"><img class="swiper-one-imgs-img" src="../../assets/imgs/picture.png" alt=""></div>
                    <div class="swiper-one-text">
                        <p class="swiper-one-text-top">Picture</p>
                        <p class="swiper-one-text-bottom">Local screencost</p>
                    </div>
                </div>
                <div class="swiper-one">
                    <div class="swiper-one-imgs"><img class="swiper-one-imgs-img" src="../../assets/imgs/picture.png" alt=""></div>
                    <div class="swiper-one-text">
                        <p class="swiper-one-text-top">Picture</p>
                        <p class="swiper-one-text-bottom">Local screencost</p>
                    </div>
                </div>
                <div class="swiper-one">
                    <div class="swiper-one-imgs"><img class="swiper-one-imgs-img" src="../../assets/imgs/picture.png" alt=""></div>
                    <div class="swiper-one-text">
                        <p class="swiper-one-text-top">Picture</p>
                        <p class="swiper-one-text-bottom">Local screencost</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="main-top">
                <div class="main-top-imgs">
                    <img class="main-top-imgs-img" src="../../assets/imgs/symmetric.png" alt="">
                </div>
                <div class="main-top-text">
                    <p class="main-top-text-top">Screen mirroring</p>
                    <p class="main-top-text-bottom">Mobile screen sharing to TV</p>
                </div>
            </div>
            <div class="main-bottom">
                <button class="main-bottom-left">
                    <img class="main-bottom-left-img" src="../../assets/imgs/suspend.png" alt="">
                    <span class="main-bottom-left-text">Time out</span>
                </button>
                <button class="main-bottom-right">
                    <img class="main-bottom-right-img" src="../../assets/imgs/start.png" alt="">
                    <span class="main-bottom-right-text">End</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .box{
        height: 100vh;
        box-sizing: border-box;
        background-color: #d2d3fa;
        overflow-y:scroll;
    }
    /*  */
    .title{
        display: flex;
        color: #666e87;
        padding: 2rem 0;
        font-size: 2rem;
        margin-left: 2rem;
    }
    .title-img{
        width: 2.5rem;
        padding-right: 6.5rem;
    }
    /*  */
    .index{
        display: flex;
        justify-content: center;
    }
    .index-i{
        width: 30.5rem;
        padding: 2rem;
        border-radius: 2rem;
        border: 0;
        outline: none;
        background: url(../../assets/imgs/search.png) no-repeat #f8f8f8; /* 实现png和背景色共存 */
        background-size: 2rem 2rem; /* 背景图片大小 */
        background-position: 30rem; /* 背景图片定位：注意这里的第一个属性值是调整左右，第二个属性值是上下 */

    }
    /*  */
    .column{
        height: 6rem;
        width: 29.5rem;
        padding: 2rem;
        border-radius: 5rem;
        background-color: #eceaff;
        margin: 0 auto;
        margin-top: 4rem;
        position: relative;
    }
    .column-img{
        height: 11rem;
        position: absolute;
        bottom: 0.5rem;
    }
    .column-text{
        position: absolute;
        left: 15rem;
        bottom: 3rem;
    }
    .column-text-top{
        margin: 0;
        font-size: 1.8rem;
        color: #48536b;
    }
    .column-text-bottom{
        margin: 0;
        font-size: 1.1rem;
        color: #858d9c;
    }
    /*  */
    .swiper{
        margin-top: 3rem;
        overflow:hidden;
    }
    .swiperC{
        overflow-x:scroll;
        display: flex;
        gap: 0 10px;
        flex-wrap: nowrap;
        padding: 0 2rem;
    }
    .swiperC::-webkit-scrollbar {
                display:none
    }
    .swiper-one{
        min-width: 13.5rem;
        height: 15rem;
        background-color: #7466fb;
        border-radius: 3rem;
        padding-top: 2rem;
    }
    .swiper-one-imgs{
        width: 6rem;
        height: 6rem;
        border-radius: 1.5rem;
        background-color: #d2d5fe;
        display: flex;
        align-items: center;
        margin: 0 auto;
    }
    .swiper-one-imgs-img{
        width: 3rem;
        margin: 0 auto;
    }
    .swiper-one-text{
        font-size: 1.3rem;
        text-align: center;
        margin-top: 2rem;
    }
    .swiper-one-text-top{
        margin: 0;
        color: #fff;
        font-weight: 900;
    }
    .swiper-one-text-bottom{
        color: #d2d5fe;
        margin: 0;
    }
    /*  */
    .main{
        margin-top: 4rem;
        margin-left: 2rem;
        position: relative;
    }
    .main-top{
        width: 29.4rem;
        height: 5.6rem;
        background-color: #fff;
        border-radius: 3rem;
        padding: 3.7rem 2rem;
        position: absolute;
        display:flex;
        z-index: 1;
    }
    .main-top-imgs{
        width: 5.6rem;
        height: 5.6rem;
        background-color: #7d72fb;
        border-radius: 5rem;
        display: flex;
        align-items: center;
    }
    .main-top-imgs-img{
        width: 3.5rem;
        margin: 0 auto;
    }
    .main-top-text{
        font-size: 1.4rem;
        margin-left: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .main-top-text-top{
        margin: 0;
        font-weight: 900;
    }
    .main-top-text-bottom{
        margin: 0;
    }
    .main-bottom{
        width: 33.4rem;
        height: 17rem;
        background-color: #e5e2ff;
        border-radius: 3rem;
        position: absolute;
        top: 8.5rem;
        display:flex;
        justify-content : space-around;
        font-size: 1.2rem;
    }
    .main-bottom-left{
        width: 13.5rem;
        height: 5rem;
        background-color: #fff;
        margin-top: 8.5rem;
        border: none;
        border-radius: 3rem;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .main-bottom-left-img{
        height: 1.5rem;
    }
    .main-bottom-right{
        width: 13.5rem;
        height: 5rem;
        background-color: #fff;
        margin-top: 8.5rem;
        border: none;
        border-radius: 3rem;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .main-bottom-right-img{
        height: 2rem;
    }
</style>