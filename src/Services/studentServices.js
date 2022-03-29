import axios from '../axiosInstance'
export const getStudentInfo = async ({id})=>{
    let data = await axios.get(`/student/${id}`);
    return data.data
}