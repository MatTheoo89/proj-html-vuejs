<script>
import AppTestimonials from './AppTestimonials.vue'
export default {
    components: { AppTestimonials },
    name: 'AppArtistCoaching',
    props:{
        title1: String,
        title2: String,
        titleTestimonials: String,
    },
}
</script>

<template>

<section>
<!-- * Artist coaching inizio -->
    <div class="artist container">
        <div class="row text-center">
            <div class="col mb-4">
                <h2 class="hand-write">Artist coaching</h2>
                <h2 class="subtitle">{{title1}}</h2>
                <h2 class="subtitle">{{title2}}</h2>
            </div>
        </div>
        <div class="row d-flex align-items-center">
            <div class="my-card col-3 p-2">
                <div class="image p-2">
                <img src="../../assets/img/artist-box-image-01.png" alt="artist-box-image">
                </div>
                <h5>Online Coures</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae consequatur voluptatum, quam eius quisquam asperiores.
                </p>
            </div>
            <div class="my-card col-3 p-2">
                <div class="image p-2">
                <img src="../../assets/img/artist-box-image-02.png" alt="artist-box-image">
                </div>
                <h5>One to One</h5>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus maiores commodi est ex debitis.
                </p>
            </div>
            <div class="my-card col-3 p-2">
                <div class="image p-2">
                <img src="../../assets/img/artist-box-image-03.png" alt="artist-box-image">
                </div>
                <h5>Anywere</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, officiis! Saepe suscipit tenetur non consequatur laudantium.
                </p>
            </div>
            <div class="my-card col-3 p-2">
                <div class="image p-2">
                <img src="../../assets/img/artist-box-image-04.png" alt="artist-box-image">
                </div>
                <h5>On Time</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus esse voluptates itaque corporis sint magni eum commodi libero voluptatum cumque.
                </p>
            </div>
        </div>
    </div>
<!-- * Artist coaching Fine -->

<!-- * Sezione 2 colonne inizio -->
    <div class="container pb-5">
        <div class="row">
            <div class="column-left col-5 p-4 text-center">
                <img class="mb-4" src="../../assets/img/artist-quote-icon.png" alt="artist-quote-icon">
                <h2 class="quote mb-4">I coach and mentor visual artist, like you, to Create Like You Mean It</h2>
                <h2 class="hand-write">Martin Garrix</h2>
            </div>
            <div class="column-right col-5 offset-1 p-4">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere asperiores repudiandae impedit quidem nulla incidunt repellendus odit sapiente tempora deleniti temporibus, mollitia veritatis delectus quo sit nemo aut amet beatae, libero et eligendi corrupti facilis accusantium! Maxime, placeat quas a minima illum dolore dolorum ea doloremque, vel ipsam voluptates reprehenderit natus at rerum. Doloremque ea asperiores est vero.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deleniti quis autem iste aliquid quam. Quas, quam!</p>
                <button class="btn btn-primary my-btn"> Get stared today</button>
            </div>
        </div>
    </div>
<!-- * Sezione 2 colonne fine -->

<!-- * Sezione 2 colonne inizio -->
<div class="video-yt container p-5">
    <div class="row">
        <div class="preview col text-center">
            <img class="videos" src="../../assets/img/artist-video-poster.jpg" alt="artist-video-poster">
            <img class="play" src="../../assets/img/icon-youtube-play.png" alt="icon-youtube-play">
        </div>
    </div>
    <!-- BACK ABSOLUTE -->
            <img class="maxcoach-shape-05" src="../../assets/img/maxcoach-shape-05.png" alt="maxcoach-shape-05">
            <img class="maxcoach-shape-12" src="../../assets/img/maxcoach-shape-12.png" alt="maxcoach-shape-12">
</div>
<!-- * Sezione 2 colonne fine -->

    <AppTestimonials titleTestimonials="Why do people love me?"/>

    <!-- IMMAGINI BACK -->
    <img class="artist-shape-01" src="../../assets/img/artist-shape-01.png" alt="artist-shape-01">
    <img class="maxcoach-shape-03" src="../../assets/img/maxcoach-shape-03.png" alt="maxcoach-shape-03">
    <img class="maxcoach-shape-13" src="../../assets/img/maxcoach-shape-13.png" alt="maxcoach-shape-13">
</section>
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables.scss' as *;


    .my-card{
        .image{
            width: 130px;
            margin-bottom: 20px;
        }
        h5{
            font-size: 1.2rem;
        }
        p{
            font-size: .8rem;
            padding-right: 60px;
        }
    }
    .column-right{
        p:first-child{
            padding-top: 55px;
        }
    }
    .quote{
        font-weight: 700;
        padding: 0 60px;
        letter-spacing: 1px;
        line-height: 3rem;
    }
    .hand-write{
        font-size: 2.2rem;
    }
    .my-btn{
        color: $tuliptree;
        padding: 15px 40px;
        background-color: lighten($tuliptree, 25%);
    }
    .video-yt{
        position: relative;
        margin-bottom: 90px;
        .preview{
            position: relative;
            z-index: 10;
                .videos{
                box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
                }
                .play{
                    z-index: 11;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
        }
        .maxcoach-shape-05{
            z-index: 1;
            position: absolute;
            top: 0;
            left: 9%;
        }
        .maxcoach-shape-12{
            z-index: 1;
            position: absolute;
            right: 81px;
            bottom: 2%;
        }
        }
    }
    section{
        position: relative;
        margin-bottom: 80px;
        padding-top: 30px;
        .artist{
        padding-top: 90px;
        margin-bottom: 160px;
        z-index: 99;
        position: relative;
    }
        .artist-shape-01{
            z-index: 1;
            position: absolute;
            top: 2%;
            left: -3%;
            transform: rotate(235deg);
        }
        .maxcoach-shape-03{
            z-index: 2;
            position: absolute;
            left: 0;
            top: 3%;
            opacity: .2;
            width: 100%;
            transform: rotate(-5deg);
        }
        .maxcoach-shape-13{
            z-index: 2;
            position: absolute;
            right: -2%;
            top: 12%;
        }
    }
    
</style>