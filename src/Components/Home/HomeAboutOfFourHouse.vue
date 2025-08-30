<template>
  <section class="welcome-section">
    <div class="container">
      <div class="col-sm-12 col-lg-12 col-md-12 text-center">
        <h1 class="card-main-title py-4">Houses of AForetime</h1>
      </div>
      <!-- First Card: Image Left, Content Right -->
      <div class="magazine-card">
        
        <div class="card-content">
          <h2 class="card-title">Bloombing Village</h2>
          <p class="card-text">
            AForetime offers cozy houses with modern comfort surrounded by nature's tranquil beauty in the heart of Koh Samui. 
            Our thoughtfully designed accommodations provide the perfect blend of luxury and serenity, where every detail has been 
            crafted to ensure your peaceful escape from the everyday world.
          </p>
          <button class="btn-discover">
            Discover More
          </button>
        </div>
        <div class="card-image">
          <img :src="jungle_hut_bunglow_1" alt="Resort Villa" loading="lazy">
        </div>
      </div>

      <!-- Second Card: Content Left, Image Right (Reversed) -->
      <div class="magazine-card reverse">
        <div class="card-content">
          <h2 class="card-title">jungle Hut</h2>
          <p class="card-text">
            Experience authentic Thai hospitality while enjoying contemporary amenities, stunning tropical gardens, and breathtaking 
            views that will create memories to last a lifetime. Our resort combines traditional charm with modern luxury for the 
            ultimate getaway experience.
          </p>
          <button class="btn-discover">
            Learn More
          </button>
        </div>
        <div class="card-image">
          <img :src="jungle_hut_entrance2" alt="Thai Garden" loading="lazy">
        </div>
      </div>
       <div class="magazine-card">
        
        <div class="card-content">
          <h2 class="card-title">Mai Palace</h2>
          <p class="card-text">
            AForetime offers cozy houses with modern comfort surrounded by nature's tranquil beauty in the heart of Koh Samui. 
            Our thoughtfully designed accommodations provide the perfect blend of luxury and serenity, where every detail has been 
            crafted to ensure your peaceful escape from the everyday world.
          </p>
          <button class="btn-discover">
            Discover More
          </button>
        </div>
        <div class="card-image">
          <img :src="jungle_hut_entrance2" alt="Resort Villa" loading="lazy">
        </div>
      </div>

      <!-- Second Card: Content Left, Image Right (Reversed) -->
      <div class="magazine-card reverse">
        <div class="card-content">
          <h2 class="card-title">Tribe</h2>
          <p class="card-text">
            Experience authentic Thai hospitality while enjoying contemporary amenities, stunning tropical gardens, and breathtaking 
            views that will create memories to last a lifetime. Our resort combines traditional charm with modern luxury for the 
            ultimate getaway experience.
          </p>
          <button class="btn-discover">
            Learn More
          </button>
        </div>
        <div class="card-image">
          <img :src="jungle_hut_bunglow_1" alt="Thai Garden" loading="lazy">
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import jungle_hut_bunglow_1 from '../../assets/Jungle/jungle_hut_bunglow_1.jpg'
import jungle_hut_entrance2 from '../../assets/Jungle/jungle_hut_entrance2.jpg'
</script>

<style scoped>
.welcome-section {
  padding: 40px 0 10px;
  background-color: #ffffff;
}

.main-title-section {
  margin-bottom: 60px;
}

.main-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 1rem;
  line-height: 1.1;
  position: relative;
}

.main-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 5px;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  border-radius: 3px;
}

.main-subtitle {
  font-size: 1.3rem;
  color: #7f8c8d;
  font-weight: 500;
  margin-top: 25px;
  font-style: italic;
}

.container-fluid {
  padding: 0 40px;
}

.magazine-card {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  gap: 80px;
  min-height: 280px;
}

.magazine-card:last-child {
  margin-bottom: 0;
}

.magazine-card.reverse {
  flex-direction: row-reverse;
}

.card-image {
  flex: 1;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.card-image img {
  width: 100%;
  height: 380px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card-image:hover img {
  transform: scale(1.05);
}

.card-content {
  flex: 1;
  padding: 30px;
}
.card-main-title{
     font-size: 3.4 rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  position: relative;
}
.card-title {
  font-size: 2.0 rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  position: relative;
}
.card-main-title::after {
   content: '';
  position: absolute;
  bottom: 5px;
  left: 47%;
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  border-radius: 2px;
}
.card-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  border-radius: 2px;
}

.card-text {
  font-size: 1.3rem;
  line-height: 1.8;
  color: #5a6c7d;
  margin-bottom: 2.5rem;
  font-weight: 400;
  text-indent: 15%;
}

.btn-discover {
  background: linear-gradient(135deg, #3498db, #2ecc71);
  color: white;
  border: none;
  padding: 16px 35px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 6px 20px rgba(52, 152, 219, 0.3);
}

.btn-discover:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(52, 152, 219, 0.4);
  background: linear-gradient(135deg, #2980b9, #27ae60);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .magazine-card {
    gap: 60px;
  }
  
  .card-image img {
    height: 350px;
  }
}

@media (max-width: 992px) {
  .magazine-card {
    flex-direction: column;
    gap: 30px;
    margin-bottom: 25px;
  }
  
  .magazine-card.reverse {
    flex-direction: column;
  }
  
  .card-content {
    padding: 25px;
    text-align: center;
  }
  
  .card-title {
    font-size: 2.2rem;
  }
  
  .card-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .card-image img {
    height: 320px;
  }
}

@media (max-width: 768px) {
  .welcome-section {
    padding: 30px 0;
  }
  
  .main-title {
    font-size: 2.5rem;
    margin-bottom: 0.8rem;
  }
  
  .main-subtitle {
    font-size: 1.1rem;
    margin-top: 20px;
  }
  
  .main-title-section {
    margin-bottom: 40px;
  }
  
  .magazine-card {
    gap: 25px;
    margin-bottom: 20px;
    min-height: auto;
  }
  
  .card-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .card-text {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  .card-image img {
    height: 280px;
  }
  
  .btn-discover {
    padding: 14px 30px;
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .welcome-section {
    padding: 20px 0;
  }
  
  .main-title {
    font-size: 2rem;
  }
  
  .main-subtitle {
    font-size: 1rem;
    margin-top: 15px;
  }
  
  .main-title::after {
    width: 80px;
    height: 4px;
  }
  
  .main-title-section {
    margin-bottom: 30px;
  }
  
  .container-fluid {
    padding: 0 15px;
  }
  
  .magazine-card {
    gap: 20px;
    margin-bottom: 15px;
  }
  
  .card-title {
    font-size: 1.8rem;
  }
  
  .card-text {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }
  
  .card-image img {
    height: 250px;
  }
  
  .card-content {
    padding: 20px;
  }
  
  .btn-discover {
    padding: 12px 25px;
    font-size: 0.85rem;
  }
}</style>