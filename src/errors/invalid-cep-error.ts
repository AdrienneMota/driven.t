import { ApplicationError } from "@/protocols";

export function invalidCepError(): ApplicationError {
  return {
    name: "InvalidCEPError",
    message: "Este cep não corresponde a lugar nenhum!",
  };
}
