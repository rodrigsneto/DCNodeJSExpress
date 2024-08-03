let db = []

const list = (request, response) => { 
    response.json(db)
}

const getById = (request, response) => {
    let id = request.params.id
    let users = db[id]

    db[id] = {
        ...users,
        ...request.body
    }

    if(!users) {
        response.status(404)
        let msg = `Usuario ${id} não encontrado`
        return response.json({
            message: msg
        })
    }

    response.json(db[id])

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
    let users = db[id]

    db[id] = {
        ...users,
        ...request.body
    }

    if(!users) {
        response.status(404)
        let msg = `Usuario ${id} não encontrado`
        return response.json({
            message: msg
        })
    }


    response.json({
        message: "Atualizado com sucesso " + id
    })
}

module.exports = {
    list,
    create,
    update,
    getById
}