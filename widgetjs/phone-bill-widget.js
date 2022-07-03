document.addEventListener('alpine:init', () => {

    Alpine.data('phoneBillWidget', function () {
        return {
            phoneUsage : '',
            billAmount : '',
            totalBill() {
                this.billAmount = totalPhoneBill(this.phoneUsage);

                setTimeout(() => {
                    this.billAmount = '';
                    this.phoneUsage = '';
                }, 3500)
            }
        }
    });
})