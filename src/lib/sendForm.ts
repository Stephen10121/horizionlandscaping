import { Resend } from "resend";

export async function sendForm(email: string, name: string, desc: string, whereFrom: string | null) {
    console.log(`[server] Sending email to ${import.meta.env.VITE_EMAIL}.`);
    const resend = new Resend(import.meta.env.VITE_RESEND_KEY);
    const { data, error } = await resend.emails.send({
        from: "contact@mail.horizionlandscaping.llc",
        to: import.meta.env.VITE_EMAIL,
        subject: 'Website Contact Form',
        html:  `<h1>From: ${email}</h1><h2>Name: ${name}</h2><p>Description: ${desc}</p><p>From: ${whereFrom ? whereFrom : "unknown"}</p>`
    });

    if (error) {
        return console.error({ error });
    }

    console.log({ data });
}