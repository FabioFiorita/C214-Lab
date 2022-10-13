const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        placa: "FDS-1234",
        marca: "Fiat",
        kmRodados: 15000
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro placa', () => {
    const result = Validation.create({
        marca: "Fiat",
        kmRodados: 15000
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
