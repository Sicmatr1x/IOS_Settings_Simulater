<template>
  <f7-page name="wifi">
    <f7-navbar v-bind:title="this.$root.language.wifi_page.title" back-link="Back"></f7-navbar>
    <f7-list>
      <f7-list-item v-bind:title="this.$root.language.wifi_page.sub_title">
        <f7-icon slot="media" icon="demo-list-icon"></f7-icon>
        <f7-toggle color="green"></f7-toggle>
      </f7-list-item>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.airplane_mode">
        <f7-icon slot="media" icon="demo-list-icon"></f7-icon>
        <span>
          <i class="f7-icons">lock</i>
          <i class="f7-icons">logo_rss</i>
          <i class="f7-icons color-blue">info_round</i>
        </span>
      </f7-list-item>
    </f7-list>

    <f7-block-title>{{$root.language.wifi_page.choose_a_network}}</f7-block-title>
    <f7-list>
      <f7-list-item v-bind:title="this.$root.language.settings_page.basic_setting_block.airplane_mode">
        <f7-icon slot="media" icon="demo-list-icon"></f7-icon>
        <span>
          <i class="f7-icons">lock</i>
          <i class="f7-icons">logo_rss</i>
          <i class="f7-icons color-blue">info_round</i>
        </span>
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
