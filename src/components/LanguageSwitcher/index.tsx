import { Button, FlagImage, LanguageButtonWrapper } from "./styles";

interface Props {
  isEnglish: boolean;
  onChangeLanguage: (isEnglish: boolean) => void;
}

const LanguageSwitcher = ({ isEnglish, onChangeLanguage }: Props) => {
  return (
    <LanguageButtonWrapper>
      <Button onClick={() => onChangeLanguage(!isEnglish)}>
        <FlagImage
          src={
            isEnglish
              ? "/images/Flags/FlagBrazil.png"
              : "/images/Flags/FlagEnglish.png"
          }
          alt="Flag"
        />
      </Button>
    </LanguageButtonWrapper>
  );
};
export default LanguageSwitcher;
