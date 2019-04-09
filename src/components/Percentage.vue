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
                        Percentage
                    </div>
                </div>

            </div>
        </div>

        <div class="app-content margin-top-20px">

            <div class="card-content">
                <div class="c-c-top">
                    <div class="c-c-title">
                        LO PR Performance
                    </div>
                    <div class="c-c-subtitle">
                        Percentage
                    </div>
                </div>

                <div class="c-c-pie">

                    <div :class="classPercent">
                        <span>
                            {{ percentage }}%
                        </span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>
                
                </div>

            </div>

        </div>

        <div class="app-content">

            <div class="card-content">
                <div class="c-c-top margin-bottom-10px">
                    <div class="c-c-title">
                        Percentage
                    </div>
                </div>
                <form @submit.prevent="doPercentage()">
                    <input 
                        type="text" 
                        placeholder="0 - 100" 
                        class="txt txt-primary-color"
                        v-model="valPercent"
                        @input="doPercentage()"
                        required />
                </form>
            </div>
        </div>


    </div>
</template>
<script>
export default {
    data () {
        return {
            valPercent: '',
            classPercent: 'c100 p0 default green',
            percentage: '0'
        }
    },
    methods: {
        doPercentage () {
            
            if (this.valPercent == '') {
                this.percentage = '0'
            }
            
            // else if (this.valPercent >= '100') {
            //     this.percentage = '100'
            // }

            else {
                this.percentage = this.valPercent
            }

            
            this.classPercent = 'c100 p' + parseInt(this.percentage, 10) + ' default green'
        }
    },
}
</script>
