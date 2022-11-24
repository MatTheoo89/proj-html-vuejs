<script>

    import { store } from '../../data/store';
    import { getPathImage } from '../../data/fuction';

export default {
    name: 'AppLatestCourses',
    data(){
        return{
            store,
            getPathImage
        }
    },
}
</script>

<template>

    <div class="container p-5">
        <div class="row text-center">
            <div class="col mb-4">
                <h2 class="hand-write">Artist coaching</h2>
                <h2>Latest Online Courses</h2>
            </div>
        </div>
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
    </div>
    
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables.scss' as *;

    .my-card{
        position: relative;
        &:hover .info-course{
            border: 2px solid $tuliptree;
            position: absolute;
            bottom: 35px;
            width: 80%;
            background-color: white;
            padding: 15px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, .2);
        }
    }

    .info-course{
        transition: all ease-in-out 250ms;
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
</style>