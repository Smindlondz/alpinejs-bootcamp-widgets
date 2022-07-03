document.addEventListener('alpine:init', () => {

    Alpine.data('expensiveWidget', function () {
        return {
            data : [],
            threshold : null,
            itemList: [{name : 'apples', qty : 10},
                        {name : 'pears', qty : 37},
                        {name : 'bananas', qty : 27},
                        {name : 'apples', qty : 3},],

            expensiveItems() {
                this.data = findItemsOver(this.itemList, this.threshold);
                
                setTimeout(() => {
                    this.data = [];
                    this.threshold = '';
                }, 3500)
            }
        }
    });
})