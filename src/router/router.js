import App from '../App'

const index = r => require.ensure([], () => r(require('../page/index/index')), 'index')
const popup = r => require.ensure([], () => r(require('../page/popup')), 'popup')
const Landing = r => require.ensure([], () => r(require('../page/Landing')), 'Landing')
const About = r => require.ensure([], () => r(require('../page/About')), 'About')
const News = r => require.ensure([], () => r(require('../page/News')), 'News')
const ChampionDetail = r => require.ensure([], () => r(require('../page/ChampionDetail')), 'ChampionDetail')
const ChampionList = r => require.ensure([], () => r(require('../page/ChampionList')), 'ChampionList')
const CombatDetail = r => require.ensure([], () => r(require('../page/CombatDetail')), 'CombatDetail')
const Player = r => require.ensure([], () => r(require('../page/Player')), 'Player')
const PlayerDetail = r => require.ensure([], () => r(require('../page/PlayerDetail')), 'PlayerDetail')
const Speakers = r => require.ensure([], () => r(require('../page/Speakers')), 'Speakers')
const Video = r => require.ensure([], () => r(require('../page/Video')), 'Video')

export default [{
    path: '/',
    component: App,
    children: [
        {
            path: '',
            redirect: '/Landing'
        },
        {
          path: '/index',
          component: index,
        },
        {
          path: '/popup',
          component: popup,
        },
        {
          path: '/Landing',
          component: Landing,
        },
        {
          path: '/About',
          component: About,
        },
        {
          path: '/News',
          component: News,
        },
        {
          path: '/ChampionDetail/:id',
          component: ChampionDetail,
        },
        {
          path: '/ChampionList',
          component: ChampionList,
        },
        {
          path: '/CombatDetail',
          component: CombatDetail,
        },
        {
          path: '/Player',
          component: Player,
        },
        {
          path: '/PlayerDetail',
          component: PlayerDetail,
        },

        {
          path: '/Speakers',
          component: Speakers,
        },
        {
          path: '/Video',
          component: Video,
        },

    ]
}]
