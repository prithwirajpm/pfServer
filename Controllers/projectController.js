 const projects = require('../Controllers/Models/projectSchema')


//  Add Project

exports.addProjects = (req,res)=>{
    console.log("Inside add project function");
    const userId = req.payload
    console.log(`${userId}`);
    res.status(200).json("addProject request reciver!!!")
}