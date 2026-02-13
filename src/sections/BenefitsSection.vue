<template>
  <section class="py-10 lg:py-12 relative" id="about">
    <div class="container mx-auto px-4">
      <!-- Title -->
      <h2 class="text-2xl md:text-3xl xl:text-4xl text-center font-extrabold text-secondary leading-tight mb-4">
       ПРО КОМПАНІЮ ARRON
      </h2>
      <div class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Дізнайте про нашу компанію.
      </div>

      <!-- Benefits Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div
          v-for="benefit in benefits"
          :key="benefit.id"
          class="flex flex-col items-center text-center space-y-4"
        >
          <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
            <img :src="benefit.icon" :alt="benefit.title" class="w-10 h-10 object-contain">
          </div>
          <h3 class="text-base font-bold text-secondary leading-tight">
            {{ benefit.title }}
          </h3>
          <div class="text-sm text-gray-600 leading-relaxed">
            {{ benefit.description }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Benefits data
const benefits = [
  {
    id: 1,
    icon: '/images/icons/card.png',
    title: 'Зручний спосіб оплати',
    description: 'Оплата готівкою або по перерахуванню компаніям.'
  },
  {
    id: 2,
    icon: '/images/icons/time.png',
    title: 'Роботи від 30 хвилин',
    description: 'Час роботи або настройки займає від 30 хвилин до кількох годин.'
  },
  {
    id: 3,
    icon: '/images/icons/shipping.png',
    title: 'Виїжджаєм у будь-яку точку Кишинева',
    description: 'Виїзд кур\'єра Буюкани Чекани, Рішканівка, центр, Ботаніка.'
  },
  {
    id: 4,
    icon: '/images/icons/chck_lst.png',
    title: 'Гарантія на всі виконанні послуги',
    description: 'Запчасти, фотографії та сообщения під Вашим контролем. Після робіт інженер віддасть Вам старі запчасти.'
  }
]
</script>
