const models = require("../models/index");
const Curso = models.Curso;

async function index (req,res) {
    const cursos = await Curso.findAll();
    res.render('curso/index',{  
        cursos: cursos.map(curso => curso.toJSON())
    });
};
async function read (req,res) {
    const id = req.params.id;
    const curso = await Curso.findOne({where: {id}, include: models.Area });
    res.render("curso/read", {
       curso: curso.toJSON() 
    })
};
async function create (req,res) {
    console.log(req.route.methods.get);
    if (req.route.methods.get) {
        res.render("curso/create");
    } else {
        console.log("add curso");
        try {
            await Curso.create(req.body);
            res.redirect("/curso");
        } catch (err) {
            throw new Error(err);
        }
    }
};
async function update (req,res) {};
async function remove (req,res) {};

module.exports = { index, read, create, update, remove }