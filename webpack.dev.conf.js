// 'use strict'
// const utils = require('./utils')
// const webpack = require('webpack')
// const config = require('../config')
// const merge = require('webpack-merge')
// const path = require('path')
// const baseWebpackConfig = require('./webpack.base.conf')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
// const portfinder = require('portfinder')


// /*开始*/
// const axios = require('axios')
// const express = require('express')
// const app = express()
// const apiRoutes = express.Router()
// app.use('/api', apiRoutes)

// /*结束*/




// const HOST = process.env.HOST
// const PORT = process.env.PORT && Number(process.env.PORT)

// const devWebpackConfig = merge(baseWebpackConfig, {
//   module: {
//     rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
//   },
//   // cheap-module-eval-source-map is faster for development
//   devtool: config.dev.devtool,

//   // these devServer options should be customized in /config/index.js
//   devServer: {
    
//     before(app) {
//       app.get('/api/someApi', (req, res) => {
//         res.json({
//           "date": "2017-03-09",
//           "toast": "",
//           "new_recommend_count_str": "",
//           "recommend_feeds": [
//             {
//               "source_cn": "",
//               "layout": 1,
//               "target": {
//                 "read_count": 1883,
//                 "photos_count": 0,
//                 "author": {
//                   "avatar": "https://img3.doubanio.com/icon/u77564270-3.jpg",
//                   "name": "大象公会"
//                 },
//                 "uri": "https://m.douban.com/note/610125234/",
//                 "more_pic_urls": [],
//                 "monitor_urls": [],
//                 "cover_url": "https://qnmob2.doubanio.com/img/files/file-1489047494.jpg ",
//                 "desc": "我们这一代人的成长年代，真正的诗歌课从来都是缺席的。",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "个人意见：为什么中国没有鲍勃·迪伦这样的民谣歌手",
//               "source": "editor",
//               "theme": null,
//               "id": "127231",
//               "card": null
//             },
//             {
//               "source_cn": "",
//               "layout": 1,
//               "target": {
//                 "read_count": 0,
//                 "photos_count": 0,
//                 "author": {
//                   "avatar": "https://img5.doubanio.com/icon/u95805238-16.jpg",
//                   "name": "豆瓣"
//                 },
//                 "uri": "https://m.douban.com/page/i8a7gdy",
//                 "more_pic_urls": [],
//                 "monitor_urls": [],
//                 "cover_url": "https://qnmob2.doubanio.com/img/files/file-1488961780.JPG ",
//                 "desc": "真想看狼叔一直打下去，文末有小贱贱彩蛋！",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "《金刚狼3》剪掉的，这个混剪回忆杀全部还给你",
//               "source": "editor",
//               "theme": null,
//               "id": "127174",
//               "card": null
//             },
//             {
//               "source_cn": "来自栏目：广播精选",
//               "layout": 1,
//               "target": {
//                 "read_count": 0,
//                 "photos_count": 0,
//                 "author": {
//                   "avatar": "https://img5.doubanio.com/icon/u95805238-16.jpg",
//                   "name": "豆瓣"
//                 },
//                 "uri": "https://m.douban.com/page/w501jli",
//                 "more_pic_urls": [],
//                 "monitor_urls": [],
//                 "cover_url": "https://qnmob2.doubanio.com/img/files/file-1488958706.jpg ",
//                 "desc": "听一个朋友说，家里很重、很难打开的卧室门，常常被蹊跷地打开……",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "广播精选｜跨物种的精诚合作真是好感人",
//               "source": "editor",
//               "theme": {
//                 "icon_url": "https://img1.doubanio.com/img/files/file-1469432288.png",
//                 "uri": "douban://douban.com/selection/theme/17",
//                 "id": "17",
//                 "name": "广播精选",
//                 "desc": "豆瓣用户们分享的趣事逸闻，奇思妙想。"
//               },
//               "id": "127163",
//               "card": null
//             },
//             {
//               "source_cn": "来自栏目：爱美丽",
//               "layout": 1,
//               "target": {
//                 "read_count": 25639,
//                 "photos_count": 0,
//                 "author": {
//                   "avatar": "https://img3.doubanio.com/icon/u3842303-75.jpg",
//                   "name": "雾港"
//                 },
//                 "uri": "https://m.douban.com/note/609190529/",
//                 "more_pic_urls": [],
//                 "monitor_urls": [],
//                 "cover_url": "https://qnmob2.doubanio.com/img/files/file-1488880359.jpg ",
//                 "desc": "若能与少年藤井树相遇于《情书》的书架前，你会选择穿什么香水？",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "爱美丽 | 这7支文艺系香水，犹如写给图书馆的七封情书",
//               "source": "editor",
//               "theme": {
//                 "icon_url": "https://img3.doubanio.com/img/files/file-1478598845.png",
//                 "uri": "douban://douban.com/selection/theme/23",
//                 "id": "23",
//                 "name": "爱美丽",
//                 "desc": "护肤、美妆、穿搭、消费……有品质的时尚指南。"
//               },
//               "id": "127113",
//               "card": null
//             },
//             {
//               "source_cn": "来自栏目：玩家",
//               "layout": 1,
//               "target": {
//                 "read_count": 33021,
//                 "photos_count": 0,
//                 "author": {
//                   "avatar": "https://img3.doubanio.com/icon/u66417827-83.jpg",
//                   "name": "奶茶睡不醒"
//                 },
//                 "uri": "https://m.douban.com/note/608441157/",
//                 "more_pic_urls": [],
//                 "monitor_urls": [],
//                 "cover_url": "https://qnmob2.doubanio.com/view/note/large/public/p40907220.jpg ",
//                 "desc": "这些知名的国产手帐到底怎么样？",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "玩家 | 我帮你们试用了最有名的16本国产手账",
//               "source": "editor",
//               "theme": {
//                 "icon_url": "https://img3.doubanio.com/img/files/file-1470815941.png",
//                 "uri": "douban://douban.com/selection/theme/22",
//                 "id": "22",
//                 "name": "玩家",
//                 "desc": "带你发现那些有趣的人和事。"
//               },
//               "id": "127170",
//               "card": null
//             },
//             {
//               "source_cn": "",
//               "layout": 1,
//               "target": {
//                 "read_count": 19941,
//                 "photos_count": 0,
//                 "author": {
//                   "avatar": "https://img1.doubanio.com/icon/u4292207-58.jpg",
//                   "name": "张今儿"
//                 },
//                 "uri": "https://m.douban.com/note/609026834/",
//                 "more_pic_urls": [],
//                 "monitor_urls": [],
//                 "cover_url": "https://qnmob2.doubanio.com/view/note/large/public/p40992451.jpg ",
//                 "desc": "一 “把手伸出来。”，老贝发来微信。 消失了整整三天，微信头像依旧是那只架着黑超的红猪，得意忘形地...",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "我的哆啦a梦男友",
//               "source": "editor:linucb_online",
//               "theme": null,
//               "id": "126865",
//               "card": {
//                 "name": "为你推荐"
//               }
//             },
//             {
//               "source_cn": "",
//               "layout": 1,
//               "target": {
//                 "read_count": 17761,
//                 "photos_count": 0,
//                 "author": {
//                   "avatar": "https://img3.doubanio.com/icon/u133446540-2.jpg",
//                   "name": "月光粥"
//                 },
//                 "uri": "https://m.douban.com/note/604035183/",
//                 "more_pic_urls": [],
//                 "monitor_urls": [],
//                 "cover_url": "",
//                 "desc": "有关过节的回忆 我们结束一段休假时光，仿佛从一个冗长的梦中醒来，脑中还残留着梦的痕迹。 空城 又到了...",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "有关过节的回忆",
//               "source": "editor:linucb_online",
//               "theme": null,
//               "id": "124887",
//               "card": {
//                 "name": "为你推荐"
//               }
//             },
//             {
//               "source_cn": "",
//               "layout": 1,
//               "target": {
//                 "read_count": 6175,
//                 "photos_count": 0,
//                 "author": {
//                   "avatar": "https://img1.doubanio.com/icon/u1630409-278.jpg",
//                   "name": "真姬"
//                 },
//                 "uri": "https://m.douban.com/note/609598428/",
//                 "more_pic_urls": [],
//                 "monitor_urls": [],
//                 "cover_url": "https://qnmob2.doubanio.com/view/note/large/public/p41066490.jpg ",
//                 "desc": "@邦摇30s 邀请了厂牌主理、 乐队乐手、音乐媒体、 电台DJ等， 向你推荐2016最值得听的日音。 J-Rock、Ci...",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "2016你最值得听的日音",
//               "source": "editor:linucb_online",
//               "theme": null,
//               "id": "127095",
//               "card": {
//                 "name": "为你推荐"
//               }
//             },
//             {
//               "source_cn": "",
//               "layout": 1,
//               "target": {
//                 "read_count": 10212,
//                 "photos_count": 0,
//                 "author": {
//                   "avatar": "https://img1.doubanio.com/icon/u65510256-7.jpg",
//                   "name": "豆瓣阅读"
//                 },
//                 "uri": "https://m.douban.com/note/604892187/",
//                 "more_pic_urls": [],
//                 "monitor_urls": [],
//                 "cover_url": "",
//                 "desc": "作者：Z先生 【编者按：本文节选自第四届豆瓣阅读征文大赛入围作品《专业吵架团》。在人工智能管理大都...",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "广场舞如何拯救世界？",
//               "source": "editor:linucb_online",
//               "theme": null,
//               "id": "125214",
//               "card": {
//                 "name": "为你推荐"
//               }
//             },
//             {
//               "source_cn": "",
//               "layout": 5,
//               "target": {
//                 "read_count": 23040,
//                 "photos_count": 133,
//                 "author": {
//                   "avatar": "https://img3.doubanio.com/icon/u2000242-14.jpg",
//                   "name": "cp"
//                 },
//                 "uri": "https://m.douban.com/photos/album/1623446006/",
//                 "more_pic_urls": [
//                   "https://qnmob2.doubanio.com/view/photo/large/public/p2421562385.jpg?imageView2/1/q/80/w/330/h/330/format/jpg",
//                   "https://qnmob2.doubanio.com/view/photo/large/public/p2318197232.jpg?imageView2/1/q/80/w/330/h/330/format/jpg"
//                 ],
//                 "monitor_urls": [],
//                 "cover_url": "https://qnmob2.doubanio.com/view/photo/large/public/p2380251122.jpg?imageView2/2/q/80/w/500/h/500/format/jpg",
//                 "desc": "",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "东瀛国",
//               "source": "editor:linucb_online",
//               "theme": null,
//               "id": "125073",
//               "card": {
//                 "name": "为你推荐"
//               }
//             },
//             {
//               "source_cn": "",
//               "layout": 1,
//               "target": {
//                 "read_count": 10164,
//                 "photos_count": 0,
//                 "author": {
//                   "avatar": "https://img3.doubanio.com/icon/u153066627-4.jpg",
//                   "name": "番茄青年实验室"
//                 },
//                 "uri": "https://m.douban.com/note/595087925/",
//                 "more_pic_urls": [],
//                 "monitor_urls": [],
//                 "cover_url": "https://qnmob2.doubanio.com/view/note/large/public/p39114268.jpg ",
//                 "desc": "用刀划开一张纸，你以为一分为二，飞扬的纸屑告诉你我们洒满空气。——陈粉丸 废话多了容易漏短，还会让...",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "1001 个好玩的人 | 一本“书”的正确打开方式",
//               "source": "editor:linucb_online",
//               "theme": null,
//               "id": "127081",
//               "card": {
//                 "name": "为你推荐"
//               }
//             },
//             {
//               "source_cn": "",
//               "layout": 1,
//               "target": {
//                 "read_count": 9983,
//                 "photos_count": 0,
//                 "author": {
//                   "avatar": "https://img3.doubanio.com/icon/u154066421-5.jpg",
//                   "name": "媚外"
//                 },
//                 "uri": "https://m.douban.com/note/609666844/",
//                 "more_pic_urls": [],
//                 "monitor_urls": [],
//                 "cover_url": "https://qnmob2.doubanio.com/view/note/large/public/p41078246.jpg ",
//                 "desc": "👦🏻 Simon Porte Jacquemus 是一位自学成才的年轻设计师。他成长于法国南部的一个小镇上，18 岁搬...",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "设局 · JACQUEMUS | 这位法国九〇后设计师有点甜",
//               "source": "editor:linucb_online",
//               "theme": null,
//               "id": "127079",
//               "card": {
//                 "name": "为你推荐"
//               }
//             },
//             {
//               "source_cn": "",
//               "layout": 2,
//               "target": {
//                 "read_count": 15242,
//                 "photos_count": 0,
//                 "author": {
//                   "avatar": "https://img3.doubanio.com/icon/u1356900-20.jpg",
//                   "name": "能工巧匠沙门哥"
//                 },
//                 "uri": "https://m.douban.com/book/review/8319680/",
//                 "more_pic_urls": [],
//                 "monitor_urls": [],
//                 "cover_url": "https://img1.doubanio.com/lpic/s11174718.jpg",
//                 "desc": "我不爱植物。当然，对于美丽的花草，我也像正常人一样喜欢，但我对植物并没有强烈的好奇心与兴趣，不像对矿物或星空一样有着强烈的求知欲。尽管如此，我却追看李澜老师的博客“花草茶事”长达数年，从不觉得厌倦...",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "一间四面开窗的房间",
//               "source": "editor:linucb_online",
//               "theme": null,
//               "id": "125010",
//               "card": {
//                 "name": "为你推荐"
//               }
//             },
//             {
//               "source_cn": "",
//               "layout": 1,
//               "target": {
//                 "read_count": 108406,
//                 "photos_count": 0,
//                 "author": {
//                   "avatar": "https://img3.doubanio.com/icon/u17170206-4.jpg",
//                   "name": "岁羽中"
//                 },
//                 "uri": "https://m.douban.com/note/600111138/",
//                 "more_pic_urls": [],
//                 "monitor_urls": [],
//                 "cover_url": "",
//                 "desc": "简简的穿衣品位有多厉害，是马理很久以后才意识到的。 大二期间，马理有过一个短暂的朋友，名叫敬心虞，...",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "女人穿什么衣，男人友什么谊",
//               "source": "editor:linucb_online",
//               "theme": null,
//               "id": "125059",
//               "card": {
//                 "name": "为你推荐"
//               }
//             },
//             {
//               "source_cn": "",
//               "layout": 1,
//               "target": {
//                 "read_count": 32304,
//                 "photos_count": 0,
//                 "author": {
//                   "avatar": "https://img3.doubanio.com/icon/u147681591-2.jpg",
//                   "name": "新世相"
//                 },
//                 "uri": "https://m.douban.com/note/604855288/",
//                 "more_pic_urls": [],
//                 "monitor_urls": [],
//                 "cover_url": "https://qnmob2.doubanio.com/view/note/large/public/p40434456.jpg ",
//                 "desc": "一 我喜欢桃花。曾经有一段时间，在微信里输入“桃花朵朵开”，会有一屏幕的桃花落下来。这件事让“期待...",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "为什么你必须用最大的努力准备迎接桃花要开了这件事",
//               "source": "editor:linucb_online",
//               "theme": null,
//               "id": "125205",
//               "card": {
//                 "name": "为你推荐"
//               }
//             },
//             {
//               "source_cn": "",
//               "layout": 5,
//               "target": {
//                 "read_count": 30252,
//                 "photos_count": 44,
//                 "author": {
//                   "avatar": "https://img1.doubanio.com/icon/u26582804-77.jpg",
//                   "name": "孙十七"
//                 },
//                 "uri": "https://m.douban.com/photos/album/124479450/",
//                 "more_pic_urls": [
//                   "https://qnmob2.doubanio.com/view/photo/large/public/p2412046471.jpg?imageView2/1/q/80/w/330/h/330/format/jpg",
//                   "https://qnmob2.doubanio.com/view/photo/large/public/p2412046291.jpg?imageView2/1/q/80/w/330/h/330/format/jpg"
//                 ],
//                 "monitor_urls": [],
//                 "cover_url": "https://qnmob2.doubanio.com/view/photo/large/public/p2247335370.jpg?imageView2/2/q/80/w/500/h/500/format/jpg",
//                 "desc": "",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "画纸",
//               "source": "editor:linucb_online",
//               "theme": null,
//               "id": "123787",
//               "card": {
//                 "name": "为你推荐"
//               }
//             },
//             {
//               "source_cn": "",
//               "layout": 1,
//               "target": {
//                 "read_count": 7391,
//                 "photos_count": 0,
//                 "author": {
//                   "avatar": "https://img3.doubanio.com/icon/u144464879-2.jpg",
//                   "name": "未来事务管理局"
//                 },
//                 "uri": "https://m.douban.com/note/605030207/",
//                 "more_pic_urls": [],
//                 "monitor_urls": [],
//                 "cover_url": "https://qnmob2.doubanio.com/view/note/large/public/p40454763.jpg ",
//                 "desc": "高小山：常有作家担忧，硅谷精英们营造的数字帝国会让人类忘记远征宇宙的梦想。慕明为我们设计了一个双...",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "不会点杂技，都不好意思说自己是太空人｜2017科幻春晚",
//               "source": "editor:linucb_online",
//               "theme": null,
//               "id": "125216",
//               "card": {
//                 "name": "为你推荐"
//               }
//             },
//             {
//               "source_cn": "",
//               "layout": 1,
//               "target": {
//                 "read_count": 51794,
//                 "photos_count": 0,
//                 "author": {
//                   "avatar": "https://img1.doubanio.com/icon/u67855900-7.jpg",
//                   "name": "王路"
//                 },
//                 "uri": "https://m.douban.com/note/604697837/",
//                 "more_pic_urls": [],
//                 "monitor_urls": [],
//                 "cover_url": "",
//                 "desc": "好事有两种。一种是对别人好，一种是对自己好。如果在究竟的层面谈，一件事只要对别人好，对自己就不会...",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "好事不宜多做",
//               "source": "editor:linucb_online",
//               "theme": null,
//               "id": "125176",
//               "card": {
//                 "name": "为你推荐"
//               }
//             },
//             {
//               "source_cn": "",
//               "layout": 1,
//               "target": {
//                 "read_count": 8342,
//                 "photos_count": 0,
//                 "author": {
//                   "avatar": "https://img3.doubanio.com/icon/u1347949-20.jpg",
//                   "name": "青竹子"
//                 },
//                 "uri": "https://m.douban.com/note/609409928/",
//                 "more_pic_urls": [],
//                 "monitor_urls": [],
//                 "cover_url": "",
//                 "desc": "小引 记梦的想法，起于我读高二时。那是2003年左右，每天起床、晨跑以后，照例是语文或英语早读。如果前...",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "旧梦集",
//               "source": "editor:linucb_online",
//               "theme": null,
//               "id": "127017",
//               "card": {
//                 "name": "为你推荐"
//               }
//             },
//             {
//               "source_cn": "",
//               "layout": 1,
//               "target": {
//                 "read_count": 35858,
//                 "photos_count": 0,
//                 "author": {
//                   "avatar": "https://img1.doubanio.com/icon/u27827869-27.jpg",
//                   "name": "东来"
//                 },
//                 "uri": "https://m.douban.com/note/609125436/",
//                 "more_pic_urls": [],
//                 "monitor_urls": [],
//                 "cover_url": "",
//                 "desc": "杏子怀孕了，快五个月，肚皮隆起，穿宽松的裙子也盖不住，手总是下意识去摸小腹，如此败露了。她才十六...",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "杏与莲",
//               "source": "editor:linucb_online",
//               "theme": null,
//               "id": "126973",
//               "card": {
//                 "name": "为你推荐"
//               }
//             },
//             {
//               "source_cn": "",
//               "layout": 1,
//               "target": {
//                 "read_count": 46407,
//                 "photos_count": 0,
//                 "author": {
//                   "avatar": "https://img3.doubanio.com/icon/u4365944-101.jpg",
//                   "name": "霓坤姐"
//                 },
//                 "uri": "https://m.douban.com/note/609196106/",
//                 "more_pic_urls": [],
//                 "monitor_urls": [],
//                 "cover_url": "https://qnmob2.doubanio.com/view/note/large/public/p41088828.jpg ",
//                 "desc": "一个两年前落选《奇葩说》的年轻人，因错过了爆红的机会而懊悔不已，两年后，这个24岁的年轻人抱着必胜...",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "年轻人，让高晓松投票之前请先投给自己",
//               "source": "editor:linucb_online",
//               "theme": null,
//               "id": "127061",
//               "card": {
//                 "name": "为你推荐"
//               }
//             },
//             {
//               "source_cn": "",
//               "layout": 5,
//               "target": {
//                 "read_count": 20680,
//                 "photos_count": 18,
//                 "author": {
//                   "avatar": "https://img3.doubanio.com/icon/u1861406-42.jpg",
//                   "name": "無用"
//                 },
//                 "uri": "https://m.douban.com/photos/album/66948817/",
//                 "more_pic_urls": [
//                   "https://qnmob2.doubanio.com/view/photo/large/public/p1470338950.jpg?imageView2/1/q/80/w/330/h/330/format/jpg",
//                   "https://qnmob2.doubanio.com/view/photo/large/public/p1470339044.jpg?imageView2/1/q/80/w/330/h/330/format/jpg"
//                 ],
//                 "monitor_urls": [],
//                 "cover_url": "https://qnmob2.doubanio.com/view/photo/large/public/p1470345374.jpg?imageView2/2/q/80/w/500/h/500/format/jpg",
//                 "desc": "特殊教育學校里的孩子們",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "The Loud Silence",
//               "source": "editor:linucb_online",
//               "theme": null,
//               "id": "125201",
//               "card": {
//                 "name": "为你推荐"
//               }
//             },
//             {
//               "source_cn": "",
//               "layout": 1,
//               "target": {
//                 "read_count": 22007,
//                 "photos_count": 0,
//                 "author": {
//                   "avatar": "https://img3.doubanio.com/icon/u2253679-25.jpg",
//                   "name": "xi-xia"
//                 },
//                 "uri": "https://m.douban.com/note/607490310/",
//                 "more_pic_urls": [],
//                 "monitor_urls": [],
//                 "cover_url": "https://qnmob2.doubanio.com/view/note/large/public/p40781577.jpg ",
//                 "desc": "对一个好吃鬼来说，拜访佛罗伦萨的理由除了乌菲齐文艺复兴的珍宝和阿诺河两岸的罗马式建筑，最大的诱惑...",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "谁再说欧洲人不吃内脏，牛肚包第一个跟你急",
//               "source": "editor:linucb_online",
//               "theme": null,
//               "id": "126312",
//               "card": {
//                 "name": "为你推荐"
//               }
//             },
//             {
//               "source_cn": "",
//               "layout": 1,
//               "target": {
//                 "read_count": 20050,
//                 "photos_count": 0,
//                 "author": {
//                   "avatar": "https://img3.doubanio.com/icon/u59185422-3.jpg",
//                   "name": "喵咪戴戒指"
//                 },
//                 "uri": "https://m.douban.com/note/609580295/",
//                 "more_pic_urls": [],
//                 "monitor_urls": [],
//                 "cover_url": "https://qnmob2.doubanio.com/view/note/large/public/p41064226.jpg ",
//                 "desc": "01 我是一个不入流的捉妖师。 这不能怨我，主要是，师父在我入门后不久，就在一次捉妖的过程中丢了性命...",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "不入流的捉妖师",
//               "source": "editor:linucb_online",
//               "theme": null,
//               "id": "127055",
//               "card": {
//                 "name": "为你推荐"
//               }
//             },
//             {
//               "source_cn": "",
//               "layout": 1,
//               "target": {
//                 "read_count": 36718,
//                 "photos_count": 0,
//                 "author": {
//                   "avatar": "https://img1.doubanio.com/icon/u2866002-289.jpg",
//                   "name": "ANSIKTET"
//                 },
//                 "uri": "https://m.douban.com/note/603504191/",
//                 "more_pic_urls": [],
//                 "monitor_urls": [],
//                 "cover_url": "https://qnmob2.doubanio.com/view/note/large/public/p40308640.jpg ",
//                 "desc": "这世界上的女导演并不少。 大部分的女导演其实并没有真正发挥出她们的优势，她们拍的片子，我觉得和男人...",
//                 "impression_url": "",
//                 "monitor_url": ""
//               },
//               "title": "那些风格鲜明的女导演们",
//               "source": "editor:linucb_online",
//               "theme": null,
//               "id": "125066",
//               "card": {
//                 "name": "为你推荐"
//               }
//             }
//           ]
//         })
//       })
//     },




