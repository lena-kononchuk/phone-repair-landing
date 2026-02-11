# Color Palette Reference

Quick reference guide for using colors from the Figma design in Tailwind CSS.

## 🎨 Color System

### Primary Colors (Blue)

```html
<!-- Main blue - Headers, CTAs, Links -->
<div class="bg-primary text-white">Main Blue</div>

<!-- Dark blue - Hover states, Secondary CTAs -->
<div class="bg-primary-dark text-white">Dark Blue</div>

<!-- Light blue - Alternative buttons -->
<div class="bg-primary-light text-white">Light Blue</div>

<!-- Bright blue - Highlights, Icons -->
<div class="bg-primary-bright text-white">Bright Blue</div>
```

**Usage:**
- `bg-primary` - Main CTAs, navigation active state
- `text-primary` - Links, headings
- `border-primary` - Input focus, dividers
- `hover:bg-primary-dark` - Button hover effects

---

### Accent Colors (Red & Orange)

```html
<!-- Main red - Important CTAs, Alerts -->
<div class="bg-accent-red text-white">Main Red</div>

<!-- Bright red - Hover, Urgent notifications -->
<div class="bg-accent-red-bright text-white">Bright Red</div>

<!-- Red with opacity - Backgrounds, Badges -->
<div class="bg-accent-red-light">Light Red Background</div>

<!-- Orange - Secondary CTAs, Icons -->
<div class="bg-accent-orange text-white">Orange</div>

<!-- Light orange - Badges, Tags -->
<div class="bg-accent-orange-light text-dark">Light Orange</div>

<!-- Yellow - Highlights, Special offers -->
<div class="bg-accent-yellow text-dark">Yellow</div>

<!-- Green - Success states -->
<div class="bg-accent-green text-white">Green</div>
```

**Usage:**
- `bg-accent-red` - Primary action buttons
- `bg-accent-orange` - Secondary actions, icons
- `bg-accent-yellow` - Highlights, badges
- `bg-accent-green` - Success messages

---

### Neutral Colors (Dark)

```html
<!-- Main dark - Text, Headers -->
<div class="bg-dark text-white">Main Dark</div>

<!-- Dark gray - Secondary text -->
<div class="bg-dark-gray text-white">Dark Gray</div>

<!-- Medium gray - Borders, Dividers -->
<div class="bg-dark-gray-medium text-white">Medium Gray</div>

<!-- Light gray - Disabled states -->
<div class="bg-dark-gray-light text-white">Light Gray</div>
```

**Usage:**
- `text-dark` - Body text, headings
- `bg-dark` - Footer, dark sections
- `border-dark-gray` - Borders, dividers
- `text-dark-gray-light` - Muted text

---

### Neutral Colors (Light)

```html
<!-- White - Backgrounds -->
<div class="bg-light text-dark">White</div>

<!-- Light gray - Card backgrounds -->
<div class="bg-light-gray">Light Gray</div>

<!-- Soft gray - Hover states -->
<div class="bg-light-gray-soft">Soft Gray</div>

<!-- Light blue - Sections -->
<div class="bg-light-blue">Light Blue</div>

<!-- Soft blue - Hero backgrounds -->
<div class="bg-light-blue-soft">Soft Blue</div>
```

**Usage:**
- `bg-light` - Page background
- `bg-light-gray` - Card backgrounds
- `bg-light-blue` - Hero sections, features
- `text-light` - Text on dark backgrounds

---

## 🌈 Gradient Backgrounds

```html
<!-- Radial orange gradient - Hero elements, CTAs -->
<div class="bg-radial-orange">Radial Orange</div>

<!-- Linear blue gradient - Section backgrounds -->
<div class="bg-linear-blue">Linear Blue</div>

<!-- Conic blue gradient - Decorative elements -->
<div class="bg-conic-blue">Conic Blue</div>

<!-- Rotated conic blue - Alternative decoration -->
<div class="bg-conic-blue-rotated">Conic Blue Rotated</div>
```

**Usage:**
- `bg-radial-orange` - Button hover effects, highlights
- `bg-linear-blue` - Hero backgrounds, sections
- `bg-conic-blue` - Decorative elements, overlays

---

## 📝 Common Combinations

### 1. Primary Button
```html
<button class="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-colors">
  Click Me
</button>
```

### 2. Accent Button (Red)
```html
<button class="bg-accent-red hover:bg-accent-red-bright text-white px-6 py-3 rounded-lg transition-colors">
  Important Action
</button>
```

### 3. Secondary Button (Orange)
```html
<button class="bg-accent-orange hover:bg-accent-orange-light text-white px-6 py-3 rounded-lg transition-colors">
  Secondary Action
</button>
```

