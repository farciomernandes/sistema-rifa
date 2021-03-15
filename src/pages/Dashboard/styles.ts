/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    overflow: hidden;
    max-width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Header = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const SlideRifa = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    background-image: linear-gradient(to right, black, gray);
    margin-top: 4vh;

    img {
        width: 100%;
        max-height: 100%;
    }
`;

export const TextSlide = styled.div`
    font-size: 1.3em;
    position: absolute;
    left: 5vw;
    color: white;
    h3 {
        background-color: #8900e9;
        padding: 6px;
        font-weight: bold;
    }
    opacity: 0.8;
    border-radius: 3px;
    font-weight: bold;
`;

export const PriceDay = styled.div`
    background-color: white;
    font-size: 5vw;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 1.5vh;
`;
export const EndDay = styled.div`
    font-size: 5vw;
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    color: white;
`;

export const CardParticipar = styled.div`
    background-color: #ffff;
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    div {
        margin: 27px 0;
        img {
        }
    }
    h3 {
        margin-top: 0.6em;
        font-size: 5vw;
        font-weight: bold;
    }
`;

export const EscolhaSorteio = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        max-width: 80vw;
    }
    h2 {
        color: #062033;
        font-weight: bold;
        font-size: 6.5vw;
    }
    p {
        color: #062033;
        font-size: 5vw;
        width: 80vw;
    }
`;

export const PassoaPasso = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    div {
        margin: 18px 0;
    }
    margin-top: 18px;
    span {
        width: 80vw;
    }
`;

export const NumberCard = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    max-width: 70vw;
    h1 {
        border: 1px solid white;
        padding: 10vw;
        border-radius: 50%;
        width: 5vw;
        height: 5vh;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-ss
    }
    margin: 18px 0;
    p {
        margin: 12px 0;
        font-size: 5vw;
    }
`;
