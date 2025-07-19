/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  console.log("=== PrintDeveloperbyMap ===");
  arr.map((item) => {
    if (item.profession === "developer") {
      console.log(item);
    }
  });
  alert("Open Console to see the output.");
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  console.log("=== PrintDeveloperbyForEach ===");
  arr.forEach((item) => {
    if (item.profession === "developer") {
      console.log(item);
    }
  });
  alert("Open Console to see the output.");
}

function addData() {
  //Write your code here, just console.log
  console.log("=== addData ===");
        const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
        arr.push(newEmployee);
        console.log(arr);
  alert("Open Console to see the output.");
}

function removeAdmin() {
  //Write your code here, just console.log
  console.log("=== removeAdmin ===");
  const filteredArray = arr.filter((item) => item.profession !== "admin");
  console.log(filteredArray);
  alert("Open Console to see the output.");
}

function concatenateArray() {
  //Write your code here, just console.log
  console.log("=== concatenateArray ===");
        const newArray = [
          { id: 5, name: "alice", age: "22", profession: "designer" },
          { id: 6, name: "bob", age: "25", profession: "manager" },
          { id: 7, name: "charlie", age: "23", profession: "tester" }
        ];
        const concatenatedArray = arr.concat(newArray);
        console.log(concatenatedArray);
        alert("Open Console to see the output.");
}
