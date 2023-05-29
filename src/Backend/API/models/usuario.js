/* eslint-disable prettier/prettier */
import {db} from '../db.js';

export const getUsers = (_, res) => {
  const q = 'SELECT * FROM usuario';

  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    }

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    'INSERT INTO usuario(`nome_completo`, `email`, `senha`, `bairro`, `cidade`, `estado`,) VALUES(?)';

  const values = [
    req.body.nome_completo,
    req.body.email,
    req.body.senha,
    req.body.bairro,
    req.body.cidade,
    req.body.estado,
  ];

  db.query(q, [values], err => {
    if (err) {
      return res.json(err);
    }

    return res.status(200).json('Usuário criado com sucesso!');
  });
};

export const updateUser = (req, res) => {
  const q =
    'UPDATE usuario SET `nome_completo` = ?, `email` = ?, `senha` = ?, `bairro` = ?, `cidade` = ?, `estado` = ? WHERE `id` = ?';

  const values = [
    req.body.nome_completo,
    req.body.email,
    req.body.senha,
    req.body.bairro,
    req.body.cidade,
    req.body.estado,
  ];

  db.query(q, [...values, req.params.id], err => {
    if (err) {
      return res.json(err);
    }

    return res.status(200).json('Usuário atualizado com sucesso!');
  });
};

