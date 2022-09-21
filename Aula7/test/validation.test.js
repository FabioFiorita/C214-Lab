const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Valid case', () => {
    const result = Validation.create({
        title: "Toy Story",
        launchDate: "24/12/2019",
        mainActor: "Brad Pitt",
        movieProducer: "Disney",
    });
    expect(result).toEqual(undefined);
});

it('Invalid Case - without parameter title', () => {
    const result = Validation.create({
        launchDate: "24/12/2019",
        mainActor: "Brad Pitt",
        movieProducer: "Disney",
    });
    expect(result.title).toEqual(Constants.ErrorValidation.title);
});

it('Invalid Case - without parameter launchDate', () => {
    const result = Validation.create({
        title: "Toy Story",
        mainActor: "Brad Pitt",
        movieProducer: "Disney",
    });
    expect(result.launchDate).toEqual(Constants.ErrorValidation.launchDate);
});

it('Invalid Case - without parameter mainActor', () => {
    const result = Validation.create({
        title: "Toy Story",
        launchDate: "24/12/2019",
        movieProducer: "Disney",
    });
    expect(result.mainActor).toEqual(Constants.ErrorValidation.mainActor);
});

it('Invalid Case - without parameter movieProducer', () => {
    const result = Validation.create({
        title: "Toy Story",
        launchDate: "24/12/2019",
        mainActor: "Brad Pitt",
    });
    expect(result.movieProducer).toEqual(Constants.ErrorValidation.movieProducer);
});