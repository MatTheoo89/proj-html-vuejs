<script>
import AppTestimonials from './AppTestimonials.vue'
export default {
    components: { AppTestimonials },
    name: 'AppArtistCoaching'
}
</script>

<template>
<!-- * Artist coaching inizio -->
    <div class="container pt-5">
        <div class="row text-center">
            <div class="col mb-4">
                <h2 class="hand-write">Artist coaching</h2>
                <h2>I understand what it takes to create.</h2>
                <h2>I can help you with</h2>
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
<div class="container p-5">
    <div class="row">
        <div class="preview col text-center">
            <img src="../../assets/img/artist-video-poster.jpg" alt="artist-video-poster">
            <img class="play" src="../../assets/img/icon-youtube-play.png" alt="icon-youtube-play">
        </div>
    </div>
</div>
<!-- * Sezione 2 colonne fine -->







    <AppTestimonials />
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
    .preview{
        position: relative;
        .play{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>