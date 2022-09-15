const create = {
    title: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    launchDate: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    mainActor: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    movieProducer: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    title: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    create,
    get,
};