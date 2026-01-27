const mongoose= require ('mongoose')

const User= new mongoose.Schema(
    {
        name:{
            type:String,
            required: true
        },
      surname:{
        type:String,
        required:true
      },
      email:{
        type: String,
        required:true,
        unique:true
      },
      bio:{
        type:String
      },
      image:{
        type: String
      },
    },
      {timestamps:true,
        strict:true
      }
)

module.exports= mongoose.model('user',User,'users')