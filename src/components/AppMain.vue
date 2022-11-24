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
        <AppArtistCoaching />
        <AppLatestCourses />
        <AppArticlegAndTips />
        <AppUpcomingEvents />
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
    main{
        background-color: brown;
        min-height: 400px;
    }
</style>