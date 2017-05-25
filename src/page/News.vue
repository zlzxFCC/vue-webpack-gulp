<template>
  <div>
    <div class="news">
      <div class="news-banners">
        <swiper :options="swiperOption">
          <swiper-slide v-for="news in bannerNews"><a :href="news.article_url"><img :src="news.image_url_big" class="banner-item"  alt="" height="20%" width="100%"></a></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="news-list">
        <div class="news-list-item" v-for="news in newstNews">
          <a :href="news.article_url">
            <div class="news-list-item-img">
              <img :src="news.image_url_small" alt="">
            </div>
            <div class="news-list-item-title">
              <p class="title">{{ news.title }}</p>
              <p class="summary">{{ news.summary }}</p>
              <p class="time">
                {{ news.publication_date.split(' ')[0] }}
                <span class="pv">
                  {{ news.pv | pv }}阅
                </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <mu-raised-button label="左边弹出" @click="open('left')"/>

    <mu-popup position="left" popupClass="demo-popup-left" :open="leftPopup" @close="close('left')">
    <!-- <mu-raised-button label="切换主题" @click="openTheme" primary fullWidth/> -->
    <mu-raised-button label="关闭弹框" @click="close('left')" primary fullWidth/>
  </mu-popup>

  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Loading from '../components/Loading'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { newstNews, bannerNews } from '../data'
import { pv } from '../filters'
export default {
  created () {
    this.setTitle()
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000
      },
      p: 1,
      newstNews: newstNews,
      bannerNews:bannerNews,
      leftPopup: false,
    }
  },
  computed: {
  },
  methods: {
    openTheme(){
        this.$emit('opentheme');
    },
    setTitle () {
      this.$store.commit('set_title', '资讯')
    },
    open (position) {
     this[position + 'Popup'] = true
   },
   close (position) {
     this[position + 'Popup'] = false
   }
  },
  filters: {
    pv
  },
  components: {
    Loading,
    swiper,
    swiperSlide
  }
}
</script>
<style lang="less">
.demo-popup-left {
  display: flex;
  width: 85%;
  max-width: 375px;
  height: 100%;
  align-items: center;
  padding: 24px;
}

.news {
  &-list {
    background: #f0f0f0;
    padding: 0 10px;
    padding-top: 5px;
    &-item {
      margin-bottom: 5px;
      a {
        background: #fff;
        display: flex;
        flex-direction: row;
        padding: 10px 0;
      }
      &-img {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 90px;
          height: 65px;
        }
      }
      &-title {
        padding-left: 5px;
        .title {
          font-size: 14px;
          color: #333;
        }
        .summary {
          font-size: 12px;
          color: #999;
          padding: 2px 0;
        }
        .time {
          font-size: 12px;
          color: #999;
          .pv {
            color: goldenrod;
          }
        }
      }
    }
  }
}
</style>
