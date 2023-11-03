"use server";

import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/ContactFormEmail";
import { render } from "@react-email/components";
import nodemailer from "nodemailer";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(subject, 500)) {
    return { error: "Invalid subject" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  let data;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });

    const emailHtml = render(ContactFormEmail({ message, senderEmail }));

    const options = {
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.EMAIL_TO,
      subject,
      html: emailHtml,
    };

    data = await transporter.sendMail(options);
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }

  return { data };
};
