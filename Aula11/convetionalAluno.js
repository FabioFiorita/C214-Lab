class Aluno {
  constructor(nome, idade, matricula) {
    this.nome = nome;
    this.idade = idade;
    this.matricula = matricula;
  }
  getNome() {
    return this.nome;
  }
  getIdade() {
    return this.idade;
  }
  getMatricula() {
    return this.matricula;
  }
}

const aluno1 = new Aluno("João", 20, 1234);
console.log(aluno1.getNome());
console.log(aluno1.getIdade());
console.log(aluno1.getMatricula());
