//////////////////////// AUFGABE 4 /////////////////////////////////

export const intArray = [2, 4, 6, 8, 12, 24, 48, 96];
const exponent = 3;

// Extract any radix
function powRadix(num, radix) {
  return '\n'+ Math.pow(num, 1 / radix).toFixed(2);
}
// Calculate square root
function powDigits(num, exponent) {
  return  '\n' + Math.pow(num, exponent);
}

function doAnyFunctions(data, operation, expr) {
  expr = isNaN(expr) ? 0 : expr;
  return data.map(num => operation(num, expr));;
}

export const ausgabeRad = doAnyFunctions(intArray, powRadix, exponent);
export const ausgabePow = doAnyFunctions(intArray, powDigits, exponent);

export function loesungWurzel() {
  return "<span style='color:rgb(255,0,0);'>Noch keine Lösung vorhanden.</span>"
}

export default function loesungExponent() {
  return "<span style='color:rgb(255,0,0);'>Noch keine Lösung vorhanden.</span>"
}