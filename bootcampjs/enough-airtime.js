const services = 'call,call,call,data,sms,sms,call';
function enoughAirtime(services, airtime) {

    let counter = 0;
    var totalServices = services.split(',');

    for (let i = 0; i < totalServices.length; i++) {
        const currentService = totalServices[i].trim();
        if (currentService.startsWith('s')) {
            counter += 0.75;
        }
        else if (currentService.startsWith('d')) {
            counter += 12;
        }
        else {
            counter += 1.88;
        }
    }
    var res = airtime - counter;
    var diff = (counter > airtime) ? 'R0.00' : 'R' + res.toFixed(2);
    return diff;
}