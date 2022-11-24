<script>
export default {
    name: 'AppJumbotron'
}
</script>

<template>

<!-- ? Come minchia inserie le img????? -->
    <div class="jumbotron d-flex flex-column justify-content-center align-items-center">
        <div class="container-fluid">
            <div class="row">
                <div class="jumbo-text-center col-4 offset-4 text-center">
                    <span class="hand-write mb-3">Helo, Im Matin</span>
                    <h1 class="mb-5">Artist Coaching And Mentoring Might Be For You.</h1>
                    <button class="btn btn-primary my-btn my-color">Get started today</button>
                </div>
            </div>
        </div>

        

    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables.scss' as *;

    .jumbotron{
        height: 740px;
        position: relative;
        background-color: lighten($tuliptree, 41%);
        .hand-write{
            font-size: 4rem;
            color: $cerulean;
        }
        button.my-color{
            padding: 15px 40px;
            background-color: $tuliptree;
        }
        h1{
            font-weight: 600;
            padding: 0 30px;
        }
    }
</style>