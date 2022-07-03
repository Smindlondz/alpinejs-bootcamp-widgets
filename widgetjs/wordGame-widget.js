document.addEventListener('alpine:init', () => {

    Alpine.data('wordGameWidget', function () {
        return {
            str : '',
            longWord : '',
            shortWord : '',
            wordLength : '',

            sentence() {
                this.longWord = longestWord(this.str);
                this.shortWord = shortestWord(this.str);
                this.wordLength = wordLengths(this.str);

                setTimeout(() => {
                    this.longWord = '';
                    this.shortWord = '';
                    this.wordLength = '';
                    this.str = '';
                }, 3500)
            }
        }
    });
})