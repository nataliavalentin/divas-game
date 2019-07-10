const { connect } = require('./DivasRepository')
const DivasModel = require('./DivasSchema')

connect()

const getAll = async() => {
    return DivasModel.find((error, usuario) => {
        return usuario
    })
}

const getById = (id) => {
    return DivasModel.findById(id)
}

const add = async(usuario) => {
    const novaDiva = new DivasModel(usuario)
    return novaDiva.save()
}

const remove = (id) => {
    return DivasModel.findByIdAndDelete(id)
}

const update = (id, usuario) => {
    return DivasModel.findByIdAndUpdate(
        id, { $set: usuario }, { new: true },
    )
}

module.exports = { getAll, getById, add, remove, update }