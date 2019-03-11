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
        <img slot="media" src="../../assets-src/web-icon.png" style="height: 15px">
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.wifi">
        <f7-icon slot="media" icon="settings"></f7-icon>
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.Bluetooth">
        <f7-icon slot="media" icon="settings_fill"></f7-icon>
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.Cellular">
        <f7-icon slot="media" icon="icon-home"></f7-icon>
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.personal_hotspot">
        <f7-icon slot="media" icon="settings"></f7-icon>
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.vpn">
        <f7-icon slot="media" icon="settings"></f7-icon>
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