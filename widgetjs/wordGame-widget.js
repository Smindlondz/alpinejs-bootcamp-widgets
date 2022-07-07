document.addEventListener('alpine:init', () => {

    Alpine.data('wordWidget', function () {
        return {
            str : '',
            longWord : '',
            shortWord : '',
            wordLength : '',

            mySentence() {
                this.longWord = longestWord(this.str);
                this.shortWord = shortestWord(this.str);
                this.wordLength = wordLengths(this.str);

                setTimeout(() => {
                    this.longWord = '';
                    this.shortWord = '';
                    this.wordLength = '';
                    this.str = '';
                }, 6000)
            }
        }
    });
})