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

async function update (req,res) {
    const id = req.params.id;
    try {
        const curso = await Curso.findByPk(id);

        if (!curso) {
            res.status(404).send("Curso não encontrado");
            return;
        }

        curso.sigla = req.body.sigla;
        curso.nome = req.body.nome;
        curso.areaId = req.body.areaId;

        await curso.save();

        res.redirect(`/curso/read/${id}`);
    } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao atualizar o curso");
    }
};

async function remove (req,res) {
    const { id } = req.params;

    try{
        await Curso.destroy({where: {id:id}});
        res.send("Curso deletado com sucesso");
    } catch(e) {
        console.log(e);
        res.status(500).send(e);

    }
};

module.exports = { index, read, create, update, remove }