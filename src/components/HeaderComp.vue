<template>
  <h1>Hello from HEADER: {{ value }}</h1>
  <button 
    @click="value++"
    class="btn btn-primary"
    >
      CLICK ME
  </button>
</template>

<script>
export default {
    name: 'HeaderComp',
    data() {
      return {
          value: 0
      };
    }
}
</script>