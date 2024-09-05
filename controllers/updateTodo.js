// import the model
const Todo = require("../models/Todo");

exports.updateTodo = async(req, res) => {
    try{
        // fetch data
        const {id} = req.params;
        const {title, description} = req.body;

        // update
        const todo = await Todo.findByIdAndUpdate(
            // kiske liye update krna hai
            {_id:id},
            //kya update krna chahte ho
            {title, description, updatedAt:Date.now()} , 
        )

        res.status(200).json({
            success:true,
            data:todo,
            message: `Updated Successfully`,
        })
    }
    catch(err) {
        console.error(err);
        res.status(500).json({
           success:false,
           error:err.message,
           message:"Server Error",  
        }); 
    }
}