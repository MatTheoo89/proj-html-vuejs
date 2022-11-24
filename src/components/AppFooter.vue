<script>

    import { getPathImage  } from '../data/fuction';
    import { store } from '../data/store';

export default {
    name: 'AppFooter',
    data(){
        return{
            store,
            getPathImage,
        }
    }
}
</script>

<template>
    <footer>
        <div class="footer-cta d-flex align-items-center">
            <div class="container">
                <div class="row d-flex align-items-center">
                    <div class="newsletter col-4">
                        <h2>Newsletter to get in touch</h2>
                    </div>
                    <div class="col-6 offset-2">
                        <div class="input-area">
                            <input class="h-100" type="text" placeholder="Your e-mail">
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="my-container h-100">
                <div class="container-fluid h-100 d-flex justify-content-center align-items-center">
                    <div class="row w-100">
                        <div class="col-4">
                            <div class="contacts">
                                <h4>Address</h4>
                                <p>382 NE 191st St # 87394 Miami, FL 33179-3899</p>
                                <p>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</p>
                                <p>support@maxcoach.com</p>
                            </div>

                            <div class="socials d-flex align-items-center">
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin"></i>
                            </div>
                        </div>
                        <div class="col-3 d-flex justify-content-around">
                            <div class="menu">
                                <h5>Explore</h5>
                                <ul>
                                    <li><a href="#">Start here</a></li>
                                    <li><a href="#"></a>Success story</li>
                                    <li><a href="#"></a>Blog</li>
                                    <li><a href="#"></a>Courses</li>
                                    <li><a href="#"></a>Contact Us</li>
                                </ul>
                            </div>
                            <div class="menu">
                                <h5>Information</h5>
                                <ul>
                                    <li><a href="#">Membership</a></li>
                                    <li><a href="#"></a>Purchase guide</li>
                                    <li><a href="#"></a>Privacy policy</li>
                                    <li><a href="#"></a>Courses</li>
                                    <li><a href="#"></a>Terms of services</li>
                                </ul>
                            </div>
                        </div>
                        <div class="insta-image col-4 offset-1">
                                <h4>Instagram <span>@maxcoach</span></h4>
                            <div class="gallery d-flex">
                                <div v-for="(img, i) in store.imgFooter" :key="i" class="image me-4">
                                    <img :src="getPathImage(img.path)" :alt="img.nameImg">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="credits text-center">
            <p>&#169; Maxcoach. All Rights Reserved</p>
        </div>
        <button class="btn btn-primary my-btn"><a href="#header"><i class="fa-solid fa-arrow-up"></i></a></button>
    </footer>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables.scss' as *;

    footer{
        position: relative;
    }

    .footer-cta{
        height: 200px;
        background: url('../assets/img/artist-shape-color-paint-top-left.png') left top no-repeat, url('../assets/img/artist-shape-color-paint-bottom-right.png') right bottom no-repeat, $bayofmany;
        // background-color: $bayofmany;
        // background-position: left top;
        // background-repeat: no-repeat;
        .newsletter{
            color: $silver;
            text-align: end;
            padding: 0 80px;
        }
        .input-area{
            color: $white;
            border-bottom: 1px solid $silver;
            input{
                width: 95%;
                padding: 20px;
                background-color: transparent;
                border: none;
                outline: none;
                &::placeholder{
                    color: $silver;
                    font-size: 1.5rem;
                }
            }
            i{
                font-size: 1.2rem;
            }
        }
    }
    .footer-bottom{
        height: 485px;
        .my-container{
            .contacts{
                color: $codgray;
                margin-bottom: 30px;
                h4{
                    margin-bottom: 30px;
                    font-weight: 600;
                }
                p{
                    font-size: .8rem;
                }
            }
            .socials i{
                color: $silver;
                margin-right: 25px;
                font-size: 1.6rem;
            }
            .menu{
                h5{
                    margin-bottom: 30px;
                    font-weight: 600;
                }
                ul{
                    padding: 0;
                    list-style: none;
                }
                li{
                    font-size: .8rem;
                    margin-bottom: 10px;
                }
                a{
                    color: $codgray;
                    text-decoration: none;
                }
            }
            .insta-image{
                h4{
                    margin-bottom: 30px;
                    font-weight: 600;
                    color: $codgray;
                }
                span{
                    color: $tuliptree;
                    font-size: .9rem;
                    font-weight: 400;
                }
            }
            .gallery{
                .image{
                    width: 150px;
                    height: 150px;
                }
            }
        }
        }
        .credits{
            p{
                font-size: .8rem;
                color: $boulder;
            }
        }
        .my-btn{
            position: absolute;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background-color: $tuliptree;
            border-radius: 50%;
            i{
                color: $white;
                font-size: 1.3rem;
            }
        }
</style>