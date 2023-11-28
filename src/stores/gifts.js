import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useGiftsrStore = defineStore('gifts', () => {

  const gifts = ref(null);
  const searchResult = ref([]);

  async function getData() {
    try{
      const response = await axios.get('/data')
      const res = JSON.stringify(response.data);
      gifts.value = JSON.parse(res);
    } catch (err) {
    console.error(err)
    }
  }
  getData()

   async function editStatus(person) {
    const serachItem = gifts.value.find( item => item.id == person.id )
     serachItem.status = 'Выдан';
    try {
      await axios.post('/data', gifts.value)
    }catch (err) {
      console.error(err)
    }
  }

  function searchId(id) {
    searchResult.value = gifts.value.filter( item => item.id == id);
  }

  async function toArr(data) {
    gifts.value = data;
    console.log(data);
    console.log(gifts.value)
  }


  return { gifts, editStatus, searchId, searchResult, toArr }
})
