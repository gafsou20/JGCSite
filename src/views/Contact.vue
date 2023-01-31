<template>
  <div class="card-inner animated">
    <div class="card-wrap">
      <div class="content contacts">
        <div class="title">{{title}}</div>
        <div class="row">
          <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
            <!--div class="map" id="map"></div-->
            <div class="info-list">
              <ul>
                <li><strong>{{$store.app.getWords('adresse')}} . . . . .</strong> {{$store.params.adresse.ville}}, {{$store.params.adresse.pays}}</li>
                <li><strong>{{$store.app.getWords('email')}} . . . . .</strong> {{$store.params.contact.email}}</li>
                <li><strong>{{$store.app.getWords('telephone')}} . . . . .</strong>{{$store.params.contact.phone}}</li>
              </ul>
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
      <div class="content contacts">
        <div class="title">{{$store.app.getWords('form_contact')}}</div>
        <div class="row">
          <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div class="contact_form">
              <form id="cform" method="post">
                <div class="row">
                  <div class="col col-d-6 col-t-6 col-m-12">
                    <div class="group-val">
                      <input type="text" name="name" v-model="lead.nom" :placeholder="$store.app.getWords('nom_complet')" />
                    </div>
                  </div>
                  <div class="col col-d-6 col-t-6 col-m-12">
                    <div class="group-val">
                      <input type="text" name="email" v-model="lead.telephone" :placeholder="$store.app.getWords('telephone')" />
                    </div>
                  </div>
                  <div class="col col-d-6 col-t-6 col-m-12">
                    <div class="group-val">
                      <input type="text" name="email" v-model="lead.email" :placeholder="$store.app.getWords('votre_email')" />
                    </div>
                  </div>
                  <div class="col col-d-12 col-t-12 col-m-12">
                    <div class="group-val">
                      <textarea name="message" v-model="lead.msg" :placeholder="$store.app.getWords('votre_message')"></textarea>
                    </div>
                  </div>
                </div>
                <div class="align-left">
                  <a class="button" @click="send()" v-if="sended === false">
                    <span class="text">{{$store.app.getWords('form_contact_send')}}</span>
                    <span class="arrow"></span>
                  </a>
                  <a class="button" v-else>
                    <span class="text" v-html="$store.app.getWords('merci_lead')"></span>
                  </a>
                </div>
              </form>
              <div class="alert-success">
                <p>Thanks, your message is sent successfully.</p>
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
        lead:{
          "site":location.href,
          "nom":null,
          "email":null,
          "telephone":null,
          "msg":null
        },
        title: this.$store.app.getTitlePage("contact"),
        sended:false
      }
    },
    methods: {
      send() {
        this.$store.app.ajax('/message/send', this.lead, (res) => {
          if(res.status === true){
            this.sended = true;
          }
        })
      }
    }
  }
</script>
