import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER_NAME,
        pass: process.env.EMAIL_PASSWORD
    }
});

export const mailOption = (from, full_name, phone_number) => ({
    from,
    to: process.env.EMAIL_USER_NAME,
    subject: "New contact form!!",
    text: `name: ${full_name}\nphone: ${phone_number}\nemail: ${from}`
});

const SendMail = (mailOption) => transporter.sendMail(mailOption, (error, info) => {
    if(error)
        throw error;
});

export default SendMail;