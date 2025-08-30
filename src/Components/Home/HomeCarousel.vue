<template>
  <BCarousel :interval="3500" controls indicators ride="carousel">
    <!-- First Slide -->
    <BCarouselSlide
      :img-src="jungle_hut_entrance1"
      loading="lazy"
    >
      <div class="slide-content h-100 text-white p-4  rounded-3">
        <div class="content-wrapper">
          <h1 class="slide-title">Discover Amazing Places</h1>
          <p class="slide-description">
            Explore breathtaking destinations around the world and create unforgettable memories. 
            Our curated selection of locations offers something special for every traveler seeking adventure.
          </p>
          <button class="btn-transparent rounded-pill">
            Explore More
          </button>
        </div>
      </div>
    </BCarouselSlide>

    <!-- Second Slide -->
    <BCarouselSlide
      :img-src="bamboo_house_2"
      loading="lazy"
    >
      <div class="slide-content h-100 text-white p-4  rounded-3">
        <div class="content-wrapper">
          <h1 class="slide-title">Experience Excellence</h1>
          <p class="slide-description">
            Premium services and exceptional quality await you. Join thousands of satisfied customers 
            who have chosen us for their most important journeys and special moments.
          </p>
          <button class="btn-transparent rounded-pill">
            Get Started
          </button>
        </div>
      </div>
    </BCarouselSlide>
  </BCarousel>
</template>
<script setup>
import jungle_hut_entrance1 from "../../assets/Jungle/jungle_hut_entrance.jpg";
import bamboo_house_2 from "../../assets/Jungle/2_bamboo_house.jpg";
</script>

<style scoped>
.slide-content {
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.content-wrapper {
  max-width: 100%;
  text-align: left;
}

.slide-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;
  font-family: "Marcellus SC", serif;
}

.slide-description {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  opacity: 0.9;
  font-family: "Open Sans", sans-serif;
}

.btn-transparent {
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-transparent:hover {
  background-color: white;
  color: #333;
  transform: translateY(-2px);
}

@media (min-width: 769px) and (max-width: 992px) {
  .slide-title {
    font-size: 2.2rem;
  }
  
  .slide-description {
    font-size: 1.2rem;
  }
  
  .btn-transparent {
    padding: 11px 28px;
    font-size: 1rem;
  }
}
@media (max-width: 768px) and (min-width: 600px) {
  .slide-title {
    font-size: 1.8rem;
  }
  
  .slide-description {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .btn-transparent {
    padding: 10px 22px;
    font-size: 0.9rem;
  }
}

@media (max-width: 601px) and (min-width: 200px) {
  .slide-title {
    font-size: 0.9rem;
  }
  
  .slide-description {
    font-size: 0.7rem;
    margin-bottom: 0.1rem;
  }
  
  .btn-transparent {
    padding: 4px 8px;
    font-size: 0.5rem;
    
  }
  .slide-content  {
    position: relative;
    top: 30px;
    left: 0 
  }
  }


</style>