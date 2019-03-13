<template>
  <f7-page name="wifi">
    <f7-navbar v-bind:title="this.$root.language.wifi_page.title" back-link="Back"></f7-navbar>
    <f7-list>
      <f7-list-item v-bind:title="this.$root.language.wifi_page.sub_title">
        <f7-icon slot="media" icon="demo-list-icon"></f7-icon>
        <f7-toggle color="green"></f7-toggle>
      </f7-list-item>
    </f7-list>
    <f7-block-footer>
      <p>{{$root.language.wifi_page.wifi_hint}}</p>
    </f7-block-footer>

    <f7-block-title>{{$root.language.wifi_page.choose_a_network}}</f7-block-title>
    <f7-list>
      <f7-list-item v-for="item in wifiList" v-bind:title="item.ssid">
        <f7-icon slot="media" icon="demo-list-icon"></f7-icon>
        <span no-gap>
          <img src="../../assets-src/icon/locke.png" style="height: 30px" v-if="isLocked(item)">

          <img src="../../assets-src/icon/hotspot.png" style="height: 30px" v-if="item.type === 'hotspot'">
          <img src="../../assets-src/icon/wifi.png" style="height: 30px" v-else-if="item.type === 'normal' && item.signalStrength === 3">
          <img src="../../assets-src/icon/mid-wifi.png" style="height: 30px" v-else-if="item.type === 'normal'">

          <img src="../../assets-src/icon/info.png" style="height: 30px">
        </span>
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.wifi_page.other">
        <f7-icon slot="media" icon="demo-list-icon"></f7-icon>
      </f7-list-item>
    </f7-list>

    <f7-list>
      <f7-list-item v-bind:title="this.$root.language.wifi_page.ask_to_join_network">
        <f7-icon slot="media" icon="demo-list-icon"></f7-icon>
        <f7-toggle color="green"></f7-toggle>
      </f7-list-item>
    </f7-list>
    <f7-block-footer>
      <p>{{$root.language.wifi_page.hint}}</p>
    </f7-block-footer>
    <f7-block-title></f7-block-title>

  </f7-page>
</template>

<script>

  export default {
    name: 'wifi',
    components: {

    },
    data(){
      return {
        wifiList: [
          {
            ssid: 'China-Net',
            password: '12345678',
            type: 'normal',
            signalStrength: 3
          },
          {
            ssid: 'MyiPhone',
            password: '12345678',
            type: 'hotspot',
            signalStrength: 3
          },
          {
            ssid: 'KFC',
            password: '',
            type: 'normal',
            signalStrength: 2
          },
        ]
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      isLocked(item){
        return !(item.password === null || item.password === '');
      },
      getWiFiTypeImg(item){
        if(item.type === 'hotspot'){
          return "../../assets-src/icon/hotspot.png";
        }else{
          if(item.signalStrength === 3){
            return "../../assets-src/icon/wifi.png";
          }else{
            return "../../assets-src/icon/mid-wifi.png";
          }
        }
      }
    },
    computed: {

    }
  }
</script>
