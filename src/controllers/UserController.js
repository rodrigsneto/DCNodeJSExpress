let db = []

const list = (request, response) => { 
    response.json(db)
}

const create = (request, response) => {
    let body = request.body
    db.push(body)

    if(!body.email) {
        response.status(400)
        message: "COD: 1547. Emal é obrigatorio!"
        
    }

    response.json({
        message: "Cadastrado com sucesso"
    })
}

const update = (request, response) => {
    let id = request.params.id


    response.json({
        message: "Atualizado com sucesso" + id
    })
}

module.exports = {
    list,
    create,
    update
}