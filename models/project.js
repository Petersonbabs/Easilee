const moongoose = require("moongose");
const project = new moongose.schema({

    title: {
        type: String,
        required: [true, "you can't create project without giving it a title"]
    },
    
    description: {type: String,},
    tasks: [
        {
            title: {type: String, required: true},
            description: {type: String}
        }
    ],

    dateCreated: {
        type: Date,
        default: Date.now
    },

    dueDate: {
        type: Date
    }


})


const projectModel = moongoose.model("Project", project)

module.exports = projectModel