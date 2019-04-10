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
                        Throughput
                    </div>
                </div>

            </div>
        </div>

        <div class="app-content">

            <div class="padding-20px">
                <div class="padding-20px"></div>
            </div>

            <div class="app-pie">
                <div class="c-c-pie">
                    <!-- untuk nilai persentase ada di "p25" -->
                    <!-- nilai persentase hanya bisa bilangan bulat-->
                    <!-- besar lingkaran ada di "default" terdapat beberapa ukuran "small", "big" "deafult" -->
                    <!-- jika persentase 50% maka "p50" -->
                    <!-- jika persentase 33.3% maka "p33" -->
                    <div class="c100 p6 big green">
                        <!-- nilai ini dirubah -->
                        <span>
                            6%
                        </span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="padding-20px">
                <div class="padding-20px"></div>
            </div>

            <div class="app-data grid grid-2x">

                <div class="txt-site txt-center">
                    <div class="txt-site txt-primary txt-12">
                        LO Delay Quantity
                    </div>
                    <div class="txt-site txt-main txt-20 txt-bold">
                        15 KL
                    </div>
                </div>

                <div class="txt-site txt-center">
                    <div class="txt-site txt-primary txt-12">
                        SO Total Quantity
                    </div>
                    <div class="txt-site txt-main txt-20 txt-bold">
                        247 KL
                    </div>
                </div>

            </div>

            <div class="padding-20px">
                <div class="padding-20px"></div>
            </div>

            <!-- <div class="progress-circle progress-10">
                <div class="p-c-content">
                    <span class="value">10%</span>
                </div>
            </div> -->
            
        </div>
    </div>
</template>