### 4. Card Component
```html
<div class="bg-light rounded-2xl shadow-soft p-6">
  <h3 class="text-dark text-xl font-bold mb-2">Card Title</h3>
  <p class="text-dark-gray-light">Card description text</p>
</div>
```

### 5. Hero Section
```html
<section class="bg-linear-blue py-20">
  <div class="container">
    <h1 class="text-dark text-5xl font-bold mb-4">Hero Title</h1>
    <p class="text-dark-gray mb-8">Hero description</p>
    <button class="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl">
      Get Started
    </button>
  </div>
</section>
```

### 6. Service Card
```html
<div class="bg-light-gray-soft rounded-xl p-6 hover:shadow-medium transition-shadow">
  <div class="w-12 h-12 bg-primary-bright rounded-lg flex items-center justify-center mb-4">
    <!-- Icon -->
  </div>
  <h3 class="text-dark font-bold text-lg mb-2">Service Name</h3>
  <p class="text-dark-gray-light text-sm">Service description</p>
</div>
```

### 7. Alert/Notification
```html
<!-- Success -->
<div class="bg-accent-green/10 border border-accent-green text-dark p-4 rounded-lg">
  Success message
</div>

<!-- Warning -->
<div class="bg-accent-yellow/10 border border-accent-yellow text-dark p-4 rounded-lg">
  Warning message
</div>

<!-- Error -->
<div class="bg-accent-red-light border border-accent-red text-dark p-4 rounded-lg">
  Error message
</div>
```

### 8. Badge
```html
<!-- Primary badge -->
<span class="bg-primary text-white px-3 py-1 rounded-full text-sm">New</span>

<!-- Orange badge -->
<span class="bg-accent-orange text-white px-3 py-1 rounded-full text-sm">Popular</span>

<!-- Yellow badge -->
<span class="bg-accent-yellow text-dark px-3 py-1 rounded-full text-sm">Special</span>
```

---

## 🎯 Color Usage Guidelines

### Text Colors
- **Primary text:** `text-dark` (#13171D)
- **Secondary text:** `text-dark-gray` (#444444)
- **Muted text:** `text-dark-gray-light` (#867E7E)
- **Links:** `text-primary hover:text-primary-dark`

### Background Colors
- **Page background:** `bg-light` (white)
- **Card background:** `bg-light-gray` (#DCE0E2)
- **Section background:** `bg-light-blue` (#EBF3F8)
- **Dark section:** `bg-dark` (#13171D)

### Button Colors
- **Primary CTA:** Blue (`bg-primary`)
- **Important action:** Red (`bg-accent-red`)
- **Secondary action:** Orange (`bg-accent-orange`)
- **Outline button:** `border-primary text-primary hover:bg-primary hover:text-white`

### Border Colors
- **Default border:** `border-light-gray` (#DCE0E2)
- **Focus border:** `border-primary`
- **Error border:** `border-accent-red`
- **Divider:** `border-dark-gray-medium`

---

## 🔧 Utility Classes

### Opacity Variants
```html
<!-- Background with opacity -->
<div class="bg-primary/10">10% opacity</div>
<div class="bg-primary/20">20% opacity</div>
<div class="bg-primary/50">50% opacity</div>

<!-- Text with opacity -->
<p class="text-dark/70">70% opacity text</p>
```

### Gradients
```html
<!-- Custom gradient -->
<div class="bg-gradient-to-r from-primary to-primary-bright">Gradient</div>

<!-- With hover -->
<div class="bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark">
  Hover Gradient
</div>
```

---

## 📱 Responsive Color Changes

```html
<!-- Different colors on different screens -->
<div class="bg-light md:bg-light-blue lg:bg-primary">
  Responsive background
</div>

<!-- Text color changes -->
<p class="text-dark md:text-primary lg:text-accent-red">
  Responsive text color
</p>
```

---

## ✨ Animation & Transitions

```html
<!-- Smooth color transitions -->
<button class="bg-primary hover:bg-primary-dark transition-colors duration-300">
  Smooth transition
</button>

<!-- With shadow and scale -->
<div class="bg-light hover:bg-light-blue hover:shadow-medium hover:scale-105 transition-all duration-300">
  Multi-property transition
</div>
```

---

## 🎨 Design Tokens Summary

| Token | Hex | RGBA | Usage |
|-------|-----|------|-------|
| primary | #005AAA | rgba(0, 90, 170, 1) | Main brand color |
| accent-red | #E2001A | rgba(226, 0, 26, 1) | Primary CTAs |
| accent-orange | #FF6B00 | rgba(255, 107, 0, 1) | Secondary actions |
| dark | #13171D | rgba(19, 23, 29, 1) | Text, headers |
| light | #FFFFFF | rgba(255, 255, 255, 1) | Backgrounds |

---

**Use this guide as reference when building components!** 🚀
