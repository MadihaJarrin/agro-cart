import mongoose from "mongoose";

const customerSchema = mongoose.Schema(
{
    title: {
        type:String,
        required: true,
    },

    adress: {
        type:String,
        required: true,
    },
    customerno: {
        type:Number,
        required: true,
    },
},
{
    timestamps: true,
}
);

export const Customer = mongoose.model('Cat', customerSchema);