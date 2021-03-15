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
    font-size: 5vw;
    position: absolute;
    left: 10%;
    top: 31%;
    color: white;
    h3 {
        background-color: #8900e9;
        padding: 6px;
        font-family: 'Lato', sans-serif;
    }
    opacity: 0.8;
    border-radius: 3px;
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
    font-family: 'Lato', sans-serif;
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
    font-family: 'Lato', sans-serif;
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
    font-family: 'Lato', sans-serif;
    font-weight: bold;

    div {
        margin: 27px 0;
    }
    h3 {
        margin-top: 0.6em;
        font-size: 6vw;
        font-weight: 600;
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
        font-size: 6.5vw;
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
    }
    p {
        color: #062033;
        font-size: 5vw;
        width: 80vw;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
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
    h3 {
        margin-top: 0.6em;
        font-size: 6vw;
        font-weight: 600;
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
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;

    h2 {
        font-family: 'Lato', sans-serif;
        font-weight: bold;
        font-size: 5vw;
    }

    h1 {
        border: 1px solid white;
        padding: 10vw;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 8vw;

        border-radius: 50%;
        width: 5vw;
        height: 5vh;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    margin: 18px 0;
    p {
        font-family: 'Lato', sans-serif;

        margin: 12px 0;
        font-size: 5vw;
    }
`;
