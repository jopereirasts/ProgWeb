const index = (req,res)=>{
    res.render("main/index", {
        msg: "Alguma mensagem",
        layout:false 
    });
}

const about = (req,res)=>{
    res.render("main/about", { layout:false });
}

const profs = (req,res)=>{
    const professores = [
        {nome: "David", sala: 1111},
        {nome: "Bruno", sala: 1112},
        {nome: "André", sala: 1113},
        {nome: "Tayana", sala: 1114},
    ];
    res.render('main/profs',{professores, layout:false});
}

module.exports = { index, about, profs };
