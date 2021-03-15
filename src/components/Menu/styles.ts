/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Menu = styled.div`
    position: relative;
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #8900e9;
    color: white;
`;

export const ScrollMenu = styled.nav`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
`;

export const NewItemMenu = styled.li`
    height: 100%;
    position: absolute;
    margin-top: 2em;
    display: block;
    width: 4em;
    //12em em web
    ul {
        li {
            margin: 12px 0;
        }

        visibility: hidden;
    }
    &:hover {
        ul {
            visibility: visible;
            color: white;
        }
    }

    transition: visibility 0.5s;
`;

export const TextMenu = styled.a`
    padding: 5px;
    text-align: center;
    color: white;
    font-size: 1.4em;

    &:hover {
        ul {
            visibility: visible;
        }
    }

    transition: visibility 0.1s;
`;

export const HeaderLeft = styled.div`
    min-height: 5vh;
    font-size: 1.5em;
    height: 100%;
    width: 100%;
    margin-top: 0.7em;

    a {
        margin-left: 1em;
    }
`;
