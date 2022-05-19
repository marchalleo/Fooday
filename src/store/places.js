import create from 'zustand';
import axios from "axios";

export const useStore = create(set => ({
  places: [],
  setPlaces: (places) => set(state => ({ places })),
  getPlaces: async (user) => set({places: await getPlaceApi(user)})
}))
//le getPlaces permet d'initialiser la liste là ou la fonction est appélée

async function getPlaceApi(user) {
 const placeApi = await axios.get('https://digitalcampus.nerdy-bear.com/api/places?populate=type', {
      headers: {
      Authorization: 'Bearer ' + user.jwt
      }
    })
        const {data} = placeApi.data;
        return data.map((data) => {
            return{
            id: data.id,
            title: data.attributes.title,
            comment: data.attributes.comment,
            address: data.attributes.address,
            latitude: data.attributes.latitude,
            longitude: data.attributes.longitude,   
            type: data.attributes.type.data?.attributes?.name,
            }
        })
}