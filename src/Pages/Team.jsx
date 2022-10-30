import React from "react";
import Header from "../Components/Header";
import { motion } from "framer-motion";

function Team() {
    return (
        <motion.div
        initial = {{width : 0}}
    animate = {{width : "100%"}}
    exit = {{ x : window.innerWidth , transition : {duration : 0.1}}}
        >
            <Header />
            <h1>Team</h1>
        </motion.div>
    );
};

export default Team;