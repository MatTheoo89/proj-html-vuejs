<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        
        <div class="header-top d-flex justify-content-center align-items-center">
            <p class="m-0 me-4">Start TOMORROW! Our biggest event of the year...</p>
            <i class="ms-2 me-3 fa-regular fa-clock"></i>
            <strong class="me-5">00 : 00 : 00 : 00</strong>
            <button class="ms-3">Get ticket</button>
        </div>
        
        <div class="header-bottom d-flex align-items-center">
            <div class="my-container">
                <div class="container-fluid">
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
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables.scss' as *;

    .header-top{
        height: 50px;
        background-color: $hintofred;
        p{
            color: $boulder;
            font-size: .8rem;
        }
        button{
            font-size: .8rem;
            font-weight: 600;
            color: $white;
            background-color: darken($tuliptree, 5%);
            border-radius: 5px;
            padding: 8px 35px;
            border: none;
            outline: none;
        }
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