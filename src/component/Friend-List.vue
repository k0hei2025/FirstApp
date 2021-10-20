<template>
  <li class="box">
    <h2>{{ name }}</h2>
    <button v-on:click="toggleHandler()">
      show Details
    </button>
    <button v-on:click="toggleEvent">
      toggleStatus
    </button>

    <ul v-if="show === true" class="contentBox">
      <li>{{ name }}</li>
      <li>{{ phoneNumber }}</li>
      <li>{{ email }}</li>
    </ul>

    <button @click="$emit('delete', id)">
      Delete
    </button>
  </li>
</template>

<script>
export default {
  //   props: ["name", "phoneNumber", "email"],

  props: {
    id: String,
    name: String,
    phoneNumber: String,
    email: String,
  },

  data() {
    return {
      show: false,
    };
  },

  methods: {
    toggleHandler() {
      this.show = !this.show;
    },
    toggleEvent() {
      this.$emit("toggle-event");
    },
    deleteHandler() {
      this.$emit("delete", this.id);
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
