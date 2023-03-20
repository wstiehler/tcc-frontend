import ImageMac from '../../public/mac2.jpeg'

import ImagePeople from '../../public/people.jpeg'

import Image from 'next/image'

const Sobre = () => {
    return (
        <div >
            <div >
                <div style={{ width: '100%', height: '80vh' }}>
                    <div style={{ width: '100%', }}>
                        <h2 style={{
                            position: 'absolute',
                            top: '50%',
                            left: '10%',
                            color: '#415A80',
                            fontSize: '70px',
                            height: '20vh',
                            padding: '50px',
                            borderRadius: '10px',
                            opacity: '0.8',
                        }}>Open Vagas</h2>

                        <h3 style={{
                            //Deixar no canto direito
                            position: 'absolute',
                            top: '30%',
                            left: '50%',
                            color: '#fefefe',
                            fontSize: '20px',
                            width: '40%',
                            height: '15vh',
                            padding: '50px',
                            borderRadius: '10px',
                            backgroundColor: '#415A80',
                            opacity: '0.8',
                            textAlign: 'center',

                            //Deixar no canto direito
                        }}>O projeto Open Vagas tem como objetivo conectar empresas e candidatos de forma simples e eficiente.</h3>
                    </div>

                </div>

                <div style={{ width: '100%' }}>
                    <div style={{ width: '100%' }}>
                        <Image
                            src={ImageMac}
                            alt="Picture of the author"
                            style={
                                {
                                    height: '80vh',
                                    minHeight: '80vh',
                                    width: '100%',
                                }
                            }
                        />
                    </div>

                    <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: '10%',
                        backgroundColor: '#fff ',
                        padding: '10px',
                        borderRadius: '10px',
                        width: '40%',
                        height: '52vh',
                        color: '#415A80',
                        fontSize: '14px',
                        textAlign: 'center',
                        opacity: '0.8',

                        //Deixar o texto no centro
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <h1>No Open Vagas, tornamos mais fácil para pessoas com uma definição encontrar o emprego perfeito. Nossa plataforma conecta você a empregadores qualificados, que possuem requisitos e estão dispostos a levar você para outro nível!
                            <br /><br />
                            <span style={{
                                color: '#415A80',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                opacity: '0.9',
                            }}>Encontre o ajuste certo</span>
                            <br /><br />
                            Entendemos que encontrar o emprego certo é mais do que apenas olhar para uma lista de vagas disponíveis. É por isso que fornecemos perfis detalhados de cada empregador para que você possa se certificar de que o trabalho é adequado para você antes de se candidatar.
                            <br /><br />

                            <span style={{
                                color: '#415A80',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                opacity: '1',
                            }}>Simples e fácil de usar </span>
                            <br /><br />

                            Nossa plataforma foi projetada para ser simples e fácil de usar. Com nossas ferramentas de pesquisa intuitivas, você pode restringir rapidamente suas opções e encontrar o emprego perfeito para suas habilidades e preferências.
                            <br/><br />

                            <span style={{
                                color: '#415A80',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                opacity: '1',
                            }}> Seguro e confidencial </span>
                            <br/><br />

                            Sua segurança é nossa principal prioridade. É por isso que toda a comunicação entre empregadores e candidatos ocorre em nossa plataforma segura, garantindo que todas as informações sejam mantidas em sigilo e protegidas de olhares indiscretos.
                        </h1>
                    </div>

                </div>

                <div style={{ width: '100%' }} >
                    <div style={{ width: '80%' }}>
                        <Image
                            src={ImagePeople}
                            alt="Picture of the author"
                            style={
                                {
                                    width: '50%',
                                    objectFit: 'cover',
                                    position: 'relative',
                                    marginTop: '0%',
                                    height: '20vh'
                                }
                            }
                        />
                    </div>
                    <div style={{
                        width: '20%',
                        marginLeft: '70%',
                        position: 'absolute',
                        top: '185%',
                        left: '10%',
                        height: '20vh',
                        color: '#415A80',
                        fontSize: '14px',
                        textAlign: 'center',
                    }}
                    >
                        <h1>Feito de pessoas para pessoas </h1>
                    </div>



                </div>

            </div>
        </div>
    );
};

export default Sobre;