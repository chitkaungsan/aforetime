<template>
  <section 
    class="hero-section d-flex flex-column align-items-center justify-content-center text-center text-white footer-background-section" >
    
    <div class="container">
      <!-- Logo -->
      <!-- <div class="mb-3">
        <img src="../assets/logo.png" alt="Logo" class="logo-img">
      </div> -->

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
          <p class="contact-info">35 Moo 3 Talingngam</p>
        </div>
        <div class="col-md-4 mb-2">
          <p class="contact-info">0843874778</p>
        </div>
        <div class="col-md-4 mb-2">
          <p class="contact-info">Email</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  padding: 60px 20px;
  background-color: #202022;
}

.logo-img {
  width: 80px;
  height: auto;
}

.hero-title {
  font-size: 95px;
  font-family: 'Marcellus', cursive;
  margin-bottom: 10px;
}

.hero-subtitle {
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ccc;
}

.btn-orange {
  background-color: #f4511e;
  color: #fff;
  border-radius: 4px;
  transition: all 0.3s ease;
}
.btn-orange:hover {
  background-color: #d63c10;
}

.contact-info {
  font-size: 0.95rem;
  font-weight: 300;
  color: #ddd;
}

.footer-background-section {
  background-color: #141a24; /* darker base */
  background-size: 100px 100px;
  background-position: center center;
  background-repeat: repeat;
  background-attachment: local;
  min-height: 400px;

  /* Darker subtle pattern */
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

/* 🔹 Responsive Queries */

/* Large tablets */
@media (max-width: 1200px) {
  .hero-title {
    font-size: 72px;
  }
}

/* Tablets */
@media (max-width: 992px) {
  .hero-title {
    font-size: 58px;
  }
  .hero-subtitle {
    font-size: 0.95rem;
  }
  .logo-img {
    width: 70px;
  }
}

/* Mobiles */
@media (max-width: 768px) {
  .hero-section {
    padding: 40px 15px;
  }
  .hero-title {
    font-size: 42px;
  }
  .hero-subtitle {
    font-size: 0.9rem;
  }
  .btn-orange {
    font-size: 1rem;
    padding: 10px 25px;
  }
  .contact-info {
    font-size: 1.85rem;
  }
  .logo-img {
    width: 60px;
  }
}

/* Small Mobiles */
@media (max-width: 480px) {
  .hero-title {
    font-size: 32px;
  }
  .hero-subtitle {
    font-size: 0.85rem;
    letter-spacing: 0.5px;
  }
  .btn-orange {
    font-size: 0.9rem;
    padding: 8px 20px;
  }
  .logo-img {
    width: 50px;
  }
  .contact-info {
    font-size: 0.8rem;
  }
}
</style>
