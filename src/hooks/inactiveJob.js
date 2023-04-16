import axios from 'axios';
import { Modal } from 'antd';

const inactiveJob = async (id) => {
    try {
        const resp = await axios.put(process.env.NEXT_PUBLIC_API_BACKEND+`/v1/vacancy/inactivate/${id}`)
        console.log(resp)
        return resp
    } catch (error) {
        Modal.error({
            title: 'Oops errors!',
            content: 'Algo deu errado, tente novamente!' + error,
        });
    }
}
export default inactiveJob