function NamNhuan (year) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return `${year} la nam nhuan`;
        } else {
            return `${year} khong la nam nhuan`;
        }
    } else {
        if (year % 4 === 0) {
            return `${year} la nam nhuan`;
        } else {
            return `${year} khong la nam nhuan`;
        }
    }
}

let year = parseInt(prompt("Nhap nam: "));
console.log(NamNhuan(year));