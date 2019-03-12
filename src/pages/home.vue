<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar :sliding="false" large>
      <!--<f7-nav-left>-->
        <!--<f7-link icon-ios="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>-->
      <!--</f7-nav-left>-->
      <f7-nav-title sliding>Settings</f7-nav-title>
      <!--<f7-nav-right>-->
        <!--<f7-link icon-ios="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>-->
      <!--</f7-nav-right>-->
      <f7-nav-title-large sliding>{{$root.language.settings_page.settings_title}}</f7-nav-title-large>
    </f7-navbar>
    <!-- Toolbar-->
    <!--<f7-toolbar bottom>-->
      <!--<f7-link>Left Link</f7-link>-->
      <!--<f7-link>Right Link</f7-link>-->
    <!--</f7-toolbar>-->
    <!-- Page content-->
    <f7-list>
      <f7-list-item link="/about/">
        <f7-row width="100" no-gap style="width: 300px;">
          <f7-col width="20">
            <img src="../../assets-src/web-icon.png" style="height: 50px">
          </f7-col>
          <f7-col width="80">
            <f7-row width="100">
              <span style="font-weight:600; font-size: 20px;">{{$root.language.settings_page.icloud_name}}</span>
            </f7-row>
            <f7-row width="100">
              <span style="font-weight:500; font-size: 10px;">{{$root.language.settings_page.icloud_hint}}</span>
            </f7-row>
          </f7-col>
        </f7-row>
      </f7-list-item>
    </f7-list>

    <f7-list>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.airplane_mode">
        <img slot="media" src="../../assets-src/systemAppIcons/airplane_mode.png" style="height: 35px">
        <f7-toggle color="green"></f7-toggle>
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.wifi" link="/wifi/">
        <img slot="media" src="../../assets-src/systemAppIcons/wifi.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.Bluetooth" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/bluetooth.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.Cellular" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/cellular.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.personal_hotspot" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/personal_hotspot.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.vpn">
        <img slot="media" src="../../assets-src/systemAppIcons/vpn.png" style="height: 35px">
        <f7-toggle color="green"></f7-toggle>
      </f7-list-item>
    </f7-list>

    <f7-list>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.notifications" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/notifications.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.sounds_haptics" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/sounds.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.do_not_disturb" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/do_not_disturb.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.screen_time" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/screen_time.png" style="height: 35px">
      </f7-list-item>
    </f7-list>

    <f7-list>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.general" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/general.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.control_center" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/control_center.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.display_brightness" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/display_brightness.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.wallpaper" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/wallpaper.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.siri_search" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/siri_search.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.touch_id_passcode" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/touch_id_passcode.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.emergency_sos" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/emergency_sos.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.battery" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/battery.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.privacy" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/privacy.png" style="height: 35px">
      </f7-list-item>
    </f7-list>

    <f7-list>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.itunes_app_store" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/iTunes_app_store.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.wallet_apple_pay" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/wallet_apple_pay.png" style="height: 35px">
      </f7-list-item>
    </f7-list>

    <f7-list>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.password_accounts" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/passwords_accounts.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.mail" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/mail.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.contacts" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/contacts.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.calendar" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/calendar.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.notes" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/notes.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.reminders" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/reminders.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.voice_memos" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/voice_memos.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.phone" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/phone.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.messages" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/message.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.facetime" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/facetime.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.maps" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/maps.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.measure" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/measure.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.safari" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/safari.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.news" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/news.png" style="height: 35px">
      </f7-list-item>
    </f7-list>

    <f7-list>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.music" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/music.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.videos" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/videos.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.photos" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/photos.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.camera" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/camera.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.podcasts" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/podcasts.png" style="height: 35px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.game_center" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/game_center.png" style="height: 35px">
      </f7-list-item>
    </f7-list>

    <f7-list>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.developer" link="/about/">
        <img slot="media" src="../../assets-src/systemAppIcons/developer.png" style="height: 35px">
      </f7-list-item>
    </f7-list>

    <f7-list>
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item link="/form/" title="Form"></f7-list-item>
    </f7-list>

    <f7-block-title>Modals</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised popup-open="#my-popup">Popup</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised login-screen-open="#my-login-screen">Login Screen</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Panels</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised panel-open="left">Left Panel</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised panel-open="right">Right Panel</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-list>
      <f7-list-item
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      ></f7-list-item>
      <f7-list-item
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      ></f7-list-item>
      <f7-list-item
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      ></f7-list-item>
    </f7-list>

  </f7-page>
</template>