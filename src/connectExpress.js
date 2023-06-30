import express from "express";

const connectExpress = () => {
    const app = express();

    app.use(bodyParser.json());

    app.listen(2001, () => {
        console.log("Server is running on port 2001");
    });
}

export default connectExpress