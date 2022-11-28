<script>

    import { store } from '../data/store';

export default {
    name: 'AppHeader',
    data(){
        return{
            store,
        }
    },
}
</script>

<template>
    <header id="header">
        
        <div class="header-top d-flex justify-content-center align-items-center">
            <p class="m-0 me-4">Start TOMORROW! Our biggest event of the year...</p>
            <i class="ms-2 me-3 fa-regular fa-clock"></i>
            <strong class="me-5">00 : 00 : 00 : 00</strong>
            <button class="btn btn-primary my-btn ms-3">Get ticket</button>
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
                                <li v-for="(link, i) in store.menuHead" :key="i"
                                    class="p-4">
                                    <a class="text-decoration-none" :href="link.href">{{link.text}}<i class="fa-solid fa-chevron-down"></i></a>
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
        .my-btn{
            padding: 8px 35px;
            background-color: darken($tuliptree, 5%);
            &:hover{
            background-color: $icecold;
            color: $white;
        }
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