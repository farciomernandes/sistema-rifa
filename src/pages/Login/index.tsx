import React, { useState, useEffect, useCallback } from 'react';

import { Link } from 'react-router-dom';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import CreateIcon from '@material-ui/icons/Create';
import CreateUser from '../../services/CreateUser';
import { Container, Card, Title, Button } from './styles';

import Header from '../../components/Menu';
import Footer from '../../components/Footer';

const Login: React.FC = () => {
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
            <Header />
            <Card>
                <Title>
                    <CreateIcon /> <h1> LOGIN</h1>
                </Title>
                <form onSubmit={handleCreateUser}>
                    <section>
                        <span>
                            <AccessibilityIcon />
                        </span>
                        <input type="text" placeholder="email" />
                    </section>
                    <section>
                        <span>
                            <VpnKeyIcon />
                        </span>
                        <input type="password" placeholder="senha" />
                    </section>

                    <Button type="submit">FAZER LOGIN</Button>
                </form>
                <p>
                    Não tem uma conta?
                    <Link to="cadastro">
                        {' '}
                        <span> CADASTRE-SE</span>
                    </Link>
                </p>
            </Card>
            <Footer />
        </Container>
    );
};

export default Login;
