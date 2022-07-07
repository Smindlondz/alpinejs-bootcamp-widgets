document.addEventListener('alpine:init', () => {

    Alpine.data('greetWidget', function () {
        return {
            name: '',
            greetMessage: '',
            showGreeting: false,
            greetMe() {

                this.greetMessage = greet(this.name);

                setTimeout(() => {
                    this.greetMessage = '';
                    this.name = '';
                }, 4500)
            }
        }
    });
})