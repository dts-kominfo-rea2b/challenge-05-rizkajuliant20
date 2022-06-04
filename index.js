const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (arr, sortingan) => {
    const newArr = []
    let counter = 1
    sortingan(arr)
    for (let i = 0; i < arr.length; i++) {
        newArr.push(counter++ + ". " + arr[i])
    }
    return newArr
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (arr) => {
    return arr.sort()
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (arr) => {
    return arr.reverse()
};

// ! JANGAN DIMODIFIKASI
(function main() {
    console.log(sorter(names, sortAscending).join("\n"));
    console.log(sorter(names, sortDescending).join("\n"));
})();

module.exports = {
    sorter,
    sortAscending,
    sortDescending,
    names,
};