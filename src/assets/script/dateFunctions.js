export const dateToDay = (dateString) => {
    const date = new Date(dateString);
    return date.getDate().toString();
};

export const dateToMonth = (dateString) => {
    const date = new Date(dateString);
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return monthNames[date.getMonth()];
};

export const dateToYear = (dateString) => {
    const date = new Date(dateString);
    return date.getFullYear().toString();
};