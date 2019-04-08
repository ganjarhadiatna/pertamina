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
                        KPI OPERATION
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
                        PR Throughput
                    </div>
                </div>
                <div class="c-c-percent line-25">

                    <div class="c-p-info">
                        <div class="title">
                            25.5
                        </div>
                        <div class="subtitle">
                            Percentage
                        </div>
                    </div>

                </div>
            </div>

            <div class="card-content">
                <div class="c-c-top">
                    <div class="c-c-title">
                        PO PR Throughput
                    </div>
                </div>
                <div class="c-c-percent line-50">

                    <div class="c-p-info">
                        <div class="title">
                            50.5
                        </div>
                        <div class="subtitle">
                            Percentage
                        </div>
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
                        GR PR Throughput
                    </div>
                </div>
                <div class="c-c-percent line-75">

                    <div class="c-p-info">
                        <div class="title">
                            75.5
                        </div>
                        <div class="subtitle">
                            Percentage
                        </div>
                    </div>

                </div>
            </div>

            <div class="card-content">
                <router-link to="/kpi/operation/volume">
                    <div class="c-c-top">
                        <div class="c-c-title">
                            PR Execution by Volume
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


        <!-- each contents 2 card ! -->
        <div class="app-card">

            <!-- remove link -->
            <div class="card-content">
                <div class="c-c-top">
                    <div class="c-c-title">
                        PO PR Performance
                    </div>
                </div>
                <div class="c-c-percent line-50">

                    <div class="c-p-info">
                        <div class="title">
                            50.5
                        </div>
                        <div class="subtitle">
                            Percentage
                        </div>
                    </div>

                </div>
            </div>

            <div class="card-content">
                <div class="c-c-top">
                    <div class="c-c-title">
                        LO PR Performance
                    </div>
                </div>
                <div class="c-c-percent line-25">

                    <div class="c-p-info">
                        <div class="title">
                            25.5
                        </div>
                        <div class="subtitle">
                            Percentage
                        </div>
                    </div>

                </div>
            </div>

        </div>



    </div>
</template>
