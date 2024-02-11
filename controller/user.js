const userModel = require("../models/user");

const createUser = async (req, res) => {

    const { name, email } = req.body

    console.log("creating user...");
    try {

        const user = await userModel.create({ name, email })
        res.status(201).json({ message: "User created Successfully", data: user })
        if (!user) {
            res.status(404).json({ message: "Unable to create user" })
        }

    } catch (error) {
        console.log(error);
    }
}

module.exports = {createUser}