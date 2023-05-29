/* eslint-disable prettier/prettier */
import express from 'express';
import {addUser, getUsers, updateUser} from '../controllers/user.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', addUser);

router.put('/:id', updateUser);

export default router;
