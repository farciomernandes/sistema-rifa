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
                <AiOutlineWhatsApp size={42} />
            </div>
            <div>
                <AiFillFacebook size={42} />
            </div>
            <div>
                <AiOutlineInstagram size={42} />
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
