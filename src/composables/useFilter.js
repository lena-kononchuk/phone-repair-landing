import { ref, computed } from 'vue'

/**
 * Reusable filtering composable for list items with categories
 * Provides reactive state and computed filtered results
 * 
 * @param {Array} items - Array of items to filter
 * @param {String} initialCategory - Initial active category (default: 'all')
 * @returns {Object} - Reactive filtering state and methods
 */
export function useFilter(items, initialCategory = 'all') {
  // Reactive state for active category
  const activeCategory = ref(initialCategory)
  
  /**
   * Computed property that filters items based on active category
   * Returns all items when category is 'all', otherwise filters by category
   */
  const filteredItems = computed(() => {
    if (activeCategory.value === 'all') {
      return items
    }
    return items.filter(item => item.category === activeCategory.value)
  })
  
  // Method to update active category
  const setCategory = (category) => {
    activeCategory.value = category
  }
  
  return {
    activeCategory,
    filteredItems,
    setCategory
  }
}
