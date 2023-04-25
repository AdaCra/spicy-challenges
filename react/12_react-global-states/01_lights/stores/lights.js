import { create } from "zustand";


export const useLightStore = create((set, get) => ({
    lights: [
        { id: 1, name: "Living Room", isOn: true },
        { id: 2, name: "Kitchen", isOn: true },
        { id: 3, name: "Bedroom", isOn: true },
        { id: 4, name: "Bathroom", isOn: true },
        { id: 5, name: "Garage", isOn: true },
        { id: 6, name: "Porch", isOn: true },
        { id: 7, name: "Garden", isOn: true },
        { id: 8, name: "Office", isOn: true },
      ]
}))