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
async function create (req,res) {
    if (req.route.methods.get) {
        res.render("curso/create");
    } else {
        const curso = req.body
        try {
            await Curso.create(curso);
            res.redirect("/curso");
        } catch (e) {
            console.log(e);
        }
    }
};
async function update (req,res) {};
async function remove (req,res) {};

module.exports = { index, read, create, update, remove }