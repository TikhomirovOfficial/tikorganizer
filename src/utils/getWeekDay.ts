export const getWeekDay = (date:number): string => {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const day = new Date(date*1000).getDay();
    const today = new Date().getDay()
    const dayForecastIsTommorrow = day - today === 1 || (today === 6 && day === 0)
    if (dayForecastIsTommorrow) {
        return 'Завтра'
    }
    return days[day];
}