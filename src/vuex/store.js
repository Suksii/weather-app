import { createStore } from "vuex";
import { db } from "@/firebaseConfig";
import { collection, getDocs, collection as subCollection } from "firebase/firestore";

const store = createStore({
    state: {
        weatherData: [],
        selectedCity: 'Podgorica',
        monthlyWeatherData: [],
    },
    mutations: {
        setWeatherData(state, data) {
            state.weatherData = data;
        },
        setSelectedCity(state, city) {
            state.selectedCity = city;
        },
        setMonthlyWeatherData(state, data) {
            state.monthlyWeatherData = data;
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

                        // Fetch hourly weather
                        const hourlyWeatherCollection = collection(db, `cities/${cityDoc.id}/hourly`);
                        const hourlyWeatherSnapshot = await getDocs(hourlyWeatherCollection);

                        const hourlyWeather = await Promise.all(
                            hourlyWeatherSnapshot.docs.map(async hourDoc => {
                                const hourData = { hour: hourDoc.id, ...hourDoc.data() };

                                const hourDetailsCollection = collection(db, `cities/${cityDoc.id}/hourly/${hourDoc.id}/details`);
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

                        const monthlyCollection = collection(db, `cities/${cityDoc.id}/monthly`);
                        const monthlySnapshot = await getDocs(monthlyCollection);

                        const monthlyWeather = await Promise.all(
                            monthlySnapshot.docs.map(async yearDoc => {
                                const monthsCollection = collection(db, `cities/${cityDoc.id}/monthly/${yearDoc.id}/months`);
                                const monthsSnapshot = await getDocs(monthsCollection);

                                const monthsWeather = await Promise.all(
                                    monthsSnapshot.docs.map(async monthDoc => {
                                        const monthData = { month: monthDoc.id, ...monthDoc.data() };

                                        const daysCollection = collection(db, `cities/${cityDoc.id}/monthly/${yearDoc.id}/months/${monthDoc.id}/day`);
                                        const daysSnapshot = await getDocs(daysCollection);

                                        const daysWeather = daysSnapshot.docs.map(dayDoc => ({
                                            day: dayDoc.id,
                                            ...dayDoc.data()
                                        }));

                                        return {
                                            ...monthData,
                                            daysWeather,
                                        };
                                    })
                                );

                                return {
                                    year: yearDoc.id,
                                    monthsWeather,
                                };
                            })
                        );

                        return {
                            ...cityData,
                            hourlyWeather,
                            monthlyWeather,
                        };
                    })
                );

                console.log('Cities with weather:', citiesList);
                commit('setWeatherData', citiesList);

                const monthlyWeatherData = citiesList.map(city => ({
                    id: city.id,
                    monthlyWeather: city.monthlyWeather
                }));
                commit('setMonthlyWeatherData', monthlyWeatherData);

            } catch (error) {
                console.error('Error fetching data', error);
            }
        },
    },
    getters: {
        weatherData: (state) => state.weatherData,
        selectedCity: (state) => state.selectedCity,
        monthlyWeatherData: (state) => state.monthlyWeatherData
    }
});

export default store;