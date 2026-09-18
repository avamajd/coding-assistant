function bubbleSort(arr: number[]): number[] {
    // Get the length of the input array
    let n = arr.length;
    let swapped: boolean;
    
    // Repeat the process until no swaps are made
    do {
        swapped = false; // No swaps made yet
        // Traverse through the array
        for (let i = 0; i < n - 1; i++) {
            // Compare adjacent elements
            if (arr[i] > arr[i + 1]) {
                // If the current element is greater than the next, swap them
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true; // A swap has been made
            }
        }
        n--; // Reduce the range of the array since the last element is now sorted
    } while (swapped); // Continue until no swaps occur
    
    return arr; // Return the sorted array
}

// Example usage:
// Initialize an array of numbers
const array = [64, 34, 25, 12, 22, 11, 90];
// Call the bubbleSort function and log the sorted array to the console
console.log(bubbleSort(array));