const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k8znc.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.45sgtw6.mongodb.net/test`)
//     .then(() => console.log("Database Connected"))
//     .catch(err => console.log(err))
