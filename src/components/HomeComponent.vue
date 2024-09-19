<template>
    <div class="container mt-5 grey-background">
      <h1 class="text-center mb-4 ">Welcome to CleanHans Car Wash</h1>
      <p class="text-center">
        We provide the best car wash services in town. Your car will shine like new!
      </p>
      <div class="text-center mt-4">
        <router-link to="/services" class="btn btn-primary">View Our Services</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeComponent',
  };
  </script>
  
  <style scoped>
  .grey-background {
    background-color: #d3d3d3; /* Light grey background */
    padding: 150px; /* Add some padding for better presentation */
    border-radius: 8px; /* Optional: round the corners */
  }
  
  h1 {
    font-weight: bold;
  }
  </style>
  