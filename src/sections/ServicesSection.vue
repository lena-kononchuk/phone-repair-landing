<template>
  <section class="py-16 lg:py-24 relative" id="services">
    <div class="container mx-auto px-4">
      <!-- Title -->
      <h2 class="text-3xl md:text-4xl xl:text-5xl text-center font-extrabold text-secondary leading-tight mb-4">
        НАШІ ПОСЛУГИ
      </h2>
      <div class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Професійний ремонт та обслуговування вашої техніки
      </div>

      <!-- Filter Tabs - Using useFilter composable -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="category in serviceCategories"
          :key="category.id"
          @click="setCategory(category.id)"
          :class="[
            'px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer',
            activeCategory === category.id
              ? 'bg-[#FF6B00] text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          ]"
        >
          {{ category.name }}
        </button>
      </div>

      <!-- Services Grid - v-for with filtered data from composable -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="service in filteredItems"
          :key="service.id"
          class="bg-white rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 group cursor-pointer "
        >
          <div class="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-4 mx-auto">
            <i :class="['text-[#FF6B00] text-2xl', service.icon]"></i>
          </div>
          <h3 class="text-lg font-bold text-secondary mb-2 text-center">
            {{ service.title }}
          </h3>
          <div class="text-gray-600 text-sm mb-4 text-center leading-relaxed">
            {{ service.description }}
          </div>
          <div class="text-[#FF6B00] font-bold text-center">
            {{ service.price }}
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredItems.length === 0" class="text-center py-12">
        <div class="text-gray-500 text-lg">Послуги не знайдено</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { services, serviceCategories } from '@/data/services'
import { useFilter } from '@/composables/useFilter'

// Using reusable filter composable - demonstrates proper composable usage
const { activeCategory, filteredItems, setCategory } = useFilter(services, 'all')
</script>
