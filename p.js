function printPairsWithSum(a, b, k) {
    const n = a.length;

    // Sort arrays in ascending order
    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);

    // Use two pointers, one pointing to the start of array 'a' and the other to the end of array 'b'
    let i = 0;
    let j = n - 1;

    while (i < n && j >= 0) {
        const currentSum = a[i] + b[j];

        // Check the condition for the sum
        if (currentSum === k) {
            // Print the elements if the sum is equal to the given sum
            console.log(`Pair: (${a[i]}, ${b[j]})`);
            // Move the pointers accordingly
            i++;
            j--;
        } else if (currentSum < k) {
            // If the sum is less than the given sum, move the 'i' pointer
            i++;
        } else {
            // If the sum is greater than the given sum, move the 'j' pointer
            j--;
        }
    }
}

// Example usage
const a = [2, 1, 3];
const b = [7, 8, 9];
const sum = 10;

printPairsWithSum(a, b, sum);