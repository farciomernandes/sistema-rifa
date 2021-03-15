/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

export const MidiaSocial = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: white;
    font-size: 4.5vw;
    div {
        padding: 1vw;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        p {
            margin-left: 1vw;
        }
        span {
            margin-left: 4px;
        }
    }
`;

export const Direitos = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: black;
    color: white;
    font-size: 2.5vw;
`;
