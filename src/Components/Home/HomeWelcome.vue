<template>
  <section class="welcome-section">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10 text-center">
          <h2 class="welcome-title">Welcome to AForetime Resort</h2>
          <div class="welcome-content">
            <p class="welcome-text">
              AForetime offers cozy houses with modern comfort surrounded by nature's tranquil beauty in the heart of Koh Samui. 
              Our thoughtfully designed accommodations provide the perfect blend of luxury and serenity, where every detail has been 
              crafted to ensure your peaceful escape from the everyday world.
            </p>
            <p class="welcome-text">
              Experience authentic Thai hospitality while enjoying contemporary amenities, stunning tropical gardens, and breathtaking 
              views that will create memories to last a lifetime.
            </p>
            <!-- <button class="btn-discover">
              Discover More
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.welcome-section {
  padding: 80px 0;
  background-color: #f8f9fa;
  position: relative;
}

.welcome-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #e9ecef 20%, #e9ecef 80%, transparent);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.welcome-title {
  font-family: "Marcellus SC", serif !important;
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 2rem;
  position: relative;
}

.welcome-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  border-radius: 2px;
}

.welcome-content {
  margin-top: 2rem;
}

.welcome-text {
  font-size: 1.6rem;
  line-height: 1.8;
  color: #5a6c7d;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.welcome-text:last-of-type {
  margin-bottom: 2.5rem;
}

.btn-discover {
  background: linear-gradient(135deg, #3498db, #2ecc71);
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
}

.btn-discover:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(52, 152, 219, 0.4);
  background: linear-gradient(135deg, #2980b9, #27ae60);
}

.btn-discover:active {
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .welcome-section {
    padding: 60px 0;
  }
  
  .welcome-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  .welcome-text {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }
  
  .btn-discover {
    padding: 12px 30px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .welcome-section {
    padding: 40px 0;
  }
  
  .welcome-title {
    font-size: 1.8rem;
  }
  
  .container {
    padding: 0 15px;
  }
}</style>