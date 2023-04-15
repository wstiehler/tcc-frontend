import axios from 'axios';

const saveFormData = async (formData) => {
  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_API_BACKEND+'/v1/vacancy', formData);
    return response.data;
  } catch (error) {
    alert('Erro ao salvar os dados!')
  }
};

export default saveFormData;