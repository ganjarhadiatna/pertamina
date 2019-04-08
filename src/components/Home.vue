<template>
    <div class="app-page">
        

        <!-- app panel first -->
        <div class="app-panel">
            <div class="app-panel-main a-p-grid-3">

                <div class="a-p-col-1">
                    <div class="a-p-logo">
                        <img src="@/assets/img/logo.png">
                    </div>
                </div>

                <div class="a-p-col-2">
                    <div class="a-p-title txt-site txt-main-color txt-12">
                        Patra Logistik
                    </div>
                </div>

                <div class="a-p-col-3">
                    <div class="a-p-icon">
                        
                        <!-- you can change it later -->
                        <router-link to="/profile">
                            <button class="btn btn-circle btn-main2-color">
                                <span 
                                    class="far fa-lg fa-user" 
                                    style="font-size: 18pt;"></span>
                            </button>
                        </router-link>

                    </div>
                </div>

            </div>
        </div>
        


        <!-- it make align for each side -->
        <div class="app-content margin-bottom-20px">



            <!-- not still perfect need more changes -->
            <div class="app-banner">
                <div 
                    class="image image-all"
                    style="background-image: url('https://www.pertamina.com/Media/Image/slider/Comercial.jpg')"></div>
            </div>
            <div class="app-circle">
                <i class="icn active fa fa-lg fa-circle"></i>
                <i class="icn fa fa-lg fa-circle"></i>
                <i class="icn fa fa-lg fa-circle"></i>
            </div>

        </div>

        
        
        
        
        
        
        
        <!-- each contents 2 card ! -->
        <div class="app-card">

            <!-- remove link -->
            <div class="card-content">
                <router-link to="/kpi">
                    <div class="c-c-top">
                        <div class="c-c-title">
                            KPI
                        </div>
                        <div class="c-c-subtitle">
                            3 Contents
                        </div>
                    </div>
                    <div class="c-c-mid">
                        <div class="c-c-icn color-3">
                            <i class="fa fa-2x fa-chart-bar"></i>
                        </div>
                    </div>
                </router-link>
            </div>

            <div class="card-content">
                <router-link to="/pr">
                    <div class="c-c-top">
                        <div class="c-c-title">
                            PR
                        </div>
                        <div class="c-c-subtitle">
                            12 Contents
                        </div>
                    </div>
                    <div class="c-c-mid">
                        <div class="c-c-icn color-5">
                            <i class="fa fa-2x fa-chart-bar"></i>
                        </div>
                    </div>
                </router-link>
            </div>

        </div>











        <!-- each contents 2 card ! -->
        <div class="app-card">

            <div class="card-content">
                <router-link to="/po">
                    <div class="c-c-top">
                        <div class="c-c-title">
                            PO STO
                        </div>
                        <div class="c-c-subtitle">
                            12 Contents
                        </div>
                    </div>
                    <div class="c-c-mid">
                        <div class="c-c-icn color-2">
                            <i class="fa fa-2x fa-chart-bar"></i>
                        </div>
                    </div>
                </router-link>
            </div>

            <div class="card-content">
                <router-link to="/so">
                    <div class="c-c-top">
                        <div class="c-c-title">
                            SO
                        </div>
                        <div class="c-c-subtitle">
                            12 Contents
                        </div>
                    </div>
                    <div class="c-c-mid">
                        <div class="c-c-icn color-1">
                            <i class="fa fa-2x fa-chart-bar"></i>
                        </div>
                    </div>
                </router-link>
            </div>

        </div>



        


        <!-- each contents 2 card ! -->
        <div class="app-card">

            <div class="card-content">
                <router-link to="/fleet-gps">
                    <div class="c-c-top">
                        <div class="c-c-title">
                            FLEET GPS
                        </div>
                        <div class="c-c-subtitle">
                            Map
                        </div>
                    </div>
                    <div class="c-c-mid">
                        <div class="c-c-icn color-5">
                            <i class="fa fa-2x fa-map-marker-alt"></i>
                        </div>
                    </div>
                </router-link>
            </div>

            <div class="card-content">
                <router-link to="/sap-interfaces">
                    <div class="c-c-top">
                        <div class="c-c-title">
                            SAP Interfaces
                        </div>
                        <div class="c-c-subtitle">
                            4 Contents
                        </div>
                    </div>
                    <div class="c-c-mid">
                        <div class="c-c-icn color-2">
                            <i class="fa fa-2x fa-network-wired"></i>
                        </div>
                    </div>
                </router-link>
            </div>

        </div>



        <div class="width width-all margin-20px">
            <div class="txt-site txt-11 txt-main txt-center">
                Powered by Bitozen
            </div>
        </div>



        <!-- popup profile page -->
        <div class="app-profile" v-if="popupProfile">
            <div class="app-profile-main">
                
                <div class="a-p-m-top">
                    <div class="a-p-m-logo">
                        <img src="@/assets/img/logo.png">
                    </div>
                </div>
                
                <div class="a-p-m-mid">
                    <!-- Name of User -->
                    <div class="txt-site txt-12 txt-main-color">
                        Leevy Dano Malik
                    </div>
                </div>

                <div class="a-p-m-bot">
                    <button class="btn btn-post-color btn-radius">
                        LOGOUT
                    </button>
                </div>

            </div>

            <div class="app-profile-button">
                <button class="btn btn-circle btn-grey2-color">
                    <i class="fa fa-2x fa-times"></i>
                </button>
            </div>

        </div>




    </div>
</template>

<script>
export default {
    data () {
        return {
            popupProfile: false,
        }
    }
}
</script>