import jwt from 'jsonwebtoken';

const authorization = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ status: false, message: 'Token de autenticación no proporcionado' });
    }

    jwt.verify(token, 'secreto_del_token', (err, user) => {
        if (err) {
            return res.status(403).json({ status: false, message: 'Token de autenticación inválido' });
        }
        req.user = user;
        next();
    });
};

export { authorization };
