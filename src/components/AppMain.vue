<script>
import AppArticlegAndTips from './partials/AppArticlegAndTips.vue'
import AppArtistCoaching from './partials/AppArtistCoaching.vue'
import AppLatestCourses from './partials/AppLatestCourses.vue'
import AppUpcomingEvents from './partials/AppUpcomingEvents.vue'
export default {
    components: { AppArtistCoaching, AppLatestCourses, AppArticlegAndTips, AppUpcomingEvents },
    name: 'AppMain'
}
</script>

<template>
    <main>
        <AppArtistCoaching title1="I understand what it takes to create." title2="I can help you with" titleTestimonials="Why do people love me?"/>
        <AppLatestCourses title="Latest Online Courses"/>
        <AppArticlegAndTips title="Latest From The Blog"/>
        <AppUpcomingEvents title="Let's Work Together"/>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
    main{
        //background-color: rgb(95, 95, 95);
        min-height: 400px;
    }
</style>