<template>
  <div class="card-inner animated">
    <div class="card-wrap">
      <div class="content about">
        <div class="title">{{title}}</div>
        <div class="row">
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="text-box">
              <p v-html="$store.params.description[$store.params.lang]">                
              </p>
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
    }
  }
</script>
