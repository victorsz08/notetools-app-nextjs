export const formatDateRange = (date: Date): string => {
    const currentDay = date.toLocaleDateString("pt-BR", { day: "2-digit" });
    const currentMonth = date.toLocaleDateString("pt-BR", { month: "short" }).split(".")[0];
    const currentYear = date.getFullYear();

    return `01 ao dia ${currentDay} de ${currentMonth.split("")[0].toUpperCase() + currentMonth.slice(1)} de ${currentYear}`;
  };