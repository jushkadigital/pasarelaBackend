import { createStore } from "https://cdn.skypack.dev/zustand/vanilla";

    // Crear la tienda
    const useGlobalStore = createStore((set) => ({
    sharedState: 0, // Estado inicial
    sharedState2: 0, // Estado inicial
    sharedState3: 0, // Estado inicial
    percentageShared: 0,
    passengerShared: 1,
    passengerShared2: 0,
    passengerShared3: 0,
    updateSharedState: (newValue) =>
        set({ sharedState: newValue }), // Actualiza el estado correctamente
    updateSharedState2: (newValue) =>
        set({ sharedState2: newValue }), // Actualiza el estado correctamente
    updateSharedState3: (newValue) =>
        set({ sharedState3: newValue }), // Actualiza el estado correctamente

    updatePercentageShared: (percentage) => 
      set({percentageShared:percentage}),
    updatePassengerShared: (passenger) => 
      set({passengerShared:passenger}),
    updatePassengerShared2: (passenger) => 
      set({passengerShared2:passenger}),
    updatePassengerShared3: (passenger) => 
      set({passengerShared3:passenger}),



}));

    // Exponer la tienda al ámbito global
    window.useGlobalStoreSus = useGlobalStore;

console.log(window.useGlobalStoreSus)
