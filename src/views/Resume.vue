<template>
  <div class="card-inner animated">
    <div class="card-wrap">
      <div class="content resume">
        <div class="title">{{title}}</div>
        <div class="row">
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v" v-for="(s,i) in $store.params.services" :key="i">
            <hr  class="my-4">
            <div class="resume-items">
              <div class="resume-item border-line-h">
                <div class="name">{{s.titre[$store.params.lang]}}</div>
                <p>
                  {{s.description[$store.params.lang]}}
                </p>
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
    }
  }
</script>
