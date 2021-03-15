import React from 'react';
import {
    AiOutlineWhatsApp,
    AiFillFacebook,
    AiOutlineInstagram,
} from 'react-icons/ai';

import { Container, MidiaSocial, Direitos } from './styles';

const Footer: React.FC = () => (
    <Container>
        <MidiaSocial>
            <div>
                <AiOutlineWhatsApp size={24} /> <p>(83) 9 8161 3615</p>
            </div>
            <div>
                <AiFillFacebook size={24} /> <p>Lucas Rifa</p>
            </div>
            <div>
                <AiOutlineInstagram size={24} /> <p>@Lucasrifa</p>
            </div>
        </MidiaSocial>
        <Direitos>
            <p>
                {' '}
                © 2020 - Marcio Fernandes e Diego Vieira de Souza, Todos os
                Direitos Reservados!
            </p>
        </Direitos>
    </Container>
);

export default Footer;
