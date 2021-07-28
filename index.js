const express = require("express"); // function (class) () => {does a bunch of stuff, has additional functions built in}
const app = express();  // express invoked.  app is now an instance of express class

app.get('/', (req, res) => res.send("This Works GUD"))  // when the specified path (first arg) is reached, it will then execute the callback function.

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is up on port ${port}`));
