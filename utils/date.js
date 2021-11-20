export const days_number = (initial_date, end_date) => {
    const date1 = new Date(initial_date);
    const date2 = new Date(end_date);
    const Difference_In_Time = date2.getTime() - date1.getTime();
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return Difference_In_Days;
}

export default days_number