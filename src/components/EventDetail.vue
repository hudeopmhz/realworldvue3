<template>
  <div class="event-detail" v-if="event">
    <h2>{{ event.title }}</h2>
    <p>{{ event.description }}</p>
    <span
      >happening on <strong>{{ event.date }} </strong>
    </span>
    <span>
      @ <strong>{{ event.time }}</strong></span
    >
    {{ valueID }}
  </div>
</template>

<script>
import EventService from "../services/EventService.js";

export default {
  name: "EventDetail",
  props: {
    id: {
      type: Number,
    },
  },
  data() {
    return {
      event: null,
    };
  },

  created() {
    console.log(this.id);
    EventService.getEvent(this.id)
      .then((response) => {
        (this.event = response.data), console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
