<template>
  <div>
    <!-- Loader -->
    <AppLoader />

    <!-- Background Animation -->
    <BackgroundAnimation />

    <!-- Header -->
    <AppHeader />

    <!-- Main Content -->
    <main class="relative z-10" >
      <!-- Hero Section -->
        <HeroSection />

      <!-- Products/Devices Section -->
        <ProductsSection />

      <!-- Services Section -->
        <ServicesSection />

      <!-- About/Benefits Section -->
        <BenefitsSection />

      <!-- Repair Gifts Section -->
        <RepairGiftsSection />

      <!-- Reviews Section -->
        <ReviewsSection />

        <ContactsSection />
    </main>

    <!-- Footer with Contact Form and Contacts -->
    <AppFooter />
  </div>
</template>

<script setup>
import AppLoader from './components/AppLoader.vue'
import BackgroundAnimation from './components/BackgroundAnimation.vue'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './sections/HeroSection.vue'
import ServicesSection from './sections/ServicesSection.vue'
import ProductsSection from './sections/ProductsSection.vue'
import BenefitsSection from './sections/BenefitsSection.vue'
import RepairGiftsSection from './sections/RepairGiftsSection.vue'
import ReviewsSection from './sections/ReviewsSection.vue'
import AppFooter from './components/AppFooter.vue'
import ContactsSection from './sections/ContactsSection.vue'

</script>
