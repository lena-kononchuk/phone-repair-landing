<template>
  <div class="pb-12">
    <swiper
      :slides-per-view="slidesPerView"
      :space-between="spaceBetween"
      :centered-slides="centeredSlides"
      :breakpoints="breakpoints"
      :pagination="{ clickable: true, dynamicBullets: false }"
      :navigation="navigation"
      :modules="modules"
      class="!pb-12"
    >
      <!-- Slot for custom slides -->
      <slot></slot>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

/**
 * Reusable Swiper wrapper component
 * Accepts custom breakpoints and swiper configuration via props
 */
const props = defineProps({
  slidesPerView: {
    type: Number,
    default: 1.2
  },
  spaceBetween: {
    type: Number,
    default: 16
  },
  centeredSlides: {
    type: Boolean,
    default: true
  },
  navigation: {
    type: [Boolean, Object],
    default: false
  },
  breakpoints: {
    type: Object,
    default: () => ({
      640: { slidesPerView: 1.2, spaceBetween: 20, centeredSlides: false },
      768: { slidesPerView: 2, spaceBetween: 24, centeredSlides: false },
      1024: { slidesPerView: 3, spaceBetween: 30, centeredSlides: false },
      1280: { slidesPerView: 4, spaceBetween: 30, centeredSlides: false }
    })
  }
})

const modules = [Pagination, Navigation]
</script>

<style>
/* Disabled state for navigation buttons */
.swiper-button-disabled {
  opacity: 0.35;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
