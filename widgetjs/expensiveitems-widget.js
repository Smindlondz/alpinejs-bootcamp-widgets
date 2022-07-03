document.addEventListener('alpine:init', () => {

    Alpine.data('expensiveWidget', function () {
        return {
            data : [],
            threshold : null,
            expensiveItems() {
                this.data = findItemsOver(itemList, this.threshold);
                setTimeout(() => {
                    this.data = [];
                    this.threshold = '';
                }, 3500)
            }
        }
    });
})