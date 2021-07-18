<template>
  <div>
    <base-dialog v-if="!!error" title="An error Occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>Requests Recieved</h2>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="hasRequests">
          <request-item
            v-for="req in recievedRequest"
            :key="req.id"
            :message="req.message"
            :email="req.userEmail"
          ></request-item>
        </ul>
        <h3 v-else>You haven't recieved any request yet =(</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import RequestItem from '../../comopnents/requests/RequestItem.vue';
export default {
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  created() {
    this.loadRequests();
  },
  components: {
    RequestItem,
  },
  methods: {
    handleError() {
      this.error = null;
    },
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        this.error = error.message || 'Somethig went wrong';
      }
      this.isLoading = false;
    },
  },
  computed: {
    recievedRequest() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>