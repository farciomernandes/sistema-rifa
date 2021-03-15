import React from 'react';

import { GiClover } from 'react-icons/gi';
import {
    Container,
    Header,
    SlideRifa,
    TextSlide,
    PriceDay,
    EndDay,
    CardParticipar,
    EscolhaSorteio,
    PassoaPasso,
    NumberCard,
} from './styles';

import FlexMenu from '../../components/Menu';
import Footer from '../../components/Footer';

import TicketImg from '../../assets/ticket.png';
import SelecNumberImg from '../../assets/selectnumbers.png';
import PaymentCardImg from '../../assets/paymentcard.png';
import GiftImg from '../../assets/gift.png';

const Dashboard: React.FC = () => (
    <Container>
        <Header>
            <FlexMenu />
        </Header>
        <SlideRifa>
            <TextSlide>
                <h3>
                    {' '}
                    <b>Pop</b>
                    <i> 100</i>
                </h3>
            </TextSlide>
            <img
                src="https://i.ytimg.com/vi/aPlbIYT_zLM/maxresdefault.jpg"
                alt="pop 100"
            />
        </SlideRifa>

        <PriceDay>
            <div>
                <h3>
                    <b>POR APENAS</b>
                </h3>
                <p>R$ 10,00</p>
            </div>
            <div>
                <h3>
                    <b>SORTEIO</b>
                </h3>
                <p>27/10/2000</p>
            </div>
        </PriceDay>
        <EndDay>
            <div>
                <h3>
                    <b>ENCERRA EM: 27/10/2000 </b>
                </h3>
            </div>
        </EndDay>
        <CardParticipar>
            <div>
                <h3>COMO PARTICIPAR</h3>

                <hr />
                <GiClover size={32} />

                <EscolhaSorteio>
                    <h2>Escolha um Sorteio</h2>
                    <img src={TicketImg} alt="Ticket Rifa" />
                    <p>
                        Muito fácil participar. Comece escolhendo um sorteio
                        ativo.
                    </p>
                </EscolhaSorteio>
                <EscolhaSorteio>
                    <h2>Selecione os números</h2>
                    <img src={SelecNumberImg} alt="Numbers" />
                    <p>Escolha quantos quiser! Quanto mais, mais chances.</p>
                </EscolhaSorteio>
                <EscolhaSorteio>
                    <h2>Faça o pagamento</h2>
                    <br />
                    <img src={PaymentCardImg} alt="Credit Card" />
                    <br />
                    <p>Escolha uma das formas de pagamento disponíveis.</p>
                </EscolhaSorteio>
                <EscolhaSorteio>
                    <h2>Aguarde o sorteio</h2>
                    <br />
                    <img src={GiftImg} alt="Gift" />
                    <br />
                    <p>
                        Agora é aguardar o sorteio e torcer para ser o ganhador
                        da vez.
                    </p>
                </EscolhaSorteio>
            </div>
        </CardParticipar>
        <PassoaPasso>
            <h3>PASSO A PASSO</h3>
            <span>
                <hr />
            </span>
            <p>
                <GiClover size={32} />
            </p>
            <NumberCard>
                <h1>1</h1>
                <h2>ESCOLHA O SORTEIO</h2>
                <p>
                    Escolha ao prêmio que gostaria de concorrer, verifique a
                    descrição e o regulamento.
                </p>
            </NumberCard>
            <NumberCard>
                <h1>2</h1>
                <h2>ESCOLHA SEUS NÚMEROS</h2>

                <p>
                    Escolha os numeros quantos numeros puder, mais numeros mais
                    chances de ganhar.
                </p>
            </NumberCard>
            <NumberCard>
                <h1>3</h1>
                <h2>EFETUE O PAGAMENTO</h2>

                <p>
                    Faça o pagamento e envie o comprovante ao administrador do
                    sorteio.
                </p>
            </NumberCard>
            <NumberCard>
                <h1>4</h1>
                <h2>ESPERE O SORTEIO</h2>

                <p>Espere o sorteio e tenha fé que irar ganhar!</p>
            </NumberCard>
        </PassoaPasso>

        <Footer />
    </Container>
);

export default Dashboard;
