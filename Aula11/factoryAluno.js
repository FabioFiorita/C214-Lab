const aluno = (nome, idade, matricula) => ({
  nome,
  idade,
  matricula,
  getNome: () => nome,
  getIdade: () => idade,
  getMatricula: () => matricula,
});

const aluno1 = aluno("João", 20, 1234);
console.log(aluno1.getNome());
console.log(aluno1.getIdade());
console.log(aluno1.getMatricula());
