<template>
<div class="full-screen-amenities">
      
      <div
        class="amenities-background-section p-5 text-white position-relative overflow-hidden"
      >
      
      
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <!-- Overlay (for readability) -->
              <div
                class="position-absolute top-0 start-0 w-100 h-100 bg-overlay"
              ></div>
              <div class="col-sm-12 col-lg-12 col-md-12 text-center">
                <h1 class="py-1 pb-3 text-light">WE OFFER EVERYTHING YOU NEED  A GOOD STAY</h1>
              </div>

              <!-- Content -->
              <div class="row position-relative text-center g-4">
                <!-- Free Wi-Fi -->
                <div class="col-md-4 mb-4">
                  <div class="amenity-item p-4 rounded shadow">
                    <div class="amenity-icon mb-3">
                      <i class="bi bi-wifi fs-1"></i>
                    </div>
                    <h5 class="fw-bold amenity-title">Free Wi-Fi</h5>
                    <p class="amenity-desc">
                      High-speed internet throughout the property
                    </p>
                  </div>
                </div>

                <!-- Free Car Park -->
                <div class="col-md-4 mb-4">
                  <div class="amenity-item p-4 rounded shadow">
                    <div class="amenity-icon mb-3">
                      <div class="d-flex align-items-center gap-2">
                        <i class="bi bi-car-front-fill fs-1 px-2"></i>
                        <i class="bi bi-p-circle-fill fs-1 px-2"></i>
                      </div>
                    </div>
                    <h5 class="fw-bold amenity-title">Free Car Park</h5>
                    <p class="amenity-desc">
                      Secure parking space for all guests
                    </p>
                  </div>
                </div>

                <!-- Free Activities & Games -->
                <div class="col-md-4 mb-4">
                  <div class="amenity-item p-4 rounded shadow">
                    <div class="amenity-icon mb-3">
                      <i class="bi bi-controller fs-1"></i>
                    </div>
                    <h5 class="fw-bold amenity-title">
                      Access Activities & Games
                    </h5>
                    <p class="amenity-desc">
                      Board games, beach volleyball, and more
                    </p>
                  </div>
                </div>

                <!-- Beach Access -->
                <div class="col-md-4 mb-4">
                  <div class="amenity-item p-4 rounded shadow">
                    <div class="amenity-icon mb-3">
                      <div class="d-flex align-items-center gap-2">
                        <i class="bi bi-water fs-1"></i>
                      </div>
                    </div>
                    <h5 class="fw-bold amenity-title">Beach Access</h5>
                    <p class="amenity-desc">
                      Steps away from pristine Taling Beach
                    </p>
                  </div>
                </div>

                <!-- Community Kitchen -->
                <div class="col-md-4 mb-4">
                  <div class="amenity-item p-4 rounded shadow">
                    <div class="amenity-icon mb-3">
                      <div class="d-flex align-items-center gap-2">
                        <i class="bi bi-egg-fried fs-1"></i>
                        <i class="bi bi-cup-hot fs-1"></i>
                      </div>
                    </div>
                    <h5 class="fw-bold amenity-title">Community Kitchen</h5>
                    <p class="amenity-desc">
                      Fully equipped for cooking & socializing
                    </p>
                  </div>
                </div>

                <!-- Sunset Views -->
                <div class="col-md-4 mb-4">
                  <div class="amenity-item p-4 rounded shadow">
                    <div class="amenity-icon mb-3">
                      <i class="bi bi-sunset fs-1"></i>
                    </div>
                    <h5 class="fw-bold amenity-title">Sunset Views</h5>
                    <p class="amenity-desc">
                      Picture-perfect sunsets every evening
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>
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
</style>