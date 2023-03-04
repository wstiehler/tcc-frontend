import { signIn } from "next-auth/react"
import 'antd/dist/reset.css';

export default function AccessDenied() {
  return (
    <>
      <div style={{ height: '85vh' }}>
        <h2 style={{ color: 'white', textAlign: 'center', marginTop: '30vh', color: '#415A80', fontFamily: 'Roboto' }}>
          <span style={{ color: '#415A80', fontWeight: 'bold' }}>Aviso: </span>
          Você precisa fazer login para acessar essa página
        </h2>
      </div>
    </>
  )
}
