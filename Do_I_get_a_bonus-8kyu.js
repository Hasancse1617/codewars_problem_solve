function bonusTime(salary, bonus) {
    return bonus? `£${salary*10}` : `£${salary}`;
}
bonusTime(10000, true);