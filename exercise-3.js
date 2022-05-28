//////////////////////// AUFGABE 3 /////////////////////////////////
import {users} from "./exercise-2";

let initValue = 0;
export const allAges = users.map(user => user.age);

let add = (a,b) => a + b;
export const ausgabe3 = allAges.reduce(add,initValue);

export default function loesung3() { 
  return "<span style='color:rgb(255,0,0);'>Noch keine Lösung vorhanden.</span>"
}