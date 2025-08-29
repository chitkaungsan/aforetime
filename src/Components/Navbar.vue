<template>
  <nav class="navbar navbar-expand-lg sticky-top transparent-blur">
    <div class="container-fluid">
      <!-- Left: Logo -->
      <a class="navbar-brand fw-bold brand-logo" href="#">Tribe</a>
      
      <!-- Mobile toggle button -->
      <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <!-- Center: Main heading -->
      <div class="navbar-center d-none d-lg-block">
        <h4 class="main-heading mb-0">Welcome to Our Community</h4>
      </div>
      
      <!-- Right: Navigation menu -->
      <div class="collapse navbar-collapse justify-content-end" id="navMenu">
        <ul class="navbar-nav">
          <!-- Houses dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              HOUSES
            </a>
            <ul class="dropdown-menu custom-dropdown">
              <li><a class="dropdown-item" href="#">Ocean View House</a></li>
              <li><a class="dropdown-item" href="#">Mountain Lodge</a></li>
              <li><a class="dropdown-item" href="#">City Apartment</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">All Properties</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link" href="#">ACTIVITIES</a></li>
          <li class="nav-item"><a class="nav-link" href="#">ABOUT</a></li>
          <li class="nav-item"><a class="nav-link" href="#">CONTACT</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
// No additional JavaScript needed for this component
</script>

<style scoped>
/* Transparent blur navbar */
.transparent-blur {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1000;
}

/* Logo styling */
.brand-logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50 !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  letter-spacing: 1px;
}

/* Center heading */
.navbar-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.main-heading {
  color: #2c3e50;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
}

/* Navigation links */
.navbar-nav .nav-link {
  font-weight: 600;
  color: #2c3e50 !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin: 0 0.5rem;
  padding: 0.75rem 1rem !important;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
}

.navbar-nav .nav-link:hover {
  color: #3498db !important;
  background: rgba(52, 152, 219, 0.1);
  transform: translateY(-2px);
}

/* Dropdown styling */
.custom-dropdown {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin-top: 0.5rem;
  overflow: hidden;
}

.custom-dropdown .dropdown-item {
  color: #2c3e50;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;
}

.custom-dropdown .dropdown-item:hover {
  background: rgba(52, 152, 219, 0.1);
  color: #3498db;
  transform: translateX(5px);
}

.custom-dropdown .dropdown-divider {
  border-color: rgba(52, 152, 219, 0.2);
  margin: 0.5rem 0;
}

/* Custom mobile toggler */
.custom-toggler {
  border: none;
  padding: 0.25rem;
}

.custom-toggler:focus {
  box-shadow: 0 0 0 0.2rem rgba(52, 152, 219, 0.25);
}

/* Responsive adjustments */
@media (max-width: 991px) {
  .navbar-center {
    display: none !important;
  }
  
  .navbar-collapse {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 12px;
    margin-top: 1rem;
    padding: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  .navbar-nav .nav-link {
    margin: 0.25rem 0;
  }
}

/* Demo content styling */
.demo-content {
  min-height: 200vh;
}

.hero-section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-section p {
  font-size: 1.2rem;
  max-width: 600px;
}

.content-section {
  padding: 5rem 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.content-section h2 {
  color: #2c3e50;
  margin-bottom: 2rem;
  font-weight: 600;
}

.content-section p {
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

/* Enhanced hover effects */
.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 5px;
  left: 50%;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 80%;
}

/* Smooth animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.navbar {
  animation: fadeInUp 0.6s ease;
}
</style>