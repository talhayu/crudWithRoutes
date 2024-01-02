const Item = require('../model/model')

const postData = async (req, res) => {
    try {
        const { name, password } = req.body
        const createUser = new Item({ name, password })
        const saveData = await createUser.save()
        return res.status(200).json({ succes: true, user: saveData, message: 'user craeted' })
    } catch (error) {
        return res.status(500).json({ message: 'internal server error', er: error })
    }
}

const getData = async (req, res) => {
    try {
        const getItem = await Item.find()
        return res.status(200).json({ succes: true, user: getItem })
    } catch (error) {
        return res.status(500).json({ message: 'internal server error', er: error })
    }
}

const getbyid = async (req, res) => {
    try {
        const id = req.params.id;
        const findById = await Item.findById(id)
        return res.status(200).json({ succes: true, user: findById })
    } catch (error) {
        return res.status(500).json({ message: 'internal server error', er: error })
    }
}

const update = async (req, res) => {
    try {
        const id = req.params.id;
        await Item.findByIdAndUpdate(id, req.body)
        const findById = await Item.findById(id)
        return res.status(200).json({ succes: true, user: findById })
    } catch (err) {
        return res.status(500).json({ message: 'internal server error', error: err })
    }
}

const deletes = async (req, res) => {
    try {
        const id = req.params.id;
        await Item.findByIdAndDelete(id)
        return res.status(200).json({ succes: true, user: 'user deleted' })
    } catch (err) {
        return res.status(500).json({ message: 'internal server error', error: err })
    }
}

module.exports = { postData, getData, getbyid, update, deletes }