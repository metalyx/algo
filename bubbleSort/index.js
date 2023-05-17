/**
 * An enhanced Bubble Sort function.
 * @param {number[]} array Array of numbers to sort
 * @returns {number[]}
 */
function bubbleSort(array) {
    // Storing state if we have swapped any element
    let isSwapped = true;

    // We can optimize original algorithm by storing
    // amount of all passes

    // That's because after each pass, the biggest element is always
    // placed in the final place
    let passes = 0;

    // If we swapped something at least once, then
    // we need to loop through whole array again (excluding the amount of passes)
    while (isSwapped) {
        isSwapped = false;

        for (let i = 0; i < array.length - 1 - passes; i++) {
            // Compare current with the element after it
            if (array[i] > array[i + 1]) {
                // swap if the current is bigger than next
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;

                // Don't forget to update isSwapped
                isSwapped = true;
            }
        }

        // increment passes
        passes += 1;
    }

    return array;
}
