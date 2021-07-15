<template>
    <section>
        <base-card>
            <header>
                <h2>Requests Recieved</h2>
            </header>
            <ul v-if="hasRequests">
                <request-item v-for="req in recievedRequest" :key="req.id" :message="req.message" :email="req.userEmail"></request-item>
            </ul>
            <h3 v-else>You haven't recieved any request yet =(</h3>
        </base-card>
    </section>
</template>

<script>
import RequestItem from '../../comopnents/requests/RequestItem.vue';
export default {
    components: {
        RequestItem
    },
    computed: {
        recievedRequest() {
            return this.$store.getters['requests/requests']
        },
        hasRequests() {
            return this.$store.getters['requests/hasRequests']
        }
    }
}
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