import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable for lazy loading sections using Intersection Observer
 * Shows content only when user scrolls near the section
 * 
 * @param {number} threshold - Percentage of section visibility to trigger (0-1)
 * @param {string} rootMargin - Margin around viewport (e.g., '100px')
 * @returns {Object} - Reactive refs and methods
 */
export function useLazyLoad(threshold = 0.1, rootMargin = '100px') {
  const sectionRef = ref(null)
  const isVisible = ref(false)
  let observer = null

  onMounted(() => {
    if (!sectionRef.value) return

    // Create Intersection Observer
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible.value) {
            isVisible.value = true
            // Disconnect after first load (no need to observe anymore)
            observer.disconnect()
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    // Start observing
    observer.observe(sectionRef.value)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    sectionRef,
    isVisible
  }
}
