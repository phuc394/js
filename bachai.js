function Phuongtrinhbac2(a, b, c) {
    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                return "Phuong trinh vo so nghiem";
            } else {
                return "Phuong trinh vo nghiem";
            }
        } else {
            let x = -c / b;
            return `Phuong trinh co nghiem: x = ${x}`;
        }
    }
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        return "Phuong trinh vo nghiem";
    } else if (delta === 0) {
        let x = -b / (2 * a);
        return `Phuong trinh co nghiem kep: ${x}`;
    } else {
        let x1 = (-b - Math.sqrt(delta)) / (2 * a);
        let x2 = (-b + Math.sqrt(delta)) / (2 * a);
        return `Phuong trinh co 2 nghiem phan biet: x1 = ${x1}, x2 = ${x2}`;
    }
}

let a = parseInt(prompt("Nhap a: "));
let b = parseInt(prompt("Nhap b: "));
let c = parseInt(prompt("Nhap c: "));
console.log(Phuongtrinhbac2(a, b, c));