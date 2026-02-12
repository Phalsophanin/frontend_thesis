<template>
  <div class="flex h-screen overflow-hidden">

    <!-- Sidebar -->
    <Sidebar class="shrink-0" />

    <!-- Main Content -->
    <div class="flex-1 flex flex-col min-w-0">

      <!-- Navbar -->
      <div class="sticky top-0 z-50 flex justify-end shadow-sm border-b border-gray-100 bg-white">
        <Navbar />
      </div>

      <!-- Page Content -->
      <main class="flex-1 overflow-y-auto px-10 py-6">
        <slot /> <!-- Render page content here -->
      </main>

    </div>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';
</script>
