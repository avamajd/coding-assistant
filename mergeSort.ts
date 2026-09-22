// Function to perform merge sort on an array
function mergeSort(arr: number[]): number[] {
    // Base case: if the array has one or zero elements, it is already sorted
    if (arr.length <= 1) return arr;

    // Find the middle index of the array
    const mid = Math.floor(arr.length / 2);

    // Recursively split and sort the left half
    const left = mergeSort(arr.slice(0, mid));
    // Recursively split and sort the right half
    const right = mergeSort(arr.slice(mid));

    // Merge the sorted halves
    return merge(left, right);
}

// Function to merge two sorted arrays into one sorted array
function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i = 0; // Pointer for the left array
    let j = 0; // Pointer for the right array

    // Compare each element of the arrays and merge them
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++; // Move the pointer in the left array
        } else {
            result.push(right[j]);
            j++; // Move the pointer in the right array
        }
    }

    // Concatenate any remaining elements from the left array
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage of the mergeSort function:
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); // Output the sorted array
