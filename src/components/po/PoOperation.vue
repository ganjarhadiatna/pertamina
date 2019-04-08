<template>
    <div class="app-page">

        <!-- app panel first -->
        <div class="app-panel">
            <div class="app-panel-main a-p-grid-2">

                <div class="a-p-col-1">
                    <div class="a-p-back">
                        <button class="btn btn-circle btn-main2-color" @click="$goBack()">
                            <i class="fa fa-2x fa-angle-left"></i>
                        </button>
                    </div>
                </div>

                <div class="a-p-col-2">
                    <div class="a-p-title txt-site txt-main-color txt-12">
                        PO STO
                    </div>
                </div>

            </div>
        </div>

        <div class="app-content margin-top-20px"></div>


        <!-- each contents 2 card ! -->
        <div class="app-card">

            <!-- remove link -->
            <div class="card-content">
                
                <!-- menuju PoThroughput.vue -->

                <router-link to="/po/l301">
                    <div class="c-c-top">
                        <div class="c-c-title">
                            L301
                        </div>
                        <div class="c-c-title">
                            3 Contents
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
                <router-link to="/po/l301">
                    <div class="c-c-top">
                        <div class="c-c-title">
                            L302
                        </div>
                        <div class="c-c-title">
                            3 Contents
                        </div>
                    </div>
                    <div class="c-c-mid">
                        <div class="c-c-icn color-2">
                            <i class="fa fa-2x fa-chart-bar"></i>
                        </div>
                    </div>
                </router-link>
            </div>

        </div>

        <!-- each contents 2 card ! -->
        <div class="app-card" v-for="(item, index) in 5" :key="index">

            <!-- remove link -->
            <div class="card-content">
                <router-link to="/pr/l301">
                    <div class="c-c-top">
                        <div class="c-c-title">
                            {{ 'L20' + item }}
                        </div>
                        <div class="c-c-title">
                            3 Contents
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
                <router-link to="/pr/l302">
                    <div class="c-c-top">
                        <div class="c-c-title">
                            L302
                        </div>
                        <div class="c-c-title">
                            3 Contents
                        </div>
                    </div>
                    <div class="c-c-mid">
                        <div class="c-c-icn color-2">
                            <i class="fa fa-2x fa-chart-bar"></i>
                        </div>
                    </div>
                </router-link>
            </div>

        </div>

    </div>
</template>
