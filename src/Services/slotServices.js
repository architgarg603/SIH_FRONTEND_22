import axios from '../axiosInstance'

export const getAllSlots = async ()=>{
    let data = await axios.get('/slot');
    return data.data
}