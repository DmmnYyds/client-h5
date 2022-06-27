<template>
    <div class="box">
        <div class="bj">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
        <div class="content">
            <div class="content-title">
                <img class="content-title-img" src="../../assets/imgs/classification.png" alt="">
                <div class="content-title-text">
                    <p class="content-title-text-top">Mirroring Cast screen</p>
                    <p class="content-title-text-bottom">Reai-time screen sharing</p>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="main-text">
                <p class="main-text-top">Please choose</p>
                <p class="main-text-bottom">Choose a screencast scene</p>
            </div>
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
                <div class="main-bottom-imgs">
                    <img class="main-top-imgs-img" src="../../assets/imgs/icon_video.png" alt="">
                </div>
                <div class="main-top-text">
                    <p class="main-top-text-top">Screen mirroring</p>
                    <p class="main-top-text-bottom">Mobile screen sharing to TV</p>
                </div>
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
        width: 100%;
        box-sizing: border-box;
    }
    .bj{
        height: 100%;
        width: 100%;
        background-color: #7b70fe;
        display: grid;
        grid-template-columns: repeat(6,1fr);
         position: fixed;
        z-index: -1;
    }
    .bj .item:nth-of-type(odd){
        height: 100vh;
        background:#7165fa;
    }
    .content{
        z-index: 99;
        padding: 2rem;
        height: calc(50% - 4rem);
        background: url(../../assets/imgs/character.png) no-repeat ; /* 实现png和背景色共存 */
        background-size: 29rem 35rem; /* 背景图片大小 */
        background-position: 4rem 13rem; /* 背景图片定位：注意这里的第一个属性值是调整左右，第二个属性值是上下 */
    }
    .content-title-img{
        width: 4rem;
    }
    .content-title-text{
        margin-left: 1.5rem;
        margin-top: 2rem;
    }
    .content-title-text-top{
        margin: 0;
        color: #fff;
        font-size: 2rem;
    }
    .content-title-text-bottom{
        margin: 0;
        color: #cac7fd;
        font-size: 1.4rem;
    }
    .main{
        padding: 2rem;
        width: calc(100% - 4rem);
        height: calc(50% - 4rem) ;
        background-color: rgba(255, 255, 255, 0.124);
        backdrop-filter: blur(10px);
        border-radius: 5rem 5rem 0 0;
    }
    .main-text{
        margin-top: 2rem;
    }
    .main-text-top{
        margin: 0;
        color: #fff;
        font-size: 2.4rem;
    }
    .main-text-bottom{
        margin: 0;
        color: #afb1f4;
        font-size: 2rem;
    }
    .main-top{
        margin-top: 1rem;
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
        margin-top: 15.5rem;
        width: 29.4rem;
        height: 5.6rem;
        background-color: #fff;
        border-radius: 3rem;
        padding: 3.7rem 2rem;
        position: absolute;
        display:flex;
        z-index: 1;
    }
    .main-bottom-imgs{
        width: 5.6rem;
        height: 5.6rem;
        background-color: #ff8b55;
        border-radius: 5rem;
        display: flex;
        align-items: center;
    }
</style>