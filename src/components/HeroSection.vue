<template>
  <section class="hero-section pt-20 pb-16 lg:pt-32 lg:pb-24 relative overflow-hidden" style="background: linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 100%);">
    <div class="container mx-auto px-4">

      <!-- Mobile & Tablet Layout - Image First -->
      <div class="lg:hidden flex flex-col items-center mb-12">
        <!-- Master Image with Decorations -->
        <div class="relative w-full max-w-md mb-8">
          <!-- Circular Master Container -->
          <div class="relative mx-auto" style="width: 380px; height: 380px;">
            <!-- Orange Radial Gradient Shadow -->
            <div class="absolute" style="width: 700px; height: 700px; top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0.2; border-radius: 500px; background: radial-gradient(50% 50% at 50% 50%, #FF6B00 0%, rgba(255, 107, 0, 0) 100%);"></div>

            <!-- Master Image -->
            <div class="relative z-10 w-full h-full flex items-center justify-center">
              <img
                src="/images/hero/master2.png"
                alt="Майстер ремонту"
                class="w-[340px] h-auto object-contain"
              >
            </div>

            <!-- Dashed Circle -->
            <div class="absolute border-2 border-dashed border-gray-300 rounded-full" style="width: 390px; height: 390px; top: 50%; left: 50%; transform: translate(-50%, -50%);"></div>

            <!-- Decorative Icon Circles -->
            <!-- Settings Icon - Top Left -->
            <div class="absolute top-8 left-4 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
              <i class="fa-solid fa-gear text-gray-400 text-lg"></i>
            </div>

            <!-- Print Icon - Top Right -->
            <div class="absolute top-24 right-0 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
              <i class="fa-solid fa-print text-gray-400 text-lg"></i>
            </div>

            <!-- Chat Icon - Left -->
            <div class="absolute top-1/2 -left-2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center -translate-y-1/2">
              <i class="fa-solid fa-comment text-gray-400 text-lg"></i>
            </div>

            <!-- Phone Icon - Bottom -->
            <div class="absolute -bottom-0 left-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center -translate-x-1/2">
              <i class="fa-solid fa-mobile-screen-button text-gray-400 text-lg"></i>
            </div>

            <!-- Empty Circle - Bottom Right -->
            <div class="absolute bottom-8 -right-0 w-12 h-12 bg-white rounded-full shadow-md"></div>

            <!-- Decorative Dots -->
            <div class="absolute top-4 right-16 opacity-30">
              <div class="flex gap-1">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              </div>
            </div>

            <!-- Decorative Arrows -->
            <div class="absolute top-32 left-8 opacity-30">
              <div class="flex gap-1">
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
                <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>

            <!-- Decorative Waves -->
            <div class="absolute top-12 right-8 opacity-30">
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                <path d="M0 10C5 5 10 5 15 10C20 15 25 15 30 10C35 5 40 5 40 10" stroke="#FFB800" stroke-width="2"/>
              </svg>
            </div>

            <!-- Decorative Yellow Shape -->
            <div class="absolute bottom-16 left-0 w-8 h-8 bg-yellow-400 rounded opacity-80"></div>

            <!-- Decorative Dots Grid -->
            <div class="absolute bottom-4 right-12 opacity-50">
              <div class="grid grid-cols-3 gap-1">
                <div class="w-1 h-1 bg-gray-800 rounded-full"></div>
                <div class="w-1 h-1 bg-gray-800 rounded-full"></div>
                <div class="w-1 h-1 bg-gray-800 rounded-full"></div>
                <div class="w-1 h-1 bg-gray-800 rounded-full"></div>
                <div class="w-1 h-1 bg-gray-800 rounded-full"></div>
                <div class="w-1 h-1 bg-gray-800 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Text Content -->
        <div class="text-center space-y-6 max-w-md">
          <h1 class="text-4xl md:text-5xl font-extrabold text-secondary leading-tight">
            ПРОБЛЕМИ З ВАШИМ<br>
            ПРИСТРОЄМ?
          </h1>

          <p class="text-base text-gray-600 leading-relaxed">
            Вирішуємо будь-які проблеми!<br>
            Великий досвід та відмінна якість
          </p>

          <div class="flex flex-wrap gap-4">
            <button class="bg-red-500  hover:bg-red-300  text-white px-8 py-4 rounded-lg font-bold text-base transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95">
              Безкоштовна консультація
            </button>
        </div>
        </div>
      </div>

      <!-- Desktop Layout -->
      <div class="hidden lg:grid lg:grid-cols-2 gap-16 items-center mb-20">
        <!-- Left Content -->
        <div class="space-y-8 relative z-10 flex flex-col justify-center" style="margin-top: -60px;">
          <h1 class="text-5xl xl:text-6xl font-extrabold text-secondary leading-tight">
            ПРОБЛЕМИ З ВАШИМ<br>
            ПРИСТРОЄМ?
          </h1>

          <p class="text-xl text-gray-600 leading-relaxed">
            Вирішуємо будь-які проблеми!<br>
            Великий досвід та відмінна якість
          </p>

          <div class="flex flex-wrap gap-4">
            <button class="bg-red-500  hover:bg-red-300  text-white px-8 py-4 rounded-lg font-bold text-base transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95">
              Безкоштовна консультація
            </button>
        </div>
        </div>

        <!-- Right Content - Master Image -->
        <div class="relative flex items-center justify-center">
          <div class="relative" style="width: 500px; height: 500px;">
            <!-- Orange Radial Gradient Shadow -->
            <div class="absolute" style="width: 1056px; height: 1056px; top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0.2; border-radius: 500px; background: radial-gradient(50% 50% at 50% 50%, #FF6B00 0%, rgba(255, 107, 0, 0) 100%);"></div>

            <!-- Master Image -->
            <div class="relative z-10 w-full h-full flex items-center justify-center">
              <img
                src="/images/hero/master2.png"
                alt="Майстер ремонту"
                class="w-[450px] h-auto object-contain"
              >
            </div>

            <!-- Dashed Circle -->
            <div class="absolute border-2 border-dashed border-gray-300 rounded-full" style="width: 510px; height: 510px; top: 50%; left: 50%; transform: translate(-50%, -50%);"></div>

            <!-- Decorative Icon Circles -->
            <div class="absolute top-12 left-6 w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center">
              <i class="fa-solid fa-gear text-gray-300 text-xl"></i>
            </div>

            <div class="absolute top-1/3 -right-4 w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center">
              <i class="fa-solid fa-print text-gray-300 text-xl"></i>
            </div>

            <div class="absolute top-1/2 -left-6 w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center -translate-y-1/2">
              <i class="fa-solid fa-comment text-gray-300 text-xl"></i>
            </div>

            <div class="absolute -bottom-4 left-1/2 w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center -translate-x-1/2">
              <i class="fa-solid fa-mobile-screen-button text-gray-300 text-xl"></i>
            </div>

            <div class="absolute bottom-12 -right-2 w-14 h-14 bg-white rounded-full shadow-md"></div>

            <!-- Decorative Elements -->
            <div class="absolute top-8 right-20 opacity-30">
              <div class="flex gap-1">
                <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>

            <div class="absolute top-40 left-12 opacity-30">
              <div class="flex gap-1">
                <i class="fa-solid fa-chevron-right text-gray-400 text-sm"></i>
                <i class="fa-solid fa-chevron-right text-gray-400 text-sm"></i>
                <i class="fa-solid fa-chevron-right text-gray-400 text-sm"></i>
              </div>
            </div>

            <div class="absolute top-16 right-12 opacity-30">
              <svg width="50" height="25" viewBox="0 0 50 25" fill="none">
                <path d="M0 12.5C6 6 12 6 18 12.5C24 19 30 19 36 12.5C42 6 48 6 50 12.5" stroke="#FFB800" stroke-width="2"/>
              </svg>
            </div>

            <div class="absolute bottom-20 left-2 w-10 h-10 bg-yellow-400 rounded opacity-80"></div>

            <div class="absolute bottom-8 right-16 opacity-50">
              <div class="grid grid-cols-3 gap-1.5">
                <div class="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                <div class="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                <div class="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                <div class="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                <div class="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                <div class="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
        <!-- Feature 1 - Courier -->
        <div class="flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
          <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-blue-200 hover:shadow-lg">
            <img src="/images/icons/shipping.png" alt="Доставка" class="w-12 h-12 object-contain">
          </div>
          <p class="text-base text-secondary font-bold leading-tight">
            Кур'єр по місту
          </p>
          <p class="text-sm text-gray-500 leading-relaxed">
            Виїзд кур'єра по Києву.
          </p>
        </div>

        <!-- Feature 2 - Free Phone -->
        <div class="flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
          <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-blue-200 hover:shadow-lg">
            <img src="/images/icons/Replacement.png" alt="Підмінний телефон" class="w-12 h-12 object-contain">
          </div>
          <p class="text-base text-secondary font-bold leading-tight">
            Підмінний телефон - Безкоштовно
          </p>
          <p class="text-sm text-gray-500 leading-relaxed">
            Телефон взамін Безкоштовно, поки ваш в ремонті
          </p>
        </div>

        <!-- Feature 3 - Care -->
        <div class="flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
          <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-blue-200 hover:shadow-lg">
            <img src="/images/icons/Replacement.png" alt="Турбота про вас" class="w-12 h-12 object-contain">
          </div>
          <p class="text-base text-secondary font-bold leading-tight">
            Турбота про вас
          </p>
          <p class="text-sm text-gray-500 leading-relaxed">
            Незначні поломки - робимо безкоштовно.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Component logic
</script>

<style scoped>
.hero-section {
  font-family: 'Gilroy', sans-serif;
}
</style>
