<template>
  <li class="box">
    <h2>{{ name }}</h2>
    <button v-on:click="toggleHandler()">
      show Details
    </button>
    <ul v-if="show === true" class="contentBox">
      <li>{{ name }}</li>
      <li>{{ phoneNumber }}</li>
      <li>{{ email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  //   props: ["name", "phoneNumber", "email"],
  props: {
    name: String,
    phoneNumber: String,
    email: String,
  },

  data() {
    return {
      show: false,
      friend: {
        id: "john",
        name: "Manuel Schewizer",
        phone: "0731-33432-323",
        email: "manuel.schewizer@gmail.com",
      },
    };
  },

  methods: {
    toggleHandler() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
.box {
  font-family: Roboto;
  justify-content: last baseline;
  letter-spacing: 4px;
}

.contentBox {
  text-align: center;
  display: -moz-box;
  shadow: 2px;
}
</style>
