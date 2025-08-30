<template>
  <div class="facilities-container">
    <h3 class="facilities-title">Facilities / Highlights</h3>
    
    <div class="row g-3">
      <div 
        v-for="facility in facilities" 
        :key="facility.id"
        class="col-sm-6 col-md-4 col-lg-3"
      >
        <div class="facility-card">
          <i :class="facility.icon" class="facility-icon"></i>
          <span class="facility-text">{{ facility.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const facilities = ref([
  {
    id: 1,
    name: 'Swimming Pool',
    icon: 'bi bi-water'
  },
  {
    id: 2,
    name: 'Free WiFi',
    icon: 'bi bi-wifi'
  },
  {
    id: 3,
    name: 'Restaurant',
    icon: 'bi bi-cup-hot'
  },
  {
    id: 4,
    name: 'Beach Nearby',
    icon: 'bi bi-geo-alt'
  },
  {
    id: 5,
    name: 'Air Conditioning',
    icon: 'bi bi-snow2'
  },
  {
    id: 6,
    name: 'Parking',
    icon: 'bi bi-car-front'
  },
  {
    id: 7,
    name: 'Gym',
    icon: 'bi bi-heart-pulse'
  },
  {
    id: 8,
    name: '24/7 Reception',
    icon: 'bi bi-clock'
  }
])
</script>

<style scoped>
.facilities-container {
  padding: 3rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.facilities-title {
  color: #2c3e50;
  margin-bottom: 3rem;
  font-weight: 700;
  text-align: center;
  font-size: 2.5rem;
}

.facility-card {
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  min-height: 180px;
}

.facility-card:hover {
  background: #ffffff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
  border-color: #007bff;
}

.facility-icon {
  font-size: 3.5rem;
  color: #007bff;
  margin-bottom: 0.5rem;
}

.facility-text {
  font-size: 1.25rem;
  color: #495057;
  font-weight: 600;
  line-height: 1.3;
}

@media (max-width: 576px) {
  .facility-card {
    padding: 1rem;
  }
  
  .facility-icon {
    font-size: 1.5rem;
  }
  
  .facility-text {
    font-size: 0.85rem;
  }
}
</style>