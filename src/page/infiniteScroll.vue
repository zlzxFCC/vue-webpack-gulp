<template>
<div class="demo-infinite-container">
  <mu-list>
    <template v-for="item in list">
      <mu-list-item :title="item"/>
      <mu-divider/>
    </template>
  </mu-list>
  <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
</div>
</template>

<script>
export default {
  data () {
    const list = []
    for (let i = 0; i < 15; i++) {
      list.push('item' + (i + 1))
    }
    return {
      list,
      num: 15,
      loading: false,
      scroller: null
    }
  },
  mounted () {
    this.scroller = this.$el
  },
  methods: {
    loadMore () {
      this.loading = true
      setTimeout(() => {
        for (let i = this.num; i < this.num + 15; i++) {
          this.list.push('item' + (i + 1))
        }
        this.num += 15
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style lang="css">
.demo-infinite-container{
  width: 100%;
  height:100;
  overflow: auto;
  position: absolute;
  -webkit-overflow-scrolling: touch;
  border: 1px solid #d9d9d9;
}
</style>
