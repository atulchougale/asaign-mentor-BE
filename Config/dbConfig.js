const mongodb = require("mongodb");
const Mongoclient = mongodb.Mongoclient;
const dbName="assignMentor"
const dbUrl=`mongodb+srv://atul3733:atul3733@tasks.bwwk1qs.mongodb.net/?retryWrites=true&w=majority`
module.exports={dbUrl,mongodb,Mongoclient};
