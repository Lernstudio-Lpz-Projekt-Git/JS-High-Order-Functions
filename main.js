import './style.css'

//////////////////////// BEISPIEL-AUFGABE /////////////////////////////////

import {sequence, ausgabe} from "./example";
import loesung from "./example";

//////////////////////// AUFGABE 1 //////////////////////////////////////

import {digits, ausgabe1} from "./exercise-1";
import loesung1 from "./exercise-1";

//////////////////////// AUFGABE 2 /////////////////////////////////

import {users, ausgabe2} from "./exercise-2";
import loesung2 from "./exercise-2";

//////////////////////// AUFGABE 3 /////////////////////////////////

import {allAges, ausgabe3} from "./exercise-3";
import loesung3 from "./exercise-3";

//////////////////////// AUFGABE 4 /////////////////////////////////

import {intArray, ausgabePow, ausgabeRad} from "./exercise-4";
import loesungWurzel from "./exercise-4";
import loesungExponent from "./exercise-4";

//////////////////////// AUFGABE 5 /////////////////////////////////

import {FILTER, dataLength, ausgabe5} from "./exercise-5";
import loesung5 from "./exercise-5";

//////////////////////// AUSGABE HTML /////////////////////////////////

document.querySelector('#app').innerHTML = `
<!-- Beispiel  -->
<section>
    <h1>Beispiel-Aufgabe</h1>
    <p class="descr"><b>Beschreibung:</b> Alle Elemente der Ausgangssequenz mit 2 multiplizieren. </p>
    <h4>Ausgangssequenz:</h4>
    <p class="ausgabe">[${sequence}]</p>
    <h4>Lösungsbeispiel:</h4>
    <p class="ausgabe"> ${Array(ausgabe)}</p>
    <h4>Ausgabe Ihrer Lösung:</h4>
    <p class="loesung"> ${loesung()}</p>
</section>
  <!-- Aufgabe 1  -->
<section>
    <h1>Aufgabe 1</h1>
    <p class="descr"><b>Beschreibung:</b> Sortieren Sie alle Zahlen der Ausgangssequenz. Die sort-Funktion führt 
    standardmäßig eine sogenannte "lexikographische" Sortierung durch. Dabei behandelt sie Zahlen genauso wie Strings. 
    Die Zahl 10 wird als kleiner als die 2 betrachtet, da 10 mit der Ziffer 1 beginnt. Nutzen Sie die Funktion <code>compareNumerical()</code>
    um dieses Verhalten zu ändern.</p>
    <h4>Ausgangssequenz:</h4>
    <p class="ausgabe">[${digits}]</p>
    <h4>Lösungsbeispiel:</h4>
    <p class="ausgabe"> ${ausgabe1}</p>
    <h4>Ausgabe Ihrer Lösung:</h4>
    <p class="loesung"> ${loesung1()}</p>
</section>

<!-- Aufgabe 2  -->
<section>
    <h1>Aufgabe 2</h1>
    <p class="descr"><b>Beschreibung:</b> Eine weitere sehr typische Problemstellung besteht darin, 
    dass Sie alle Elemente eines Arrays durch einen spezifischen Algorithmus weiterverarbeiten möchten.
    Das Ausgabeformat sieht vor, den Vornamen abzukürzen. Außerdem müssen es Strings sein, damit sie sich direkt auf der Website ausgegeben lassen. 
    So sollen Sie z. B. das Objekt {name: 'Reich', firstName: 'Frank'} in den String "F. Reich" konvertieren.
    Sortieren Sie alle Eintrage nach dem Nachnamen.</p>
    <h4>Ausgangssequenz:</h4>
    <p class="ausgabe">${JSON.stringify(users)})</p>
    <h4>Lösungsbeispiel:</h4>
    <p class="ausgabe"> ${ausgabe2}</p>
    <h4>Ausgabe Ihrer Lösung:</h4>
    <p class="loesung"> ${loesung2()}</p>
</section>

<!-- Aufgabe 3  -->
<section>
    <h1>Aufgabe 3</h1>
    <p class="descr"><b>Beschreibung:</b> Berechnen Sie die Summe der Alterangaben aus Aufgabe 2.</p>
    <h4>Ausgangssequenz:</h4>
    <p class="ausgabe">${allAges}</p>
    <h4>Lösungsbeispiel:</h4>
    <p class="ausgabe"> ${ausgabe3}</p>
    <h4>Ausgabe Ihrer Lösung:</h4>
    <p class="loesung"> ${loesung3()}</p>
</section>

<!-- Aufgabe 4  -->
<section>
    <h1>Aufgabe 4</h1>
    <p class="descr"><b>Beschreibung:</b> 
    Gegeben sind zwei Funktionen für die Wurzel- und Potenzberechnung. Diese Funktionen führen jeweils nur einen Berechnungen durch. 
    Ebenfalls gegeben ist eine Higher-Order-Funktion die eine Funktion als Argument akzeptiert. In diesem Fall ist die übergebene Funktion 
    eine der oben definierten Berechnungen. Wandeln Sie die Higher-Order-Funktion in eine reguläre Schleifen-Funktion um.
    </p>
    <h4>Ausgangssequenz:</h4>
    <p class="ausgabe">${intArray}</p>
    <h4>Lösungsbeispiel Wurzelberechnung mit beliebigen Wurzelexponenten (3):</h4>
    <blockquote><p class="ausgabe"> ${ausgabePow}</p></blockquote>
    <h4>Lösungsbeispiel Potenzberechnung mit beliebigen Exponenten (3):</h4>
    <blockquote><p class="ausgabe"> ${ausgabeRad}</p></blockquote>
    <h4>Ausgabe Ihrer Lösung Wurzel ziehen:</h4>
    <p class="loesung"> ${loesungWurzel()}</p>
    <h4>Ausgabe Ihrer Lösung Potenz berechnen:</h4>
    <p class="loesung"> ${loesungExponent()}</p>
</section>

<!-- Aufgabe 5  -->
<section>
    <h1>Aufgabe 5</h1>
    <p class="descr"><b>Beschreibung:</b> 
    Gegeben ist eine JSON-Objekt mit ${dataLength} Records.  
    Eine Higher-Order-Funktion <code>filter()</code> filtert die Objekte aus dem JSON-Objekt, die dem Expression <code>FILTER</code> entsprechen.
    Sie könne aus verschienden Filter-Expressions wählen: <code>'SCSS', 'CSS', 'HTML', 'Markdown'</code> und <code>null</code>.
    Aus dem Ergebnis werden die Namen der Einträge extrahiert. Wandeln Sie die Higher-Order-Funktion in eine reguläre Schleifen-Funktion um.
    </p>
    <h4>Länge der Ausgangssequenz:</h4>
    <p class="ausgabe">${dataLength}</p>
    <h4>Lösungsbeispiel  mit dem Filter <b>${FILTER}</b>:</h4>
    <blockquote><p class="ausgabe"> ${ausgabe5}</p></blockquote>
    <h4>Ausgabe Ihrer Lösung:</h4>
    <p class="loesung"> ${loesung5()}</p>
</section>
`
