export const toHoursAndMinutes = (totalSeconds: number) : TimeModel => {
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return { h: hours, m: minutes, s: seconds };
}

export const hasCommonValue = <T>(arr1: T[], arr2: T[]): boolean  =>{
    return arr1.some((value) => arr2.includes(value));
}

export const dateDisplay = (date : Date | null | undefined) => {
    if (date){
        const dateDisplay = new Date(date);
        return `${dateDisplay.getDate()}/${dateDisplay.getMonth() + 1}/${dateDisplay.getFullYear()}`;
    }
    return "";
}

export const dateTimeDisplay = (date : Date | null | undefined) => {
    if (date){
        const dateDisplay = new Date(date);
        return `${dateDisplay.getDate()}/${dateDisplay.getMonth() + 1}/${dateDisplay.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }
    return "";
}

/**
 * Get filename from url
 * 
 * @param url 
 * @returns 
 */
export const getFileNameFromUrl = (url: string): string => {
    return url.substring(url.lastIndexOf('/') + 1, url.indexOf('?'));
}

export const resetLocalStorage = () => {
    localStorage.clear();
}