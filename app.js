// *Bài 1:
// let input1 = prompt("hãy nhập số nguyên bất kỳ");
// let input2 = prompt("hãy nhập số nguyên bất kỳ");
// input1 = Number(input1)
// input2 = Number(input2)
// console.log(input1);
// console.log(input2);
// function sum(input1, input2) {
//     return input1 + input2
// }
// let tong = sum(input1, input2);
// alert("Tổng hai số là :" + tong);

// * Bai2 :
// function doDai(chuoi) {
//     return chuoi.length;
// }
// let end = doDai(prompt("hi"))
// alert("Độ dài của chuỗi  là: " + end);

//* Bài 3:
// Hàm để trả về một mảng mới chứa các chuỗi viết hoa
// function vietHoa(mang) {
//     let mangMoi = [];

//     for (let i = 0; i < mang.length; i++) {
//         let chuoi = mang[i];
//         let chuoiHoa = chuoi.toUpperCase();
//         mangMoi.push(chuoiHoa);
//     }
//     return mangMoi;
// }
// let array = prompt("Viết thường nội dung bất kỳ");
// let ketQua = vietHoa(array);
// alert("Nội dung đã viết hoa lại là: " + ketQua);

//* Bài 4:
// Hàm để trả về chuỗi mới với các từ đảo ngược thứ tự
// function daoTu(chuoi) {
//     let mang = chuoi.split(" ");
//     mang.reverse();
//     let chuoiMoi = mang.join(" ");
//     return chuoiMoi;
// }
// let ketQua = daoTu("a b c d");
// console.log(ketQua);

// * Bài 5:
// Hàm để trả về một mảng mới chứa các số đã sắp xếp theo thứ tự tăng dần
// function sapXep(mang) {
//     let mangMoi = [];
//     mangMoi = mang.slice();
//     mangMoi.sort(soSanh);
//     return mangMoi;
// }
// function soSanh(a, b) {
//     if (a < b) {
//         return -1;
//     }
//     if (a > b) {
//         return 1;
//     }
//     return 0;
// }
// let mang = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// let ketQua = sapXep(mang);
// console.log(ketQua);

// * Bài 6:
// Hàm để kiểm tra một số có phải là số nguyên tố hay không
// function laSoNguyenTo(so) {
//     if (so < 2) {
//         return false;
//     }
//     if (so === 2) {
//         return true;
//     }
//     for (let i = 2; i <= Math.sqrt(so); i++) {
//         if (so % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// function locSoNguyenTo(mang) {
//     let mangMoi = [];
//     for (let i = 0; i < mang.length; i++) {
//         let so = mang[i];
//         let ketQua = laSoNguyenTo(so);
//         if (ketQua) {
//             mangMoi.push(so);
//         }
//     }
//     return mangMoi;
// }

// let mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let ketQua = locSoNguyenTo(mang);
// console.log(ketQua);
