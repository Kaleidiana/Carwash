<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">CleanHans Car Wash</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            
            <li class="nav-item">
              <router-link class="nav-link" to="/services">Services</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavbarComponent",
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #f8f9fa;
  }
  
  .nav-link {
    font-weight: bold;
  }
  
  .navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
  }
  </style>
  