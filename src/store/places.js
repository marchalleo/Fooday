import create from 'zustand'

export const useStore = create(set => ({
  places: [],
  setPlaces: (places) => set(state => ({ places })),
}))