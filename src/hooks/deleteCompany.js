import axios from 'axios';

const handleDeleteCompany = async (id) => {
    try {
        const resp = await axios.delete(process.env.NEXT_PUBLIC_API_BACKEND+`/v1/company/${id}`)
        return resp
    } catch (error) {
        Modal.error({
            title: 'Oops errors!',
            content: 'Algo deu errado, tente novamente!',
        });
    }
}
export default handleDeleteCompany