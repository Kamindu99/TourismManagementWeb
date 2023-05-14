import mongoose from "mongoose";
const sportBookingSchema = new mongoose.Schema ({
    eventrname:{
        type:String,
        required:true
    },
    eventDate:{
        type:String,
        required:true
    },
    eventTime:{
        type:String,
        required:true
    },
    eventLocation:{
        type:String,
        required:true
    },
    ticketPrice:{
        type:String,
        required:true
    },
    accomendation:{
        type:String,
        required:true
    },
    transport:{
        type:String,
        required:true
    },
    total:{
        type:String,
        required:true
    },
    cmp:{
        type:Boolean,
        default:false
    },
    bookingDate:{
        type:Date,
        default:Date.now
    }
});

export default mongoose.model('sportbookings',sportBookingSchema);