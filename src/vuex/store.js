import { createStore } from "vuex";
import { db } from "@/firebaseConfig";
import { collection, getDocs, collection as subCollection } from "firebase/firestore";

const store = createStore({
    state: {
        weatherData: [],
        selectedCity: null,
    },
    mutations: {
        setWeatherData(state, data) {
            state.weatherData = data;
        },
        setSelectedCity(state, city) {
            state.selectedCity = city
        }
    },
    actions: {
        async fetchWeatherData({ commit }) {
            try {
                const citiesCollection = collection(db, 'cities');
                const citiesSnapshot = await getDocs(citiesCollection);
                const citiesList = await Promise.all(
                    citiesSnapshot.docs.map(async cityDoc => {
                        const cityData = { id: cityDoc.id, ...cityDoc.data() };

                        const hourlyWeatherCollection = subCollection(db, `cities/${cityDoc.id}/hourly`);
                        const hourlyWeatherSnapshot = await getDocs(hourlyWeatherCollection);

                        const hourlyWeather = await Promise.all(
                            hourlyWeatherSnapshot.docs.map(async hourDoc => {
                                const hourData = { hour: hourDoc.id, ...hourDoc.data() };

                                const hourDetailsCollection = subCollection(db, `cities/${cityDoc.id}/hourly/${hourDoc.id}/details`);
                                const hourDetailsSnapshot = await getDocs(hourDetailsCollection);

                                const hourDetails = hourDetailsSnapshot.docs.map(detailDoc => ({
                                    id: detailDoc.id,
                                    ...detailDoc.data()
                                }));

                                return {
                                    ...hourData,
                                    details: hourDetails
                                };
                            })
                        );

                        return {
                            ...cityData,
                            hourlyWeather
                        };
                    })
                );

                console.log('Cities with weather:', citiesList);

                commit('setWeatherData', citiesList);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
    },
    getters: {
        weatherData: (state) => state.weatherData,
        selectedCity: (state) => state.selectedCity
    }
});

export default store;
