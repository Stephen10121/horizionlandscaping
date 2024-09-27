import { Resend } from "resend";
import {config} from "dotenv";

config();

export async function sendForm(email: string, name: string, desc: string, whereFrom: string | null) {
    console.log(`[server] Sending email to ${process.env.EMAIL}.`);
    const resend = new Resend(process.env.RESEND_KEY);
    const { data, error } = await resend.emails.send({
        from: "contact@mail.horizionlandscaping.llc",
        to: process.env.EMAIL!,
        subject: 'Website Contact Form',
        html:  `<h1>From: ${email}</h1><h2>Name: ${name}</h2><p>Description: ${desc}</p><p>From: ${whereFrom ? whereFrom : "unknown"}</p>`
    });

    if (error) {
        return console.error({ error });
    }

    console.log({ data });
}