// IMPORT MODULES under test here:
import { 
    greetUsersOverAge60,
    greetUsers,
    addAllAges,
    getAverageCoolFactor,
    getTotalOfEachGender,
    getGenderBreakdownOfFordOwners,
    getGenderBreakdownOfEachCar,
    getAllCoolFactorsOfEachCar,
    getAverageCoolFactorOfEachCar
} from '../functions.js';
import data from './data.js';

const { test, skip } = QUnit;

test('greetUsers', (expect) => {
    const expected = [
        'Hello Suzi Summerson!',
        'Hello Boot Penton!',
        'Hello Cacilia Caramuscia!',
        'Hello Mattie Mungane!',
        'Hello Kathryne Gostling!',
        'Hello Cristal Oakman!',
        'Hello Mahmud Shingler!',
        'Hello Kenny Kepe!',
        'Hello Elena Guisby!',
        'Hello Irene Kynvin!',
        'Hello Debor Lashmar!',
        'Hello Christian Churchill!',
        'Hello Fawnia Cowdroy!',
        'Hello Eli Perigo!',
        'Hello Parker Goodboddy!',
        'Hello Leeland Bonome!',
        'Hello Lowe Driussi!',
        'Hello Tracy Chidlow!',
        'Hello Dimitri Ochiltree!',
        'Hello Sascha Yanin!',
        'Hello Emmaline Horribine!',
        'Hello Erinna Swires!',
        'Hello Erroll Reade!',
        "Hello Ilaire O'Codihie!",
        'Hello Anatol Gulley!',
        'Hello Celestine Teodori!',
        'Hello Brandi Sawdon!',
        'Hello Atlanta Oneil!',
        'Hello Salomone Merkle!',
        'Hello Alta Sulter!',
        'Hello Marys Allsopp!',
        'Hello Marilin Ellacott!',
        'Hello Alexandros Cornell!',
        'Hello Matti Haller!',
        'Hello Henryetta Cheng!',
        'Hello Gennie Saura!',
        'Hello Sherwynd Wiggans!',
        'Hello Thorn McMeekin!',
        'Hello Esmaria Moukes!',
        'Hello Dietrich Gladebeck!',
        'Hello Karol Rosa!',
        'Hello Manya Fodden!',
        'Hello Casi Waterland!',
        'Hello Munroe Walthall!',
        'Hello Tannie Sedman!'
    ];

    const actual = greetUsers(data);

    expect.deepEqual(actual, expected), 'test proves that function greetUsers returns an array of strings that include first_name and last_name property value for each data object.';
});


test('greetUsersOverAge60', (expect) => {
    const expected = [
        'Hello Suzi Summerson!',
        'Hello Boot Penton!',
        'Hello Cacilia Caramuscia!',
        'Hello Cristal Oakman!',
        'Hello Kenny Kepe!',
        'Hello Dimitri Ochiltree!',
        "Hello Ilaire O'Codihie!",
        'Hello Anatol Gulley!',
        'Hello Salomone Merkle!',
        'Hello Alta Sulter!',
        'Hello Alexandros Cornell!',
        'Hello Thorn McMeekin!',
        'Hello Esmaria Moukes!',
        'Hello Munroe Walthall!',
        'Hello Tannie Sedman!'
    ];

    const actual = greetUsersOverAge60(data);

    expect.deepEqual(actual, expected);
});

test('addAllAges', (expect) => {
    const expected = 	
    2125;

    const actual = addAllAges(data);

    expect.equal(actual, expected), 'test proves that function addAllAges returns the sum of the age property value for each data item.';
});


test('getAverageCoolFactor', (expect) => {
    const expected = 5.088888888888889;

    const actual = getAverageCoolFactor(data);

    expect.equal(actual, expected), 'test proves that function getAverageCoolFactor returns the average for all data cool_factor property values.';
});

test('getTotalOfEachGender', (expect) => {
    const expected = {
        'Bigender': 1,
        'Female': 19,
        'Genderqueer': 1,
        'Male': 23,
        'Non-binary': 1
    };

    const actual = getTotalOfEachGender(data);

    expect.deepEqual(actual, expected);
});

test('getGenderBreakdownOfFordOwners', (expect) => {
    const expected = {
        'Female': 1,
        'Male': 2
    };

    const actual = getGenderBreakdownOfFordOwners(data);

    expect.deepEqual(actual, expected);
});

