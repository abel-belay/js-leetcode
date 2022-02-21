var removeElement = function (nums, val) {
  // FOR EACH NUMBER IN ARRAY, MOVING BACKWARDS...
  for (let i = nums.length - 1; i >= 0; --i) {
    // IF ELEMENT IS EQUAL TO VAL ARGUMENT GIVEN...
    if (nums[i] === val) {
      // REMOVE ELEMENT FROM ARRAY.
      nums.splice(i, 1);
    }
  }

  // RETURN ARRAY.
  return nums.length;
};
