class Caminhao extends Veiculo {
    eixos;

    constructor(placa, ano, eixos) {
        super(placa, ano);
        this.eixos = eixos;
    }
    setEixos(eixos) {
        this.eixos = eixos;
    }
    getEixos() {
        return this.eixos;
    }
    exibirDados() {
        super.exibirDados();
        console.log("Eixos: ", this.eixos);
    }
}