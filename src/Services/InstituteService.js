import axios from "axios"


export const getInstituteDetails = async ({id})=>{
    let data  = await axios.get(`institute/${id}`);
    return data.data;
}

export const getPerticularInstituteLabs = async ({id})=>{
    let data  = await axios.get(`institute/${id}/labs`);
    return data.data;

}
export const getPerticularInstituteStudent = async ({id})=>{
    let data  = await axios.get(`institute/${id}/students`);
    return data.data;

}