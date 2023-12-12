const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/notesDB")
.then(() => {
  console.log('mongo db connected');
})
.catch(()=> {
  console.log('error');
})

const notesSchema = new mongoose.Schema({

  title:{
    type:String,
    required:true
  },
  content:{
    type:String,
    required:true
  }
})

const collection = new mongoose.model('notes',notesSchema);

data = [{
  title:"testing",
  content:"testing"
},
{
  title:"another test",
  content:"another test testing"
}]

collection.insertMany(data);