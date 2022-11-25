<script>
export default {
    name: 'AppTestimonials',
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
        <h1>importare swiper e capire come fare card non active opacity</h1>
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
    }
    
</style>