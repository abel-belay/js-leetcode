var lengthOfLongestSubstring = function (s) {
  // KEEPS TRACK OF MAX SUBSTRING SEEN YET.
  let max = 1;

  // FOR EACH CHARACTER OF STRING.
  for (let i = 0; i < s.length - 1; ++i) {
    let counter = 1;
    let j = i + 1;
    // INCREASE SUBSTRING UNTIL NEW CHARACTER ISN'T UNIQUE.
    while (j < s.length && s.slice(i, j).indexOf(s[j]) === -1) {
      ++counter;
      ++j;
    }
    // IF SIZE OF SUBSTRING IS LARGER THAN OUR CURRENT RECORD, REPLACE THE RECORD.
    if (counter > max) {
      max = counter;
    }
  }
  
  // RETURN MAX SUBSTRING SIZE.
  return max;
};

console.log(3, lengthOfLongestSubstring("abcabcbb"));
