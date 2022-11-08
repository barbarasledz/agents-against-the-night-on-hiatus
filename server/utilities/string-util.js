class StringUtil {
    static isEmpty(value) {
        /** 
         * isEmpty: Checks whether a string is empty. A string is empty if it has no value or if it is only whitespace characters. 
         * Return type: Boolean.
         */
        return !value || !value.trim();
    } 

    static capitalize(word) {
        /**
         * capitalize: Turns the first letter of a string to uppercase. 
         */
        if (!this.isEmpty(word)) {
            return word.charAt(0).toUpperCase()
        } else {
            return word
        }
    }
}

module.exports = StringUtil