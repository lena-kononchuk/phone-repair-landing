<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
    <!-- Main Header -->
    <div class="border-b border-gray-200">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between gap-8 py-4">
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
              class="nav-link text-base font-medium text-secondary hover:text-primary tracking-tighter leading-none">
              Наші послуги
            </a>
            <a href="#about"
              class="nav-link text-base font-medium text-secondary hover:text-primary tracking-tighter leading-none">
              Про компанію
            </a>
            <a href="#reviews"
              class="nav-link text-base font-medium text-secondary hover:text-primary tracking-tighter leading-none">
              Відгуки
            </a>
            <a href="#contacts"
              class="nav-link text-base font-medium text-secondary hover:text-primary tracking-tighter leading-none">
              Контакти
            </a>
          </nav>

          <!-- Contact Info Desktop -->
          <div class="hidden lg:flex items-center gap-4 flex-shrink-0">
            <div class="flex items-center gap-2">
              <div class="text-right">
                <!-- Phone Numbers -->
                <a href="tel:+380698277338" class="flex items-center gap-3 group cursor-pointer">
                  <span class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center
                     transition-colors duration-300
                     group-hover:bg-[#FF6B00]">
                    <i class="fa-solid fa-phone text-gray-600 text-sm
                        transition-colors duration-300
                        group-hover:text-white"></i>
                  </span>
                  <span class="text-gray-500 text-sm font-medium
                         transition-colors duration-300
                         group-hover:text-[#FF6B00]">
                    +38 (069) 82 77 38
                  </span>
                </a>
              </div>
            </div>
          </div>

          <!-- Mobile Menu Button -->
          <div class="flex justify-end">
            <button
              @click="toggleMobileMenu"
              class="lg:hidden text-secondary hover:text-primary transition-colors z-[60]"
              aria-label="Toggle menu"
            >
              <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay with Blur -->
    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        @click="closeMobileMenu"
        class="fixed inset-0 bg-blu/50 backdrop-blur-[5px] z-40 lg:hidden"
      ></div>
    </Transition>

    <!-- Mobile Menu Sidebar (slides from right) -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <nav
        v-if="isMobileMenuOpen"
        class="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#F4F9FC] shadow-2xl z-50 lg:hidden overflow-y-auto"
      >

        <div class="h-full flex flex-col justify-center items-center px-6">

          <!-- Navigation Links -->
          <div class="flex flex-col space-y-4 mb-8 w-full">

            <a href="#services"
              @click="closeMobileMenu"
              class="flex items-center gap-3 rounded-lg group
                    transition-all duration-300 hover:bg-white/60"
            >

              <span class="font-medium text-secondary
                          transition-colors duration-300
                          group-hover:text-[#FF6B00]">
                Наші послуги
              </span>
            </a>

            <a href="#about"
              @click="closeMobileMenu"
              class="flex items-center gap-3 rounded-lg group
                    transition-all duration-300 hover:bg-white/60"
            >

              <span class="font-medium text-secondary
                          transition-colors duration-300
                          group-hover:text-[#FF6B00]">
                Про компанію
              </span>
            </a>

            <a href="#reviews"
              @click="closeMobileMenu"
              class="flex items-center gap-3 rounded-lg group
                    transition-all duration-300 hover:bg-white/60 "
            >

              <span class="font-medium text-secondary
                          transition-colors duration-300
                          group-hover:text-[#FF6B00]">
                Відгуки
              </span>
            </a>

            <a href="#contacts"
              @click="closeMobileMenu"
              class="flex items-center gap-3 rounded-lg group
                    transition-all duration-300 hover:bg-white/60 "
            >

              <span class="font-medium text-secondary
                          transition-colors duration-300
                          group-hover:text-[#FF6B00]">
                Контакти
              </span>
            </a>
          </div>

          <!-- Divider -->
          <div class="border-t border-gray-300/50 w-full my-6"></div>

          <!-- Contact Info -->
          <div class="w-full">
            <div class="text-sm font-semibold text-gray-600 mb-4">
              Зв'яжіться з нами
            </div>

            <a href="tel:+380698277338"
              class="flex items-center gap-3 rounded-lg group
                    transition-all duration-300 hover:bg-white/60"
            >
              <span class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center
                          transition-colors duration-300
                          group-hover:bg-[#FF6B00]">
                <i class="fa-solid fa-phone text-gray-600 text-sm
                          transition-colors duration-300
                          group-hover:text-white"></i>
              </span>
              <span class="text-sm font-medium text-gray-600
                          transition-colors duration-300
                          group-hover:text-[#FF6B00]">
                +38 (069) 82 77 38
              </span>
            </a>
          </div>

        </div>
      </nav>
    </Transition>
  </header>

  <!-- Spacer to prevent content from hiding under fixed header -->
  <div class="h-16"></div>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value

  // Prevent body scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}
</script>
