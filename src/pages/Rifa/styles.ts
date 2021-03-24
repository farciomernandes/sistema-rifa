/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
    color: white;
    width: 100vw;
`;

export const TopItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-top: 30px;

    section {
        background: white;
        color: #8900e9;
        width: 100%;
        text-align: center;
        font-weight: bold;
        padding: 12px 0;
        font-size: 1.2em;
    }
`;

export const TopCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-left: 1em;
    padding-bottom: 0.5em;

    p {
        font-size: 0.8em;
    }
    div {
        margin-top: 10px;
    }
`;

export const NumberItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 90%;
        font-size: 0.8em;
        span {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
        }
        section {
            margin: 12px 0;
            font-weight: bold;
        }
    }

    h3 {
        background-color: #8900e9;
        color: white;
        padding: 9px 2px;
        font-size: 1em;
        border-radius: 7px;
    }
`;

export const Roxo = styled.section`
    color: white;
    background-color: #8900e9;
    padding: 10px 2px;
`;
export const Branco = styled.section`
    color: #8900e9;
    background-color: white;
    padding: 10px 2px;
    border: 1px solid #8900e9;
`;
export const Verde = styled.section`
    color: white;
    background-color: #05e800;
    padding: 10px 3px;
`;

export const MidBottomPage = styled.div`
    background-color: white;
    width: 100vw;
    color: #8900e9;
`;

export const NumberRifa = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    section {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        width: 100%;
    }
    h3 {
        margin-top: 20px;
        background-color: #8900e9;
        color: white;
        font-weight: 400;
        padding: 5px;
        font-size: 0.9em;
    }
`;

export const Number = styled.p`
    border: 1px solid #8900e9;
    padding: 3px 7px;
    margin: 2px 5px;
    font-weight: bold;
`;

export const Patrocinadores = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
    color: white;
    section {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        img {
            margin: 0 1px;
        }
    }

    margin-top: 20px;
    h3 {
        color: #8900e9;
    }

    div {
        color: #8900e9;
    }
`;

export const Arrows = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    div {
        width: 100px;
        margin: 0 40vw;
        position: relative;
        top: 2.3em;
    }
`;
