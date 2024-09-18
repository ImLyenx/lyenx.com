import { defineAction, ActionError } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  mail: defineAction({
    accept: "form",
    input: z.object({
      name: z.string(),
      email: z.string(),
      subject: z.string(),
      message: z.string(),
    }),
    handler: async ({ name, email, message, subject }) => {
      try {
        const verifyResponse = await fetch(
          `https://verifyright.co/verify/${email}?token=${import.meta.env.VERIFYRIGHT_API_KEY}`,
          { method: "GET" }
        );
        const verifyData = await verifyResponse.json();

        if (verifyData.status !== true) {
          throw new ActionError({
            code: "UNAUTHORIZED",
            message: "Invalid email address",
          });
        }

        const emailResponse = await fetch("https://api.useplunk.com/v1/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + import.meta.env.PLUNK_API_KEY,
          },
          body: JSON.stringify({
            to: "contact@lyenx.com",
            subject,
            body: message,
            reply: email,
            name,
          }),
        });
        const emailData = await emailResponse.json();
        if (emailData.success !== true) {
          throw new ActionError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to send email",
          });
        }
      } catch (error) {
        if (error instanceof ActionError) {
          throw error;
        } else {
          throw new ActionError({
            code: "INTERNAL_SERVER_ERROR",
            message: "An unknown error occurred",
          });
        }
      }
    },
  }),
};