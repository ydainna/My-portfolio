import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Language } from "@enums/Language";
import { Box, InputLabel, MenuItem, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FlagIcon from "@components/Icons/FlagIcon";

const SelectLanguage = () => {
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState<Language>(i18n.language as Language);

  const changeLanguage = (event: SelectChangeEvent<Language>) => {
    switch (event.target.value) {
      case Language.EN:
        setLang(Language.EN);
        i18n.changeLanguage(Language.EN);
        break;
      case Language.FR:
      default:
        setLang(Language.FR);
        i18n.changeLanguage(Language.FR);
        break;
    }
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="language-select-label">Language</InputLabel>
          <Select labelId="language-select-label" id="language-select" value={lang} label="Language" onChange={changeLanguage}>
            <MenuItem value={Language.FR} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <FlagIcon size="medium" icon={"fi fi-fr"} /> {t("translate-button.fr")}
            </MenuItem>
            <MenuItem value={Language.EN} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <FlagIcon size="medium" icon={"fi fi-gb"} /> {t("translate-button.en")}
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SelectLanguage;
