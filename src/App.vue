<template>
  <div>
    <div :class="loader === true ? 'preloader' : ''" id="preloader">
      <div class="centrize full-width">
        <div class="vertical-center">
          <div class="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="page new-skin" v-if="loader === false">
      <div class="background gradient">
        <ul class="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="container opened" data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">
        <header class="header">
          <div class="profile">
            <div class="title">{{$store.params.name}}</div>
            <div class="subtitle subtitle-typed">
              <div class="typing-title">
                <p>
                  <vue-typer
                  :text=services()
                  :repeat='Infinity'
                  :shuffle='false'
                  initial-action='typing'
                  :pre-type-delay='70'
                  :type-delay='70'
                  :pre-erase-delay='1000'
                  :erase-delay='70'
                  erase-style='backspace'
                  :erase-on-complete='false'
                  caret-animation='blink'
                  ></vue-typer>
                </p>
              </div>
            </div>
          </div>
          <div class="top-menu">
            <ul>
              <router-link :to="'/'+elt.action" v-slot="{ href, navigate, isActive, isExactActive }" v-for="(elt,i) in $store.params.menu" :key="i">
                <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item" :class="[ isActive && 'active', isExactActive && 'active' ]">
                  <a :href="href" class="menu-link" @click="navigate"> <i class="icon" :class="elt.icon"></i>  <span class="link">{{elt.titre[$store.params.lang]}}</span>
                  </a>
                </li>
              </router-link>
            </ul>
          </div>
          <div class="top-menu langues-select">
            <ul>
              <li class="menu-item" v-for="(l,i) in $store.params.langues" :key="i">
                <a class="menu-link" @click="changeLang(l.code)"><country-flag :country='l.flag' size='normal'/>
                </a>
              </li>
            </ul>
          </div>
        </header>
        <div class="card-started" id="home-card">
          <div class="profile no-photo">
            <div class="slide" :style="BgImg" style="background-size: contain;background-color:var(--theme-color-primary)"></div>
            <div class="title">{{$store.params.name}}</div>
            <div class="subtitle subtitle-typed">
              <div class="typing-title">
                <p>
                  <vue-typer
                  :text=services()
                  :repeat='Infinity'
                  :shuffle='false'
                  initial-action='typing'
                  :pre-type-delay='70'
                  :type-delay='70'
                  :pre-erase-delay='1000'
                  :erase-delay='70'
                  erase-style='backspace'
                  :erase-on-complete='false'
                  caret-animation='blink'
                  ></vue-typer>
                </p>
              </div>
            </div>
            <div class="social">
              <a target="_blank" :href="$store.params.contact.instagram">
                <span class="fa fa-instagram"></span>
              </a>
              <a target="_blank" v-if="$store.params.contact.facebook != null" :href="$store.params.contact.facebook"><i class="icon media-icon ion-social-facebook"></i></a>
              <a target="_blank" v-if="$store.params.contact.whatsapp != null" :href="$store.params.contact.whatsapp"><i class="icon media-icon ion-social-whatsapp"></i></a>
              <a target="_blank" v-if="$store.params.contact.facebook != null" :href="map"><i class="icon media-icon ion-map"></i></a>
              <a v-if="$store.params.contact.email != null" :href="'mailto:'+$store.params.contact.email"><i class="icon media-icon ion-email"></i></a>
              <a v-if="$store.params.contact.phone != null" :href="'tel:'+$store.params.contact.phone"><i class="icon media-icon ion-ios-telephone"></i></a>
            </div>
          </div>
        </div>
        <vue-page-transition name="fade-in-left">
          <router-view />
        </vue-page-transition>
      </div>
    </div>
  </div>
</template>

<script>
import CountryFlag from 'vue-country-flag'
import Params from '@/components/Params.json';
export default {
  components: {
    CountryFlag
  },
  data(){
    return {
      loader:true,
      urlAPI: "https://api.main.jg.app",
      key:"pT78JwZjkLjP338",
      params:{}

    };
  },
  computed:{
    BgImg() {
      return {
        backgroundImage: `url(${require('./assets/img/logo.png')})`
      };
    },
    map(){
      var adresse = `${this.$store.params.adresse.rue} ${this.$store.params.adresse.ville} ${this.$store.params.adresse.cp} ${this.$store.params.adresse.pays}`
      return `https://www.google.com/maps/place/${adresse.replaceAll(" ","+")}`
    }
  },
  mounted() {
    this.$store.app = this;
  },
  watch:{
    $route(){
      if(this.$route.path === '/about'){
        return false;
      }
      setTimeout(() => {
        var card = document.getElementsByClassName('card-inner animated')[0]
        window.scrollTo(0,card.offsetTop-130);
      },500)
    }
  },
  beforeMount() {
    var the
    this.params = Params;
    this.params.galery_categorys = [];
    this.params.galery.forEach((item) => {
      if(this.params.galery_categorys.includes(item.category) === false){
        this.params.galery_categorys.push(item.category);
      }
    });
    this.$store.params = this.params;
    this.$store.params.lang = "fr"
    this.setThemeColors(this.$store.params.colors);
    setTimeout(() => {
      this.loader = false;
    },250)
  },
  methods: {
    setThemeColors(colors) {
      let style = document.documentElement.style;
      for (let key of Object.keys(colors)) {
        style.setProperty("--theme-color-" + key, colors[key]);
      }
    },
    changeLang(code){
      this.$store.params.lang = code;
      this.loader = true;
      setTimeout(() => {
        this.loader = false;
      },500);
    },
    services(){
      var res = [];
      this.$store.params.services.forEach((item) => {
        var txt = item.titre[this.$store.params.lang];
        res.push(txt);
      });
      return res;
    },
    getTitlePage(){
      var path = this.$route.path.replace('/','');
      var menu = this.$store.params.menu.find(m => m.action === path);
      return menu.titre[this.$store.params.lang];
    },
    getWords(key){
      var word = this.$store.params.words[key][this.$store.params.lang];
      if(word === undefined){
        return '';
      }else{
        return word;
      }
    },
    timeStampToDate(timestamp){
      var date = new Date(timestamp*1000);
      var day = date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
      var month = date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1;
      console.log(`${day}/${month}/${date.getFullYear()}`);
      return `${day}/${month}/${date.getFullYear()}`;
    },
    ajax(route, params = null, callBack) {
      const url = route.search('http') === 0 ? route : this.urlAPI + route;
      let option = {};
      option.headers = {
        "Content-Type":"application/json"
      }
      if(params != null){
        option.method = "POST",
        option.body = JSON.stringify(params)
      }
      fetch(url,option).then( response => {
        response.json().then( data => {
          if(callBack != null) {
            callBack(data);
          }
        })
      });
    },
  }
  //https://www.npmjs.com/package/vue-country-flag
};
</script>
<style>
@import "assets/css/main.css";
</style>
