
export const transformDateToDay = (date: Date) => {
  const formatDate = new Date(date)
  return formatDate.getDate();
}

export const transformDateToMonth = (date: Date) => {
  const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const formatDate = new Date(date)
  return months[formatDate.getMonth()];
}

export const tranformDateToserialize = (date: Date) => {
  const formDate = new Date(date)
  return formDate.toLocaleDateString();
}

export const tranformDateToserializeToDatabase = (date: string | Date):string | Date => {
  const formDate = new Date(date)
  let month = ((formDate.getMonth() + 1) < 10 ? `0${formDate.getMonth() + 1}` : (formDate.getMonth() + 1));
  let day = (formDate.getDate() < 10 ? `0${formDate.getDate()}` : formDate.getDate());
  let hour = ((formDate.getHours()) < 10 ? `0${formDate.getHours()}` : (formDate.getHours()));
  let minute = (formDate.getMinutes() < 10 ? `0${formDate.getMinutes()}` : formDate.getMinutes());
  let second = (formDate.getSeconds() < 10 ? `0${formDate.getSeconds()}` : formDate.getSeconds());

  var dateFormat = formDate.getFullYear() + "-" + (month) + "-" + day + " " + hour + ":" + minute + ":" + second;
  return dateFormat;
}
