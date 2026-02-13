<template>
  <footer class="bg-white text-gray-800 py-12 shadow-sm">
    <div class="container mx-auto px-4">

      <div class="grid md:grid-cols-3 gap-10 items-start">

        <!-- LEFT: Logo -->
        <div class="flex flex-col items-start md:items-start space-y-4">
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
          <div class="text-sm text-gray-500 md:text-left">
            Сервісний центр з професійної діагностики та ремонту техніки.
          </div>
        </div>

        <!-- MIDDLE: Contacts -->
        <div class="space-y-6">
          <div class="text-sm font-semibold text-gray-600">Контакти</div>

          <div class="space-y-4">

            <!-- Phone -->
            <a
              href="tel:+380698277338"
              class="flex items-center gap-3 group cursor-pointer"
            >
              <span
                class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center
                       transition-colors duration-300
                       group-hover:bg-[#FF6B00]"
              >
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

            <!-- Email -->
            <a
              href="mailto:info@arrons-service.md"
              class="flex items-center gap-3 group cursor-pointer"
            >
              <span
                class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center
                       transition-colors duration-300
                       group-hover:bg-[#FF6B00]"
              >
                <i class="fa-solid fa-envelope text-gray-600 text-sm
                          transition-colors duration-300
                          group-hover:text-white"></i>
              </span>
              <span class="text-gray-500 text-sm font-medium
                           transition-colors duration-300
                           group-hover:text-[#FF6B00]">
                info@arrons-service.md
              </span>
            </a>

            <!-- Address -->
            <a
              href="https://maps.google.com/?q=Київ,Хрещатик,22"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 group cursor-pointer"
            >
              <span
                class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center
                       transition-colors duration-300
                       group-hover:bg-[#FF6B00]"
              >
                <i class="fa-solid fa-location-dot text-gray-600 text-sm
                          transition-colors duration-300
                          group-hover:text-white"></i>
              </span>
              <span class="text-gray-500 text-sm font-medium
                           transition-colors duration-300
                           group-hover:text-[#FF6B00]">
                м. Київ, вул. Хрещатик, 22
              </span>
            </a>

          </div>
        </div>

        <!-- RIGHT: Socials -->
        <div>
          <div class="text-sm font-semibold mb-4 text-gray-600 flex justify-center md:justify-start ">
            Ми в соціальних мережах:
          </div>
          <div class="flex justify-center md:justify-start gap-4">

            <a
              href="#"
              class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center
                     transition-colors duration-300
                     hover:bg-[#FF6B00] group"
              aria-label="Facebook"
            >
              <i class="fa-brands fa-facebook-f text-gray-600
                        transition-colors duration-300
                        group-hover:text-white"></i>
            </a>

            <a
              href="#"
              class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center
                     transition-colors duration-300
                     hover:bg-[#FF6B00] group"
              aria-label="Instagram"
            >
              <i class="fa-brands fa-instagram text-gray-600
                        transition-colors duration-300
                        group-hover:text-white"></i>
            </a>

            <a
              href="#"
              class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center
                     transition-colors duration-300
                     hover:bg-[#FF6B00] group"
              aria-label="Telegram"
            >
              <i class="fa-brands fa-telegram text-gray-600
                        transition-colors duration-300
                        group-hover:text-white"></i>
            </a>

          </div>
        </div>

      </div>

    </div>
  </footer>
</template>

<script setup>
// Footer component - all data is inline for simplicity
</script>
