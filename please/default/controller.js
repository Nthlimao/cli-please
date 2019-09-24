module.exports = {
    default() {
        return `module.exports = {}`;
    },
    controllerCRUD() {
        return `module.exports = {
    async index(req, res){

    },
    async show(req, res){

    },
    async store(req, res){

    },
    async update(req, res){

    },
    async destroy(req, res){

    }
};`
    },
    modelCRUD(model) {
        return `const ${model} = require('../models/${model}');

module.exports = {
    async index(req, res){
        const index = await ${model}.find();

        return res.json(index);
    },
    async show(req, res){
        const show = await ${model}.findById(req.params.id);

        return res.json(show);
    },
    async store(req, res){
        const store = await ${model}.create(req.body);

        return res.json(store);
    },
    async update(req, res){
        const update = await ${model}.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(update);
    },
    async destroy(req, res){
        await ${model}.findByIdAndRemove(req.params.id);

        return res.send();
    }
}`
    },
}