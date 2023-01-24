const mongoose = require('mongoose')

// const  Connect =()=>{
//   
//   return  mongoose.connect('mongodb://localhost:27017/Vehicle_Details', ()=>{
//     console.log('Connection Successfull')
//   })
// }
const Connect = () => {
    // return mongoose.connect('mongodb+srv://dhirajmobicloud:Mobi%40123@cluster0.u1kcqe0.mongodb.net/messes');
    return mongoose.connect('mongodb://127.0.0.1:27017/Vehicle_Details')
}

module.exports = Connect;