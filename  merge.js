function mergeStrings(s1, s2){
    // Your solution
    for (let i = Math.min(s1.length, s2.length); i > 0; i--) {
      if (s1.endsWith(s2.substring(0, i))) {
        return s1 + s2.substring(i);
      }
    }
    return s1 + s2;
    
}