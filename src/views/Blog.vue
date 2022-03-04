<template>
  <div class="card-inner blog animated">
    <div class="card-wrap">
      <div class="content blog">
        <div class="title">
          <span>{{title}}</span>
        </div>
        <div class="row border-line-v">
          <div class="col col-d-6 col-t-6 col-m-12" v-for="(blog,i) in $store.params.blogs" :key="i">
            <div class="box-item">
              <div class="image">
                <a :href="'/#/blog/detail/'+(i+1)">
                  <img :src="blog.img" alt="By spite about do of allow" class="blog-image" />
                  <span class="info">
                    <span class="ion ion-document-text"></span>
                  </span>
                </a>
              </div>
              <div class="desc">
                <a href="blog-post-new.html">
                  <span class="date">{{$store.app.timeStampToDate(blog.date_create)}}</span>
                </a>
                <a href="blog-post-new.html" class="name">{{blog.titre[$store.params.lang]}}</a>
                <div class="text">
                  <p>{{shortDesc(blog.description[$store.params.lang])}}</p>
                </div>
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
        title: this.$store.app.getTitlePage()
      }
    },
    methods: {
      shortDesc(desc) {
        return desc.slice(0,125)+'...';
      }
    }
  }
</script>
