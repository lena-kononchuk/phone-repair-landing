<template>
  <section id="contacts" class="py-10 lg:py-12 bg-gradient-to-br">
    <div class="container mx-auto px-4">
      <!-- Desktop/Tablet Layout -->
      <div class="max-w-6xl mx-auto border border-gray-200 rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl p-6 sm:p-10 lg:p-16">

        <!-- Form State -->
        <Transition
          mode="out-in"
          enter-active-class="transition-all duration-500 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <!-- Success Message -->
          <div v-if="isSubmitted" class="text-center py-12 space-y-6">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <i class="fa-solid fa-check text-4xl text-green-500"></i>
            </div>
            <div class="text-2xl sm:text-3xl font-bold text-secondary mb-2">
              Дякуємо за звернення!
            </div>
            <div class="text-gray-600 text-base  mb-4">
              Ми зв'яжемося з вами найближчим часом для підтвердження запису
            </div>
            <button
              @click="resetForm"
              class="px-8 py-3 bg-[#FF6B00] hover:bg-[#FF8534] text-white font-bold rounded-xl
                     transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Надіслати нову заявку
            </button>
          </div>

          <!-- Form -->
          <div v-else class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

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
              <h2 class="text1xl sm:text-2xl lg:text-3xl font-black text-secondary leading-tight">
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
                  placeholder="Ім'я"
                  class="w-full px-4 py-3.5 lg:py-4 rounded-xl border cursor-pointer border-gray-200
                         focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 focus:outline-none
                         transition-all text-sm lg:text-base bg-gray-50 hover:bg-white"
                >
                <input
                  v-model="formData.time"
                  type="text"
                  placeholder="Прізвище"
                  class="w-full px-4 py-3.5 lg:py-4 rounded-xl border cursor-pointer border-gray-200
                         focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 focus:outline-none
                         transition-all text-sm lg:text-base bg-gray-50 hover:bg-white"
                >
              </div>

              <!-- Phone -->
              <input
                v-model="formData.phone"
                type="tel"
                placeholder="Телефон"
                class="w-full px-4 py-3.5 lg:py-4 rounded-xl border cursor-pointer border-gray-200
                       focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 focus:outline-none
                       transition-all text-sm lg:text-base bg-gray-50 hover:bg-white"
              >

              <!-- Submit Button -->
              <button
                @click="handleSubmit"
                type="button"
                class="w-full sm:w-auto px-10 lg:px-14 py-4 lg:py-5 bg-red-500 hover:bg-red-400
                       cursor-pointer text-white font-bold text-base lg:text-lg rounded-xl
                        hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Записатися
              </button>
            </div>

          </div>
        </Transition>

      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

// Form state
const formData = reactive({
  day: '',
  time: '',
  phone: ''
})

// Submission state
const isSubmitted = ref(false)

// Submit handler with success message
const handleSubmit = () => {
  // Basic validation
  if (!formData.day || !formData.time || !formData.phone) {
    alert('Будь ласка, заповніть всі поля')
    return
  }

  // Simulate form submission
  console.log('Form submitted:', formData)

  // Show success message
  isSubmitted.value = true

  // Clear form data
  formData.day = ''
  formData.time = ''
  formData.phone = ''
}

// Reset to show form again
const resetForm = () => {
  isSubmitted.value = false
}
</script>
