import axios from "../axiosInstance"

export const studentSignup = async ({ id, email, name, password, year,course }) => {
    console.log(id)
    id = Number(id)
    let data = await axios.post('/student', { institute_id: id, email: email, name: name, password: password ,year,is_student:true,course});
    return data.data;
}
export const studentLogin = async ({ email, password }) => {
    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', password)
    let data = await axios.post('/login_student', formData);
    return data.data;
}

export const instituteLogin = async ({ email, password }) => {
    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', password)
    let data = await axios.post(`/login_institute`, formData);
    return data.data;
}
export const instituteSignup = async ({ name,email, password,address,isParent = false,isResource = false }) => {
    let data = await axios.post(`/institute`,{
        institute_name:name,
        institute_email:email,
        institute_password:password,
        institute_address:address,
        is_institute_parent:isParent,
        is_institute_resource:isResource
    });
    return data.data;
}