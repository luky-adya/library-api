const express = require('express');

const app = express.Router();
const repo = require('../repos/LibraryRepo');

// TODO: Memanggil fungsi listBuku untuk mendapatkan data semua buku yang ada
app.get('/', (req, res) => {
  repo.findAll().then((todos) => {
    res.json(todos);
  }).catch((error) => console.log(error));
});

// TODO: Memanggil fungsi cariBuku untuk mendapatkan spesifik buku berdasarkan ID
app.get('/:id', (req, res) => {
  repo.findAll().then((todos) => {
    res.json(todos);
  }).catch((error) => console.log(error));
});

// TODO: Memanggil fungsi tambahBuku untuk menambah buku baru pada list
app.post('/', (req, res) => {
  const infoBukuBaru = req.body;
  console.log(infoBukuBaru)
  repo.create(infoBukuBaru).then((todo) => {
    res.json(todo);
  }).catch((error) => console.log(error));
});

// TODO: Memanggil fungsi hapusBuku untuk menghapus buku tertentu
app.delete('/:id', (req, res) => {
  const { id } = req.params;
  repo.deleteById(id).then((ok) => {
    console.log(ok);
    console.log(`Deleted record with id: ${id}`);
    res.status(200).json([]);
  }).catch((error) => console.log(error));
});

// TODO: Memanggil fungsi rubahStatusPeminjaman untuk merubah status peminjaman buku tertentu
app.put('/:id', (req, res) => {
  const { id } = req.params;
  const todo = { judulBuku: req.body.judulBuku, status: req.body.status };
  repo.updateById(id, todo)
    .then(res.status(200).json([]))
    .catch((error) => console.log(error));
  });

// Memanggil fungsi rubahStatusPeminjaman untuk merubah status peminjaman buku tertentu
app.put('/rubah/:id', (req, res) => {
  const { id } = req.params;
  repo.rubahInfoBuku(id, req.body)
    .then((info) => {
      res.status(200).json({
        info: info,
        message: `Informasi buku dengan id ${id} sudah diubah`
      })
        .catch((error) => console.log(error));
    });
});
module.exports = app;
