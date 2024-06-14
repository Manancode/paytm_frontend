import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://user:UNQrSHA8AD9xQbuq@paytm.bnknj9n.mongodb.net/")


const { Schema } = mongoose;

const userSchema = new Schema({
    firstname : String, 
    lastname : String ,
    username : String , 
    password : String , 

});