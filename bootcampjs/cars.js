function mostPopularCar(cars) {

    const mostCars = {};

    for (let i = 0; i < cars.length; i++) {

        var carList = cars[i];
        mostCars[carList.make] = 0;
    }
    //LOOP OVER CARS AND COUNT PER MAKE.

    for (let i = 0; i < cars.length; i++) {

        var carList = cars[i];
        mostCars[carList.make]++;

    }
    //DECLARE COUNTER & ASSIGN TO 0 & DECLARE HOLDER OF MOSTPOPULAR

    var counter = 0; var mostPopularCar = '';

    for (const car in mostCars) {

        const currentMake = mostCars[car];

        if (currentMake > counter) {

            counter = currentMake;
            mostPopularCar = car;
        }
    }
    return mostPopularCar;
};
//------------------NISSANFROM[CK]------------------------------------>

function nissansFromCK(cars) {

    var counter = 0;
    var nissancars = cars.filter(car => car.make === 'Nissan');

    for (let i = 0; i < nissancars.length; i++) {
        let car = nissancars[i]; let regNumber = car.reg_number;

        if (regNumber.startsWith('CK')) {
            counter++;
        }
    }
    return counter;
};
//-----------------------MOST-BLUE-CARS------------------------------->

function mostBlueCars(cars) {

    const regNumbers = {};

    var blueCars = cars.filter(car => car.color === 'blue');

    for (let i = 0; i < blueCars.length; i++) {

        var car = blueCars[i]; var regNo = car.reg_number;
        var regId = regNo.substring(0, 2);

        if (regNumbers[regId] === undefined) {

            regNumbers[regId] = 0;
        }
        regNumbers[regId]++;
    };
    var mostBlueCars = ''; var counter = 1;

    for (let key in regNumbers) {

        const NumberOfCity = regNumbers[key];

        if (NumberOfCity >= counter) {
            counter = NumberOfCity;
            mostBlueCars = key;
        }
    }
    return mostBlueCars;
};


//-----------------------FewestOrangerCars---------------------------->
function fewestOrangeCars(cars) {

    const regNumbers = {};

    var orangeCars = cars.filter(car => car.color === 'orange');

    for (let i = 0; i < orangeCars.length; i++) {

        var car = orangeCars[i]; var regNo = car.reg_number;
        var regId = regNo.substring(0, 2);

        if (regNumbers[regId] === undefined) {
            regNumbers[regId] = 0;
        }
        regNumbers[regId]++;
    }

    var fewestOrangeCars = ''; var counter = 5;
    for (let key in regNumbers) {

        const keysPerCity = regNumbers[key];

        if (keysPerCity < counter) {

            counter = keysPerCity;
            fewestOrangeCars = key;
        }
    }
    return fewestOrangeCars;
};

//---------------------------Most Popular----------------------------->

function mostPopularModel(cars) {

    const allModels = {};

    for (let i = 0; i < cars.length; i++) {

        var car = cars[i]; var modelType = car.model;

        if (allModels[modelType] === undefined) {

            allModels[modelType] = 0;
        }
        allModels[modelType]++;
    }

    var mostPopular = ''; var counter = 0;

    for (let mdl in allModels) {

        const noPerModel = allModels[mdl];

        if (noPerModel > counter) {

            mostPopular = mdl;
            counter = noPerModel;
        }
    }
    return mostPopular;
};
//---------------------------Most PopulaCL-------------------------->

function mostPopularCL(cars) {

    const allModels = {};

    var fromCL = cars.filter(car => car.reg_number.startsWith('CL'));

    for (let i = 0; i < fromCL.length; i++) {

        var car = fromCL[i]; var modelType = car.model;

        if (allModels[modelType] === undefined) {
            allModels[modelType] = 0;
        }
        allModels[modelType]++;
    }

    var mostAtCL = ''; var counter = 0;

    for (let mdl in allModels) {

        const noPerModel = allModels[mdl];

        if (noPerModel > counter) {

            mostAtCL = mdl;
            counter = noPerModel;
        }
    }
    return mostAtCL;
};

//-----------------------Least-PopularCF--------------------------->

function leastPopularCF(cars) {

    const allModels = {};

    var fromCF = cars.filter(car => car.reg_number.startsWith('CF'));

    for (let i = 0; i < fromCF.length; i++) {

        var car = fromCF[i]; var modelType = car.model;

        if (allModels[modelType] === undefined) {

            allModels[modelType] = 0;
        }
        allModels[modelType]++;
    }

    var mostAtCF = ''; var counter = 2;

    for (let mdl in allModels) {

        const noPerModel = allModels[mdl];

        if (noPerModel <= counter) {
            mostAtCF = mdl;
            counter = noPerModel;
        }
    }
    return mostAtCF;
};

//------------------------Cars-From-Town------------------------------>

function carsForTown(town) {

    function nameReg(regKey) {

        switch (regKey) {
            case 'CJ': return "Paarl";
                break;
            case 'CY': return "Bellville";
                break;
            case 'CL': return "Stellenbosch";
                break;
            case 'CK': return "Malmesbury";
                break;
            case 'CA': return "Cape Town";
                break;
            case 'CF': return "Kuilsriver";
        }
    }

    let townCars = [];

    for (let i = 0; i < cars.length; i++) {

        let reg = cars[i].reg_number.substring(0, 2);
        let name = nameReg(reg);

        if (name == town) {

            townCars.push(cars[i]);
        }
    }
    return townCars;
};

