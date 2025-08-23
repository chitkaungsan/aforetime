<template>
  <section class="text-center">
    <h1 class="display-5 fw-normal text-uppercase mb-5" style="font-family: 'Times New Roman', serif;">
      Could this be your place?
    </h1>

    <div class="container-fluid p-3">
      <div class="row g-4 justify-content-center ">

        <!-- Beach House Card -->
        <div class="col-md-4 p-5">
          <div class="card  text-white h-100 shadow-sm border-0">
            <div class="card-body">
              
              <!-- Title + Icon Row -->
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h2 class="h4  card-title mb-0">Beach House</h2>
                <img src="../assets/Logo/Mai_beachouse.svg" alt="Beach House" class="img-fluid" style="width: 20%; height: 20%;">

              </div>

              <p class="text-light small mb-3 card-content">
                Mai Place has different options from standard dormitorio to your own room.
              </p>
              <p class="text-light small card-content">
                Social areas with sofas, hammock and an open kitchen provides options for cooking or playing some board games.
              </p>
            </div>
          </div>
        </div>

        <!-- Harmony Card -->
        <div class="col-md-4  p-5">
          <div class="card text-white h-100 shadow-sm border-0">
            <div class="card-body">

              <div class="d-flex justify-content-between align-items-center mb-3">
                <h2 class="h4 card-title mb-0">Harmony</h2>
                 <img src="../assets/Logo/Mai_heart.svg" alt="Beach House" class="img-fluid" style="width: 15%; height: 15%;">
              </div>

              <p class="text-light small mb-3 card-content">
                Staying at Mai Place offers you a front row seat to be part of this growing travellers family of like minded people.
              </p>
              <p class="text-light small card-content">
                Place to slow down, enjoy the beach and find harmony.
              </p>
            </div>
          </div>
        </div>

        <!-- Connect Card -->
        <div class="col-md-4 p-5">
          <div class="card  text-white h-100 shadow-sm border-0">
            <div class="card-body">

              <div class="d-flex justify-content-between align-items-center mb-3">
                <h2 class="h4 card-title mb-0">Connect</h2>
                <img src="../assets/Logo/Mai_coffee.svg" alt="Beach House" class="img-fluid" style="width: 15%; height: 15%;">
              </div>

              <p class="text-light small mb-3 card-content text-wrap">
                At Mai Place it is all about coming together and sharing moments to remember.
              </p> 
              <p class="text-light small card-content">
                Open kitchen area with cosy sofas invites to connect and chill.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
<style scoped>
.card-title {
    font-size: 42px;
    font-family: 'MarcellusSC';
    color: #A67D77;
    text-indent: 20px;
}

.card-content {
    font-size: 30px;
    font-family: "GowunDodum-Regular", 'MarcellusSC' !important;
    text-align: left;
    padding: 5%;
    font-weight: 400;
}

.card {
    background-color: #202022;
}

section {
    background: #EAEDF2 !important;
    border: none;
}

/* 🔹 Responsive Breakpoints */

/* Large Tablets (≤1200px) */
@media (max-width: 1200px) {
    .card-title {
        font-size: 36px;
    }
    .card-content {
        font-size: 24px;
    }
}

/* Tablets (≤992px) */
@media (max-width: 992px) {
    .card-title {
        font-size: 30px;
        text-indent: 15px;
    }
    .card-content {
        font-size: 20px;
        padding: 4%;
    }
}

/* Mobile (≤768px) */
@media (max-width: 768px) {
    .card-title {
        font-size: 26px;
        text-indent: 10px;
    }
    .card-content {
        font-size: 18px;
        padding: 3%;
    }
}

/* Small Mobile (≤480px) */
@media (max-width: 480px) {
    .card-title {
        font-size: 22px;
        text-indent: 8px;
    }
    .card-content {
        font-size: 16px;
        padding: 2%;
    }
}

</style>
