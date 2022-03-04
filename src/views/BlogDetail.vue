<template>
  <div class="card-inner blog animated">
    <div class="card-wrap">
      <div class="content blog">
        <div class="title">
          <span>{{title}}</span>
        </div>
        <div class="row">
          <div class="col col-m-12">
            <div class="box-item">
              <div class="image">
                <a href="javascript: void(0)">
                  <img :src="detail.img" alt="By spite about do of allow" class="blog-image" style="max-width:100% !important; max-height:75%"/>
                </a>
              </div>
              <div class="desc">
                <a href="blog-post-new.html">
                  <span class="date">{{$store.app.timeStampToDate(detail.date_create)}}</span>
                </a>
                <a href="blog-post-new.html" class="name">{{detail.titre}}</a>
                <div class="text">
                  <p>{{detail.description}}</p>
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
        detail: {
          date_create: null,
          titre:null,
          description:null,
          img:null,
        }
      }
    },
    beforeMount() {
      //do something before mounting vue instance
      var detail = this.$store.params.blogs[this.$route.params.id-1];
      if(detail === undefined){
        return false;
      }
      var tmp = JSON.parse(JSON.stringify(detail));
      var selected = {
        date_create: tmp.date_create,
        titre: tmp.titre[this.$store.params.lang],
        description: tmp.description[this.$store.params.lang],
        img: tmp.img,
      };
      this.detail = selected;
    }
  }
</script>
