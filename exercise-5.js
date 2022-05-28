//////////////////////// AUFGABE 5 /////////////////////////////////
const URL = "https://api.github.com/users/AnilSeervi/repos?per_page=100";
// Mögliche Filter: 'SCSS' 'CSS' 'HTML' 'Markdown' null
export const FILTER = 'SCSS';

async function getData() {
 const res = await fetch(URL);    // fetch the JSON from API
 const jsData = await res.json(); // parse JSON to JavaScript Object
 return jsData;
}

const data = await getData();
//console.log(data.map(e => e.language));
export const dataLength = Object.keys(data).length;

export const ausgabe5 = await data.filter(element => element.language === FILTER).map(e => '\n' + e.name);

export default function loesung5() {
  return "<span style='color:rgb(255,0,0);'>Noch keine Lösung vorhanden.</span>"
}