test('getGenderBreakdownOfEachCar', (expect) => {
    const expected = 	
    {
        'Alfa Romeo': {
            'Male': 1
        },
        'Audi': {
            'Female': 1
        },
        'BMW': {
            'Male': 1
        },
        'Buick': {
            'Female': 1,
            'Male': 1
        },
        'Cadillac': {
            'Male': 1,
            'Non-binary': 1
        },
        'Chevrolet': {
            'Female': 1,
            'Male': 3
        },
        'Chrysler': {
            'Female': 1,
            'Genderqueer': 1
        },
        'Dodge': {
            'Female': 2,
            'Male': 1
        },
        'Eagle': {
            'Male': 1
        },
        'Ford': {
            'Female': 1,
            'Male': 2
        },
        'GMC': {
            'Female': 2,
            'Male': 2
        },
        'Infiniti': {
            'Female': 1
        },
        'Jeep': {
            'Female': 1
        },
        'Kia': {
            'Male': 1
        },
        'Lexus': {
            'Male': 1
        },
        'Mazda': {
            'Male': 1
        },
        'Mercedes-Benz': {
            'Female': 1
        },
        'Mercury': {
            'Male': 1
        },
        'Mitsubishi': {
            'Male': 1
        },
        'Oldsmobile': {
            'Male': 1
        },
        'Peugeot': {
            'Female': 1
        },
        'Pontiac': {
            'Female': 1
        },
        'Porsche': {
            'Female': 1,
            'Male': 1
        },
        'Scion': {
            'Female': 1
        },
        'Subaru': {
            'Female': 1
        },
        'Toyota': {
            'Bigender': 1,
            'Female': 1,
            'Male': 2
        },
        'Volvo': {
            'Female': 1,
            'Male': 1
        }
    };

    const actual = getGenderBreakdownOfEachCar(data);

    expect.deepEqual(actual, expected);
});

test('getAllCoolFactorsOfEachCar', (expect) => {
    const expected = {
        'Alfa Romeo': [
            6
        ],
        'Audi': [
            1
        ],
        'BMW': [
            5
        ],
        'Buick': [
            4,
            3
        ],
        'Cadillac': [
            7,
            1
        ],
        'Chevrolet': [
            8,
            9,
            2,
            1
        ],
        'Chrysler': [
            4,
            9
        ],
        'Dodge': [
            10,
            8,
            10
        ],
        'Eagle': [
            9
        ],
        'Ford': [
            5,
            2,
            10
        ],
        'GMC': [
            6,
            6,
            10,
            8
        ],
        'Infiniti': [
            2
        ],
        'Jeep': [
            5
        ],
        'Kia': [
            2
        ],
        'Lexus': [
            4
        ],
        'Mazda': [
            3
        ],
        'Mercedes-Benz': [
            3
        ],
        'Mercury': [
            2
        ],
        'Mitsubishi': [
            4
        ],
        'Oldsmobile': [
            5
        ],
        'Peugeot': [
            1
        ],
        'Pontiac': [
            8
        ],
        'Porsche': [
            8,
            7
        ],
        'Scion': [
            2
        ],
        'Subaru': [
            2
        ],
        'Toyota': [
            1,
            8,
            2,
            3
        ],
        'Volvo': [
            9,
            4
        ]
    };

    const actual = getAllCoolFactorsOfEachCar(data);

    expect.deepEqual(actual, expected), 'test proves that getAllCoolFactorsOfEachCar returns an object where the properties are the car_make for each data item, and the value of each property is an array containing the value of cool_factor for each data item with the corresponding car_make property.';
});

test('getAverageCoolFactorOfEachCar', (expect) => {
    const expected = {
        'Alfa Romeo': 6,
        'Audi': 1,
        'BMW': 5,
        'Buick': 3.5,
        'Cadillac': 4,
        'Chevrolet': 5,
        'Chrysler': 6.5,
        'Dodge': 9.333333333333334,
        'Eagle': 9,
        'Ford': 5.666666666666667,
        'GMC': 7.5,
        'Infiniti': 2,
        'Jeep': 5,
        'Kia': 2,
        'Lexus': 4,
        'Mazda': 3,
        'Mercedes-Benz': 3,
        'Mercury': 2,
        'Mitsubishi': 4,
        'Oldsmobile': 5,
        'Peugeot': 1,
        'Pontiac': 8,
        'Porsche': 7.5,
        'Scion': 2,
        'Subaru': 2,
        'Toyota': 3.5,
        'Volvo': 6.5
    };

    const actual = getAverageCoolFactorOfEachCar(data);

    expect.deepEqual(actual, expected);
});

skip('getAverageCoolFactor', (expect) => {
    const expected = true;

    const actual = greetUsers();

    expect.equal(actual, expected);
});

skip('getAverageCoolFactor', (expect) => {
    const expected = true;

    const actual = greetUsers();

    expect.equal(actual, expected);
});

skip('getCoolFactorsByAgeBracket', (expect) => {
    const expected = true;

    const actual = greetUsers();

    expect.equal(actual, expected);
});

skip('getAverageCoolFactorByAgeBracket', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});