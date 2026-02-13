<template>
  <section id="contacts" class="py-16 lg:py-24 bg-gradient-to-br">
    <div class="container mx-auto px-4">
      <!-- Desktop/Tablet Layout -->
      <div class="max-w-6xl mx-auto border border-gray-200 rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl p-6 sm:p-10 lg:p-16">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          <!-- Left: Text Content -->
          <div class="text-center lg:text-left space-y-6">
            <!-- Badge with fire icon -->
            <div class="inline-flex items-center gap-2">
              <span class="text-6xl sm:text-7xl lg:text-8xl font-black text-[#FF6B00] leading-none">
                50%
              </span>
              <i class="fa-solid fa-fire text-4xl sm:text-5xl text-[#FF6B00] animate-pulse"></i>
            </div>

            <!-- Heading -->
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black text-secondary leading-tight">
            ЗАПИСАТИСЯ НА ДІАГНОСТИКУ<br>
            В <span class="text-red-500">ЗРУЧНИЙ</span> ДЛЯ ВАС ЧАС
          </h2>
          </div>

          <!-- Right: Form -->
          <div class="space-y-4">
            <!-- Day & Time Row -->
            <div class="grid sm:grid-cols-2 gap-4">
              <input
                v-model="formData.day"
                type="text"
                placeholder="День"
                class="w-full px-4 py-3.5 lg:py-4 rounded-xl border cursor-pointer border-gray-200 focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 focus:outline-none transition-all text-sm lg:text-base bg-gray-50 hover:bg-white"
              >
              <input
                v-model="formData.time"
                type="text"
                placeholder="Время"
                class="w-full px-4 py-3.5 lg:py-4 rounded-xl border cursor-pointer  border-gray-200 focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 focus:outline-none transition-all text-sm lg:text-base bg-gray-50 hover:bg-white"
              >
            </div>

            <!-- Phone -->
            <input
              v-model="formData.phone"
              type="tel"
              placeholder="Телефон"
              class="w-full px-4 py-3.5 lg:py-4 rounded-xl border cursor-pointer  border-gray-200 focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 focus:outline-none transition-all text-sm lg:text-base bg-gray-50 hover:bg-white"
            >

            <!-- Submit Button -->
            <button
              @click="handleSubmit"
              type="button"
              class="w-full sm:w-auto px-10 lg:px-14 py-4 lg:py-5 bg-red-500 hover:bg-red-400 cursor-pointer text-white font-bold text-base lg:text-lg rounded-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Записаться
            </button>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

// Form state
const formData = reactive({
  day: '',
  time: '',
  phone: ''
})

// Submit handler
const handleSubmit = () => {
  // Basic validation
  if (!formData.day || !formData.time || !formData.phone) {
    alert('Будь ласка, заповніть всі поля')
    return
  }

  // Success feedback
  console.log('Form submitted:', formData)
  alert('Дякуємо! Ми зв\'яжемося з вами найближчим часом')

  // Reset form
  formData.day = ''
  formData.time = ''
  formData.phone = ''
}

</script>
