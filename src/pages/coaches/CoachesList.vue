<template>
  <section>FILTER</section>
  <base-card>
  <div class="controls">
    <base-button mode="outline"> Refresh</base-button>
    <base-button link to="/register"> Register as coach</base-button>
  </div>
  <ul v-if="hasCoaches">
    <coach-item
      v-for="coach in filteredCoaches"
      :key="coach.id"
      :id="coach.id"
      :firstName="coach.firstName"
      :lastName="coach.lastName"
      :rates="coach.hourlyRate"
      :areas="coach.areas"
    >
    </coach-item>
  </ul>
  <h3 v-else>No coaches Found!</h3>
  </base-card>
</template>

<script>
import CoachItem from '../../comopnents/coaches/CoachItem.vue';
export default {
  components: { CoachItem },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>