// Function to perform insertion sort on an array
function insertionSort(arr: number[]): number[] {
    // Loop through each element of the array
    for (let i = 0; i < arr.length; i++) {
        // Current element to be compared
        let key = arr[i];
        // Initialize j to the index of the previous element
        let j = i - 1;

        // Shift elements of arr[0..i-1] that are greater than key
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Shift element to the right
            j--; // Move to the previous element
        }
        // Place key in its correct position
        arr[j + 1] = key;
    }
    // Return the sorted array
    return arr;
}

// Example usage of the insertionSort function:
const arr = [12, 11, 13, 5, 6];
console.log(insertionSort(arr)); // Output the sorted array
