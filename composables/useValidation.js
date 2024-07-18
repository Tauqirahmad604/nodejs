import { z } from "zod";

export function useValidation() {
  const { t } = useI18n();

  const loginSchema = z.object({
    email: z.string({ required_error: "The email is required." })
      .email("The email must be a valid email address."),
    password: z.string({ required_error: "The password is required." }),
  });

  return {
    loginSchema
  }
}