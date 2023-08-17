import emailjs from "@emailjs/browser";
import { ApiUrlConstants } from "~/constants/apiUrlConstants";

export const sendEmailResetPassword = (
  paramTemplate: TemplateResetModel,
): void => {
  const params = {
    to_email: paramTemplate.to_email,
    to_name: paramTemplate.to_name,
    subject: "Your password has been reset",
    message: `Your new password in KLTN application is: ${paramTemplate.newPassword}`,
  };
  void emailjs.send(
    ApiUrlConstants.SERVICE_EMAIL_ID,
    ApiUrlConstants.TEMPLATE_RESET_PASSWORD_ID,
    params,
    ApiUrlConstants.EMAIL_PUBLIC_KEY,
  );
};
