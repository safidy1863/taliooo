import * as yup from "yup";
import { LoginType } from "../types/login.type";

export const loginSchema: yup.ObjectSchema<LoginType> = yup.object({
  email: yup.string().email("Veuillez un adresse email valide").required("Email obligatoire"),
  password: yup.string().required("Veuillez entrer "),
});
