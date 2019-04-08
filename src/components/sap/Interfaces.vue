<template>
    <div class="app-page">

        <!-- app panel first -->
        <div class="app-panel">
            <div class="app-panel-main a-p-grid-2">

                <div class="a-p-col-1">
                    <div class="a-p-back">
                        <button class="btn btn-circle btn-main2-color">
                            <i class="fa fa-2x fa-angle-left"></i>
                        </button>
                    </div>
                </div>

                <div class="a-p-col-2">
                    <div class="a-p-title txt-site txt-main-color txt-12">
                        SAP Interfaces
                    </div>
                </div>

            </div>
        </div>

        <div class="app-content margin-top-20px"></div>


        <!-- each contents 2 card ! -->
        <div class="app-card">

            <!-- remove link -->
            <div class="card-content">
                <div class="c-c-top">
                    <div class="c-c-title">
                        Success Rate
                    </div>
                </div>
                <div class="c-c-mid">
                    <div class="c-c-icn color-2">
                        <strong style="font-size: 32pt;">2</strong>
                    </div>
                </div>
            </div>

            <div class="card-content">
                <div class="c-c-top">
                    <div class="c-c-title">
                        Error Rate
                    </div>
                </div>
                <div class="c-c-mid">
                    <div class="c-c-icn color-5">
                        <strong style="font-size: 32pt;">2</strong>
                    </div>
                </div>
            </div>

        </div>

        <!-- each contents 2 card ! -->
        <div class="app-card">

            <!-- remove link -->
            <div class="card-content">
                <div class="c-c-top">
                    <div class="c-c-title">
                        Total Command
                    </div>
                </div>
                <div class="c-c-mid">
                    <div class="c-c-icn color-3">
                        <strong style="font-size: 32pt;">2</strong>
                    </div>
                </div>
            </div>

            <div class="card-content">
                <router-link to="/sap-interfaces/diagram">
                    <div class="c-c-top">
                        <div class="c-c-title">
                            SAP Execution by Volume
                        </div>
                        <div class="c-c-subtitle">
                            Diagram
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



    </div>
</template>
