import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    background: #8900e9;
`;

export const Card = styled.div`
    background-color: #fff;
    margin: 25% 0;
    padding: 10vh 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 80%;
    height: 100%;
    min-height: 40vh;

    h1 {
        font-size: 1.2em;
        margin-bottom: 20px;
    }

    form {
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        section {
            margin: 15px 0;
            input {
                padding: 7px;
            }
        }
    }
    color: black;
    span {
        color: #8900e9;
        font-weight: bold;
        font-size: 0.9em;
    }
`;

export const Title = styled.section`
    display: flex;
    flex-direction: row;
    color: #8900e9;
`;

export const Button = styled.button`
    border: none;
    padding: 5px 10px;
    font-size: 1em;
    background: #8900e9;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
`;

export const Input = styled.section`
    border: 1px solid black;
    display: flex;
    padding: 2px 5px;
    border-radius: 5px;

    input {
        border: none;
    }
`;
