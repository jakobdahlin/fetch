import { useLanguage } from "@/app/contexts/language-context";
import translations from "@/app/translations";

export function useTranslation() {
  const { lang } = useLanguage();


  const t = (key: string): any => {
    const keys = key.split(".");
    let result: any = translations[lang];

    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) return key; // fallback if key is missing
    }

    return result;
  };

  return { t };
}
