function transportFee(shift) {
    //var right price;
    // const a = 'morning'; const b = 'afternoon'; const c = 'nightshift';
    if (shift === 'morning') {
        return 'R20';
    } else if (shift === 'afternoon') {
        return 'R10';
    } else if (shift === 'nightshift') {
        return 'free';
    };
};