import React from "react";
import Header from "../Components/Header";
import { motion } from "framer-motion";

function Price() {
    return (
        <motion.div
        initial = {{width : 0}}
    animate = {{width : "100%"}}
    exit = {{ x : window.innerWidth , transition : {duration : 0.1}}}
        >
            <Header />
            <h1>Prices</h1>
        </motion.div>
    );
};

export default Price;