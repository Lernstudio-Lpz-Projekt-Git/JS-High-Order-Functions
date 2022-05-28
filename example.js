//////////////////////// BEISPIEL-AUFGABE /////////////////////////////////

export const sequence = [1, 2, 3, 4, 5, 6, 67];
export let ausgabe = sequence.map(e => e * 2);

export default function loesung() {
  let list = [];
  for (let index = 0; index < sequence.length; index++) {
    list.push(sequence[index] * 2);
  }
  let loesung = list;
  return loesung;
}