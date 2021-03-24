import React from 'react';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
    Container,
    TopItems,
    TopCard,
    NumberItems,
    Roxo,
    Branco,
    Verde,
    MidBottomPage,
    NumberRifa,
    Number,
    Patrocinadores,
    Arrows,
} from './styles';

import FlexMenu from '../../components/Menu';
import Footer from '../../components/Footer';

import ticketImg from '../../assets/ticket2.png';
import patrocinadorImg from '../../assets/patrocinadormodel.png';

const Rifa: React.FC = () => (
    <Container>
        <FlexMenu />
        <TopItems>
            <div>
                <h3>ESCOLHA SEUS NÚMEROS</h3>
            </div>
            <section>
                <p>ENCERRA EM: XD XH XM XS</p>
            </section>
            <TopCard>
                <div>
                    <img src={ticketImg} alt="ticket" height="50" />
                </div>
                <div>
                    <h2>NÚMEROS</h2>
                    <p>
                        Escolha quantos quiser, quanto mais números mais chances
                        de ganhar!
                    </p>
                </div>
            </TopCard>
        </TopItems>
        <MidBottomPage>
            <NumberItems>
                <div>
                    <span>
                        <Roxo>DISPONÍVEL(0000)</Roxo>
                        <Branco>RESERVADO(0000)</Branco>
                        <Verde>PAGO(0000)</Verde>
                    </span>
                    <section>
                        <h3>MEUS NÚMEROS</h3>
                    </section>
                </div>
            </NumberItems>
            <NumberRifa>
                <div>
                    <section>
                        <Number>1</Number> <Number>2</Number> <Number>3</Number>{' '}
                        <Number>4</Number> <Number>5</Number> <Number>6</Number>{' '}
                        <Number>7</Number> <Number>8</Number> <Number>9</Number>{' '}
                        <Number>10</Number>
                    </section>
                    <section>
                        <Number>1</Number> <Number>2</Number> <Number>3</Number>{' '}
                        <Number>4</Number> <Number>5</Number> <Number>6</Number>{' '}
                        <Number>7</Number> <Number>8</Number> <Number>9</Number>{' '}
                        <Number>10</Number>
                    </section>{' '}
                    <section>
                        <Number>1</Number> <Number>2</Number> <Number>3</Number>{' '}
                        <Number>4</Number> <Number>5</Number> <Number>6</Number>{' '}
                        <Number>7</Number> <Number>8</Number> <Number>9</Number>{' '}
                        <Number>10</Number>
                    </section>{' '}
                    <section>
                        <Number>1</Number> <Number>2</Number> <Number>3</Number>{' '}
                        <Number>4</Number> <Number>5</Number> <Number>6</Number>{' '}
                        <Number>7</Number> <Number>8</Number> <Number>9</Number>{' '}
                        <Number>10</Number>
                    </section>{' '}
                    <section>
                        <Number>1</Number> <Number>2</Number> <Number>3</Number>{' '}
                        <Number>4</Number> <Number>5</Number> <Number>6</Number>{' '}
                        <Number>7</Number> <Number>8</Number> <Number>9</Number>{' '}
                        <Number>10</Number>
                    </section>
                </div>
                <h3>SELECIONAR ESTE NÚMERO</h3>
            </NumberRifa>
            <Patrocinadores>
                <h3>PATROCINADORES</h3>
                <Arrows>
                    <div>
                        <ArrowBackIosIcon />
                    </div>
                    <div>
                        <ArrowForwardIosIcon />
                    </div>
                </Arrows>
                <section>
                    <img src={patrocinadorImg} alt="ticket" height="40" />
                    <img src={patrocinadorImg} alt="ticket" height="40" />
                    <img src={patrocinadorImg} alt="ticket" height="40" />
                    <img src={patrocinadorImg} alt="ticket" height="40" />
                    <img src={patrocinadorImg} alt="ticket" height="40" />
                    <img src={patrocinadorImg} alt="ticket" height="40" />
                    <img src={patrocinadorImg} alt="ticket" height="40" />
                </section>
            </Patrocinadores>
        </MidBottomPage>

        <Footer />
    </Container>
);

export default Rifa;
