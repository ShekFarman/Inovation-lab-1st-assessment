<!DOCTYPE html>
<html>
<head>
  <title>task3</title>
</head>
<body>
  <h2>Check the console output</h2>
  <script>
    // Arithmetic Operators
    let a = 45, b = 6;
    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
    console.log("Multiplication:", a * b);
    console.log("Division:", a / b);

    // Assignment Operators
    let x = 10;
    x += 4;
    console.log("After x += 4:", x);
    x *= 2;
    console.log("After x *= 2:", x);

    // Relational Operators
    console.log("a > b:", a > b);
    console.log("a < b:", a < b);
    console.log("a == 10:", a == 10);

    // Logical Operators
    var age = 25;
    var voterid = false;
    if (age >= 18 && voterid) {
      console.log("Allowed to vote.");
    } else {
      console.log("Not allowed to vote.");
    }

    // Conditional (Ternary) Operator
    var mark = 85;
    var message = (mark >= 80) ? "You got seat in PSG :)" : "Sorry, you got seat in KG :(";
    console.log("Message:", message);

    // Bitwise Operators
    let p = 9, q = 4;
    console.log("p & q:", p & q);
    console.log("p | q:", p | q);
    console.log("p ^ q:", p ^ q);
  </script>
</body>
</html>
