class StudentRecord {
    constructor(id, name, gpa, year) {
      this.id   = id;
      this.name = name;
      this.gpa  = gpa;
      this.year = year;
    }
    setName(newName) { this.name = newName; }
    setGPA(newGPA)   { this.gpa  = newGPA;  }
    setYear(newYear) { this.year = newYear;  }
    getSummary()     { return `${this.name} (Year ${this.year}) – GPA: ${this.gpa}`; }
}

/*
The setter methods (setName, setGPA, setYear) all return undefined, 
which prevents chaining. Implement a chainify(obj) function using JavaScript Proxy 
that makes any method returning undefined return the proxy object instead, 
enabling fluent chaining.
Output should be: Amina Kovač (Year 3) – GPA: 3.9

*/

function chainify(obj) {
   // TO DO 
   return new Proxy(obj, {
    get(target, prop, receiver) { //(record, 'setName', chained)
      const value = target[prop]; //record['setName'] -> setName
      if(typeof value === 'function') { // is setName a function? yes
        return function (...args) {
          const result = value.apply(target, args); //setName.apply(record, ['Amina Kovač']) -> record.setName('Amina Kovač')
                                                    // Amina -> Amina Kovac
          return result === undefined ? receiver : result; // if setName returns undefined, return the proxy (chained), otherwise return the actual result
        };
      }
      return value;
    }
   });
  }
const record  = new StudentRecord('S001', 'Amina', 3.8, 2);
const chained = chainify(record);
   
chained.setName('Amina Kovač').setGPA(3.9).setYear(3);
console.log(chained.getSummary());
  