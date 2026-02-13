<template>
  <section
    ref="sectionRef"
    class="py-10 lg:py-16 relative"
    id="services"
  >
    <!-- Skeleton loader before content loads -->
    <div v-if="!isVisible" class="container mx-auto px-4">
      <div class="h-16 bg-gray-200 rounded-lg animate-pulse mb-12 max-w-md mx-auto"></div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="i in 8" :key="i" class="h-64 bg-gray-200 rounded-2xl animate-pulse"></div>
      </div>
    </div>

    <!-- Actual content -->
    <div v-else class="container mx-auto px-4">
      <!-- Title -->
      <h2 class="text-3xl md:text-4xl xl:text-5xl text-center font-extrabold text-secondary leading-tight mb-4">
        НАШІ ПОСЛУГИ
      </h2>
      <div class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Професійний ремонт та обслуговування вашої техніки
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="category in serviceCategories"
          :key="category.id"
          @click="activeCategory = category.id"
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

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="service in filteredServices"
          :key="service.id"
          class="bg-white rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 group cursor-pointer shadow-md hover:shadow-xl"
        >
          <div class="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-4 mx-auto
                      group-hover:bg-[#FF6B00] transition-colors duration-300">
            <i :class="['text-2xl transition-colors duration-300', service.icon,
                        'text-[#FF6B00] group-hover:text-white']"></i>
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
      <div v-if="filteredServices.length === 0" class="text-center py-12">
        <div class="text-gray-500 text-lg">Послуги не знайдено</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLazyLoad } from '@/composables/useLazyLoad'

// Lazy load this section
const { sectionRef, isVisible } = useLazyLoad(0.1, '200px')

// Active category state
const activeCategory = ref('all')

// Categories for filtering
const serviceCategories = [
  { id: 'all', name: 'Всі послуги' },
  { id: 'phone', name: 'Телефони' },
  { id: 'laptop', name: 'Ноутбуки' },
  { id: 'other', name: 'Інше' }
]

// Services data - inline for simplicity
const services = [
  {
    id: 1,
    title: 'Заміна екрану',
    description: 'Професійна заміна розбитого або пошкодженого екрану',
    icon: 'fa-solid fa-mobile-screen-button',
    category: 'phone',
    price: 'від 1500 грн'
  },
  {
    id: 2,
    title: 'Заміна батареї',
    description: 'Швидка заміна батареї з гарантією якості',
    icon: 'fa-solid fa-battery-full',
    category: 'phone',
    price: 'від 800 грн'
  },
  {
    id: 3,
    title: 'Ремонт материнської плати',
    description: 'Діагностика та ремонт складних поломок',
    icon: 'fa-solid fa-microchip',
    category: 'phone',
    price: 'від 2000 грн'
  },
  {
    id: 4,
    title: 'Чистка від пилу',
    description: 'Професійна чистка ноутбука від пилу',
    icon: 'fa-solid fa-wind',
    category: 'laptop',
    price: 'від 500 грн'
  },
  {
    id: 5,
    title: 'Заміна клавіатури',
    description: 'Заміна пошкодженої або несправної клавіатури',
    icon: 'fa-solid fa-keyboard',
    category: 'laptop',
    price: 'від 1200 грн'
  },
  {
    id: 6,
    title: 'Оновлення SSD',
    description: 'Встановлення нового SSD та перенесення даних',
    icon: 'fa-solid fa-hard-drive',
    category: 'laptop',
    price: 'від 1000 грн'
  },
  {
    id: 7,
    title: 'Ремонт годинників',
    description: 'Ремонт смарт-годинників та фітнес-браслетів',
    icon: 'fa-solid fa-clock',
    category: 'other',
    price: 'від 600 грн'
  },
  {
    id: 8,
    title: 'Ремонт навушників',
    description: 'Відновлення навушників будь-якої складності',
    icon: 'fa-solid fa-headphones',
    category: 'other',
    price: 'від 400 грн'
  }
]

// Computed filtered services
const filteredServices = computed(() => {
  if (activeCategory.value === 'all') {
    return services
  }
  return services.filter(service => service.category === activeCategory.value)
})
</script>
