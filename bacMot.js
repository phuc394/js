function Phuongtrinhbac1(a, b) {
    if (a === 0) {
        if (b === 0) {
               return "Phuong trinh vo so nghiem";
            } else {
                return "Phuong trinh vo nghiem";
            }
    } else {
            let x = -b / a;
            return `Phuong trinh co nghiem: x = ${x}`;
    }
}

let a = parseInt(prompt("Nhap a: "));
let b = parseInt(prompt("Nhap b: "));
console.log(Phuongtrinhbac1(a, b));
