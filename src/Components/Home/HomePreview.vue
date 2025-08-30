<template>
  <section class="rooms-section">
    <div class="container">
      <!-- Main Title -->
      <div class="text-center mb-5">
        <h1 class="main-title py-4">Rooms/Houses Preview</h1>
        <h2 class="section-title">Our Houses & Rooms</h2>
        <p class="section-subtitle">Choose from our carefully designed accommodations</p>
      </div>

      <!-- Masonry Gallery -->
      <div class="masonry-gallery">
        <!-- Deluxe Room -->
        <div class="gallery-item large">
          <div class="room-card">
            <div class="room-image">
              <img :src="number_1" alt="Beach House" loading="lazy">
              <div class="room-overlay">
                <div class="room-info">
                  <h3 class="room-title">Deluxe Room</h3>
                  <p class="room-description">Elegant comfort with modern amenities and stunning garden views</p>
                  <button class="btn-view">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Garden House -->
        <div class="gallery-item medium">
          <div class="room-card">
            <div class="room-image">
              <img :src="number_5" alt="Garden House" loading="lazy">
              <div class="room-overlay">
                <div class="room-info">
                  <h3 class="room-title">Garden House</h3>
                  <p class="room-description">Private sanctuary surrounded by tropical gardens</p>
                  <button class="btn-view">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Family Villa -->
        <div class="gallery-item small">
          <div class="room-card">
            <div class="room-image">
              <img :src="number_7" alt="Family Villa" loading="lazy">
              <div class="room-overlay">
                <div class="room-info">
                  <h3 class="room-title">Family Villa</h3>
                  <p class="room-description">Spacious villa perfect for family getaways</p>
                  <button class="btn-view">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pool Suite -->
        <div class="gallery-item medium">
          <div class="room-card">
            <div class="room-image">
              <img :src="number_4" alt="Pool Suite" loading="lazy">
              <div class="room-overlay">
                <div class="room-info">
                  <h3 class="room-title">King Size Bed</h3>
                  <p class="room-description">Luxury suite with private pool access</p>
                  <button class="btn-view">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Beach House -->
        <div class="gallery-item large">
          <div class="room-card">
            <div class="room-image">
              <img :src="number_8" alt="Beach House" loading="lazy">
              <div class="room-overlay">
                <div class="room-info">
                  <h3 class="room-title">Beach House</h3>
                  <p class="room-description">Oceanfront house with panoramic sea views</p>
                  <button class="btn-view">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mountain View Room -->
        <div class="gallery-item large">
          <div class="room-card">
            <div class="room-image">
              <img :src="number_9" alt="Deluxe Room" loading="lazy">
              <div class="room-overlay">
                <div class="room-info">
                  <h3 class="room-title">Deluxe Room</h3>
                  <p class="room-description">Elegant comfort with modern amenities and stunning garden views</p>
                  <button class="btn-view">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
                <div class="gallery-item large">
          <div class="room-card">
            <div class="room-image">
              <img :src="number_10" alt="Deluxe Room" loading="lazy">
              <div class="room-overlay">
                <div class="room-info">
                  <h3 class="room-title">Rest Room</h3>
                  <p class="room-description">Elegant comfort with modern amenities and stunning garden views</p>
                  <button class="btn-view">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-5">
        <button class="btn-view-all">
          View All Accommodations
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
import number_1 from '../../assets/sample_home_image/1.jpeg'
import number_2 from '../../assets/sample_home_image/2.jpeg'
import number_3 from '../../assets/sample_home_image/3.jpeg'
import number_4 from '../../assets/sample_home_image/4.jpeg'
import number_5 from '../../assets/sample_home_image/5.jpeg'
import number_6 from '../../assets/sample_home_image/6.jpeg'
import number_7 from '../../assets/sample_home_image/7.jpeg'
import number_8 from '../../assets/sample_home_image/8.jpeg'
import number_9 from '../../assets/sample_home_image/9.JPG'
import number_10 from '../../assets/sample_home_image/10.JPG'

</script>
<style scoped>
.rooms-section {
  padding: 80px 0;
  background-color: #f8f9fa;
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

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-top: 20px;
}

.masonry-gallery {
  column-count: 3;
  column-gap: 20px;
  column-fill: balance;
}

.gallery-item {
  break-inside: avoid;
  margin-bottom: 20px;
  display: inline-block;
  width: 100%;
}

.room-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.room-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.room-image {
  position: relative;
  overflow: hidden;
}

.room-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.room-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 30px 20px 20px;
  transform: translateY(100%);
  transition: all 0.3s ease;
}

.room-card:hover .room-overlay {
  transform: translateY(0);
}

.room-info {
  text-align: center;
  color: white;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.room-card:hover .room-info {
  transform: translateY(0);
}

.room-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.room-description {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  opacity: 0.9;
}

.btn-view {
  background: white;
  color: #3498db;
  border: none;
  padding: 10px 25px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
}

.btn-view:hover {
  background: #2c3e50;
  color: white;
  transform: scale(1.05);
}

.btn-view-all {
  background: linear-gradient(135deg, #3498db, #2ecc71);
  color: white;
  border: none;
  padding: 18px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 8px 25px rgba(52, 152, 219, 0.3);
}

.btn-view-all:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(52, 152, 219, 0.4);
  background: linear-gradient(135deg, #2980b9, #27ae60);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .masonry-gallery {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 15px;
  }
}

@media (max-width: 992px) {
  .rooms-section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .masonry-gallery {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  
  .gallery-item.large,
  .gallery-item.medium,
  .gallery-item.small {
    grid-row-end: span 1;
  }
}

@media (max-width: 768px) {
  .rooms-section {
    padding: 50px 0;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .masonry-gallery {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 15px;
  }
  
  .room-title {
    font-size: 1.5rem;
  }
  
  .room-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .rooms-section {
    padding: 40px 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .masonry-gallery {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .room-overlay {
    padding: 15px;
  }
  
  .btn-view-all {
    padding: 15px 35px;
    font-size: 1rem;
  }
}
</style>