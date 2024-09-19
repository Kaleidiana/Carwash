<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Our Services</h1>
      <div class="row">
        <div class="col-md-4" v-for="service in services" :key="service.id">
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">{{ service.name }}</h5>
              <p class="card-text">{{ service.description }}</p>
              <p class="card-text"><strong>Price: </strong>{{ service.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServicesComponent',
    data() {
      return {
        services: [
          { id: 1, name: 'Basic Wash', description: 'A quick wash to keep your car clean.', price: '$10' },
          { id: 2, name: 'Deluxe Wash', description: 'Includes waxing and interior cleaning.', price: '$20' },
          { id: 3, name: 'Premium Wash', description: 'Full service including polish and detailing.', price: '$30' },
        ],
      };
    },
  };
  </script>
  