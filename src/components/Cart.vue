<template>
  <div></div>
</template>

<script>
export default {
  props: ["cart"],
  methods: {
    removeItemFromCart(product) {
      this.$emit("removeItemFromCart", product);
    }
  }
};
</script>

<style>
</style>