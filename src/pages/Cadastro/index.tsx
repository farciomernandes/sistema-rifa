import React, { useState, useEffect, useCallback } from 'react';

import { Link } from 'react-router-dom';
import { Container, Formulario, Section, Button, Input, Title } from './styles';

import CreateUser from '../../services/CreateUser';

const Cadastro: React.FC = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    async function handleCreateUser() {
        const data = {
            name,
            email,
            password,
        };
        console.log(data);
        CreateUser.create(email, password);
    }

    return (
        <Container>
            <Title>CADASTRO</Title>
            <Formulario>
                <Section>
                    <p>Nome</p>
                    <Input
                        type="text"
                        onChange={e => setName(e.target.value)}
                    />
                </Section>
                <Section>
                    <p>Email</p>
                    <Input
                        type="text"
                        onChange={e => setEmail(e.target.value)}
                    />
                </Section>
                <Section>
                    <p>Password</p>
                    <Input
                        type="text"
                        onChange={e => setPassword(e.target.value)}
                    />
                </Section>

                <div>
                    <Button>
                        <Link onClick={handleCreateUser} to="/cadastro">
                            CADASTRAR
                        </Link>
                    </Button>
                </div>
            </Formulario>
        </Container>
    );
};

export default Cadastro;
