const getLibro = (req,res)=>{
    //código 500 --> internal server error
    let respuesta = "Probando integración contínua"

    res.send(respuesta)
}

const postLibro = (req,res)=>{
    //código 500 --> internal server error
    let respuesta = {error: true, codigo: 500, result : [], mensaje: 'Datos incorrectos'}
    res.send(respuesta)

}

const putLibro = (req,res)=>{
    //Código 304 --> not modified
    let respuesta = {error: true, codigo: 304, result : []}

    res.send(respuesta)
}

const deleteLibro = (req,res)=>{
    //Código 304 --> not modified
    let respuesta = {error: true, codigo: 500, result : []}
    res.send(respuesta)
}


module.exports = {postLibro, getLibro, putLibro, deleteLibro};