const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

const projectModel = require("./project")

const user = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide your email address"],
        trim: true
    },

    name: {
        type: String,
        required: [true, "Please provide your Name"]
    },

    project: projectModel

})


const userModel = mongoose.model("Users", user);

module.exports = userModel;