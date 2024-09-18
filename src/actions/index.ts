import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
    mail: defineAction({
        accept: "form",
        input: z.object({
            name: z.string(),
            email: z.string(),
            message: z.string(),
        }),
        handler: async ({ name, email, message }) => {
            console.log(`Received message from ${name} <${email}>: ${message}`);
            return { status: "success" };
        }
    })
};