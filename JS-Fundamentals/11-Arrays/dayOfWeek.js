function dayOfWeek(day) {
    let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    if (day > 7 || day < 1) {
        console.log('Invalid day!');
    } else {
        console.log(week[day - 1]);
    }
}
dayOfWeek(3);