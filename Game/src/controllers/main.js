const index = (req,res)=>{
    res.render("main/index", {
        msg: "Alguma mensagem"
    });
}

const about = (req,res)=>{
    res.render("main/about");
}

const profs = (req,res)=>{
    const professores = [
        {nome: "David", sala: 1111},
        {nome: "Bruno", sala: 1112},
        {nome: "André", sala: 1113},
        {nome: "Tayana", sala: 1114},
    ];
    res.render('main/profs',{professores});
}

const ui = (req,res) =>{
    res.render("main/ui");
}

const game = (req,res) =>{
    res.render("main/game");
}

module.exports = { index, about, profs, ui, game };
