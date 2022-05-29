//////////////////////// AUFGABE 7 /////////////////////////////////
import { sequence7 } from "./sequence7";

function createFilterers(){
  const _filters = {
    ids: [],
    fns: {},
  };

  return {
    addFilter(name, fn) {
      _filters.ids.push(name);
      _filters.fns[name] = fn;
    },
    removeFilter(name) {
      const index = _filters.ids.indexOf(name);
      if (index !== -1) _filters.splice(index, 1)
      delete _filters.fns[name]
    },
    filter(arr) {
      //const filters = _filters.ids.map((id) => _filters.fns[id]);
      return arr.reduce((acc, item) => {
        for (let index = 0; index < _filters.ids.length; index++) {
          const id = _filters.ids[index]
          const filter = _filters.fns[id]
          if (!filter(item)) {
            return acc
          }
        }
        return acc.concat(item)
      }, [])
    },
  }
}

// create object instance
const filterer = createFilterers();

// create filters: return values true or false
filterer.addFilter('weight-filter', (element) => {
  return element.weight >= 1
})

filterer.addFilter('male-filter', (element) => {
  return element.gender === 'male'
})

filterer.addFilter('age-filter', (element) => {
  return element.age < 8
})

export const ausgabe7 = filterer.filter(sequence7).map((n) => n.name);

export default function loesung7() {
  return "<span style='color:rgb(255,0,0);'>Noch keine Lösung vorhanden.</span>"
}