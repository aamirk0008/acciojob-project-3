/** @format */

let arr = [
  { id: 1, name: "Sheikh Aamir", age: "23", profession: "developer" },
  { id: 2, name: "John Doe", age: "20", profession: "developer" },
  { id: 3, name: "Vasu Tiwari", age: "22", profession: "admin" },
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
  const newEmployee = { id: 4, name: "Aamir", age: "20", profession: "intern" };
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
    { id: 5, name: "Harshit", age: "22", profession: "Quality Analyst" },
    { id: 6, name: "Shruti", age: "25", profession: "Prompt Engineer" },
    { id: 7, name: "Rohan", age: "23", profession: "Software Developer" }
  ];
  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
  alert("Open Console to see the output.");
}
