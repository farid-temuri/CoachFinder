export default {
    addRequest(state, newRequest) {
        state.requests.push(newRequest);
    },
    setRequests(state, payload) {
        state.requests = payload;
    }
}