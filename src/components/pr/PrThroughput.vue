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
                        PR L301
                    </div>
                </div>

            </div>
        </div>

        <div class="app-content margin-top-20px"></div>


        <div class="app-card">

            <!-- remove link -->
            <div class="card-content">
                <div class="c-c-top">
                    <div class="c-c-title">
                        PR Throughput
                    </div>
                </div>
                <!-- change to c-c-pie -->
                <div class="c-c-pie">
                    <!-- untuk nilai persentase ada di "p25" -->
                    <!-- nilai persentase hanya bisa bilangan bulat-->
                    <!-- besar lingkaran ada di "default" terdapat beberapa ukuran "small", "big" "deafult" -->
                    <!-- jika persentase 50% maka "p50" -->
                    <!-- jika persentase 33.3% maka "p33" -->
                    <div class="c100 p25 default green">
                        <!-- nilai ini dirubah -->
                        <span>
                            25.5%
                        </span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
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
                <!-- change to c-c-pie -->
                <div class="c-c-pie">
                    <!-- untuk nilai persentase ada di "p25" -->
                    <!-- nilai persentase hanya bisa bilangan bulat-->
                    <!-- besar lingkaran ada di "default" terdapat beberapa ukuran "small", "big" "deafult" -->
                    <!-- jika persentase 50% maka "p50" -->
                    <!-- jika persentase 33.3% maka "p33" -->
                    <div class="c100 p50 default green">
                        <!-- nilai ini dirubah -->
                        <span>
                            50.5%
                        </span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <div class="app-card">

            <!-- remove link -->
            <div class="card-content">
                <div class="c-c-top">
                    <div class="c-c-title">
                        GR PR Throughput
                    </div>
                </div>
                <!-- change to c-c-pie -->
                <div class="c-c-pie">
                    <!-- untuk nilai persentase ada di "p25" -->
                    <!-- nilai persentase hanya bisa bilangan bulat-->
                    <!-- besar lingkaran ada di "default" terdapat beberapa ukuran "small", "big" "deafult" -->
                    <!-- jika persentase 50% maka "p50" -->
                    <!-- jika persentase 33.3% maka "p33" -->
                    <div class="c100 p33 default green">
                        <!-- nilai ini dirubah -->
                        <span>
                            33.5%
                        </span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-content">
                <router-link to="/pr/l301/diagram">
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


    </div>
</template>
