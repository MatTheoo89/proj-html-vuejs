<script>
export default {
    name: 'AppArticlegAndTips',
    props:{
        title: String,
    },
}
</script>

<template>
    <section class="ArticlegAndTips text-center py-4">
        <!--  Intestazione INIZIO -->
        <div class="container pt-5">
            <div class="row text-center">
                <div class="col mb-4">
                    <h2 class="hand-write">Articleg And Tips</h2>
                    <h2 class="subtitle">{{title}}</h2>
                </div>
            </div>
        </div>
        <!--  Intestazione FINE -->

        <div class="container d-flex justify-content-center align-items-center">
            <div class="row">
                <!--  Card mini 1 INIZIO -->
                <div class="col">
                    <div class="card-mini left">
                        <img src="../../assets/img/artist-blog-03-480x356.jpeg" alt="artist-blog-03">
                        <div class="info-box">
                            <h6>ARTIST</h6>
                            <h4>Connection Btween Self-Portraits and Identity</h4>
                            <div class="d-flex">
                                <span class="date me-2"> May 15, 2020</span>
                                <span class="views"> 688 views</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!--  Card mini 1 FINE -->

                <!--  Card main INIZIO -->
                <div class="col">
                    <div class="card-main">
                        <img src="../../assets/img/artist-blog-02-500x680.jpg" alt="">
                        <div class="shadow"></div>
                        <div class="info-box">
                            <h6>ARTIST</h6>
                            <h4>Connection Btween Self-Portraits and Identity</h4>
                            <div class="d-flex">
                                <span class="date me-4"> May 15, 2020</span>
                                <span class="views"> 397 views</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!--  Card main INIZIO -->

                <!--  Card mini 2 INIZIO -->
                <div class="col">
                    <div class="card-mini right">
                        <img src="../../assets/img/artist-blog-01-480x356.jpg" alt="artist-blog-01">
                        <div class="info-box">
                            <h6>ARTIST</h6>
                            <h4>Pocket-Sized Notebooks Hold Miniature Painting</h4>
                            <div class="d-flex">
                                <span class="date me-2"> May 15, 2020</span>
                                <span class="views"> 603 views</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!--  Card mini 2 FINE -->
            </div>
        </div>
        
        



        <!-- Piè di pagina -->
        <h6>Get into details now? <a href="#">View all posts</a></h6>
    </section>
        
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables.scss' as *;

    .ArticlegAndTips{
        position: relative;
        background-color: lighten($hintofred, 3%);
        h6{
            color: $boulder;
            font-weight: 600;
            a{
                color: $tuliptree;
                &::after{
                content: '\f061';
                font-family: "Font Awesome 6 free";
                font-weight: 900;
                display: inline-block;
                padding-left: 10px;
                font-size: 1rem;
                vertical-align: middle;
                }
            }
        }
        .card-main{
            position: relative;
            padding: 80px 0;
            width: 500px;
            color: $white;
            z-index: 1;
            margin: 0 80px;
            .shadow{
                z-index: 2;
                position: absolute;
                top: 80px; // padding della carda
                left: 0;
                width: 500px;
                height: 680px;
                background: rgb(0,0,0);
                background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,.1) 100%);
            }
            .info-box{
                z-index: 3;
                position: absolute;
                bottom: 10%;
                left: 0;
                text-align: start;
                padding: 30px;
                h6{
                    color: $white;
                }
                h4{font-weight: 600;
                padding: 10px 0;
                }
                ::before{
                    margin-right: 10px;
                }
                .date::before{
                    content: '\f133';
                font-family: "Font Awesome 6 free";
                font-weight: 900;
                display: inline-block;
                padding-left: 10px;
                font-size: 1rem;
                vertical-align: middle;
                }
                .views::before{
                    content: '\f06e';
                font-family: "Font Awesome 6 free";
                font-weight: 900;
                display: inline-block;
                padding-left: 10px;
                font-size: 1rem;
                vertical-align: middle;
                }
            }
        }
        .card-mini{
            position: absolute;
            width: 280px;
            //min-height: 300px;
            background-color: $white;
            box-shadow: 3px 3px 25px rgba(0,0,0,0.1);
            &.left{
                top: 50%;
            left: 380px;
            transform: translate(0, -25%);
            }
            &.right{
                top: 50%;
                right: 380px;
                transform: translate(0, -45%);
            }
            .info-box{
                padding: 30px 15px;
                text-align: start;
                h4{
                    font-size: 1.2rem;
                    font-weight: 600;
                    padding: 10px 0;
                }
                .date, .views{
                    font-size: .8rem;
                    color: $boulder;
                }
                ::before{
                    margin-right: 10px;
                }
                .date::before{
                    content: '\f133';
                font-family: "Font Awesome 6 free";
                font-weight: 900;
                display: inline-block;
                padding-left: 10px;
                font-size: .8rem;
                vertical-align: middle;
                }
                .views::before{
                    content: '\f06e';
                font-family: "Font Awesome 6 free";
                font-weight: 900;
                display: inline-block;
                padding-left: 10px;
                font-size: .8rem;
                vertical-align: middle;
                }
            }
        }
    }
</style>