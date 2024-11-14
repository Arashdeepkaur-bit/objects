function arash(year) {
const calendar = document.getElementById("calendar");
calendar.innerHTML = ''; 
const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];
for (let i = 0; i< 12; i++) {
  const month = document.createElement('div');
  const monthname = months[i];
  month.innerHTML = `<h2>${monthname}</h2><div class="days">${days(year, i)}</div>`;
  calendar.append(month);
}
}
function days(year, i) {
const date = new Date(year, i, 1);
const a= new Date(year, i + 1, 0).getDate();
const b = date.getDay(); 
const dd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let c = '';
for (let i = 0; i < dd.length; i++) {
  c += `<div class="day day-name">${dd[i]}</div>`;
}
for (let i = 0; i < b; i++) {
  c += '<div class="day"></div>';
}
for (let x = 1; x <= a; x++) {
  c += `<div class="day">${x}</div>`;
}
document.getElementsByClassName('day').innerHTML=c;
return c;
}
function Dropdown() {
const Select = document.getElementById('Select');
const currentYear = new Date().getFullYear();
for (let y = 1900; y <= 2100; y++) {
  const option = document.createElement('option');
  option.innerHTML = y;
  if (y === currentYear) {
    option.selected = true; 
  }
  Select.append(option);
}
arash(currentYear);
}
document.getElementById('Select').addEventListener('change', function() {
arash(this.value);
});
Dropdown();