import { ColorModeTypes } from "@shared/enums";
import { LocalData } from "@shared/types";

export function saveLocalData(localData: LocalData) {
  localStorage.setItem(localData.key, JSON.stringify(localData.data));
}

export function getLocalData(key: string) {
  const data = localStorage.getItem(key);
  if (!data) throw Error("Unable to parse null as JSON");
  return JSON.parse(data);
}

export function clearLocalData(key: string) {
  localStorage.removeItem(key);
}

export function getColorMode() {
  try {
    const colormode = getLocalData("colormode");
    return colormode;
  } catch {
    saveLocalData({ key: "colormode", data: ColorModeTypes.LIGHT });
    return ColorModeTypes.LIGHT;
  }
}
