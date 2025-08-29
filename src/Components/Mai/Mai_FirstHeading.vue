<template>
    <section
      class="hero d-flex align-items-center justify-content-center flex-column"
    >
      <div class="hero-content text-center">
        <h2 class="tribe-title-main fade-in-up">TALING BEACH - KOH SAMUI</h2>
        <div class="tribe-title fade-in-up delay-1">Mai Place</div>
        <br />
        <button ref="shimmerButton" class="book-btn btn fade-in-up delay-2">
          BOOK NOW
        </button>
      </div>
      <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
      </div>
    </section>
</template>
<script setup>
import { ref, onMounted } from "vue";

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


.bg-overlay {
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.4),
    rgba(166, 125, 119, 0.3),
    rgba(230, 144, 0, 0.3)
  ) !important;
  backdrop-filter: blur(1px);
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


/* Section Styling */

.section-subtitle {
    font-size: 1.2rem;
    color: #666;
    font-weight: 400;
}

.divider {
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #A67D77, #e69000);
    border: none;
}

/* Animations */
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

@keyframes pulse {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.8);
    }
    50% {
        opacity: 0.6;
        transform: translate(-50%, -50%) scale(1.2);
    }
    100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(1.5);
    }
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

/* Responsive */
@media (max-width: 768px) {
    .mai-rooms {
        height: 200px;
    }
    
    .row {
        padding: 2rem !important;
    }
}
.tribe-title-main {
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

</style>