//     clientLogLevel: 'warning',
//     historyApiFallback: {
//       rewrites: [
//         { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
//       ],
//     },
//     hot: true,
//     contentBase: false, // since we use CopyWebpackPlugin.
//     compress: true,
//     host: HOST || config.dev.host,
//     port: PORT || config.dev.port,
//     open: config.dev.autoOpenBrowser,
//     overlay: config.dev.errorOverlay
//       ? { warnings: false, errors: true }
//       : false,
//     publicPath: config.dev.assetsPublicPath,
//     proxy: config.dev.proxyTable,
//     quiet: true, // necessary for FriendlyErrorsPlugin
//     watchOptions: {
//       poll: config.dev.poll,
//     }
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': require('../config/dev.env')
//     }),
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
//     new webpack.NoEmitOnErrorsPlugin(),
//     // https://github.com/ampedandwired/html-webpack-plugin
//     new HtmlWebpackPlugin({
//       filename: 'index.html',
//       template: 'index.html',
//       inject: true
//     }),
//     // copy custom static assets
//     new CopyWebpackPlugin([
//       {
//         from: path.resolve(__dirname, '../static'),
//         to: config.dev.assetsSubDirectory,
//         ignore: ['.*']
//       }
//     ])
//   ]
// })

// module.exports = new Promise((resolve, reject) => {
//   portfinder.basePort = process.env.PORT || config.dev.port
//   portfinder.getPort((err, port) => {
//     if (err) {
//       reject(err)
//     } else {
//       // publish the new Port, necessary for e2e tests
//       process.env.PORT = port
//       // add port to devServer config
//       devWebpackConfig.devServer.port = port

//       // Add FriendlyErrorsPlugin
//       devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
//         compilationSuccessInfo: {
//           messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
//         },
//         onErrors: config.dev.notifyOnErrors
//         ? utils.createNotifierCallback()
//         : undefined
//       }))

//       resolve(devWebpackConfig)
//     }
//   })
// })
