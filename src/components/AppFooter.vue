<template>
  <footer class="bg-secondary  py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

        <!-- Column 1: Logo -->
        <div>
          <div class="flex items-center space-x-3">

            <div>
              <div class="font-bold text-2xl text-white">Logo</div>
            </div>
          </div>
          <p class="text-gray-medium text-sm mt-4">
            Професійний ремонт мобільних телефонів та гаджетів
          </p>
        </div>

        <!-- Column 2: Contacts & Location (3 items stacked) -->
        <div class="space-y-4">
          <!-- Contact 1 -->
          <a
            href="tel:0698277338"
            class="flex items-center space-x-3 hover:text-primary transition-colors group"
          >
            <div class="w-10 h-10 bg-gray-dark group-hover:bg-primary rounded-lg flex items-center justify-center transition-all">
              <span class="text-xl"></span>
            </div>
            <div>
              <p class="font-semibold">069 82 77 38</p>
              <p class="text-xs text-gray-medium">Пн-Пт: 9:00 - 20:00</p>
            </div>
          </a>

          <!-- Contact 2 -->
          <a
            href="tel:0799277338"
            class="flex items-center space-x-3 hover:text-primary transition-colors group"
          >
            <div class="w-10 h-10 bg-gray-dark group-hover:bg-primary rounded-lg flex items-center justify-center transition-all">
              <span class="text-xl"></span>
            </div>
            <div>
              <p class="font-semibold">079 92 77 38</p>
              <p class="text-xs text-gray-medium">Сб-Нд: 10:00 - 18:00</p>
            </div>
          </a>

          <!-- Location -->
          <div class="flex items-start space-x-3">
            <div class="w-10 h-10 bg-gray-dark rounded-lg flex items-center justify-center flex-shrink-0">
              <span class="text-xl"></span>
            </div>
            <div>
              <p class="font-semibold">м. Київ</p>
              <p class="text-sm text-gray-medium">вул. Хрещатик, 22</p>
            </div>
          </div>
        </div>

        <!-- Column 3: Rating & Social Media -->
        <div class="space-y-6">
          <!-- Rating -->
          <div>
            <div class="flex items-center space-x-2 mb-2">
              <div class="flex space-x-1">
                <span class="text-yellow-400 text-xl">⭐</span>
                <span class="text-yellow-400 text-xl">⭐</span>
                <span class="text-yellow-400 text-xl">⭐</span>
                <span class="text-yellow-400 text-xl">⭐</span>
                <span class="text-yellow-400 text-xl">⭐</span>
              </div>
              <span class="font-bold text-lg">5.0</span>
            </div>
            <p class="text-sm text-gray-medium">
              Понад 500+ відгуків на Google
            </p>
          </div>

          <!-- Social Media -->
          <div>
            <h4 class="text-sm font-semibold mb-3 text-gray-light ">Ми в соціальних мережах:</h4>
            <div class="flex space-x-3 text-yellow">
              <a
                href="#"
                class="w-12 h-12 bg-gray-dark hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <span class="text-2xl"></span>
              </a>
              <a
                href="#"
                class="w-12 h-12 bg-gray-dark hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <span class="text-2xl"></span>
              </a>
              <a
                href="#"
                class="w-12 h-12 bg-gray-dark hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Telegram"
              >
                <span class="text-2xl"></span>
              </a>
              <a
                href="viber://chat?number=%2B0698277338"
                class="w-12 h-12 bg-gray-dark hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Viber"
              >
                <span class="text-2xl"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>

</style>
