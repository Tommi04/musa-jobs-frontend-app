<template>
    <router-link 
      to="/login"
      class="relative inline-block bg-white rounded-full uppercase text-blue-600 py-1 px-5 lg:px-10 text-sm lg:text-base font-bold shadow hover:shadow-none">
      <!-- con slot uso in MJHeader.vue il tag nomeDaUsare che si riferisce a questo bottone e lì dentro metto accedi -->
      <slot></slot>
      <!-- alternativa -->
      <!-- {{ label }} -->
    </router-link>
</template>

<script>
export default {
    name: 'mj-header-button'
}
</script>