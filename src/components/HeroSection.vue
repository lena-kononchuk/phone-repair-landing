<template>
  <section class="hero-section pt-20 pb-16 lg:pt-32 lg:pb-24 relative overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        <!-- Left Content -->
        <div class="space-y-8 relative z-10 pt-8 lg:pt-16">
          <!-- Main Heading -->
          <h1 class="text-5xl lg:text-6xl font-extrabold text-secondary leading-tight">
            ПРОБЛЕМИ З ВАШИМ<br>
            ПРИСТРОЄМ?
          </h1>

          <!-- Subheading -->
          <p class="text-base lg:text-xl text-gray-600 max-w-md leading-relaxed">
            Вирішуємо будь-які проблеми!<br>
            Великий досвід та відмінна якість
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4">
            <button class="bg-red-500  hover:bg-red-300  text-white px-8 py-4 rounded-lg font-bold text-base transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95">
              Безкоштовна консультація
            </button>

          </div>


        </div>

        <!-- Right Content - Image -->
        <div class="relative flex items-center justify-center lg:justify-start">
          <!-- Image Container with fixed gradient -->
          <div class="relative w-full max-w-lg">
            <!-- Radial Gradient Shadow -->
            <div
              class="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] -z-10"
              style="background: radial-gradient(50% 50% at 50% 50%, #FF6B00 0%, rgba(255, 107, 0, 0) 100%);"
            ></div>

            <!-- Main Image -->
            <div class="relative z-10">
              <img
                src="/images/hero/master2.png"
                alt="Майстер ремонту"
                class="w-full h-auto"
              >
            </div>

            <!-- Enhanced Decorative Elements -->
            <div class="absolute top-10 right-10 w-40 h-40 bg-orange-200 rounded-full opacity-40 blur-3xl animate-pulse"></div>
            <div class="absolute bottom-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-40 blur-2xl animate-pulse" style="animation-delay: 1s;"></div>

            <!-- Dotted Pattern -->
            <div class="absolute top-0 right-0 w-24 h-24 opacity-30">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" fill="#1A1A1A"/>
                </pattern>
                <rect width="100" height="100" fill="url(#dots)"/>
              </svg>
            </div>

          </div>
        </div>

      </div>

      <!-- Features Grid -->
          <div class="grid lg:grid-cols-3 gap-16 lg:gap-20 items-start lg:pt-16">
            <!-- Feature 1 - Delivery -->
            <div class="flex flex-col items-center text-center space-y-3 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-blue-200 hover:shadow-lg">
                <img src="/images/icons/shipping.png" alt="Доставка" class="w-12 h-12 object-contain">
              </div>
              <p class="text-sm text-secondary font-bold leading-tight">
                Кур'єр по місту
              </p>
              <p class="text-xs text-gray-500 leading-relaxed">
                Виїзд кур'єра по Києву.
              </p>
            </div>

            <!-- Feature 2 - Free Phone Replacement -->
            <div class="flex flex-col items-center text-center space-y-3 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-blue-200 hover:shadow-lg">
                <img src="/images/icons/Replacement.png" alt="Підмінний телефон" class="w-12 h-12 object-contain">
              </div>
              <p class="text-sm text-secondary font-bold leading-tight">
                Підмінний телефон - Безкоштовно
              </p>
              <p class="text-xs text-gray-500 leading-relaxed">
                Телефон взамін Безкоштовно, поки ваш в ремонті
              </p>
            </div>

            <!-- Feature 3 - Care About You -->
            <div class="flex flex-col items-center text-center space-y-3 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-blue-200 hover:shadow-lg">
                <img src="/images/icons/Replacement.png" alt="Турбота про вас" class="w-12 h-12 object-contain">
              </div>
              <p class="text-sm text-secondary font-bold leading-tight">
                Турбота про вас
              </p>
              <p class="text-xs text-gray-500 leading-relaxed">
                Незначні поломки - робимо безкоштовно.
              </p>
            </div>
          </div>

    </div>

  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>
