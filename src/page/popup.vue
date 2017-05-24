<template>
<div>
<button class="tools-btn" @click="showDialog">清空数据</button>
<n-dialog v-show="dialog" :msg="tips"  @cancel="dialog = false" @sure="sureDialog"></n-dialog>
</div>
</template>


<script>
    import nDialog from 'src/components/dialog.vue';
    export default {
        data () {
            return {
              dialog:false,
              tips:''
            }
        },
        props:['isShow'],
        components: {
            nDialog,
        },
        methods: {
            showDialog(){
              this.dialog = true
              this.tips="终于出现啦~"
            },
            sureDialog(){
              this.dialog = false;
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
        .tools-btn{
            width:100px;
            height:40px;
            line-height: 26px;
            color: #fff;
            transition: background .3s ease-in;
        }
</style>
