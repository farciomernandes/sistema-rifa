/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
import React, { useCallback } from 'react';
import { CgMenu } from 'react-icons/cg';

// import { Link } from 'react-router-dom';

import { Menu, ScrollMenu, NewItemMenu, TextMenu, HeaderLeft } from './styles';

const FlexMenu: React.FC = () => {
    const handleMenu = useCallback(e => {
        e.preventDefault();
    }, []);

    return (
        <Menu>
            <ScrollMenu>
                <HeaderLeft>
                    <a href="/">Lucas da Rifa</a>
                </HeaderLeft>
                <NewItemMenu>
                    <li>
                        <p>
                            <CgMenu size={47} onClick={handleMenu} />
                        </p>
                    </li>
                    <ul>
                        <li>
                            <TextMenu href="/">Inicio</TextMenu>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <TextMenu href="/rifa">Rifa</TextMenu>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <TextMenu href="/">Sobre nós</TextMenu>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <TextMenu href="/cadastro">Cadastre-se</TextMenu>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <TextMenu href="/login">Login</TextMenu>
                        </li>
                    </ul>
                </NewItemMenu>
            </ScrollMenu>
        </Menu>
    );
};

export default FlexMenu;
