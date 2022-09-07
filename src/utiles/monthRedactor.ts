import { monthListRu } from "./monthListRu";

export const monthRedactor = (index: number) => {
  switch (index) {
    case 2:
    case 7:
      return `${monthListRu[index]}а`;
    default:
      return `${monthListRu[index].slice(0, monthListRu[index].length - 1)}я`;
  }
};
