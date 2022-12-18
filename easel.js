// function init() {
//   var stage = new createjs.Stage("demoCanvas");
//   var circle = new createjs.Shape();
//   circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 100);
//   circle.x = 100;
//   circle.y = 100;
//   stage.addChild(circle);
//   stage.update();
//   console.log("salam")

// }

// console.log("Request data ...");

// setTimeout(() => {
//   console.log("Preparing data ...");

//   const backendData = {
//     server: "aws",
//     port: 2000,
//     status: "working",
//   };

//   setTimeout(() => {
//     backendData.modified = true;
//     console.log("Data received", backendData);
//   }, 2000);
// }
// , 2000);

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Preparing data ...");

//     const backendData = {
//       server: "aws",
//       port: 2000,
//       status: "working",
//     };
//     resolve(backendData);
//   }, 2000);
// });

// p.then((data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true;
//       resolve(data);
//       // reject(data);
//     }, 2000);
//   });
// }
// )
// .then(clientData => {
//   clientData.fromPromise = true;
//   return clientData;
// }
// )
// .then(data => {
//   console.log("Modified", data);
// }
// )
// .catch(err => console.error("Error: ", err))
// .finally(() => console.log("Finally"));

// const sleep = ms => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(), ms)
//   })
// }

// sleep(2000).then(() => console.log("After 2 sec"))
// sleep(3000).then(() => console.log("After 3 sec"))

// Promise.all([sleep(2000), sleep(5000)])
// .then(() => {
//   console.log("All promises")
// }
// )

const person = Object.create(
  {
    calculateAge() {
      console.log("Age: ", new Date().getFullYear() - this.birthYear);
    }
  },
  {
    name: {
      value: "Farid",
      enumerable: true,
      writable: true,
      configurable: true,
    },
    birthYear: {
      value: 1997,
      enumerable: false,
    },
    age: {
      get() {
        return calculateAge();
      },
      set(value) {
        console.log("Set age", value);

      },
    },
  }
);

// const person = {
//   name: "Farid",
//   birthYear: 1997,
// }

for (let key in person) {
  console.log("key", key, person[key]);
}
