import { useState, useMemo, useRef } from "react";
import { MainListType } from "@/Components/App";
import { dataCreator } from "@/utiles/dataCreator";
import { monthListRu } from "@/utiles/monthListRu";

export const useInitCalndar = () => {
  const curDate = new Date();
  const curMonth = curDate.getMonth();
  const curYear = curDate.getFullYear();

  const [month, setMonth] = useState(monthListRu[curMonth]);
  const [year, setYear] = useState(curYear);

  const todayCheck: number | false = useMemo(() => {
    console.log("check2");
    if (monthListRu.indexOf(month) === curMonth && year === curYear)
      return curDate.getDate();
    return false;
  }, [month, year, curDate]);

  const setMonthHandler = (nextMonth: string) => {
    setMonth((prevMonth) => {
      const monthIndex = monthListRu.indexOf(prevMonth);
      const changeDirection = monthIndex + +nextMonth;
      if (prevMonth === "Январь" && nextMonth === "-1") {
        setYear((prevYear) => prevYear - 1);
        return "Декабрь";
      }
      if (prevMonth === "Декабрь" && nextMonth === "1") {
        setYear((prevYear) => prevYear + 1);
        return "Январь";
      }
      return monthListRu[changeDirection];
    });
  };

  const targetMonth = dataCreator(year, monthListRu.indexOf(month), 1);

  const [mainList, setMainList] = useState<MainListType>({});
  const timeoutId = useRef<NodeJS.Timeout>();
  const lastKey = useRef<string>("");

  const setMainListHandler = (key: string, value: string) => {
    if (lastKey.current === key) {
      clearTimeout(timeoutId.current);
    }
    lastKey.current = key;
    timeoutId.current = setTimeout(() => {
      setMainList((prev) => {
        const newMainList = { ...prev };
        newMainList[key] = value;
        return newMainList;
      });
    }, 2500);
  };
  console.log("check");
  return {
    month,
    setMonthHandler,
    year,
    targetMonth,
    todayCheck,
    setMainListHandler,
    mainList,
  };
};
