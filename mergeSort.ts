// Function to perform merge sort on an array
const mergeSort = (arr: number[]): number[] => {
    // Base case: if the array has one or zero elements, it is already sorted
    if (arr.length <= 1) return arr;

    // Find the middle index of the array
    const mid = Math.floor(arr.length / 2);

    // Recursively split the array into left and right halves
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Merge the two sorted halves
    return merge(left, right);
};

// Function to merge two sorted arrays into one sorted array
const merge = (left: number[], right: number[]): number[] => {
    const result: number[] = [];
    let i = 0; // Pointer for left array
    let j = 0; // Pointer for right array

    // Compare elements from both arrays and push the smaller one into result
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // If there are remaining elements in the left array, push them to result
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // If there are remaining elements in the right array, push them to result
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
};

// Example usage of the merge sort function
const array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array));