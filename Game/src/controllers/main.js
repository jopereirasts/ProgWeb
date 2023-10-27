const index = (req,res)=>{
    res.render("main/index", {
        msg: "Jogo do T-rex"
    });
}

const about = (req,res)=>{
    res.render("main/about");
}


const ui = (req,res) =>{
    res.render("main/ui");
}

const game = (req,res) =>{
    res.render("main/game", {});
}

module.exports = { index, about, ui, game };
