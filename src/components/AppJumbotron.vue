<script>
export default {
    name: 'AppJumbotron'
}
</script>

<template>

<!-- ? Come minchia inserie le img????? -->
    <div class="jumbotron d-flex flex-column justify-content-center align-items-center">

                <!-- IMMAGGINI BACKGROUND -->
                <!-- !!!!!!!!!!!!!!!!!!!!! manca img celeste -->
                <!-- !!!!!!!!!!!!!!!!!!!!! manca img gialla DX -->
        <img class="artist-shape-02" src="../assets/img/artist-shape-02.png" alt="artist-shape-02">
        <img class="artist-shape-01" src="../assets/img/artist-shape-01.png" alt="artist-shape-01">
        <img class="artist-shape-04" src="../assets/img/artist-shape-04.png" alt="artist-shape-04">
        <img class="artist-hero-image-03" src="../assets/img/artist-hero-image-03.png" alt="artist-shape-03">
        <img class="artist-shape-03" src="../assets/img/artist-shape-03.png" alt="artist-shape-03">
        <img class="artist-hero-image-04" src="../assets/img/artist-hero-image-04.jpg" alt="artist-hero-image-04">
        <img class="artist-shape-05" src="../assets/img/artist-shape-05.png" alt="artist-shape-05">
        <img class="maxcoach-shape-12" src="../assets/img/maxcoach-shape-12.png" alt="maxcoach-shape-12">
        <img class="artist-hero-image-02" src="../assets/img/artist-hero-image-02.jpg" alt="artist-hero-image-02">
        <img class="artist-hero-image-01" src="../assets/img/artist-hero-image-01.jpg" alt="artist-hero-image-01">


        <div class="container-fluid">
            <div class="row">
                <div class="jumbo-text-center col-4 offset-4 text-center">
                    <span class="hand-write mb-3">Helo, Im Matin</span>
                    <h1 class="mb-5">Artist Coaching And Mentoring Might Be For You.</h1>
                    <button class="btn btn-primary my-btn my-color">Get started today</button>
                </div>
            </div>
        </div>

        <div class="comands">
            <!-- non trovo la squadra -->
            <i class="fa-solid fa-ruler"></i>
            <i class="fa-solid fa-life-ring"></i>
            <i class="fa-solid fa-book"></i>
            <i class="fa-solid fa-cart-shopping"></i>
        </div>



    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables.scss' as *;

    .jumbotron{
        height: 740px;
        position: relative;
        // background-color: rgb(184, 184, 184);
        background-color: lighten($tuliptree, 41%);
        .jumbo-text-center{
            z-index: 99;
        }
        .btn.my-color{
            padding: 15px 40px;
            background-color: $tuliptree;
        }
        .btn.my-color:hover{
            background-color: $icecold;
            color: $white;
        }
        h1{
            font-weight: 600;
            padding: 0 30px;
        }
        .comands{
            z-index: 50;
            position: absolute;
            top: 90px;
            right: 0;
            display: flex;
            flex-direction: column;
            background-color: $white;
            border-radius: 5px;
            padding: 10px;
            box-shadow: -2px -2px 15px rgba(0, 0, 0, .05);
            i{
                color: $codgray;
                padding: 10px 5px;
            }
        }
        // IMMAGINI BACKGROUND
        .artist-shape-02{
            z-index: 1;
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
        }
        .artist-shape-01{
            z-index: 1;
            position: absolute;
            right: 10%;
        }
        .artist-shape-04{
            position: absolute;
            z-index: 2;
            right: 8%;
            top: 12%;
        }
        .artist-hero-image-03{
            position: absolute;
            z-index: 2;
            left: 22%;
            bottom: 7%;
        }
        .artist-shape-03{
            z-index: 3;
            position: absolute;
            left: 1%;
            top: 20%;
        }
        .artist-hero-image-04{
            z-index: 10;
            position: absolute;
            right: 12%;
            bottom: 7%;
            box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
        }
        .artist-shape-05{
            z-index: 8;
            position: absolute;
            right: 5%;
            bottom: 0;
        }
        .maxcoach-shape-12{
            z-index: 9;
            position: absolute;
            right: 17%;
            bottom: 5%
        }
        .artist-hero-image-02{
            z-index: 11;
            position: absolute;
            left: 15%;
            top: 12%;
            box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
        }
        .artist-hero-image-01{
            z-index: 12;
            position: absolute;
            left: 6.55%;
            bottom: 8%;
            box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
        }
    }
</style>