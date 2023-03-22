String.prototype.camelCase = function() {
    // Split the string into an array of words
    const words = this.trim().split(/\s+/);
    
    // Capitalize the first letter of each word and concatenate them together
    const camelCaseStr = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    
    return camelCaseStr;
};
  