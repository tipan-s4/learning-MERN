const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const shopSchema = new Schema({
    shopname:{ type:String, required: true, unique: true},
    shopowner:{ type:String , required:true},
    title:{ type:String, required:true },
    description:{ type:String, required:true},
    likes: { type: Number },
    // comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    // date:{ type: Date, required:true}
},{
    timestamps: true,
})

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;