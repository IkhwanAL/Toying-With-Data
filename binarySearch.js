function binarySearch(arr, left, right, searchValue) {
    const mid = Math.floor(midValue(left, right));
    if (right >= left) {
        if (arr[mid] === searchValue) {
            return {
                value: arr[mid],
                position: mid,
            }
        }

        if (arr[mid] > searchValue) {
            return binarySearch(arr, left, mid - 1, searchValue);
        }

        return binarySearch(arr, mid + 1, right, searchValue);
    }
    return 'No Value'
}

function midValue(left, right) {
    return left + (right - left) / 2;
}

const arr = [21, 42, 58, 95, 71, 99, 32, 9, 48, 83, 81]

console.log(binarySearch(arr, 0, arr.length - 1, 90))