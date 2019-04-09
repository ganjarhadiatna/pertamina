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
                        KPI
                    </div>
                </div>

            </div>
        </div>

        <div class="app-content margin-top-20px"></div>


        <!-- each contents 2 card ! -->
        <div class="app-card">

            <!-- remove link -->
            <div class="card-content">
                <router-link to="/kpi/operation">
                    <div class="c-c-top">
                        <div class="c-c-title">
                            Operation
                        </div>
                        <div class="c-c-subtitle">
                            6 Contents
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
                <router-link to="/kpi/sales">
                    <div class="c-c-top">
                        <div class="c-c-title">
                            Operation Sales
                        </div>
                        <div class="c-c-subtitle">
                            6 Contents
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

            <!-- remove link -->
            <div class="card-content">
                <router-link to="/kpi/stock">
                    <div class="c-c-top">
                        <div class="c-c-title">
                            Stock
                        </div>
                        <div class="c-c-subtitle">
                            2 Contents
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
