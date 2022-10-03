import SendMail, { mailOption } from "./MailService.js";

async function SendForm(email, full_name, phone_number) {
    try {
        const mail_option = mailOption(email, full_name, phone_number);
        await SendMail(mail_option);
    } catch (err) {
        throw err;
    }
}

const ContactService = {
    SendForm
};

export default ContactService;