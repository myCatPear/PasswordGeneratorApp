import {DefaultPasswordSettingsType} from "common/defaultPasswordSettings";

export const changePasswordStrength = (passwordLength:number, passwordSettings:DefaultPasswordSettingsType) => {
    let passwordStrength = 0;
    if (passwordLength > 8) passwordStrength +=1
    if (passwordSettings.isIncludeSymbols) passwordStrength +=1
    if (passwordSettings.isIncludeNumbers) passwordStrength +=1
    if (passwordSettings.isIncludeUpperCase) passwordStrength +=1
    return passwordStrength;
}