import { Modal } from 'antd';

export default function MessageWaiting() {
    return (
        Modal.info({
            content: 'Aguarde, em breve estará disponível!',
        })
    );
}