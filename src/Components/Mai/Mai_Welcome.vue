<template>
     <!-- Welcome Section -->
    <section class="welcome">
      <div class="col-12 text-center align-items-center">
        <img
          ref="logoRef"
          src="../../assets/Logo/mai_logo-removebg-preview.png"
          alt="Mai Place"
          class="img-fluid mai-palace-logo scale-in"
        />
      </div>
      <h2 class="slide-in-left">Welcome to the Jungle</h2>
      <p class="test fade-in-paragraph delay-1 welcome-text">
        The heart of Aforetime Houses, Mai Place is the place where it all
        started.
      </p>
      <p class="test fade-in-paragraph delay-2 welcome-text">
        Just footsteps away from a secluted beach, this is a place where you can
        find peace and tranqulity.
      </p>

      <p class="fade-in-paragraph delay-3 welcome-text">
        If community spirit is sparkling in your heart, lively Mai Place could
        be the option for you. Staying here makes it easy to be part of
        Aforetime family, when cosy social outdoor area invitives you to sit
        down and make yourself at home.
      </p>
      <p class="test fade-in-paragraph delay-4 welcome-text">
        With strong community mindset, you can find travellers cooking or
        playing board games together in the evenings. Located next to the beach,
        you don´t want to miss picture perfect sunsets. So grab a drink and
        enjoy the evening with other travellers.
      </p>
      <p class="fade-in-paragraph delay-5 welcome-text">
        Mai Place a place to socialize and relax.
      </p>
    </section>
</template>

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


</style>
