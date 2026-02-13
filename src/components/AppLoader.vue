<template>
  <Transition
    enter-active-class="transition-opacity duration-500 ease"
    leave-active-class="transition-opacity duration-500 ease"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div v-if="isLoading" class="fixed inset-0 z-[9999] flex items-center justify-center"
         :style="{ background: 'linear-gradient(135deg, #EBF3F8 0%, #ffffff 100%)' }">

      <div class="text-center">

        <svg class="animate-spin h-14 w-14 mx-auto mb-4" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#E31E24" />
              <stop offset="50%" stop-color="#FF4444" />
              <stop offset="100%" stop-color="#B3151A" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="10" fill="none" stroke="#E31E24" stroke-width="4" stroke-opacity="0.2" />
          <path fill="url(#redGradient)" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>

        <!-- Text -->
        <div class="text-secondary font-medium animate-pulse">
          Завантаження...
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
})
</script>
