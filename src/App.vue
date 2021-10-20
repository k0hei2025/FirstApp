<template>
  <section>
    <header>
      <h1 class="headofFirst">Vue code First By Component Design</h1>
    </header>
    <!-- <ul v-for="(i, index) in peopls" v-bind:key="index">
      <friend-list
        name="i.name"
        phone-number="i.phone"
        email="i.email"
      ></friend-list>
    </ul> -->

    <add-friend-form v-on:add-contact="addContact"> </add-friend-form>

    <friend-list
      v-for="i in people"
      v-bind:key="i.id"
      v-bind:name="i.name"
      v-bind:phone-number="i.phone"
      v-bind:id="i.id"
      v-bind:email="i.email"
      v-on:toggle-Event="toggleEventStatus()"
      v-on:delete="deleteHandler"
    ></friend-list>

    <!-- <friend-list
      name="Machemnoz Schewizer"
      phone-number="0731-33432-323"
      email="machanix.schewizer@gmail.com"
    ></friend-list> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      people: [
        {
          id: "john",
          name: "Manuel Schewizer",
          phone: "0731-33432-323",
          email: "manuel.schewizer@gmail.com",
        },
        {
          id: "Mac",
          name: "Machemnoz Schewizer",
          phone: "0731-33432-323",
          email: "machanix.schewizer@gmail.com",
        },
      ],
    };
  },
  methods: {
    toggleEventStatus() {
      console.log("clclclcllc");
      alert("Toggle event status presed");
    },
    addContact(name, email, phone) {
      console.log(name, email, phone);
      const AddFriend = {
        id: new Date().toISOString(),
        name: name,
        email: email,
        phone: phone,
      };
      this.people.push(AddFriend);
    },
    deleteHandler(id) {
      console.log(id);
      this.people = this.people.filter((i) => i.id !== id);
      console.log(this.people);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>

<style scoped src="./css/friendList.css"></style>
