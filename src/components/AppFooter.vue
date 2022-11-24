<script>
export default {
    name: 'AppFooter'
}
</script>

<template>
    <footer>
        <div class="footer-cta d-flex align-items-center">
            <div class="container">
                <div class="row d-flex align-items-center">
                    <div class="newsletter col-4">
                        <h2>Newsletter to get in touch</h2>
                    </div>
                    <div class="col-6 offset-2">
                        <div class="input-area">
                            <input class="h-100" type="text" placeholder="Your e-mail">
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">

        </div>
    </footer>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables.scss' as *;

    .footer-cta{
        height: 200px;
        background: url('../assets/img/artist-shape-color-paint-top-left.png') left top no-repeat, url('../assets/img/artist-shape-color-paint-bottom-right.png') right bottom no-repeat, $bayofmany;
        // background-color: $bayofmany;
        // background-position: left top;
        // background-repeat: no-repeat;
        .newsletter{
            color: $silver;
            text-align: end;
            padding: 0 80px;
        }
        .input-area{
            color: $white;
            border-bottom: 1px solid $silver;
            input{
                width: 95%;
                padding: 20px;
                background-color: transparent;
                border: none;
                outline: none;
                &::placeholder{
                    color: $silver;
                    font-size: 1.5rem;
                }
            }
            i{
                font-size: 1.2rem;
            }
        }
    }
    .footer-bottom{
        height: 485px;
    }
</style>