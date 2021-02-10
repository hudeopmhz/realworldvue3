<template>
  <div id="home">
    <event-list></event-list>
  </div>
</template>

<script>
import EventList from "../components/EventList.vue";
export default {
  components: { EventList },
};
</script>

<style>
* {
  color: #333;
}
h1,
h2 {
  margin-top: 0;
}

a {
  text-decoration: none;
  color: initial;
}
</style>
