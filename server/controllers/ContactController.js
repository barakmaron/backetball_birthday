import ContactService from "../services/ContactService.js";

async function FormSubmit(req, res) {
    try {
        const { email, full_name, phone_number } = req.body;
        await ContactService.SendForm(email, full_name, phone_number);
        return res.sendStatus(200);
    } catch (err) {
        throw err;
    }
}


const ContactController = {
    FormSubmit
};

export default ContactController;