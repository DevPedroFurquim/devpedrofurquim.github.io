import { useRouter } from "next/router";
import en from '../public/locales/en/common.json'
import ptBr from '../public/locales/pt-br/common.json'

export const useTranslation = () => {
  const { locale } = useRouter();
  const translations = locale === "pt-br" ? ptBr : en;
  return translations;
};
