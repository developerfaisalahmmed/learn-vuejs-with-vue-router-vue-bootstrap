<script setup>
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../.././assets/index.jpg"
                class="d-block w-100 sliderHeight"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../.././assets/index2.jpg"
                class="d-block w-100 sliderHeight"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../.././assets/index3.jpg"
                class="d-block w-100 sliderHeight"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sliderHeight {
  height: 500px;
}
</style>
