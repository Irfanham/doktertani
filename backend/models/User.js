const mongoose = require ("mongoose");

// create schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        require: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 8,
    },
    profilePict: {
        type: String,
        default: "",

    },
    coverPict: {
        type: String,
        default: "",

    },
    followers: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    bio:{
        type: String,
        max: 50
    },
    city:{
        type: String,
        max: 50
    },
    hometown:{
        type: String,
        max: 50
    },
    jobs:{
        type: String,
        max: 20
    },

},{timestamps: true}

);

module.exports = mongoose.model("User", UserSchema);