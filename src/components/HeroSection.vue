<template>
  <section class="hero-section pt-20 pb-16 lg:pt-32 lg:pb-24 relative overflow-hidden">
    <div class="container mx-auto px-4">

      <!-- Main Grid -->
      <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">

        <!-- Text Content (Order 2 on mobile, Order 1 on desktop) -->
        <div class="order-2 lg:order-1 space-y-8 text-center lg:text-left hero-text">
          <h1 class="text-4xl md:text-5xl xl:text-6xl font-extrabold text-secondary leading-tight">
            ПРОБЛЕМИ З ВАШИМ<br>
            ПРИСТРОЄМ?
          </h1>

          <p class="text-base lg:text-xl text-gray-600 leading-relaxed">
            Вирішуємо будь-які проблеми!<br>
            Великий досвід та відмінна якість
          </p>

          <button
            class="bg-red-500 hover:bg-red-400 cursor-pointer text-white px-8 lg:px-10 py-4 lg:py-5 rounded-lg font-bold text-base lg:text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95">
            Безкоштовна консультація
          </button>
        </div>

        <!-- Master Image (Order 1 on mobile, Order 2 on desktop) -->
        <div class="order-1 lg:order-2 relative flex items-center justify-center w-full">
          <div class="relative w-full max-w-[380px] lg:max-w-[550px] aspect-square">

            <!-- Gradient -->
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
             w-[130%] h-[130%] lg:w-[160%] lg:h-[160%]
             opacity-20 rounded-full z-0"
              style="background: radial-gradient(50% 50% at 50% 50%, #FF6B00 0%, rgba(255, 107, 0, 0) 100%);"></div>

            <!-- Dashed Circle -->
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
             w-[102%] h-[102%] lg:w-[104%] lg:h-[104%]
             border-2 border-dashed border-gray-300
             rounded-full z-10"></div>

            <!-- Master Image -->
            <div class="absolute inset-0 flex items-center justify-center z-30">
              <img src="/images/hero/master2.png" alt="Майстер ремонту"
                class="w-[85%] lg:w-[80%] h-auto object-contain">
            </div>

            <div class="absolute top-[12%] left-[12%] z-20
            w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14
            bg-white rounded-full shadow-md
            flex items-center justify-center
            -translate-x-1/4 -translate-y-1/2">
              <i class="fa-solid fa-gear text-gray-400 text-sm sm:text-base lg:text-lg"></i>
            </div>
            <div class="absolute top-[15%] right-[13%] z-20
            w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14
            bg-white rounded-full shadow-md
            flex items-center justify-center
            transform translate-x-1/2 -translate-y-1/2">
              <i class="fa-solid fa-print text-gray-400 text-sm sm:text-base lg:text-lg"></i>
            </div>

            <div class="absolute top-[80%] left-5 sm:left-9 z-20
            w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14
            bg-white rounded-full shadow-md
            flex items-center justify-center
            -translate-x-1/2 -translate-y-1/2">
              <i class="fa-solid fa-comment text-gray-400 text-sm sm:text-base lg:text-lg"></i>
            </div>
            <div class="absolute  top-[80%] -right-[1%] z-20
            w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14
            bg-white rounded-full shadow-md
            flex items-center justify-center
            -translate-x-1/4 -translate-y-1/2">
              <i class="fa-solid fa-mobile-screen-button text-gray-400 text-sm sm:text-base lg:text-lg"></i>
            </div>
          </div>
        </div>


      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
        <!-- Feature 1 - Courier -->
        <div
          class="flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
          <div
            class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-blue-200 hover:shadow-lg">
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
        <div
          class="flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
          <div
            class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-blue-200 hover:shadow-lg">
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
        <div
          class="flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
          <div
            class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-blue-200 hover:shadow-lg">
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
