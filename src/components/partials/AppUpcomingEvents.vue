<script>

    import { getPathImage } from '../../data/fuction'
    import { store } from '../../data/store';

export default {
    name: 'AppUpcomingEvents',
    props: {
        title: String,
    },
    data(){
        return{
            store,
            getPathImage,
        }
    }
}
</script>

<template>

    <section class="container-fluid py-4">

                <div class="container pt-5 mb-5">
            <div class="row text-center">
                <div class="col mb-4">
                    <h2 class="hand-write">Up coming Events</h2>
                    <h2 class="subtitle">{{title}}</h2>
                </div>
            </div>
        </div>
        <!--  Intestazione FINE -->

        <div class="row">

            <div class="text-area debu1 col-1">
                <h2>Events</h2>
            </div>

            <div class="card-area col-10 offset-1">

                <div class="container-fluid">

                    <div class="row d-flex py-4">

                        <div v-for="(card, i) in store.events" :key="i" class="my-card col-6 p-3 mb-3 d-flex">

                            <div class="image">
                                <img :src="getPathImage(card.img)" :alt="card.name">
                            </div>

                            <div class="info-box d-flex flex-column justify-content-center">
                                <h6 class="date">{{card.date}}</h6>
                                <h5 class="name">{{card.name}}</h5>
                                <span class="city">{{card.city}}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables.scss' as *;

    .my-card:nth-child(4n+3), .my-card:nth-child(4n+4){
        flex-direction: row-reverse;
        text-align: end;
        // background-color: red;
    }

    section{
        padding: 0 80px;
        min-height: 300px;
        .text-area{
        writing-mode: sideways-rl;
        font-weight: 600;
        margin: 0;
        text-align: center;
        padding-top: 60px;
        padding-left: 20px;
        color: $white;
        -webkit-text-stroke: 3px $tuliptree;
        opacity: .3;
        h2{
            font-size: 10rem;
            margin: 0;
        }
        }
        .card-area{
            .my-card{
                //display: flex;
                .image{
                    width: 250px;
                }
                .info-box{
                    width: calc(100% - 250px - 60px);
                    margin: 0 30px;
                    .date, .city{
                        color: $boulder;
                    }
                    .name{
                        font-weight: 600;
                        padding: 10px 0;
                    }
                    .city{
                        font-size: .9rem;
                        &::before{
                            content: '\f3c5';
                            font-family: "Font Awesome 6 free";
                            font-weight: 900;
                            display: inline-block;
                            font-size: .9rem;
                            vertical-align: middle;
                            margin-right: 8px;
                        }
                    }
                    
                }
            }
        }
        
    }
</style>
