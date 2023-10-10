const index = (req,res)=>{
    res.render("main/index", {
        msg: "Alguma mensagem",
        layout:false 
    });
}

const about = (req,res)=>{
    res.render("main/about", { layout:false });
}

module.exports = { index, about };
