import { addUser, getUser } from '../models/account.js';
export async function createUser(req, res) {
    try {
        console.log('Body:', req.body);
        const { email, password, name } = req.body;
        if (!email || !password || !name) throw new Error('Name, Email and Password are required');
        const data = await addUser({ name, email, password });
        res.send(data);
    } catch (error) {
        if (error instanceof Error) res.send(error.message);
        res.status(500).send(error);
    }
}
export async function signIn(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) throw new Error('Email and password incorrect');
        const user = await getUser({ email, password });
        if (!user) {
            throw new Error('No user found!!');
        }
        res.send(user);
    } catch (error) {
        if (error instanceof Error) res.send(error.message);
        res.status(500).send(error);
    }
}
