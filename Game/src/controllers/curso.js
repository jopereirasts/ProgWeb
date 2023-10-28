const models = require("../models/index");
const Curso = models.curso;

async function index (req,res) {
    const cursos = await Curso.findAll();
    res.render('curso/index',{
        cursos: cursos.map(curso => curso.toJSON())
    });
};
async function read (req,res) {
    const cursoId = req.params.id;
    res.end(cursoId);
};
async function create (req,res) {};
async function update (req,res) {};
async function remove (req,res) {};

module.exports = { index, read, create, update, remove }