const todoModel = require('../models/Todo_model')

module.exports.getTodo = async (req,res)=>{
    const todo = await todoModel.find()
    res.send(todo)
}


module.exports.saveTodo =  (req,res)=>{
    const {toDo } = req.body;

    todoModel.create({toDo})
    .then((data)=>{
        console.log("save successfully...");
        res.status(201).send(data);

    })
    .catch((err)=> {
        console.log(err);
        res.send({error: err , msg : "Something went wrong"});
    });
}


module.exports.updateTodo =  (req,res)=>{
    const {id} = req.params;
    const {toDo } = req.body;

    todoModel.findByIdAndUpdate(id , {toDo})
    .then(()=>{
        res.send("Updated successfully...");
       
    })
    .catch((err)=> {
        console.log(err);
        res.send({error: err , msg : "Something went wrong"});
    });
};


module.exports.deleteTodo =  (req,res)=>{
    const {id} = req.params;

    todoModel.findByIdAndDelete(id)
    .then(()=>{
        res.send("Deleted successfully...");
       
    })
    .catch((err)=> {
        console.log(err);
        res.send({error: err , msg : "Something went wrong"});
    });
};



