//////////////////////// AUFGABE 2 /////////////////////////////////

export const users = [
  {name: 'Reich', firstName: 'Frank', age: 22},
  {name: 'Huana', firstName: 'Marie', age: 44},
  {name: 'Meisenbär', firstName: 'Andreas', age:56},
  {name: 'Balmer', firstName: 'Steffen', age: 45},
  {name: 'Sfakianaki', firstName: 'Kalliopi', age:32}
];
export const ausgabe2 = users.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
                    .map(user => ' ' + user.firstName[0] + '. ' + user.name);


export default function loesung2() { 
  return "<span style='color:rgb(255,0,0);'>Noch keine Lösung vorhanden.</span>"
}