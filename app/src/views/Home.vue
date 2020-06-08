<template>
  <div class="home">
    <shopping-input />
  </div>
</template>

<script>
// @ is an alias to /src
import ShoppingInput from "../components/ShoppingInput.vue";
export default {
  name: "Home",
  components: {
    ShoppingInput
  }
};
</script>
