import mongoose from 'mongoose';
import connectDB from './db.js';
import User from './user.js';

export default async (req, res) => {
    if (req.method === 'POST') {
        try {
            await connectDB();
            const { email, password } = req.body;

            // Perform login or signup logic here
            res.status(200).json({ message: 'Request received!' });
        } catch (error) {
            res.status(500).json({ error: 'Something went wrong' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};
