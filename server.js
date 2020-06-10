/** Server for microblog. */

const app = require("./app");

const PORT = +process.env.PORT || 5000;

app.listen(PORT || 5000, function () {
  console.log(`Server is listening on port ${PORT}`);
});