//-------------------numberOfCars----------------------------------->

function numberOfCars(color, town) {

    function nameReg(regKey) {

        switch (regKey) {
            case 'CJ': return "Paarl";
                break;
            case 'CY': return "Bellville";
                break;
            case 'CL': return "Stellenbosch";
                break;
            case 'CK': return "Malmesbury";
                break;
            case 'CA': return "Cape Town";
                break;
            case 'CF': return "Kuilsriver";
        }
    }

    let townCarsOfColor = [];

    for (let i = 0; i < cars.length; i++) {

        let col = cars[i].color; let reg = cars[i].reg_number.substring(0, 2);
        let name = nameReg(reg);

        if (name == town && color == col) {

            townCarsOfColor.push(cars[i]);
        }
    }
    return townCarsOfColor;
}

//------------------------------NUMBER OF CARS PER MODEL---------->

function numberOfCarsPerModel(color, model, town) {

    function townName(regKey) {

        switch (regKey) {
            case 'CJ': return "Paarl";
                break;
            case 'CY': return "Bellville";
                break;
            case 'CL': return "Stellenbosch";
                break;
            case 'CK': return "Malmesbury";
                break;
            case 'CA': return "Cape Town";
                break;
            case 'CF': return "Kuilsriver";
        }
    }

    let townCars = [];

    for (let i = 0; i < cars.length; i++) {

        let col = cars[i].color; let reg = cars[i].reg_number.substring(0, 2);
        let mod = cars[i].model; let name = townName(reg);

        if (name == town && color == col && mod == model) {

            townCars.push(cars[i]);
        }
    }
    return townCars;
}

//-------------------------MOST POPULAR COLOR -------------------->
function mostPopularColor(town) {

    function nameReg(regKey) {

        switch (regKey) {
            case 'CJ': return "Paarl";
                break;
            case 'CY': return "Bellville";
                break;
            case 'CL': return "Stellenbosch";
                break;
            case 'CK': return "Malmesbury";
                break;
            case 'CA': return "Cape Town";
                break;
            case 'CF': return "Kuilsriver";
        }
    }

    let townCars = [];

    for (let i = 0; i < cars.length; i++) {

        let reg = cars[i].reg_number.substring(0, 2); let name = nameReg(reg);

        if (name == town) {

            townCars.push(cars[i]);
        }
    }
    var colorMap = {};

    for (let i = 0; i < townCars.length; i++) {

        var curr = townCars[i];

        if (colorMap[curr.color] === undefined) {

            colorMap[curr.color] = 0;
        }
        colorMap[curr.color]++;
    }

    let popularColor = ''; let counter = 0;

    for (let most in colorMap) {

        var currColor = colorMap[most];

        if (currColor > counter) {

            counter = currColor;
            popularColor = most;
        }
    }
    return popularColor;
};


var cars = [{
    "color": "white",
    "make": "Volkswagen",
    "model": "Polo",
    "reg_number": "CL 61045"
}, {
    "color": "red",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CY 16875"
}, {
    "color": "orange",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CK 32655"
}, {
    "color": "orange",
    "make": "Ford",
    "model": "EcoSport",
    "reg_number": "CL 11318"
}, {
    "color": "white",
    "make": "Nissan",
    "model": "Micra",
    "reg_number": "CJ 16103"
}, {
    "color": "orange",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CL 42789"
}, {
    "color": "blue",
    "make": "Volkswagen",
    "model": "Jetta",
    "reg_number": "CA 46977"
}, {
    "color": "white",
    "make": "Volkswagen",
    "model": "Polo",
    "reg_number": "CY 25661"
}, {
    "color": "white",
    "make": "Nissan",
    "model": "Micra",
    "reg_number": "CY 35475"
}, {
    "color": "white",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CY 54886"
}, {
    "color": "white",
    "make": "Toyota",
    "model": "Hilux",
    "reg_number": "CJ 16455"
}, {
    "color": "orange",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CK 57166"
}, {
    "color": "orange",
    "make": "Ford",
    "model": "Fiesta",
    "reg_number": "CL 77790"
}, {
    "color": "blue",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CY 98904"
}, {
    "color": "white",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CF 75599"
}, {
    "color": "red",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CA 5510"
}, {
    "color": "blue",
    "make": "Ford",
    "model": "Focus",
    "reg_number": "CF 75586"
}, {
    "color": "orange",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CA 46137"
}, {
    "color": "orange",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CK 22692"
}, {
    "color": "red",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CF 33543"
}, {
    "color": "red",
    "make": "Volkswagen",
    "model": "Touran",
    "reg_number": "CA 94890"
}, {
    "color": "orange",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CY 82252"
}, {
    "color": "blue",
    "make": "Toyota",
    "model": "Yaris",
    "reg_number": "CL 9538"
}, {
    "color": "white",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CF 62002"
}, {
    "color": "orange",
    "make": "Ford",
    "model": "Fiesta",
    "reg_number": "CJ 67577"
}, {
    "color": "blue",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CA 77852"
}, {
    "color": "orange",
    "make": "Toyota",
    "model": "Hilux",
    "reg_number": "CY 52435"
}, {
    "color": "blue",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CL 76173"
}, {
    "color": "red",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CL 38315"
}, {
    "color": "blue",
    "make": "Ford",
    "model": "Fiesta",
    "reg_number": "CA 34015"
}, {
    "color": "orange",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CK 41166"
}]
