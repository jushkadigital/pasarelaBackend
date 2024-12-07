// global.d.ts
export {};

declare global {
  interface Window {
    useGlobalStoreSus: any; // Cambia `any` al tipo correcto si lo conoces.
  }
}
