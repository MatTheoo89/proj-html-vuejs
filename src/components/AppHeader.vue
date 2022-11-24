<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <div class="header-top"></div>
        <div class="header-bottom d-flex align-items-center">
            <div class="container">
                <div class="row d-flex align-items-center">
                    <div class="col-2 h-100">
                        <div class="logo">
                            <a href="#"><img src="/dark-logo.png" alt="MaxCoach logo"></a>
                        </div>
                    </div>
                    <div class="navbar d-flex justify-content-center col-8 h-100">
                        <ul class="m-0 d-flex justify-content-center align-items-center list-unstyled">
                            <li class="p-4">
                                <a class="text-decoration-none" href="#">home<i class="fa-solid fa-chevron-down"></i></a>
                            </li> 
                            <li class="p-4">
                                <a class="text-decoration-none" href="#">Pages<i class="fa-solid fa-chevron-down"></i></a>
                            </li> 
                            <li class="p-4">
                                <a class="text-decoration-none" href="#">Courses<i class="fa-solid fa-chevron-down"></i></a>
                            </li> 
                            <li class="p-4">
                                <a class="text-decoration-none" href="#">Features<i class="fa-solid fa-chevron-down"></i></a>
                            </li> 
                            <li class="p-4">
                                <a class="text-decoration-none" href="#">Blog<i class="fa-solid fa-chevron-down"></i></a>
                            </li> 
                            <li class="p-4">
                                <a class="text-decoration-none" href="#">Shop<i class="fa-solid fa-chevron-down"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="socials col-2 h-100 d-flex justify-content-end align-items-center">
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables.scss' as *;

    .header-top{
        height: 50px;
        background-color: $silver;
    }
    .header-bottom{
        height: 90px;
        background-color: $white;
        .logo{
            width: 165px;
        }
        .navbar i{
            margin-left: 5px;
            font-size: .5rem;
        }
        a{
            display: flex;
            align-items: center;
            color:$codgray;
            font-size: .9rem;
        }
        .socials i{
            color: $boulder;
            font-size: 1.2rem;
            padding: 15px;
        }
    }
</style>