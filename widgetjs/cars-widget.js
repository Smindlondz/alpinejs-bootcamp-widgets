document.addEventListener('alpine:init', () => {

    Alpine.data('townCarsWidget', function () {
        return {
            town: '',
            carsList: [],

            showCars() {
                this.carsList = carsForTown(this.town);

                setTimeout(() => {
                    this.carsList = [];
                    this.town = '';
                }, 4500)
            }
        }
    });
    Alpine.data('dataAnalysisWidget', function () {
        return {
            mostPopular: '',
            noOfCK: null,
            popularModel: '',

            algorithm() {
                this.mostPopular = mostPopularCar(cars);
                this.noOfCK = nissansFromCK(cars);
                this.popularModel = mostPopularModel(cars);


                setTimeout(() => {
                    this.mostPopular = '';
                    this.noOfCK = null;
                    this.popularModel = '';
                }, 3500)
            }
        }
    });
    Alpine.data('sameColorWidget', function () {
        return {
            town: '',
            color: '',
            carsList: [],

            listOfCars() {
                this.carsList = numberOfCars(this.color, this.town);

                setTimeout(() => {
                    this.carsList = [];
                    this.town = '';
                    this.color = '';
                }, 4500)
            }
        }
    });
})