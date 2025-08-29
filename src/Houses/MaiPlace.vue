<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <Mai_FirstHeading />

    <!-- Welcome Section -->
    <Mai_Welcome />
    <!-- Review Section -->
    <Mai_Review />
    <!-- Front Home -->
    <section class="hero1 d-flex align-items-center flex-column">
      <div class="hero-content text-center"></div>
      <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
      </div>
    </section>

    <!-- Facilities Section -->
     <Mai_Facilities />

    <!-- Ratings Section     -->
<Mai_Rating />
<section>
   <Mai_CouldThisBeYourPlace />
</section>
<section>
  <Mai_HowAboutTheRoom />
</section>
<section>
  <Mai_AndThePricesOfCourse />
</section>
<section>
  <Footer />
</section>
  </DefaultLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import DefaultLayout from "../Layouts/Mai_Layouts.vue";
import Mai_CouldThisBeYourPlace from "@/Components/Mai/Mai_CouldThisBeYourPlace.vue";
import Mai_HowAboutTheRoom from "@/Components/Mai/Mai_HowAboutTheRoom.vue";
import Mai_AndThePricesOfCourse from "@/Components/Mai/Mai_AndThePricesOfCourse.vue";
import Footer from "@/Components/Footer.vue";
import Mai_FirstHeading from "@/Components/Mai/Mai_FirstHeading.vue";
import Mai_Welcome from "@/Components/Mai/Mai_Welcome.vue";
import Mai_Review from "@/Components/Mai/Mai_Review.vue";
import Mai_Facilities from "@/Components/Mai/Mai_Facilities.vue";
import Mai_Rating from "@/Components/Mai/Mai_Rating.vue";

const shimmerButton = ref(null);
const logoRef = ref(null);

onMounted(() => {
 

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  // Observe all animated elements
  const animatedElements = document.querySelectorAll(
    ".fade-in-paragraph, .slide-in-left, .scale-in"
  );
  animatedElements.forEach((el) => observer.observe(el));

  // Logo hover animation
  if (logoRef.value) {
    logoRef.value.addEventListener("mouseenter", () => {
      logoRef.value.classList.add("pulse");
    });
    logoRef.value.addEventListener("mouseleave", () => {
      logoRef.value.classList.remove("pulse");
    });
  }
   // Shimmer effect for button
  setInterval(() => {
    if (shimmerButton.value) {
      shimmerButton.value.classList.add("shimmer");
      setTimeout(() => {
        shimmerButton.value.classList.remove("shimmer");
      }, 1000);
    }
  }, 3000);
});
</script>

<style scoped>
/* Hero Section Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeInParagraph {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Base animation classes */
.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.fade-in-up.delay-1 {
  animation-delay: 0.3s;
}

.fade-in-up.delay-2 {
  animation-delay: 0.6s;
}

.slide-in-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s ease-out;
}

.slide-in-left.animate {
  opacity: 1;
  transform: translateX(0);
}

.scale-in {
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.6s ease-out;
}

.scale-in.animate {
  opacity: 1;
  transform: scale(1);
}

.fade-in-paragraph {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.fade-in-paragraph.animate {
  opacity: 1;
  transform: translateY(0);
}

.fade-in-paragraph.delay-1 {
  transition-delay: 0.1s;
}

.fade-in-paragraph.delay-2 {
  transition-delay: 0.2s;
}

.fade-in-paragraph.delay-3 {
  transition-delay: 0.3s;
}

.fade-in-paragraph.delay-4 {
  transition-delay: 0.4s;
}

.fade-in-paragraph.delay-5 {
  transition-delay: 0.5s;
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

.scroll-arrow {
  width: 20px;
  height: 20px;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(45deg);
  opacity: 0.7;
}

.hero {
  background: url("../assets/Logo/mai_background.png") no-repeat center
    center/cover;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}
.hero1 {
  background: url("../assets/Logo/mai_front_house.png") no-repeat center
    center/cover;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero h2 {
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 2px;
  font-family: "JuliusSansOne";
  padding-bottom: 20px;
}

.tribe-title {
  font-family: "ClickerScriptRegular";
  font-weight: normal;
  font-size: 2.5rem;
  background: #a67d77;
  color: white;
  padding: 7px 250px;
  border-radius: 5px;
  display: inline-block;
  transition: all 0.3s ease;
}

.tribe-title:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(166, 125, 119, 0.3);
}

.book-btn {
  font-family: "JuliusSansOne";
  margin-top: 20px;
  background: #202022;
  border: none;
  padding: 12px 30px;
  font-weight: 500;
  color: #fff;
  border-radius: 5px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
}

.book-btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: skewX(-20deg);
}

.book-btn.shimmer::after {
  animation: shimmer 1s forwards;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.book-btn:hover {
  background: #e69000;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.welcome {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 60px 15px;
  font-family: "MarcellusSC";
  position: relative;
  overflow: hidden;
}

.welcome::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #a67d77, #e69000, #a67d77);
}

.welcome h2 {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.8rem;
  margin-bottom: 20px;
  text-align: center;
}

.welcome p {
  max-width: 800px;
  margin: 0 auto 20px;
  line-height: 1.7;
  color: #555;
  text-align: center;
}

.test {
  font-weight: 400;
  color: #333;
}

.mai-palace-logo {
  width: 20% !important;
  height: 20% !important;
  transition: all 0.3s ease;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.mai-palace-logo.pulse {
  animation: pulse 0.6s ease-in-out;
}

.mai-palace-logo:hover {
  transform: rotate(5deg);
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.2));
}

