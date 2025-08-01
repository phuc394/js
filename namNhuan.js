function NamNhuan (year) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return `${year} la nam nhuan`;
        } else {
            return `${year} la khong nam nhuan`;
        }
    } else {
        if (year % 4 === 0) {
            return `${year} la nam nhuan`;
        } else {
            return `${year} khong la nam nhuan`;
        }
    }
}

function Thangtrongngay(month, year) {
    if (month < 1 || month > 12) {
        return "Thang khong hop le";
    }

    const daysInMonth = [31, (NamNhuan(year).includes("khong la nam nhuan") ? 28 : 29), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return `Thang ${month} nam ${year} co ${daysInMonth[month - 1]} ngay.`;
}


let year = parseInt(prompt("Nhap nam: "));
console.log(NamNhuan(year));

let month = parseInt(prompt("Nhap thang: "));
console.log(Thangtrongngay(month, year));