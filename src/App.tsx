import React from "react";
import "./App.css";
<<<<<<< HEAD
=======

>>>>>>> solved-nested
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
<<<<<<< HEAD

=======
import { Button, Col, Container, Row } from "react-bootstrap";
>>>>>>> solved-nested
function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Aarna Joshi
                <h1>This is my header text</h1>
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
<<<<<<< HEAD
=======
            <img
                src="https://mywoof.com/cdn/shop/files/what-are-the-top-10-most-popular-dog-breeds_6123531017718663713_20250110.jpg"
                alt="this image has a lot of happy doggies"
            />
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "130px",
                                height: "10px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
            <ul>
                <li>pink</li>
                <li>blue</li>
                <li>silver</li>
            </ul>
>>>>>>> solved-nested
        </div>
    );
}

export default App;
