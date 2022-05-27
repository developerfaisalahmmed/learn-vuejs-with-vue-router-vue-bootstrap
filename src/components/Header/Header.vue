<script setup>

</script>

<template>
  <div class="container">
  <div class="row">
  <div class="col-md-12">

<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link to="/"  class="nav-link active" aria-current="page" href="#"> Home </router-link>
          <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
        </li>
        
        <li class="nav-item">
            <router-link to="/about"  class="nav-link active" aria-current="page" href="#"> About </router-link>
          <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
        </li>
        
        <li class="nav-item">
            <router-link to="/contact"  class="nav-link active" aria-current="page" href="#"> Contact </router-link>
          <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
        </li>
        
        <li class="nav-item">
            <router-link to="/service"  class="nav-link active" aria-current="page" href="#"> Service </router-link>
          <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
    </div>
    </div>
</template>

<style scoped>

</style>
