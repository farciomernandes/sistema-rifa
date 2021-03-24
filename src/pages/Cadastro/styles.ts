import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    flex-direction: column;
`;

export const Formulario = styled.form`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Section = styled.section`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid white;
    margin: 10px 0;
    p {
        color: black;
        font-size: 1.3em;
    }
`;

export const Button = styled.button`
    padding: 15px;
    width: 130px;
    position: relative;
    left: 43%;
    background-color: #8900e9;
    color: white;
    border: none;
    border-radius: 7px;
    transition: background 0.2s;

    &:hover {
        background-color: ${shade(0.2, '#004E89')};
    }
`;

export const Input = styled.input`
    border-radius: 2px;
    margin: 10px 0;
    padding: 10px;
    width: 50vw;
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 1.7em;
`;
