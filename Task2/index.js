////////////////////////Q1//////////////////////////////////////////////////////////////////////////////////
// interface Persone {
//     name:string,
//     age:number,
function store() {
    var _a, _b, _c, _d;
    var Pname = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value;
    var Pdescription = (_b = document.getElementById("description")) === null || _b === void 0 ? void 0 : _b.value;
    var Pprice = (_c = document.getElementById("price")) === null || _c === void 0 ? void 0 : _c.value;
    var Pquantity = (_d = document.getElementById("quantity")) === null || _d === void 0 ? void 0 : _d.value;
    localStorage.setItem("Pname", Pname);
    localStorage.setItem("Pdescription", Pdescription);
    localStorage.setItem("Pprice", Pprice);
    localStorage.setItem("Pquantity", Pquantity);
    store1();
}
function store1() {
    var productList = document.getElementById("productList");
    if (productList) {
        productList.innerHTML += "".concat(localStorage.getItem("Pname"), "\n    ").concat(localStorage.getItem("Pdescription"), "\n    ").concat(localStorage.getItem("Pprice"), "\n    ").concat(localStorage.getItem("Pquantity"));
    }
}
