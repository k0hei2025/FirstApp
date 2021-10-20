<template>
  <form v-on:submit.prevent="formHandler">
    <input type="text" placeholder="name" v-model="enteredName" /> <br />
    <input
      type="text"
      placeholder="phone-number"
      v-model="enteredEmail"
    /><br />
    <input type="text" placeholder="E-mail" v-model="enteredPhone" />
    <input type="submit" />
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredEmail: "",
      enteredPhone: "",
    };
  },
  methods: {
    formHandler() {
      console.log("fdhfsdjhfsdjkhjk");
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredEmail,
        this.enteredPhone
      );
    },
  },
};
</script>

<style></style>
