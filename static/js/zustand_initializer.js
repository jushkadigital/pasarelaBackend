import { createStore } from "https://cdn.skypack.dev/zustand/vanilla";

    // Crear la tienda
    const useGlobalStore = createStore((set) => ({
    sharedState: 0, // Estado inicial
    percentageShared: 0,
    passengerShared: 1,
    updateSharedState: (newValue) =>
        set({ sharedState: newValue }), // Actualiza el estado correctamente
    updatePercentageShared: (percentage) => 
      set({percentageShared:percentage}),
    updatePassengerShared: (passenger) => 
      set({passengerShared:passenger})

}));

    // Exponer la tienda al ámbito global
    window.useGlobalStoreSus = useGlobalStore;

console.log(window.useGlobalStoreSus)
