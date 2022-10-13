const Cars = require('../src/application/car_service');
const Constants = require('../src/utils/constants');
const Utils = require('../src/utils/utils');
const CarsRepository = require('../src/port/car_repository');

jest.mock('../src/port/car_repository');

it('should create a car', async () => {
    const data = {
        placa: 'ABC1234',
        marca: 'Honda',
        kmRodados: 10000,
    };

    const id = Utils.generateUuid();

    CarsRepository.create.mockResolvedValue({ ...data, id });

    const response = await Cars.create(data);

    expect(response).toEqual({ ...data, id });
});

it('should not create a car', async () => {
    const data = {
        marca: 'Honda',
        kmRodados: 10000,
    };

    const response = await Cars.create(data);

    expect(response.name).toEqual(Constants.ErrorValidation.name);
});

it('should update a car', async () => {
    const data = {
        id: Utils.generateUuid(),
        placa: 'ABC1234',
        marca: 'Honda',
        kmRodados: 10000,
    };

    CarsRepository.update.mockResolvedValue(data);

    const response = await Cars.update(data);

    expect(response).toEqual(data);
});

it('should not update a car', async () => {
    const data = {
        id: Utils.generateUuid(),
        marca: 'Honda',
        kmRodados: 10000,
    };

    const response = await Cars.update(data);

    expect(response.name).toEqual(Constants.ErrorValidation.name);
});

it('should delete a car', async () => {
    const data = {
        placa: 'ABC1234',
    };

    CarsRepository.delete.mockResolvedValue(data);

    const response = await Cars.delete(data);

    expect(response).toEqual(data);
});

it('should not delete a car', async () => {
    const data = {};

    const response = await Cars.delete(data);

    expect(response.name).toEqual(Constants.ErrorValidation.name);
});

it('should get all cars', async () => {
    const data = [
        {
            placa: 'ABC1234',
        },
        {
            placa: 'ABC1235',
        },
    ];

    CarsRepository.list.mockResolvedValue(data);

    const response = await Cars.list();

    expect(response).toEqual(data);
});

it('should not get all cars', async () => {
    const data = {};

    const response = await Cars.list(data);

    expect(response.placa).toEqual(Constants.ErrorValidation.placa);
});

it('should get car by placa', async () => {
    const data = {
        placa: 'ABC1234',
    };

    CarsRepository.getByPlaca.mockResolvedValue(data);

    const response = await Cars.listByPlaca(data);

    expect(response).toEqual(data);
});

it('should not get car by placa', async () => {
    const data = {};

    const response = await Cars.listByPlaca(data);

    expect(response.name).toEqual(Constants.ErrorValidation.name);
});