<script>
export default {
    name: 'AppArticlegAndTips'
}
</script>

<template>
    <section class="ArticlegAndTips text-center py-4">
        <!--  Intestazione INIZIO -->
        <div class="container pt-5">
            <div class="row text-center">
                <div class="col mb-4">
                    <h2 class="hand-write">Articleg And Tips</h2>
                    <h2 class="subtitle">Latest From The Blog</h2>
                </div>
            </div>
        </div>
        <!--  Intestazione FINE -->

        <div class="container d-flex justify-content-center align-items-center">
            <div class="row">
                <div class="col">
                    <!--  Card main INIZIO -->
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
                    <!--  Card main INIZIO -->
                </div>
            </div>
        </div>
        
        



        <!-- Piè di pagina -->
        <h6>Get into details now? <a href="#">View all posts</a></h6>
    </section>
        
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables.scss' as *;

    .ArticlegAndTips{
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
    }
</style>