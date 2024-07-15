/*Question 1: Sum of salaries*/
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);

/*Question 2: Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2*/

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2}}
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);

/*Question 3: Write a function checkEmailId(str) that returns true if str contains '@' and ‘.’, otherwise false. Make sure
'@' must come before '.' and there must be some characters between '@' and '.'*/

function checkEmailId(str) {
  let atIndex = str.indexOf('@');
  let dIndex = str.indexOf('.', atIndex);

  if (atIndex > 0 && dIndex > atIndex + 1) {
    return true;
  }
  return false;
}

let email = prompt("Enter your email ID:");

if (checkEmailId(email)) {
  alert("Valid email ID.");
} else {
  alert("Invalid email ID.");
}

/*Question 4: Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength
– replaces the end of str with the ellipsis character "...", to make its length equal to maxlength.*/

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  }
  return str;
}
console.log(truncate("What I'd like to tell on this topic is:", 30));
console.log(truncate("Hi everyone!", 10));

/*Question 5: Let’s try 5 array operations.
Create an array styles with items “James” and “Brennie”.
Append “Robert” to the end.
Replace the value in the middle by “Calvin”. Your code for finding the middle value should work for any
arrays with odd length.
Remove the first value of the array and show it.
Prepend Rose and Regal to the array.
James, Brennie
James, Brennie, Robert
James, Calvin, Robert
Calvin, Robert
Rose, Regal, Calvin, Robert*/

let styles = ["James", "Brennie"];
console.log(styles);
styles.push("Robert");
console.log(styles);
let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Calvin";
console.log(styles);
let firstValue = styles[0];
for (let i = 0; i < styles.length - 1; i++) {
  styles[i] = styles[i + 1];
}
styles.length = styles.length - 1;
console.log(firstValue);
console.log(styles);
styles = ["Rose", "Regal"].concat(styles);
console.log(styles);
