export default {
    requests(state, _, _1, rootGetters) {
        const userId = rootGetters.userId;
        return state.requests.filter(request => request.coachId === userId)
    },
    hasRequests(_state, getters) {
        return !!getters.requests.length;
    }
}