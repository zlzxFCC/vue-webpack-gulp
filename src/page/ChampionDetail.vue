<template>
  <div>
    <div class="champion-detail" v-if="champion !== null">
      <div class="champion-detail-header" :style="{backgroundImage: 'url(' + skins[0].skinurl +')'}">
        <p class="name">{{ champion.name }}</p>
        <p class="position">
          <span v-for="tag in champion.tags">{{ positions[tag] }}</span>
        </p>
        <div class="info">
          属性：
          <p>
            <span>攻: {{ champion.info.attack }}</span>
            <span>法: {{ champion.info.magic }}</span>
          </p>
          <p>
            <span>防: {{ champion.info.defense }}</span>
            <span>操作: {{ champion.info.difficulty }}</span>
          </p>
        </div>

      </div>
      <mu-tabs :value="selected" @change="handleTabChange">
        <mu-tab value="1" title="技能说明"/>
        <mu-tab value="2" title="皮肤欣赏"/>
      </mu-tabs>
      <div class="champion-detail-tabinfo">
        <div class="skills" v-if="selected == 1">
          <p class="title"><span>技能介绍</span></p>
          <div class="skills-list">
            <mu-flexbox class="mt8" orient="horizontal" v-for="skill in skills">
              <mu-flexbox-item order="0" class="flex-demo" grow=1>
                <div class="skills-list-item_img">
                  <img :src="skill.imgurl" alt="">
                </div>
              </mu-flexbox-item>
              <mu-flexbox-item order="2" class="flex-demo" grow=4>
                <p class="cname">{{ skill.name }}</p>
                <div v-html="skill.description" class="description">
                  
                </div>
              </mu-flexbox-item>
            </mu-flexbox>
          </div>
          <p class="title"><span>技能加点推荐</span></p>
          <p class="add-skill" v-for="(key,val) in addSkill">
            <span>{{ fp[val] }}：</span> {{ key['add-point']}}
          </p>
        </div>
        <div class="skins" v-else>
          <p class="title"><span>点击皮肤可以观看介绍视频哦</span></p>
          <ul>
            <li v-for="(skin,index) in skins" v-if="index > 0">
              <a :href="skin.videourl">
                <v-img :imgUrl="skin.skinurl"></v-img>
              </a>
              <p>
                {{ skin.name }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Loading v-else></Loading>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Loading from '../components/Loading'
import vImg from '../components/Lazyimg'
const positions = {
  'Tank': '坦克',
  'Mage': '法师',
  'Assassin': '刺客',
  'Fighter': '战士',
  'Support': '辅助',
  'Marksman': '射手'
}
const fp = {
  'adc': 'ADC',
  'zd': '中单',
  'dy': '打野',
  'fz': '辅助',
  'sd': '上单'
}
export default {
  created () {
    this.getDetail()
  },
  data () {
    return {
      selected: '1',
      totalSteps: 10,
      completedSteps: 5,
      positions: positions,
      fp: fp
    }
  },
  computed: {
    ...mapState(['champion', 'championDetailBg']),
    ...mapGetters(['skins', 'skills']),
    addSkill () {
      return this.champion.trait
    }
  },
  methods: {
    getDetail () {
      this.$store.dispatch('GET_CHAMPION_DETAIL', {
        id: this.$route.params.id
      })
    },
    handleTabChange (val) {
      this.selected = val
    }
  },
  components: {
    Loading,
    vImg
  }
}
</script>
<style lang="less" scoped>
.champion-detail {
  &-header {
    padding-left: 20px;
    background-size: cover;
    height: 180px;
    color: #fff;
    font-weight: bold;
    .name {
      padding-top: 20px;
      font-size: 16px;
    }
    .position {
      padding: 5px 0;
      font-size: 15px;
      span {
        padding-right: 5px;
      }
    }
    .info {
      span {
        width: 70px;
      }
    }
  }
  &-tabinfo {
    .skills {
      padding: 12px;
      .title {
        border-bottom: 5px solid #f0f0f0;
        margin-bottom: 5px;
        span {
          font-size: 15px; 
        }
        svg {
          margin-right: 2px;
        }
      }
      .add-skill {
        color: #999;
        padding: 5px 0;
        span {
          color:#333;
        }
      }
      &-list {
        .mu-flexbox {
          align-items: flex-start !important;
          margin-bottom: 5px;
        }
      }
    }
    .skins {
      padding: 12px;
      .title {
        border-bottom: 5px solid #f0f0f0;
        margin-bottom: 5px;
        span {
          font-size: 15px; 
        }
        svg {
          margin-right: 2px;
        }
      }
      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 12px;
        li {
          width: 100%;
          text-align: center;
          a {
            display: block;
            img {
              width: 90%;
              height: 190px;
            }
          } 
          p {
            padding: 5px 0;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>