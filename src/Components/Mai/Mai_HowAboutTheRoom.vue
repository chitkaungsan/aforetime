<template>
  <section class="rooms-section ">
    <div class="container-fluid text-center">
      <!-- Shell Icon -->
      <div class="shell-icon mt-5">
        <img src="../../assets/Logo/shell.svg" alt="Shell Icon" class="shell-svg" style="width: 100px;height: 199px;" >
      </div>

      <!-- Main Title -->
      <h1 class="main-title">How about the rooms</h1>

      <!-- Description Paragraphs -->
      <div class="description-container">
        <p class="description-text">
          Mai Place offers several options for your visit. We have tree dormitorios, one for ladies only.
        </p>
        <p class="description-text">
          For privacy, we offer a room with two seperated beds and one room with twin bed.
        </p>
      </div>

      <!-- Room Type -->
      <div class="room-type">
        <span class="room-type-name">Backpackers - 6 beds (unisex)</span>
      </div>

          <div class="row p-5 mt-5 "  style="border-radius: 10px;">
        <div class="col-sm-4 col-lg-4 col-md-4">
            <div class="image-card-mai-room">
                <img src="../../assets/Logo/p1.jpg" alt="Mai Place" class="img-fluid mai-rooms" />
            </div>
        </div>
        <div class="col-sm-4 col-lg-4 col-md-4">
            <div class="image-card-mai-room">
                <img src="../../assets/Logo/p2.jpg" alt="Mai Place" class="img-fluid mai-rooms" />
            </div>
        </div>
        <div class="col-sm-4 col-lg-4 col-md-4">
            <div class="image-card-mai-room">
                <img src="../../assets/Logo/p3.jpg" alt="Mai Place" class="img-fluid mai-rooms" />
            </div>
        </div>
    </div>

       <!-- Room Type -->
      <div class="room-type">
        <span class="room-type-name">Backpackers - 6 beds (unisex)</span>
      </div>

          <div class="row p-5 mt-5 "  style="border-radius: 10px;">
        <div class="col-sm-4 col-lg-4 col-md-4">
            <div class="image-card-mai-room">
                <img src="../../assets/Logo/p1.jpg" alt="Mai Place" class="img-fluid mai-rooms" />
            </div>
        </div>
        <div class="col-sm-4 col-lg-4 col-md-4">
            <div class="image-card-mai-room">
                <img src="../../assets/Logo/p2.jpg" alt="Mai Place" class="img-fluid mai-rooms" />
            </div>
        </div>
        <div class="col-sm-4 col-lg-4 col-md-4">
            <div class="image-card-mai-room">
                <img src="../../assets/Logo/p3.jpg" alt="Mai Place" class="img-fluid mai-rooms" />
            </div>
        </div>
    </div>
       <!-- Room Type -->
      <div class="room-type">
        <span class="room-type-name">Backpackers - 6 beds (unisex)</span>
      </div>

          <div class="row p-5 mt-5 "  style="border-radius: 10px;">
        <div class="col-sm-4 col-lg-4 col-md-4">
            <div class="image-card-mai-room">
                <img src="../../assets/Logo/p1.jpg" alt="Mai Place" class="img-fluid mai-rooms" />
            </div>
        </div>
        <div class="col-sm-4 col-lg-4 col-md-4">
            <div class="image-card-mai-room">
                <img src="../../assets/Logo/p2.jpg" alt="Mai Place" class="img-fluid mai-rooms" />
            </div>
        </div>
        <div class="col-sm-4 col-lg-4 col-md-4">
            <div class="image-card-mai-room">
                <img src="../../assets/Logo/p3.jpg" alt="Mai Place" class="img-fluid mai-rooms" />
            </div>
        </div>
    </div>
    </div>
  </section>
</template>

<style scoped>
.rooms-section {
  background-color: #202022;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px; /* added padding for breathing space */
}

.container {
  max-width: 800px;
  width: 100%;
  text-align: center;
}

.shell-icon {
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
}

.shell-svg {
  width: 60px;
  height: 60px;
  color: #888;
  transition: all 0.3s ease;
}

.shell-svg:hover {
  color: #a67d77;
  transform: scale(1.1);
}

.main-title {
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 50px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Times New Roman', serif;
  line-height: 1.3;
}

.description-container {
  margin-bottom: 60px;
}

.description-text {
  font-size: 24px;/*default desktop size */
  line-height: 1.7;
  color: #cccccc;
  margin-bottom: 25px;
  font-weight: 300;
  letter-spacing: 0.5px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.description-text:last-child {
  margin-bottom: 0;
}

.room-type {
  font-family: 'Brush Script MT', cursive;
  font-size: 2.5rem;
  color: #a67d77;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
}

.room-type-name {
  font-style: "ClickerScript";
  font-weight: 400;
  font-size: 64px;
}

.room-type-separator {
  color: #888;
  font-weight: 300;
  font-style: normal;
}

.room-type-details {
  font-style: italic;
  font-weight: 400;
}

/* 🔹 Tablets */
@media (max-width: 992px) {
  .main-title {
    font-size: 2rem;
    margin-bottom: 40px;
  }

  .description-text {
    font-size: 1.1rem;
  }

  .room-type {
    font-size: 2rem;
  }

  .room-type-name {
    font-size: 50px;
  }

  .shell-svg {
    width: 50px;
    height: 50px;
  }
}

/* 🔹 Mobile */
@media (max-width: 768px) {
  .rooms-section {
    padding: 50px 15px;
  }

  .main-title {
    font-size: 1.8rem;
    margin-bottom: 35px;
  }

  .description-text {
    font-size: 1rem;
    margin-bottom: 20px;
  }

  .room-type {
    font-size: 1.8rem;
    flex-direction: column;
    text-align: center;
  }

  .room-type-name {
    font-size: 40px;
  }

  .room-type-separator {
    display: none;
  }

  .shell-svg {
    width: 45px;
    height: 45px;
  }
}

/* 🔹 Small Mobile */
@media (max-width: 480px) {
  .main-title {
    font-size: 1.5rem;
    margin-bottom: 25px;
    letter-spacing: 1px;
  }

  .description-text {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .room-type {
    font-size: 1.6rem;
  }

  .room-type-name {
    font-size: 32px;
  }
}
</style>