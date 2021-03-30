import React, { useState, useEffect, useCallback } from 'react';

import { Link } from 'react-router-dom';

import {
    Container,
    BackWhite,
    BackPurple,
    Card,
    CreditCard,
    Infos,
    Payment,
    Accounts,
} from './styles';

import paymentcardImg from '../../assets/paymentcard.png';
import pixImg from '../../assets/pix.png';
import cardCredit from '../../assets/creditCard.png';

import Header from '../../components/Menu';
import Footer from '../../components/Footer';

const Finaliza: React.FC = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    async function handleCreateUser() {
        const data = {
            name,
            email,
            password,
        };
        console.log(data);
    }

    return (
        <Container>
            <Header />
            <Card>
                <BackWhite>CONFIRMANDO COMPRA</BackWhite>
                <BackPurple>SEUS NÚMEROS FORAM RESERVADOS</BackPurple>
                <CreditCard>
                    <img
                        src={paymentcardImg}
                        height="60px"
                        alt="Cartão de Crédito"
                    />{' '}
                    POR FAVOR COMPLETE A COMPRA
                </CreditCard>
                <Infos>
                    <div>
                        <img
                            src="https://i.ytimg.com/vi/aPlbIYT_zLM/maxresdefault.jpg"
                            alt="pop 100"
                            height="120px"
                            width="150px"
                        />
                    </div>
                    <section>
                        <h3>NOME DO SORTEIO: POP 100</h3>
                        <p>SEUS NÚMEROS FICARAM RESERVADOS POR ATÉ 3 DIAS</p>
                        <p>REALIZE O PAGAMENTO ATRAVÉS DOS MEIOS DISPONÍVEIS</p>
                        <p>
                            APÓS CONFIRMADO O PAGAMENTO SEUS NÚMEROS SERÃO
                            CONFIRMADOS
                        </p>
                    </section>
                </Infos>
                <Payment>
                    <h2>REALIZAR PAGAMENTO ATRAVÉS DO PIX</h2>
                    <img src={pixImg} alt="Pix" width="150px" />
                </Payment>

                <Accounts>
                    <span>
                        <img src={cardCredit} height="40px" alt="Credit Card" />

                        <p>CONTAS PARA DEPÓSITO</p>
                    </span>
                    <div>
                        <section>
                            <p>CONTA: XXXx</p>
                            <p>xxxx</p>
                        </section>
                        <section>
                            <p>CONTA: XXXx</p>
                            <p>xxxx</p>
                        </section>
                        <section>
                            <p>CONTA: XXXx</p>
                            <p>xxxx</p>
                        </section>
                        <section>
                            <p>CONTA: XXXx</p>
                            <p>xxxx</p>
                        </section>
                    </div>
                </Accounts>
            </Card>
            <Footer />
        </Container>
    );
};

export default Finaliza;
