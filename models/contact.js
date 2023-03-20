const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    email: String,
    phone: String,
    linkedin: String,
    whereMet: String,
    whenMet: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;