import { Router } from 'express';
import * as authService from '../services/auth.api.service.js';

const router = Router();

router.post('/register', async (req, res) => {
    const { email, password, nombre } = req.body;
    try {
        const newUser = await authService.register(email, password, nombre);
        res.status(201).json({ status: true, message: 'Usuario creado!' });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const response = await authService.login(email, password);
        res.status(200).json({ status: true, data: response });
    } catch (error) {
        res.status(401).json({ status: false, error: error.message });
    }
});

export default router;
