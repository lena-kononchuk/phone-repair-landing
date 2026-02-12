<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
    <!-- Main Header -->
    <div class="border-b border-gray-200">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between gap-8  py-4">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a href="#" class="flex items-center">
              <img src="/images/logo/logo.svg" alt="ARRON Service Center" class="h-14 w-auto"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" />
              <!-- Fallback if logo not found -->
              <div class="hidden items-center gap-2">
                <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-xl">A</span>
                </div>
                <div>
                  <div class="text-primary font-bold text-2xl leading-none">ARRON</div>
                  <div class="text-xs text-blue-600 leading-none">SERVICE CENTER</div>
                </div>
              </div>
            </a>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center gap-8 flex-1 justify-center">
            <a href="#services"
              class="nav-link text-base font-medium text-secondary hover:text-primary tracking-tighter leading-none"
              :class="{ 'active text-primary': activeSection === 'services' }">
              Наші послуги
            </a>
            <a href="#about"
              class="nav-link text-base font-medium text-secondary hover:text-primary tracking-tighter leading-none"
              :class="{ 'active text-primary': activeSection === 'about' }">
              Про компанію
            </a>
            <a href="#reviews"
              class="nav-link text-base font-medium text-secondary hover:text-primary tracking-tighter leading-none"
              :class="{ 'active text-primary': activeSection === 'reviews' }">
              Відгуки
            </a>
            <a href="#orders"
              class="nav-link text-base font-medium text-secondary hover:text-primary tracking-tighter leading-none"
              :class="{ 'active text-primary': activeSection === 'orders' }">
              Виконанні замовлення
            </a>
            <a href="#contacts"
              class="nav-link text-base font-medium text-secondary hover:text-primary tracking-tighter leading-none"
              :class="{ 'active text-primary': activeSection === 'contacts' }">
              Контакти
            </a>
          </nav>

          <!-- Contact Info Desktop -->
          <div class="hidden lg:flex items-center gap-4 flex-shrink-0">
            <!-- Address with Icon -->
            <div class="flex items-center gap-2">

              <div class="text-right">
                <!-- Phone Numbers -->
            <div class="flex items-center gap-3 group cursor-pointer">
                  <span
                    class="w-10 h-10 flex items-center justify-center rounded-full
                          bg-pink-50 text-[#E31E24]
                          transition-colors duration-300
                          group-hover:bg-red-500"
                    aria-label="Call us"
                  >
                    <i
                      class="fa-solid fa-phone text-sm
                            transition-colors duration-300
                            group-hover:text-white"
                    ></i>
                  </span>

                  <a
                    href="tel:0698277338"
                    class="text-md font-bold text-secondary tracking-tighter
                          transition-colors duration-300
                          group-hover:text-primary"
                  >
                    069 82 77 38
                  </a>
                </div>
              </div>
            </div>


          </div>

          <!-- Mobile Menu Button -->
          <button @click="toggleMobileMenu" class="lg:hidden text-secondary hover:text-primary transition-colors"
            aria-label="Toggle menu">
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <Transition enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-4" enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in" leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4">
          <nav v-if="isMobileMenuOpen" class="lg:hidden mt-4 pb-4 border-t border-gray-light pt-4">
            <div class="flex flex-col space-y-4">
              <a href="#services" @click="closeMobileMenu"
                class="text-secondary hover:text-primary transition-colors duration-200 font-medium py-2">
                Наші послуги
              </a>
              <a href="#about" @click="closeMobileMenu"
                class="text-secondary hover:text-primary transition-colors duration-200 font-medium py-2">
                Про компанію
              </a>
              <a href="#reviews" @click="closeMobileMenu"
                class="text-secondary hover:text-primary transition-colors duration-200 font-medium py-2">
                Відгуки
              </a>
              <a href="#orders" @click="closeMobileMenu"
                class="text-secondary hover:text-primary transition-colors duration-200 font-medium py-2">
                Виконанні замовлення
              </a>
              <a href="#contacts" @click="closeMobileMenu"
                class="text-secondary hover:text-primary transition-colors duration-200 font-medium py-2">
                Контакти
              </a>

              <!-- Mobile Contact Info -->
              <div class="pt-4 border-t border-gray-light space-y-3">
                <!-- Address -->
                <div class="flex items-center gap-2">
                <!-- Phone Buttons -->
                <div class="flex items-center gap-3">
                  <span class="icon-circle icon-circle-pink hover:bg-pink-100 transition-colors" aria-label="Call us">
                    <i class="fa-solid fa-phone text-sm"></i>
                  </span>
                  <a href="tel:0698277338"
                    class="text-md font-bold text-secondary hover:text-primary transition-colors tracking-tighter cursor-pointer">
                    069 82 77 38
                  </a>
                </div>
  </div>
              </div>
            </div>
          </nav>
        </Transition>
      </div>
    </div>
  </header>

  <!-- Spacer to prevent content from hiding under fixed header -->
  <div class="h-16"></div>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
// const activeSection = ref('services')

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
/* Additional styles if needed */
</style>
