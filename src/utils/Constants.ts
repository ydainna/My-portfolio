import { Language } from "@enums/Language";
import translationEN from "@i18n/en.json";
import translationFR from "@i18n/fr.json";
import { InitOptions } from "i18next";

export class Constants {
  //i18n
  static readonly DEFAULT_LANGUAGE: Language = Language.FR;
  static readonly KEY_SEPARATOR: string = ".";
  static readonly ESCAPE_VALUE: boolean = false;
  static readonly RESOURCES: InitOptions["resources"] = {
    en: {
      translation: translationEN,
    },
    fr: {
      translation: translationFR,
    },
  };

  //About
  static readonly AVAILABLE: boolean = true;
  static readonly MAIL: string = import.meta.env.VITE_CONTACT_MAIL as string;

  //Reseau lin k
  static readonly LINKEDIN: string = import.meta.env.VITE_CONTACT_LINKEDIN as string;
  static readonly GITHUB: string = import.meta.env.VITE_CONTACT_GITHUB as string;
  static readonly TWITTER: string = import.meta.env.VITE_CONTACT_TWITTER as string;
  static readonly DISCORD: string = import.meta.env.VITE_CONTACT_DISCORD as string;
  static readonly CV_LINK: string = "/cv/cv.pdf";
}
