export default {
    async registerCoach(context, data) {
        const userId = context.rootGetters.userId;
        const coachData = {
            firstName: data.first,
            lastName: data.last,
            areas: data.areas,
            description: data.desc,
            hourlyRate: data.rate
        };

        const response = await fetch(
            'https://axaxa-9ce0c-default-rtdb.firebaseio.com/coaches/' +
            userId +
            '.json', {
                method: 'PUT',
                body: JSON.stringify(coachData)
            }
        );
        // const responseData = await response.json();
        if (!response.ok) {
            console.log(response);
        }
        context.commit('registerCoach', {
            ...coachData,
            id: userId
        });
    }
};