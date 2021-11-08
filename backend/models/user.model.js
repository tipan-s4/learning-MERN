const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{ type:String, required: true, trim:true, unique: true, minlength: 3},
    useremail: { type: String, trim: true, unique:true, required: true },
    userpswd:{ type: String, required: true, unique:false, trim: true, minlength: 6, maxlength: 12}
},{
    timestamps: true,
})

const User = mongoose.model('User', userSchema);

module.exports = User;