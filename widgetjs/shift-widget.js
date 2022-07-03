document.addEventListener('alpine:init', () => {

    Alpine.data('shiftWidget', function () {
        return {
            shiftMsg : '',
            shift : '',
            displayShift() {
                this.shiftMsg = transportFee(this.shift);

                setTimeout(() => {
                    this.shift = '';
                    this.shiftMsg = '';
                }, 3500)
            }
        }
    });
})