<template>
  <header id="headTop">
    <slot name="logo"></slot>
    <slot name="search"></slot>
    <section class="headGoback" v-if="goBack" @click="$router.go(-1)">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2" />
      </svg>
    </section>
    <router-link :to="userInfo ? '/profile':'/login'" v-if="signinUp" class="headLogin">
      <svg class="userAvatar" v-if="userInfo">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user" />
      </svg>
      <span class="loginSpan" v-else>登录|注册</span>
    </router-link>
    <section class="titleHead ellipsis" v-if="headTitle">
      <span class="titleText">{{headTitle}}</span>
    </section>
    <slot name="edit"></slot>
    <slot name="msite-title"></slot>
    <slot name="changecity"></slot>
    <slot name="changeLogin"></slot>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      guessCity: '', // 当前城市
      guessCityid: '', // 当前城市id
      hotCity: [], // 热门城市列表
      groupCity: {} // 所有城市列表
    }
  },
  mounted() {
    // 获取用户信息
    this.getUserInfo()
  },
  props: ['signinUp', 'headTitle', 'goBack'],
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapActions(['getUserInfo'])
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/head.scss';
</style>
