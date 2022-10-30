import axios from "axios";

axios.get("http://localhost:3005/mydata").then((e) => {
    console.log(e.data);
});