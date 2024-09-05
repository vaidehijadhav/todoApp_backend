//import the model
const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
    try{
        // find id
        const id = req.params.id ;

        // delete id
        await Todo.findByIdAndDelete(id);

        res.json({
            success: true,
            message:"Todo Deleted",
        }); 
    }
    catch(err){
        console.error(err);
        res.status(500).json({
           success:false,
           error:err.message,
           message:"Server Error",  
        }); 
    }
}