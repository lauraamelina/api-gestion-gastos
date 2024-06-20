import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getUserByEmail, createUser } from './usuarios.api.service.js'

const saltRounds = 10;
const jwtSecret = 'secreto_del_token';

const register = async (email, password, nombre) => {
    try {
        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            throw new Error('Ya existe un usuario con ese email');
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = {
            email,
            hashedPassword,
            nombre
        }

        await createUser(user);

        const newUser = await getUserByEmail(email);
        return newUser;
    } catch (error) {
        throw error;
    }
};

const login = async (email, password) => {
    try {
        const user = await getUserByEmail(email);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            throw new Error('Contraseña incorrecta');
        }

        const token = jwt.sign({ id: user.idUsuario, email: user.email }, jwtSecret, { expiresIn: '7d' });

        return { token, user };
    } catch (error) {
        throw error;
    }
};

export {
    register,
    login
};
