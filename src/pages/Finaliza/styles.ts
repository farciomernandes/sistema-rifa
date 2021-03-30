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
    margin-top: 5vh;
`;

export const BackWhite = styled.section`
    background-color: white;
    color: #8900e9;
    padding: 10px 0;
    font-weight: bold;
    text-align: center;
    width: 100%;
`;

export const BackPurple = styled.section`
    background-color: #8900e9;
    color: white;
    padding: 10px 0;
    font-weight: bold;
    text-align: center;
    width: 100%;
`;

export const CreditCard = styled.div`
    display: flex;
    background-color: white;
    padding: 8px 0;
    font-weight: bold;
    align-items: center;
    font-size: 1em;
`;

export const Infos = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;

    h3 {
        background-color: white;
        color: #8900e9;
    }
    section {
        font-size: 0.7em;
        border-left: 2px solid #8900e9;
        margin-top: 10px;
    }
    margin-top: 18px;
`;

export const Payment = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-top: 18px;
    h2 {
        font-size: 0.9em;
        font-weight: bold;
        color: #fff;
        width: 100%;
        background-color: #8900e9;
        padding: 10px 0;
    }
    img {
        background-color: white;
    }
`;

export const Accounts = styled.div`
    background-color: #fff;
    color: #8900e9;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: bold;
    span {
        display: flex;
        justify-content: baseline;
        align-items: center;
    }
    div {
        margin-top: 18px;
        width: 80%;
        border: 3px solid #8900e9;
        padding: 5px 15px;
        border-radius: 5px;
        margin-bottom: 10px;
    }
`;
