const index = (req,res)=>{
    res.send("Hello World");
}

const about = (req,res)=>{
    res.send("Pagina About");
}

export default {index,about};