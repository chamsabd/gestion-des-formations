
import "@/plugins/axios.js";


export default {
    state: {
        formations: [],
    },
    mutations: {
        SET_formations(state, formations) {
            state.formations = formations;
        },
    },
    actions: {
        fetchformations({ commit }) {
            return new Promise((resolve, reject) => {
                axios
                    .get("formations")
                    .then((response) => {
                        commit("SET_formations", response.data.data);
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
    },
    getters: {
        formations(state) {
            return state.formations;
        },
    },
};
