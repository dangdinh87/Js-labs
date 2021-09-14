// class Button {
//     constructor(id, text, onClick) {
//         this.id = id;
//         this.text = text;
//         this.onClick = onClick;
//        this.click = this.click.bind(this);
//     }

//     click() {
//       console.log(this);
//     }
// }

// let button = new Button(1,2,3);

// // button.click();
// setTimeout(button.click, 1000)
// obj = {a:1,b:2,c:[1,2,3]}

// console.log(Object.entries(obj))


let mang1 = [1, 2, 3];
let mang2 = [4, 5, 6];
// Nối mang2 vào cuối mang1
mang1.push.apply(mang1, mang2);
console.log(mang1);
//[ 1, 2, 3, 4, 5, 6 ]
// console.log(this)