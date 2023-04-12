import { addIcon, Icon } from '@iconify/vue/offline'
import UilSun from '@iconify-icons/uil/sun'
import UilMoon from '@iconify-icons/uil/moon'
import UilEnvelop from '@iconify-icons/uil/envelope'
import UilMobileAndroid from '@iconify-icons/uil/mobile-android'
import UilMap from '@iconify-icons/uil/map'
import UilLinkedin from '@iconify-icons/uil/linkedin'
import UilGithub from '@iconify-icons/uil/github'
import UilFileDownload from '@iconify-icons/uil/file-download'
import UilBuilding from '@iconify-icons/uil/building'
import Html5 from '@iconify-icons/logos/html-5'
import Css from '@iconify-icons/logos/css-3'
import Vue from '@iconify-icons/logos/vue'
import Js from '@iconify-icons/logos/javascript'
import Ts from '@iconify-icons/logos/typescript-icon'
import Node from '@iconify-icons/logos/nodejs-icon'
import Laravel from '@iconify-icons/logos/laravel'
import MySql from '@iconify-icons/logos/mysql-icon'
import Mongo from '@iconify-icons/logos/mongodb-icon'
import Docker from '@iconify-icons/logos/docker-icon'
import Git from '@iconify-icons/logos/git-icon'
import Tailwind from '@iconify-icons/logos/tailwindcss-icon'
import Nuxt from '@iconify-icons/logos/nuxt-icon'
import Webpack from '@iconify-icons/logos/webpack'
import Vite from '@iconify-icons/logos/vitejs'
import Aws from '@iconify-icons/logos/aws'
import Bulma from '@iconify-icons/logos/bulma'
import Bootstrap from '@iconify-icons/logos/bootstrap'
import Sass from '@iconify-icons/logos/sass'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.component('AppIcon', Icon)

  addIcon('sun', UilSun)
  addIcon('moon', UilMoon)
  addIcon('envelope-alt', UilEnvelop)
  addIcon('mobile-android', UilMobileAndroid)
  addIcon('map', UilMap)
  addIcon('linkedin', UilLinkedin)
  addIcon('github', UilGithub)
  addIcon('file-download', UilFileDownload)
  addIcon('building', UilBuilding)
  addIcon('javascript', Js)
  addIcon('typescript', Ts)
  addIcon('html5', Html5)
  addIcon('vue', Vue)
  addIcon('css3', Css)
  addIcon('node', Node)
  addIcon('laravel', Laravel)
  addIcon('mongo', Mongo)
  addIcon('mysql', MySql)
  addIcon('docker', Docker)
  addIcon('git', Git)
  addIcon('tailwind', Tailwind)
  addIcon('nuxt', Nuxt)
  addIcon('webpack', Webpack)
  addIcon('vite', Vite)
  addIcon('bulma', Bulma)
  addIcon('bootstrap', Bootstrap)
  addIcon('aws', Aws)
  addIcon('sass', Sass)
})
