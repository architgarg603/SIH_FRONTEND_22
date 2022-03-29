import axios from '../axiosInstance';

export const labsList = async () => {
  const data = await axios.get(`/lab`);
  return data.data;
};

export const labsExperiments = async ({ id }) => {
  const data = await axios.get(`/experiment/${id}`);
  return data.data;
};

export const labsEquipments = async ({ id }) => {
  const data = await axios.get(`/equipment/${id}`);
  return data.data;
};

export const labIds = async ({id}) => {
    const data = await axios.get(`/lab/${id}`);
    return data.data;
  };

export const createLab = async ({ institute_id, lab_name = "", lab_address = "", lab_admin_name = "", lab_student_capacity = "50", lab_description = "", longitude, latitude }) => {
    lab_student_capacity = Number(lab_student_capacity);
    institute_id = Number(institute_id)
    let data = await axios.post('/lab', {institute_id, lab_student_capacity, lab_address, lab_name, lab_admin_name, lab_description, longitude, latitude });
    return data.data
}

