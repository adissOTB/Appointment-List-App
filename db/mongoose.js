const mongoose = require('mongoose');
const appointSchema = mongoose.Schema;

//create a table for DB
const listSchema = appointSchema({


    appName: { type : String,
        lowercase: true,
        required: true
    },
    
    appDate: { type: String,
        required: true
    }, 

    appTime1: { type: String,
        require: true
    }, 

    appTime2: { type: String,
        require: true
    }
});

module.exports = mongoose.model('Appointments', listSchema)