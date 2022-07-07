document.addEventListener('alpine:init', () => {

    Alpine.data('enoughAirtimeWidget', function () {
        return {
            phoneUsage : '',
            availableAmount: null,
            billAmount : '',
            totalBill() {
                this.billAmount = enoughAirtime(this.phoneUsage, this.availableAmount);

                setTimeout(() => {
                    this.billAmount = '';
                    this.phoneUsage = '';
                    this.availableAmount = '';
                }, 5000)
            }
        }
    });
})