// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import underscore from 'vue-underscore'

Vue.config.productionTip = false
Vue.use(underscore)

Vue.prototype.$titleMessage = 'Message'

Vue.prototype.$dataBase = [
  {
    'id': '0',
    'name': 'Stella Wilson',
    'status': 'unread',
    'ttl': '3',
    'idmessage': '1',
    'foto': 'https://i.kinja-img.com/gawker-media/image/upload/s--Tg_qqR3r--/c_scale,f_auto,fl_progressive,q_80,w_800/dnmtn4ksijwyep0xmljk.jpg',
    'subject': [
      {
          'idsubject': '0',
          'subject': 'Life Advice Looking Through...',
          'body': 'Sony laptops are among the',
          'date': '12:00 AM',
          'ttl': '1',
          'message': [
            {
							'idmessage': '2',
							'name': 'Stella Wilson',
							'foto': 'https://i.kinja-img.com/gawker-media/image/upload/s--Tg_qqR3r--/c_scale,f_auto,fl_progressive,q_80,w_800/dnmtn4ksijwyep0xmljk.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'If you had thought \
									about the possibility of carrying around a virtually \
									unlimited supply of music ten years ago, it would \
									have seemed a bit futuristic, but it has all happened, \
									and now all we have to do when we get tired of our \
									present music collection is download free song for Ipod.'
						},
						{
							'idmessage': '3',
							'name': 'You (Bondan)',
							'date': '00:39 AM',
							'type': 'me',
							'body': 'Do you want to download free song for ipod? If so, \
									reading this article could save you from getting \
									in to a lot of trouble! Downloading music to your \
									Ipod has more than one pitfall associated with it, \
									and this article will tell you the best way to \
									download free song for Ipod. An Ipod can easily \
									become a vital part of your life.'
						}
          ]
      },
      {
          'idsubject': '1',
          'subject': 'Life Advice..',
          'body': 'Sony laptops are among the',
          'date': '12:00 AM',
          'ttl': '1',
          'message': [
            {
							'idmessage': '2',
							'name': 'Stella Wilson',
							'foto': 'https://i.kinja-img.com/gawker-media/image/upload/s--Tg_qqR3r--/c_scale,f_auto,fl_progressive,q_80,w_800/dnmtn4ksijwyep0xmljk.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'If you had thought \
									about the possibility of carrying around a virtually \
									unlimited supply of music ten years ago.'
						},
						{
							'idmessage': '3',
							'name': 'You (Bondan)',
							'date': '00:39 AM',
							'type': 'me',
							'body': 'Do you want to download free song for ipod? If so, \
									reading this article could save you from getting \
									in to a lot of trouble! Downloading music to your \
									Ipod has more than one pitfall associated with it'
						},
						{
							'idmessage': '3',
							'name': 'You (Bondan)',
							'date': '00:39 AM',
							'type': 'me',
							'body': 'and this article will tell you the best way to \
									download free song for Ipod. An Ipod can easily \
									become a vital part of your life.'
						},
          ]
      },
      {
          'idsubject': '2',
          'subject': 'Life Advice Through...',
          'body': 'Sony laptops are among the',
          'date': '12:00 AM',
          'ttl': '1',
          'message': [
            {
							'idmessage': '1',
							'name': 'Stella Wilson',
							'foto': 'https://i.kinja-img.com/gawker-media/image/upload/s--Tg_qqR3r--/c_scale,f_auto,fl_progressive,q_80,w_800/dnmtn4ksijwyep0xmljk.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'Do you want to download free song for ipod? If so, \
									reading this article could save you from getting \
									in to a lot of trouble! Downloading music to your \
									Ipod has more than one pitfall associated with it, \
									and this article will tell you the best way to \
									download free song for Ipod. An Ipod can easily \
									become a vital part of your life.'
						}
          ]
      }
    ],
  },
  {
    'id': '1',
    'name': 'Cameron Webster',
    'status': 'unread',
    'ttl': '1',
    'idmessage': '2',
    'foto': 'https://data.whicdn.com/images/202324958/large.jpg',
    'subject': [
      {
          'idsubject': '0',
          'subject': 'Life Advice Through...',
          'body': 'Sony laptops are among the',
          'date': '12:00 AM',
          'ttl': '2',
          'message': [
            {
							'idmessage': '1',
							'name': 'Cameron Webster',
							'foto': 'https://data.whicdn.com/images/202324958/large.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'Do you want to download free song for ipod? If so, \
									reading this article could save you from getting \
									in to a lot of trouble! Downloading music to your \
									Ipod has more than one pitfall associated with it, \
									and this article will tell you the best way to \
									download free song for Ipod. An Ipod can easily \
									become a vital part of your life.'
						},
						{
							'idmessage': '2',
							'name': 'Cameron Webster',
							'foto': 'https://data.whicdn.com/images/202324958/large.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'If you had thought \
									about the possibility of carrying around a virtually \
									unlimited supply of music ten years ago, it would \
									have seemed a bit futuristic, but it has all happened, \
									and now all we have to do when we get tired of our \
									present music collection is download free song for Ipod.'
						},
						{
							'idmessage': '3',
							'name': 'You (Bondan)',
							'date': '00:39 AM',
							'type': 'me',
							'body': 'Do you want to download free song for ipod? If so, \
									reading this article could save you from getting \
									in to a lot of trouble! Downloading music to your \
									Ipod has more than one pitfall associated with it'
						}
          ]
      },
      {
          'idsubject': '1',
          'subject': 'Life Advice Through...',
          'body': 'Sony laptops are among the',
          'date': '12:00 AM',
          'ttl': '1',
          'message': [
            {
							'idmessage': '4',
							'name': 'Cameron Webster',
							'foto': 'https://data.whicdn.com/images/202324958/large.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'If you had thought \
									about the possibility of carrying around a virtually \
									unlimited supply of music ten years ago, it would \
									have seemed a bit futuristic, but it has all happened, \
									and now all we have to do when we get tired of our \
									present music collection is download free song for Ipod.'
						}
          ]
      },
    ],
  },
  {
    'id': '2',
    'name': 'Liyod Horton',
    'status': 'unread',
    'ttl': '2',
    'idmessage': '3',
    'foto': 'https://www.hengeler.com/fileadmin/_processed_/4/5/csm_WirbelBernd_Port-013_a514a51d9f.jpg',
    'subject': [
      {
          'idsubject': '0',
          'subject': 'Life Advice Through...',
          'body': 'Sony laptops are among the',
          'date': '12:00 AM',
          'ttl': '1',
          'message': [
            {
							'idmessage': '1',
							'name': 'Liyod Horton',
							'foto': 'https://www.hengeler.com/fileadmin/_processed_/4/5/csm_WirbelBernd_Port-013_a514a51d9f.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'Do you want to download free song for ipod? If so, \
									reading this article could save you from getting \
									in to a lot of trouble! Downloading music to your \
									Ipod has more than one pitfall associated with it, \
									and this article will tell you the best way to \
									download free song for Ipod. An Ipod can easily \
									become a vital part of your life.'
						},
						{
							'idmessage': '2',
							'name': 'Liyod Horton',
							'foto': 'https://www.hengeler.com/fileadmin/_processed_/4/5/csm_WirbelBernd_Port-013_a514a51d9f.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'If you had thought \
									about the possibility of carrying around a virtually \
									unlimited supply of music ten years ago, it would \
									have seemed a bit futuristic, but it has all happened, \
									and now all we have to do when we get tired of our \
									present music collection is download free song for Ipod.'
						},
						{
							'idmessage': '3',
							'name': 'You (Bondan)',
							'date': '00:39 AM',
							'type': 'me',
							'body': 'Do you want to download free song for ipod? If so, \
									reading this article could save you from getting \
									in to a lot of trouble! Downloading music to your \
									Ipod has more than one pitfall associated with it'
						},
						{
							'idmessage': '4',
							'name': 'Liyod Horton',
							'foto': 'https://www.hengeler.com/fileadmin/_processed_/4/5/csm_WirbelBernd_Port-013_a514a51d9f.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'An Ipod can easily \
									become a vital part of your life.'
						},
						{
							'idmessage': '5',
							'name': 'You (Bondan)',
							'date': '00:39 AM',
							'type': 'me',
							'body': 'Ofcourse.'
						}
          ]
      },
    ],
  },
  {
    'id': '3',
    'name': 'Lois Webster',
    'status': 'unread',
    'ttl': '2',
    'idmessage': '4',
    'foto': 'https://www.hengeler.com/fileadmin/_processed_/f/c/csm_GardemannStella-2795_b489585686.jpg',
    'subject': [
      {
          'idsubject': '0',
          'subject': 'Life Advice Through...',
          'body': 'Sony laptops are among the',
          'date': '12:00 AM',
          'ttl': '1',
          'message': [
            {
							'idmessage': '1',
							'idsubject': '1',
							'name': 'Lois Webster',
							'foto': 'https://www.hengeler.com/fileadmin/_processed_/f/c/csm_GardemannStella-2795_b489585686.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'Do you want to download free song for ipod? If so, \
									reading this article could save you from getting \
									in to a lot of trouble! Downloading music to your \
									Ipod has more than one pitfall associated with it, \
									and this article will tell you the best way to \
									download free song for Ipod. An Ipod can easily \
									become a vital part of your life.'
						},
						{
							'idmessage': '2',
							'idsubject': '1',
							'name': 'Lois Webster',
							'foto': 'https://www.hengeler.com/fileadmin/_processed_/f/c/csm_GardemannStella-2795_b489585686.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'If you had thought \
									about the possibility of carrying around a virtually \
									unlimited supply of music ten years ago, it would \
									have seemed a bit futuristic, but it has all happened, \
									and now all we have to do when we get tired of our \
									present music collection is download free song for Ipod.'
						},
						{
							'idmessage': '3',
							'idsubject': '1',
							'name': 'You (Bondan)',
							'date': '00:39 AM',
							'type': 'me',
							'body': 'Do you want to download free song for ipod? If so, \
									reading this article could save you from getting \
									in to a lot of trouble! Downloading music to your \
									Ipod has more than one pitfall associated with it, \
									and this article will tell you the best way to \
									download free song for Ipod. An Ipod can easily \
									become a vital part of your life.'
						},
						{
							'idmessage': '4',
							'idsubject': '1',
							'name': 'Lois Webster',
							'foto': 'https://www.hengeler.com/fileadmin/_processed_/f/c/csm_GardemannStella-2795_b489585686.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'An Ipod can easily \
									become a vital part of your life.'
						},
						{
							'idmessage': '5',
							'idsubject': '1',
							'name': 'You (Bondan)',
							'date': '00:39 AM',
							'type': 'me',
							'body': 'Ofcourse.'
						},
						{
							'idmessage': '6',
							'idsubject': '1',
							'name': 'You (Bondan)',
							'date': '00:39 AM',
							'type': 'me',
							'body': 'Do you want to download free song for ipod? If so, \
									reading this article could save you from getting \
									in to a lot of trouble! Downloading music to your \
									Ipod has more than one pitfall associated with it, \
									and this article will tell you the best way to \
									download free song for Ipod. An Ipod can easily \
									become a vital part of your life.'
						},
          ]
      },
    ],
  }
]

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
