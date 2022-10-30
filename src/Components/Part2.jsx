import React from "react";
import Cards from "./Cards";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {fadeInUp} from "../Components/variants";

function Part2() {
  return (
    <div>
    <motion.div variants={fadeInUp} initial="initial" animate="animate" align="center" className="part-heading my-2">
      <h1 className="shadow-none p-3 mb-5 bg-light rounded"><strong>Current Fields Availablity</strong></h1>
    </motion.div>
      <Row xs={1} sm={1} md={2} lg={2} xl={3} className="g-4 w-100 justify-content-center p-0 m-0 my-2">
        <Col>
          <Cards
            title="Education"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ullam labore similique id repellat fugit minus minima facilis, odio fuga iusto dolores excepturi quas laboriosam consequatur, nostrum autem ea magnam."
            imglink="https://thumbs.dreamstime.com/b/school-building-modern-thin-line-design-style-vector-illustration-white-background-blue-colored-high-quality-composition-123751724.jpg"
          />
        </Col>
        <Col>
          <Cards
            title="Toursim"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ullam labore similique id repellat fugit minus minima facilis, odio fuga iusto dolores excepturi quas laboriosam consequatur, nostrum autem ea magnam."
            imglink="https://media.istockphoto.com/vectors/people-traveling-walking-at-famous-city-landmarks-vector-id1283983196?k=20&m=1283983196&s=170667a&w=0&h=dR6a0uA-tI3YseVIfSqv6yTsZpvzIecAtBmdGlKD-BI="
           />
        </Col>
        <Col>
          <Cards
            title="Medical"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ullam labore similique id repellat fugit minus minima facilis, odio fuga iusto dolores excepturi quas laboriosam consequatur, nostrum autem ea magnam."
            imglink="https://img.freepik.com/premium-vector/hospital-building-healthcare-cartoon-background-vector-illustration-with-ambulance-car-doctor-patient-nurses-medical-clinic-exterior_2175-1516.jpg"
           />
        </Col>
        <Col>
          <Cards
            title="Career"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ullam labore similique id repellat fugit minus minima facilis, odio fuga iusto dolores excepturi quas laboriosam consequatur, nostrum autem ea magnam."
            imglink="https://img.freepik.com/premium-vector/recruitment-recruitment-agency-job-seekers-job-applicants-office-chair-open-vacancy-illustration_566886-1758.jpg?w=2000"
           />
        </Col>
        <Col>
          <Cards
            title="Government work"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ullam labore similique id repellat fugit minus minima facilis, odio fuga iusto dolores excepturi quas laboriosam consequatur, nostrum autem ea magnam."
            imglink="https://static.vecteezy.com/system/resources/thumbnails/007/163/378/small/bank-building-with-classic-facade-isolated-on-white-background-government-federal-financial-institute-design-vector.jpg"
           />
        </Col>
      </Row>
    </div>
  );
}

export default Part2;
