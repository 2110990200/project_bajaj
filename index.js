const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/bfhl", (req, res) => {
  const { array } = req.body;
  const is_success = true;
  const user = {
    fullname: "John Doe",
    dob: "1999-09-17",
  };
  const user_Id = `${user.fullname}_${user.dob.slice(2, 8)}`;
  const email = "john@xyz.com";
  const roll_Number = "2003";

  const even_Numbers = array.filter((num) => num % 2 === 0);
  const odd_Numbers = array.filter((num) => num % 2 !== 0);
  const alphabets = array
    .filter((char) => typeof char === "string")
    .map((char) => char.toUpperCase());

  res.json({
    is_success,
    user_Id: `user_id: ${user_Id}`,
    email,
    roll_Number,
    even_Numbers,
    odd_Numbers,
    alphabets,
  });
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});
