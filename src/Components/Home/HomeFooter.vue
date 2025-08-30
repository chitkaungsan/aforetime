<template>
  <section 
    class="hero-section d-flex flex-column align-items-center justify-content-center text-center text-white footer-background-section" >
    
    <div class="overlay"></div> <!-- Soft overlay on background -->

    <div class="container position-relative">
      <!-- Title -->
      <h1 class="hero-title">Aforetime Houses</h1>
      <p class="hero-subtitle">Find your peace (or something like that)</p>

      <!-- Button -->
      <div class="my-4">
        <button class="btn btn-lg btn-orange px-5">BOOK NOW</button>
      </div>

      <!-- Contact Info -->
      <div class="row text-center mt-5">
        <div class="col-md-4 mb-2">
          <p class="contact-info"><i class="bi bi-geo-alt-fill"></i> 35 Moo 3 Talingngam</p>
        </div>
        <div class="col-md-4 mb-2">
          <p class="contact-info"><i class="bi bi-telephone-fill"></i> 0843874778</p>
        </div>
        <div class="col-md-4 mb-2">
          <p class="contact-info"><i class="bi bi-envelope-fill"></i> info@aforetime.com</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  padding: 60px 20px;
  overflow: hidden;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(20, 22, 30, 0.6); /* soft dark overlay */
  backdrop-filter: blur(3px);        /* smooth the flower bg */
}

/* Hero Title */
.hero-title {
  font-size: 90px;
  font-family: 'Marcellus', serif;
  margin-bottom: 10px;
  color: #f8f9fa;
  text-shadow: 0 4px 12px rgba(0,0,0,0.6);
}

.hero-subtitle {
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #d1d5df;
}

/* Button */
.btn-orange {
  background: linear-gradient(135deg, #e6974d, #d16a3a);
  color: #fff;
  border-radius: 50px;
  border: none;
  transition: all 0.3s ease;
  padding: 14px 40px;
  font-weight: 500;
  box-shadow: 0 6px 18px rgba(230, 126, 77, 0.35);
}
.btn-orange:hover {
  background: linear-gradient(135deg, #d16a3a, #c05528);
  transform: translateY(-3px) scale(1.02);
}

/* Contact Info */
.contact-info {
  font-size: 1rem;
  font-weight: 300;
  color: #f0f2f5;
}
.contact-info i {
  margin-right: 8px;
  color: #e6974d;
}

/* Footer background flower gradient */
.footer-background-section {
  background-color: #2a2d35;
  background-size: 120px 120px;
  background-repeat: repeat;
  background-attachment: local;
  min-height: 400px;
background-image: radial-gradient(
      circle at 25% 25%,
      rgba(0, 102, 204, 0.15) 12%,
      transparent 16%
    ),
    radial-gradient(
      circle at 75% 25%,
      rgba(0, 102, 204, 0.15) 12%,
      transparent 16%
    ),
    radial-gradient(
      circle at 25% 75%,
      rgba(0, 102, 204, 0.15) 12%,
      transparent 16%
    ),
    radial-gradient(
      circle at 75% 75%,
      rgba(0, 102, 204, 0.15) 12%,
      transparent 16%
    ),
    radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.05) 18%,
      transparent 20%
    ),
    linear-gradient(135deg, #141a24, #0a1a33); /* darker gradient */
}

/* Responsive */
@media (max-width: 992px) {
  .hero-title { font-size: 60px; }
}
@media (max-width: 768px) {
  .hero-title { font-size: 42px; }
}
@media (max-width: 480px) {
  .hero-title { font-size: 32px; }
}
</style>
