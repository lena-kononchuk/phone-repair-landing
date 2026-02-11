<template>
  <div id="app">
    <!-- Loader -->
    <AppLoader />

    <!-- Background Animation -->
    <BackgroundAnimation />

    <!-- Header -->
    <AppHeader />

    <!-- Main Content -->
    <main class="relative z-10"  style="background: linear-gradient(180deg, #EBF3F8 0%, rgba(235, 243, 248, 0) 100%);">
      <!-- Hero Section -->
      <section
        id="hero"
        class="relative"      >
        <HeroSection />
      </section>

      <!-- Services Section -->
      <section
        id="services"

      >
        <ServicesSection />
      </section>

      <!-- Products/Devices Section -->
      <section
        id="products"
        class="relative"      >
        <ProductsSection />
      </section>

      <!-- About Section -->
      <section
        id="about"
      >
        <BenefitsSection />
      </section>

      <!-- Gallery Section -->
      <section
        id="gallery"
        class="relative"
      >
        <GallerySection />
      </section>

      <!-- Orders/Repair Section -->
      <section
        id="orders"

      >
        <RepairSection />
      </section>

      <!-- Reviews Section -->
      <section
        id="reviews"
        class="relative"
      >
        <div class="py-20">
          <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-secondary text-center mb-4">Відгуки щасливих клієнтів</h2>
            <p class="text-center text-gray-medium">Тут буде секція з відгуками</p>
          </div>
        </div>
      </section>

      <!-- Contacts Section -->
      <section
        id="contacts"
      >
        <ContactsSection />
      </section>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import AppLoader from './components/AppLoader.vue'
import BackgroundAnimation from './components/BackgroundAnimation.vue'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ProductsSection from './components/ProductsSection.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import GallerySection from './components/GallerySection.vue'
import ContactsSection from './components/ContactsSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style>
/* Global smooth scroll */
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* Ensure content is above background animation */
#app {
  position: relative;
}

main {
  position: relative;
  z-index: 1;
}

/* Optional: Add transition for gradient sections */
section {
  position: relative;
  transition: background 0.3s ease;
}
</style>
