<script>

    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from "swiper/vue";

    // Import Swiper styles
    import "swiper/css";

    import "swiper/css/effect-coverflow";
    import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default {
    name: 'AppTestimonials',
    components: {
    Swiper,
    SwiperSlide,
    },
    setup() {
    return {
        modules: [EffectCoverflow, Pagination],
    };
},
    props: {
        titleTestimonials: String,
    },
}
</script>

<template>
<section class="testimonials">

    <div class="container-fluid text-center py-3">
                <!-- intestazione INIZIO -->
        <div class="row text-center">
            <div class="col mb-4">
                <h2 class="hand-write">Testimonials</h2>
                <h2 class="subtitle">{{titleTestimonials}}</h2>
            </div>
        </div>
        <!-- intestazione FINE -->

        <div class="row testimonials">
            <div class="col d-flex justify-content-center align-items-center">
                <swiper
                    :effect="'coverflow'"
                    :grabCursor="true"
                    :centeredSlides="true"
                    :slidesPerView="3"
                    :space-between="60"
                    :coverflowEffect="{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }"
                    :pagination="true"
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide>
                        <div class="testimonials-card">
                            <div class="testimonials-dettails">
                                <h4>TITOLO CARD</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur saepe laborum esse perferendis ut sint suscipit doloremque reiciendis rem incidunt!</p>
                            </div>
                            <div class="testimonials-avatar d-flex align-items-center">
                                <img class="avatar" src="../../assets/img/artist-testimonial-avatar-04.jpg" alt="">
                                <div class="testimonials-info">
                                    <h5>NOME E COGNOME</h5>
                                    <span>PROFESSIONE</span>
                                </div>
                                
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="testimonials-card">
                            <div class="testimonials-dettails">
                                <h4>TITOLO CARD</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur saepe laborum esse perferendis ut sint suscipit doloremque reiciendis rem incidunt!</p>
                            </div>
                            <div class="testimonials-avatar d-flex align-items-center">
                                <img class="avatar" src="../../assets/img/artist-testimonial-avatar-04.jpg" alt="">
                                <div class="testimonials-info">
                                    <h5>NOME E COGNOME</h5>
                                    <span>PROFESSIONE</span>
                                </div>
                                
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="testimonials-card">
                            <div class="testimonials-dettails">
                                <h4>TITOLO CARD</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur saepe laborum esse perferendis ut sint suscipit doloremque reiciendis rem incidunt!</p>
                            </div>
                            <div class="testimonials-avatar d-flex align-items-center">
                                <img class="avatar" src="../../assets/img/artist-testimonial-avatar-04.jpg" alt="">
                                <div class="testimonials-info">
                                    <h5>NOME E COGNOME</h5>
                                    <span>PROFESSIONE</span>
                                </div>
                                
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="testimonials-card">
                            <div class="testimonials-dettails">
                                <h4>TITOLO CARD</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur saepe laborum esse perferendis ut sint suscipit doloremque reiciendis rem incidunt!</p>
                            </div>
                            <div class="testimonials-avatar d-flex align-items-center">
                                <img class="avatar" src="../../assets/img/artist-testimonial-avatar-04.jpg" alt="">
                                <div class="testimonials-info">
                                    <h5>NOME E COGNOME</h5>
                                    <span>PROFESSIONE</span>
                                </div>
                                
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>

</section>


</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables.scss' as *;

    section{
        background-color: $hintofred;
        position: relative;
        .container-fluid{
            min-height: 100px;
            &[data-v-bf95088b]::before{
                content: "";
                position: absolute;
                bottom: 100%;
                left: 0;
                width: 100%;
                height: 200px;
                background: url('../../assets/img/wavesNegative.svg');
                background-size: cover;
                background-repeat: no-repeat;
                z-index: 1;
            }
        }
        .row.testimonials{
            height: 500px;
            .col{
                margin: 0 50px;
                .swiper{
                    height: 90%;
                }
            }
            .swiper-wrapper{
                margin-bottom: 75px;
                height: 90%;
                .swiper-slide{
                width: calc(100% / 3);
                // overflow: hidden;
                }
                .swiper-slide-prev, .swiper-slide-next{
                    opacity: .5;
                }
            }
            
        }
        .testimonials-card{
            width: 90%;
            height: 100%;
            padding: 50px;
            border-radius: 8px;
            text-align: start;
            background-color: bisque;
            .testimonials-dettails{
                margin-bottom: 35px;
                padding-right: 40px;
                h4{
                    color: $codgray;
                    font-weight: 600;
                    margin-bottom: 20px;
                }
                p{
                    color: $boulder;
                    font-weight: 500;
                }
            }
            .avatar{
                width: 90px;
                margin-right: 30px;
                clip-path: circle(50%);
                h5{
                    font-size: .9rem;
                    color: $codgray;
                    font-weight: 600;
                }
                span{
                    font-size: .7rem;
                    color: $boulder;
                }
            }
        }
    }
    
</style>