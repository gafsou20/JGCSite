<template>
  <div class="card-inner animated">
    <div class="card-wrap">
      <div class="content works">
        <div class="title">{{title}}</div>
        <div class="filter-menu filter-button-group">
          <div class="f_btn" :class="filter === null ? 'active' : ''" @click="filter = null">
            <label>Tout</label>
          </div>
          <div class="f_btn" v-for="(c,i) in $store.params.galery_categorys" :class="filter == c ? 'active' : ''" @click="filter = c" :key="i">
            <label>{{getCategory(c)}}</label>
          </div>
        </div>
        <div class="row grid-items border-line-v">
          <div class="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h" v-for="(img,i) in dataFilter" :key="i">
            <div class="box-item">
              <div class="image">
                <a :href="img.url" class="has-popup-image">
                  <img :src="img.url" alt="" />
                  <span class="info">
                    <span class="ion ion-image"></span>
                  </span>
                </a>
              </div>
              <div class="desc">
                <a :href="img.url" class="name has-popup-image">{{img.title}}</a>
                <div class="category">Image</div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      filter:null,
      title: this.$store.app.getTitlePage()
    }
  },
  computed:{
    dataFilter(){
      if(this.filter === null){
        return this.$store.params.galery;
      }else{
        return this.$store.params.galery.filter(g => g.category === this.filter);
      }
    }
  },
  mounted() {
  },
  watch:{
  },
  beforeMount() {
  },
  methods: {
    getCategory(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
};
</script>
