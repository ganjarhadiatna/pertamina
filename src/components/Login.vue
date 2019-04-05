<template>
    <div class="app-login">


        <div class="a-l-top">
            <div class="a-l-logo">
                <img src="@/assets/img/logo.png">
            </div>
        </div>


        <div class="a-l-mid">
            <div class="a-l-form">
                <div class="a-l-input bdr-bottom">
                    <div class="icn">
                        <i class="fa fa-lg fa-user"></i>
                    </div>
                    <input 
                        type="text" 
                        class="txt txt-primary" 
                        placeholder="Username">
                </div>
                <div class="a-l-input">
                    <div class="icn">
                        <i class="fa fa-lg fa-key"></i>
                    </div>
                    <input 
                        type="password" 
                        class="txt txt-primary" 
                        placeholder="Password">
                </div>
            </div>
            <router-link to="/home">
                <div class="a-l-button">
                    <button 
                        type="submit" 
                        class="btn btn-sekunder-color btn-radius btn-width-all">
                        LOGIN
                    </button>
                </div>
            </router-link>
        </div>

        <div class="a-l-bot">
            <div class="txt-site txt-center txt-11 txt-white">
                Powered by Bitozen
            </div>
        </div>


    </div>
</template>
