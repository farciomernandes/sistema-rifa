/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Menu = styled.div`
    position: relative;
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
`;

export const ScrollMenu = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-left: 18px;
    align-items: center;
`;

export const NewItemMenu = styled.li`
    height: 100%;
    top: 1vh;
    left: 0px;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    p {
        margin-left: 5vw;
    }

    //12em em web
    ul {
        li {
            margin: 12px 0;
        }

        visibility: hidden;
    }
    &:hover {
        position: absolute;
        height: 100%;
        z-index: 99;
        ul {
            visibility: visible;
            color: white;
            background-color: #8900e9;
            width: 100%;

            a {
                background-color: #8900e9;
                width: 100%;
                display: block;
                text-align: start;
                font-size: 1em;
            }
        }
    }

    transition: visibility 0.5s;
`;

export const TextMenu = styled.a`
    padding: 5px;
    text-align: center;
    color: white;
    font-size: 1.5em;
    position: relative;
    top: 12px;
    &:hover {
        ul {
            visibility: visible;
            height: 100%;
        }
    }

    transition: visibility 0.1s;
`;

export const HeaderLeft = styled.div`
    min-height: 5vh;
    font-size: 2em;
    height: 100%;
    width: 100%;
    margin-top: 0.7em;
    margin-right: 0.7em;

    text-align: end;

    a {
        font-family: 'Lato', sans-serif;
        font-weight: bold;
    }
`;
