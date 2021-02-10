<template>
  <div class="event-list">
    <h1>All our events are listed here.</h1>
    <div class="events" v-for="event in events" :key="event">
      <router-link :to="{ name: 'EventDetail', params: { id: event.id } }">
        <h2>{{ event.title }}</h2>
        <span
          >happening on <strong>{{ event.date }} </strong>
        </span>
        <span>
          @ <strong>{{ event.time }}</strong></span
        >
      </router-link>
    </div>
  </div>
</template>

<script>
import EventService from "../services/EventService";

export default {
  data() {
    return {
      events: null,
    };
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.event-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.events {
  border: 1px solid #ccc;
  padding: 50px 80px;
  margin-bottom: 50px;
  cursor: pointer;
  transition: transform 0.5s;
}

.events:hover {
  transform: scale(1.1);
  background-color: #fcfcfc;
}
</style>
