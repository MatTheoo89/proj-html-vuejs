<script>

    import { store } from '../../data/store';
    import { getPathImage } from '../../data/fuction';

export default {
    name: 'AppLatestCourses',
    props: {
        title: String,
    },
    data(){
        return{
            store,
            getPathImage
        }
    },
}
</script>

<template>

<section class="my-container">
    <div class="container-fluid my-5">
        <!-- intestazione INIZIO -->
        <div class="row text-center">
            <div class="col mb-4">
                <h2 class="hand-write">Artist coaching</h2>
                <h2 class="subtitle">{{title}}</h2>
            </div>
        </div>
        <!-- intestazione FINE -->

        <div class="container-fluid d-flex mb-4">
                    <!-- Card INIZIO -->

            <div class="row d-flex flex-wrap">
                <div
                    v-for="(course, i) in store.courses" :key="i"
                    class="my-card col-3 p-3">
                    <div class="image mb-3">
                        <img :src="getPathImage(course.imgPath)" :alt="course.name">
                    </div>
                    <div class="info-course d-flex flex-column justify-content-between ps-3">
                        <p class="price">$ {{course.price}}</p>
                        <h6 class="name-course mb-3 pe-4">{{course.name}}</h6>
                        <div class="info">
                            <span class="lesson me-4"> {{course.lessons}} Lessons</span>
                            <span class="students"> {{course.students}} Students</span>
                        </div>
                    </div>
                </div>
            </div>
                <!-- Card FINE -->

            <!-- Titolo laterale INIZIO -->
            <div class="row p-0">
                <div class="col">
                <h1 class="title-lateral">Courses</h1>
                </div>
            </div>
                <!-- Titolo laterale FINE -->
        </div>
        <div class="btn-area text-center">
        <button class="btn btn-primary my-btn text-center">View all Courses</button>
        </div>
    </div>
</section>

    
    
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables.scss' as *;


    .title-lateral{
        // stroke: 20px red;
        writing-mode: sideways-rl;
        font-size: 10rem;
        font-weight: 600;
        margin: 0;
        text-align: center;
        padding-top: 60px;
        padding-left: 20px;
        color: $white;
        -webkit-text-stroke: 3px $tuliptree;
        opacity: .3;
        // text-shadow: 0 0 0 8px $tuliptree;
    }

    .my-card{
        position: relative;
        &:hover .info-course{
            border: 2px solid $tuliptree;
            position: absolute;
            bottom: 35px;
            width: 320px;
            background-color: white;
            padding: 15px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, .2);
        }
        .image{
            width: 350px;
        }
    }

    .info-course{
        // transition: all ease-in-out 250ms;
        .price{
            color: $tuliptree;
            font-weight: 600;
        }
        .name-course{
            color: $codgray;
            font-weight: 600;
        }
        .info{
            font-size: .8rem;
            color: $boulder;
            .lesson::before{
                content: '\f15c';
                font-family: "Font Awesome 6 free";
                font-weight: 400;
                display: inline-block;
                font-size: .9rem;
                vertical-align: middle;
                margin-right: 5px;
            }
            .students::before{
                content: '\f501';
                font-family: "Font Awesome 6 free";
                font-weight: 900;
                display: inline-block;
                font-size: .9rem;
                vertical-align: middle;
                margin-right: 5px;
            }
        }
    }
    .my-btn{
        color: $tuliptree;
        padding: 12px 38px;
        background-color: lighten($tuliptree, 25%);
        &::after{
            content: '\f061';
            font-family: "Font Awesome 6 free";
            font-weight: 900;
            display: inline-block;
            padding-left: 15px;
            font-size: 1rem;
            vertical-align: middle;
        }
    }
</style>