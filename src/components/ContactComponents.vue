<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Contact Us</h1>
      <form class="mx-auto" style="max-width: 600px;">
        <div class="form-group mb-3">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Enter your name">
        </div>
        <div class="form-group mb-3">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Enter your email">
        </div>
        <div class="form-group mb-3">
          <label for="message">Message</label>
          <textarea class="form-control" id="message" rows="4" placeholder="Your message"></textarea>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactComponent',
  };
  </script>
  