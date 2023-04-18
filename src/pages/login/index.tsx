import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const Login = () => {
    const header: string = 'Saloon Management';
    const login: string = 'LOGIN';

    const navigate = useNavigate();

    return (
        <div className="login">
            <Box width={'25vw'}>
                <Stack direction="column" spacing={2}>
                    <h2>{header}</h2>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        type="email"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        type="Password"
                    />
                    <Button
                        variant="contained"
                        onClick={() => navigate('/home')}
                    >
                        {login}
                    </Button>
                </Stack>
            </Box>
        </div>
    );
};

export default Login;
