import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema ({
    eventType:{
        type:String,
        required:true
    },
    eventName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    eventImage:{
        type:String,
        required:true
    },
    eventsubItems:[{
        eventName:{
            type:String,
            required:true
        },
        eventLocation:{
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
        tickets:[{
            ticketprice:{
                type:String,
                required:true
            },
            ticketName:{
                type:String,
                required:true
            }
        }],
        accomendation:[{
            accomendationprice:{
                type:String,
                required:true
            },
            accomendationName:{
                type:String,
                required:true
            }
        }],
        transport:[{
            transportprice:{
                type:String,
                required:true
            },
            transportName:{
                type:String,
                required:true
            }
        }]
    }]


});

export default mongoose.model('sportsevents',eventsSchema);