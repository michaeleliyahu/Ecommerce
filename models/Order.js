const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: {type: String, required:true},
    products:[
        {
            productsId:{
                type:String
            },
            quantity:{
                type:Number,
                default: 1,
            },
        },
    ],
    amount: {type:Number, required: true},
    address: {type:Object, required: true},
    status: {type:String, default: "panding"},
},
{timestamps: true}
);

module.exports = mongoose.model("Order", orderSchema);