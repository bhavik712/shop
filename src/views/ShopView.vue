<template>
  <app-header></app-header>
   <main>
      <app-banner></app-banner>
      <filter-section></filter-section>
      <shop-items></shop-items>
      <page-buttons></page-buttons>
      <features-section></features-section>
  </main>
  <app-footer></app-footer>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppBanner from '../components/AppBanner.vue';
import FilterSection from '../components/FitersSection.vue';
import ShopItems from '../components/ShopItems.vue';
import PageButtons from '../components/PageButtons.vue';
import FeaturesSection from '../components/FeaturesSection.vue';
import AppFooter from '../components/AppFooter.vue';
</script>


