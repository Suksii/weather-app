import { createStore } from "vuex";
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";


const store = createStore({
    state: {
        weatherData: [],
    },
    mutations: {
        setWeatherData(state, data) {
            state.weatherData = data;
        }
    },
    actions: {
        async fetchWeatherData({ commit }) {
            try {
                const weatherCollection = collection(db, 'cities');
                const weatherSnapshot = await getDocs(weatherCollection);
                const weatherList = weatherSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

                console.log('Fetched Weather Data:', weatherList);
                commit('setWeatherData', weatherList)
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
    },
    getters: {
        weatherData: (state) => state.weatherData,
    }
})

export default store;