import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import {fadeInUp} from "../Components/variants";


function Part1() {
  return (
    <div className="Homep1">
      <div className="Homep1-left">
        <motion.div variants={fadeInUp} initial="initial" animate="animate" className="left-Box" align="center">
          <h1 align="left" style={{paddingLeft: "7rem"}}>TOCUL</h1>
          <h3>A place for every problem...</h3>
        </motion.div>
        <motion.div animate={{scale:1.2}} className="d-flex justify-content-center align-items-center">
          <a className='btn btn-primary shadow w-50 my-5' href="/about" outline size="lg" >
            Know more About Us ➡️
          </a>
        </motion.div>
      </div>
      <motion.div variants={fadeInUp} initial="initial" animate="animate" className="Homep1-right">
        <img
          src="https://img.freepik.com/free-vector/consulting-concept-illustration_114360-2579.jpg?w=740&t=st=1659375269~exp=1659375869~hmac=a9bd4602d8a26406c5b18ba4c2bf542b7c1fe3ab7a60fe6230d4535e2509d4b6"
          alt="Please check your connection"
        />
      </motion.div>
    </div>
  );
}

export default Part1;