.tribe-title-main {
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Responsive animations */
@media (max-width: 768px) {
  .tribe-title {
    padding: 7px 50px;
    font-size: 2rem;
  }

  .fade-in-up {
    animation-duration: 0.6s;
  }

  .mai-palace-logo {
    width: 40% !important;
    height: 40% !important;
  }
}

/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}

/* Add subtle parallax effect */
@media (prefers-reduced-motion: no-preference) {
  .hero {
    background-attachment: fixed;
  }
}
.welcome-text {
  font-size: 25px;
  font-family: "GowunDodum" !important;
  font-weight: 500;
}
.amenities-background-section {
  background-color: #1e2a38; /* Deep navy base */
  background-size: 100px 100px; /* Flower pattern size */
  background-position: center center;
  background-repeat: repeat;
  background-attachment: local;
  min-height: 400px;

  /* Flower-like pattern */
  background-image: radial-gradient(
      circle at 25% 25%,
      rgba(0, 102, 204, 0.3) 15%,
      transparent 16%
    ),
    radial-gradient(
      circle at 75% 25%,
      rgba(0, 102, 204, 0.3) 15%,
      transparent 16%
    ),
    radial-gradient(
      circle at 25% 75%,
      rgba(0, 102, 204, 0.3) 15%,
      transparent 16%
    ),
    radial-gradient(
      circle at 75% 75%,
      rgba(0, 102, 204, 0.3) 15%,
      transparent 16%
    ),
    radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.1) 20%,
      transparent 21%
    ),
    linear-gradient(135deg, #1e2a38, #003366); /* Blue gradient background */
}

.bg-overlay {
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.4),
    rgba(166, 125, 119, 0.3),
    rgba(230, 144, 0, 0.3)
  ) !important;
  backdrop-filter: blur(1px);
}

.amenity-item {
  background: rgba(255, 255, 255, 0.15) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.amenity-item:hover {
  background: rgba(255, 255, 255, 0.25) !important;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3) !important;
}

.amenity-icon {
  font-size: 2.5rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.amenity-item:hover .amenity-icon {
  transform: scale(1.1) rotate(5deg);
  color: #ffd700;
}

.amenity-title {
  font-family: "Marcellus SC", serif;
  font-size: 1.2rem;
  color: white !important;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  margin-bottom: 0.5rem;
}

.amenity-desc {
  font-family: "Open Sans", sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9) !important;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  margin-bottom: 0;
  line-height: 1.4;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .amenities-background-section {
    min-height: 300px !important;
    padding: 2rem !important;
  }

  .amenity-item {
    min-height: 150px;
    margin-bottom: 1rem;
  }

  .amenity-icon {
    font-size: 2rem;
  }

  .amenity-title {
    font-size: 1rem;
  }

  .amenity-desc {
    font-size: 0.8rem;
  }
}

/* Animation for smooth entrance */
.amenity-item {
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

.amenity-item:nth-child(1) {
  animation-delay: 0.1s;
}
.amenity-item:nth-child(2) {
  animation-delay: 0.2s;
}
.amenity-item:nth-child(3) {
  animation-delay: 0.3s;
}
.amenity-item:nth-child(4) {
  animation-delay: 0.4s;
}
.amenity-item:nth-child(5) {
  animation-delay: 0.5s;
}
.amenity-item:nth-child(6) {
  animation-delay: 0.6s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
* {
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
    color: #333;
}

.book-btn {
  position: relative;
  overflow: hidden;
}

.book-btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%; /* shimmer width */
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.6),
    transparent
  );
}

.book-btn.shimmer::after {
  animation: shimmer 1s forwards;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* Responsive Design */
@media (max-width: 992px) {
    .rating-card {
        margin-bottom: 2rem;
    }
    
    .section-title {
        font-size: 2rem;
    }
}

@media (max-width: 768px) {
    .rating-card {
        padding: 2rem 1rem;
    }
    
    .rating-score {
        font-size: 2.5rem;
    }
    
    .star-container {
        width: 60px;
        height: 60px;
    }
    
    .star-icon {
        width: 45px;
        height: 45px;
    }
    
    .review-highlights {
        flex-direction: column;
        align-items: center;
    }
    
    .highlight-item {
        width: 100%;
        max-width: 250px;
        text-align: center;
    }
}

@media (max-width: 576px) {
    .section-title {
        font-size: 1.8rem;
    }
    
    .rating-card {
        padding: 1.5rem 1rem;
    }
    
    .reviews-summary {
        padding: 1.5rem;
        margin-top: 1rem;
    }
}

/* Dark mode support (optional) */
@media (prefers-color-scheme: dark) {
    .ratings-section {
        background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    }
    
    .rating-card {
        background: #34495e;
        color: white;
    }
    
    .section-title, .rating-score {
        color: white;
    }
    
    .reviews-summary {
        background: #34495e;
        color: white;
    }
}

/* Print styles */
@media print {
    .rating-card {
        break-inside: avoid;
        box-shadow: none;
        border: 1px solid #ddd;
    }
}
.image-card-mai-room {
    border-radius: 15px;
    padding: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    margin-bottom: 20px;
}

.image-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.mai-rooms {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Responsive */
@media (max-width: 768px) {
    .mai-rooms {
        height: 200px;
    }
    
    .row {
        padding: 2rem !important;
    }
}
</style>
