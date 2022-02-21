var removeDuplicates = function(nums) {
  const length = nums.length;

  // MOVE BACKWARDS THROUGH ARRAY.
  for (let i = nums.length - 1; i > 0; --i) {
      let j = i - 1;

      // FIND INDEX OF BEGINNING OF DUPLICATES IN ARRAY.
      while (j >= 0 && nums[j] === nums[i]) {
          --j;
      }
      // REMOVE ALL DUPLICATES AND MOVE FOR LOOP INDEX TO SKIP ALL DUPLICATE INDICES.
      nums.splice(j+1,i-(j+1));
      i = j + 1;
  }
  return nums.length;
};