import axios from "../axiosInstance"

export const studentSignup = async ({ id, email, name, password }) => {
    let data = await axios.post('/student', { institute_id: id, student_email: email, student_name: name, student_password: password });
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
export const instituteSignup = async ({ email, password,address,isParent = false,isResource = false }) => {
    let data = await axios.post(`/institute`,{
        institute_email:email,
        institute_password:password,
        institute_address:address,
        is_institute_parent:isParent,
        is_institute_resource:isResource
    });
    return data.data;
}