import tensDigit from "./tensDigit";
const formatDate=(date:number):string=>{
    let newDate= new Date(date*1000);
    const timeZone= newDate.getTimezoneOffset()/60
    const newTime=  0 < timeZone &&timeZone < 10 ? '-0' + Math.abs(timeZone): -10 < timeZone &&timeZone < 0? '+0' + Math.abs(timeZone):10<timeZone?"+"+timeZone:timeZone;
    return `${newDate.getFullYear()}년 ${tensDigit(newDate.getMonth()+1)}월 ${tensDigit(newDate.getDate())}일 ${tensDigit(newDate.getHours())}:${tensDigit(newDate.getMinutes())} ${newTime}:00`}

export default formatDate;