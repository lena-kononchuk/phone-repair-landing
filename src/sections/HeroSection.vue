<template>
  <section class="pt-20 pb-10 lg:pt-32 lg:pb-16 relative overflow-hidden" id="hero">
    <div class="container mx-auto px-4">
      <!-- Main Grid -->
      <div class="grid lg:grid-cols-2  gap-8 sm:gap-16 items-center mb-4">
        <!-- Text Content (Order 2 on mobile, Order 1 on desktop) -->
        <div class="order-2 lg:order-1 space-y-8 text-center lg:text-left">
          <h1 class="text-3xl md:text-4xl xl:text-5xl font-extrabold text-secondary leading-tight">
            ПРОБЛЕМИ З ВАШИМ<br>
            ПРИСТРОЄМ?
          </h1>

          <div class="text-base lg:text-xl text-gray-600 leading-relaxed">
            Вирішуємо будь-які проблеми!<br>
            Великий досвід та відмінна якість
          </div>

          <button class="bg-red-500 hover:bg-red-400 cursor-pointer text-white px-8 lg:px-10 py-4 lg:py-5 rounded-lg font-bold text-base lg:text-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">
            Безкоштовна консультація
          </button>
        </div>

        <!-- Master Image (Order 1 on mobile, Order 2 on desktop) -->
        <div class="order-1 lg:order-2 relative flex items-center justify-center w-full">
          <div class="relative w-full max-w-[380px] lg:max-w-[550px] aspect-square">
            <!-- Radial Gradient Background -->
            <div
              class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] lg:w-[160%] lg:h-[160%] opacity-20 rounded-full z-0"
              style="background: radial-gradient(50% 50% at 50% 50%, #FF6B00 0%, rgba(255, 107, 0, 0) 100%);">
            </div>

            <!-- Dashed Circle Border -->
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[102%] h-[102%] lg:w-[104%] lg:h-[104%] border-2 border-dashed border-gray-300 rounded-full z-10"></div>

            <!-- Master Image with optimization -->
            <div class="absolute inset-0 flex items-center justify-center z-30">
              <img
                src="/images/hero/master2.png"
                alt="Майстер ремонту"
                width="550"
                height="550"
                class="w-[85%] lg:w-[80%] h-auto object-contain"
              >
            </div>

            <!-- Decorative Icons (FontAwesome) -->
            <div class="absolute top-[12%] left-[12%] z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-full shadow-md flex items-center justify-center -translate-x-1/4 -translate-y-1/2">
              <i class="fa-solid fa-gear text-gray-400 text-sm sm:text-base lg:text-lg"></i>
            </div>
            <div class="absolute top-[15%] right-[13%] z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-full shadow-md flex items-center justify-center translate-x-1/2 -translate-y-1/2">
              <i class="fa-solid fa-print text-gray-400 text-sm sm:text-base lg:text-lg"></i>
            </div>
            <div class="absolute top-[80%] left-5 sm:left-9 z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-full shadow-md flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
              <i class="fa-solid fa-comment text-gray-400 text-sm sm:text-base lg:text-lg"></i>
            </div>
            <div class="absolute top-[80%] -right-[1%] z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-full shadow-md flex items-center justify-center -translate-x-1/4 -translate-y-1/2">
              <i class="fa-solid fa-mobile-screen-button text-gray-400 text-sm sm:text-base lg:text-lg"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
        <div
          v-for="feature in features"
          :key="feature.id"
          class="flex flex-col items-center text-center space-y-4 "
        >
          <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300">
            <img
              :src="feature.icon"
              :alt="feature.title"
              width="48"
              height="48"
              class="w-12 h-12 object-contain"
            >
          </div>
          <div class="text-base text-secondary font-bold leading-tight">
            {{ feature.title }}
          </div>
          <div class="text-sm text-gray-500 leading-relaxed">
            {{ feature.description }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
// Features data - small dataset can live in component
const features = [
  {
    id: 1,
    icon: '/images/icons/shipping.png',
    title: 'Кур\'єр по місту',
    description: 'Виїзд кур\'єра по Києву.'
  },
  {
    id: 2,
    icon: '/images/icons/Replacement.png',
    title: 'Підмінний телефон – Безкоштовно',
    description: 'Телефон взамін безкоштовно, поки ваш в ремонті'
  },
  {
    id: 3,
    icon: '/images/icons/Replacement.png',
    title: 'Турбота про вас',
    description: 'Незначні поломки – робимо безкоштовно.'
  }
]
</script>
