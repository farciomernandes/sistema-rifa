import React from 'react';
import { CgMenu } from 'react-icons/cg';

import { Menu, ScrollMenu, NewItemMenu, TextMenu, HeaderLeft } from './styles';

const FlexMenu: React.FC = () => (
    <Menu>
        <ScrollMenu>
            <HeaderLeft>
                <a href="/">Lucas da Rifa</a>
            </HeaderLeft>
            <NewItemMenu>
                <li>
                    <TextMenu href="/">
                        <CgMenu size={27} />
                    </TextMenu>
                </li>
                <ul>
                    <li>
                        <TextMenu href="/">Rifa</TextMenu>
                    </li>
                </ul>
                <ul>
                    <li>
                        <TextMenu href="/">Sobre nós</TextMenu>
                    </li>
                </ul>
                <ul>
                    <li>
                        <TextMenu href="/">Cadastre-se</TextMenu>
                    </li>
                </ul>
                <ul>
                    <li>
                        <TextMenu href="/">Login</TextMenu>
                    </li>
                </ul>
            </NewItemMenu>
        </ScrollMenu>
    </Menu>
);

export default FlexMenu;
