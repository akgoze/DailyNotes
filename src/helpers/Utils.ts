const dateFormatter = ({
  date,
  format,
}: {
  date: Date | string;
  format: string;
}): string => {
  const getDate = new Date(date);

  const year: string = getDate?.getFullYear().toString();
  const month: string = (getDate?.getMonth() + 1).toString().padStart(2, "0");
  const day: string = getDate?.getDate().toString().padStart(2, "0");

  const locales = "en-US";

  // Replace placeholders with actual date parts
  if (
    getDate === null ||
    getDate === undefined ||
    Number(day) > 31 ||
    Number(month) > 12 ||
    year.length > 4 ||
    isNaN(getDate.getTime())
  ) {
    throw new Error("Invalid date");
  }

  const formattedDate = format
    .replace("YYYY", year)
    .replace("YY", year.slice(-2))
    .replace(
      "MMMM",
      new Intl.DateTimeFormat(locales, { month: "long" }).format(getDate)
    )
    .replace(
      "MMM",
      new Intl.DateTimeFormat(locales, { month: "short" }).format(getDate)
    )
    .replace("MM", month)
    .replace("mm", month.replace(/^0+/, ""))
    .replace(
      "DDDD",
      new Intl.DateTimeFormat(locales, { weekday: "long" }).format(getDate)
    )
    .replace(
      "DDD",
      new Intl.DateTimeFormat(locales, { weekday: "short" }).format(getDate)
    )
    .replace("DD", day)
    .replace("dd", day.replace(/^0+/, ""));

  return formattedDate;
};

export { dateFormatter };
