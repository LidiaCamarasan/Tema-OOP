console.log("Exercitiul 1:");

class Masina {
  constructor(marca, model, culoare, kilometraj) {
    this.marca = marca;
    this.model = model;
    this.culoare = culoare;
    this.kilometraj = kilometraj;
  }
  getProprietati() {
    return `${this.marca} ${this.model} ${this.culoare} ${this.kilometraj}`;
  }
}

function main() {
  return getProprietati;
}
const masina1 = new Masina("Volvo", "XC-60", "Negru", 234000);
const masina2 = new Masina("Mazda", "CX-5", "Verde", 111000);
const masina3 = new Masina("Dacia", "BIGGSTER", "Albastru", 20000);

console.log(masina1);
console.log(masina2);
console.log(masina3);

//------------------------------------------------
console.log("Exercitiul 2:");

class MasinaDeCurse extends Masina {
  constructor(marca, model, culoare, kilometraj) {
    super(marca, model, culoare, kilometraj);
  }

  participaLaCampionat(pozitiaInCamionat) {
    if (pozitiaInCamionat > 0) {
      console.log(`Am castigat locul ${pozitiaInCamionat}`);
    } else if (pozitiaInCamionat <= 0) {
      console.log(`Nu am castigat nici un premiu`);
    }
  }
}

const m1 = new MasinaDeCurse("Audi", "Turbo", "Rosu", 100000);
console.log(m1.participaLaCampionat(30));
console.log(m1.participaLaCampionat(-1));

function nouCampionat() {
  return getProprietati;
}

const masinaCurse1 = new MasinaDeCurse("McLaren", "MP4/4", "Rosu", 100000);
const masinaCurse2 = new MasinaDeCurse("Ferrari", "330 P4", "Negru", 100000);
console.log(masinaCurse1);
console.log(masinaCurse2);
