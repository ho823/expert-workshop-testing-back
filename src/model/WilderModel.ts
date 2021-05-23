import * as mongoose from "mongoose";
const Schema = mongoose.Schema;


const WilderSchema = new Schema( 
    {
        _id: String,
        name: {type: String, unique: true}, 
        city: String
        /*, 
        skills: [
            {
                id: String,
                title: String, 
                votes: Number
            }
        ]*/
    }
); 


const model:mongoose.Model<any> =  mongoose.model("wilder", WilderSchema);
export default model;