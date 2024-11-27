import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";
import { mailtrapclient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapclient.send({
      from: sender,
      to: recipient,
      subject: "Verify Your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("Email sent successfully", response);
  } catch (error) {
    console.error("Error sending verification ", error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const res = await mailtrapclient.send({
      from: sender,
      to: recipient,
      template_uuid: "0e5dcdc7-9dcc-4065-aa71-1f2f09dbc46b",
    });
    console.log("Welcome email sent successfully", res);
  } catch (error) {
    console.error("Welcome email sent Failed", error);
    console.error("Error sending verification ", error);
  }
};
