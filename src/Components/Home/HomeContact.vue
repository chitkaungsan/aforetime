<template>
  <div class="contact-container">
    <h3 class="contact-title">Contact / Location</h3>
    
    <div class="row g-4">
      <!-- Quick Contact Section -->
      <div class="col-lg-6">
        <div class="contact-card">
          <h4 class="contact-subtitle">
            <i class="bi bi-telephone-fill me-2"></i>
            Quick Contact
          </h4>
          
          <div class="contact-methods">
            <div 
              v-for="contact in contactMethods" 
              :key="contact.id"
              class="contact-item"
            >
              <div class="contact-icon-wrapper">
                <i :class="contact.icon" :style="{ color: contact.color }"></i>
              </div>
              <div class="contact-details">
                <span class="contact-label">{{ contact.label }}</span>
                <a 
                  :href="contact.link" 
                  class="contact-value"
                  :target="contact.target"
                >
                  {{ contact.value }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Map Section -->
      <div class="col-lg-6">
        <div class="map-card">
          <h4 class="contact-subtitle">
            <i class="bi bi-geo-alt-fill me-2"></i>
            Our Location
          </h4>
          
          <div class="map-container">
            <iframe 
              :src="mapEmbedUrl"
              class="map-iframe"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <div class="address-info">
            <i class="bi bi-building me-2"></i>
            <span>{{ address }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const contactMethods = ref([
  {
    id: 1,
    label: 'Phone',
    value: '+66 77 123 4567',
    link: 'tel:+6677123456',
    icon: 'bi bi-telephone-fill',
    color: '#28a745',
    target: '_self'
  },
  {
    id: 2,
    label: 'WhatsApp',
    value: '+66 77 123 4567',
    link: 'https://wa.me/6677123456',
    icon: 'bi bi-whatsapp',
    color: '#25d366',
    target: '_blank'
  },
  {
    id: 3,
    label: 'Email',
    value: 'info@hotelname.com',
    link: 'mailto:info@hotelname.com',
    icon: 'bi bi-envelope-fill',
    color: '#dc3545',
    target: '_self'
  }
])

const address = ref('123 Beach Road, Surat Thani, Thailand 84000')

// Sample Google Maps embed - replace with your actual location
const mapEmbedUrl = ref('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8436!2d99.3371!3d9.1382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDgnMTcuNSJOIDk5wrAyMCcxNC4xIkU!5e0!3m2!1sen!2sth!4v1234567890')
</script>

<style scoped>
.contact-container {
  padding: 3rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.contact-title {
  color: #2c3e50;
  margin-bottom: 3rem;
  font-weight: 700;
  text-align: center;
  font-size: 2.5rem;
}

.contact-card,
.map-card {
  background: #ffffff;
  border: 2px solid #e9ecef;
  border-radius: 16px;
  padding: 2.5rem;
  height: 100%;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.contact-card:hover,
.map-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.contact-subtitle {
  color: #343a40;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
}

.contact-subtitle i {
  color: #007bff;
  font-size: 1.25rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: #e9ecef;
  transform: translateX(4px);
}

.contact-icon-wrapper {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.contact-icon-wrapper i {
  font-size: 1.5rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
}

.contact-label {
  font-size: 0.9rem;
  color: #6c757d;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact-value {
  font-size: 1.1rem;
  color: #495057;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-value:hover {
  color: #007bff;
}

.map-container {
  width: 100%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.map-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.address-info {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 12px;
  color: #495057;
  font-size: 1rem;
  font-weight: 500;
}

.address-info i {
  color: #007bff;
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .contact-container {
    padding: 2rem 1rem;
  }
  
  .contact-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .contact-card,
  .map-card {
    padding: 2rem 1.5rem;
  }
  
  .contact-subtitle {
    font-size: 1.25rem;
  }
  
  .map-container {
    height: 250px;
  }
  
  .contact-item {
    padding: 0.75rem;
  }
  
  .contact-icon-wrapper {
    width: 45px;
    height: 45px;
  }
  
  .contact-icon-wrapper i {
    font-size: 1.25rem;
  }
}

@media (max-width: 576px) {
  .contact-methods {
    gap: 1rem;
  }
  
  .contact-item {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
  
  .contact-details {
    align-items: center;
  }
}</style>