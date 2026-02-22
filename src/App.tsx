import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Aarna Joshi
                <h1>This is my header text</h1>
            </header>
            <img
                src="https://mywoof.com/cdn/shop/files/what-are-the-top-10-most-popular-dog-breeds_6123531017718663713_20250110.jpg"
                alt="this image has a lot of happy doggies"
            />
            <div>
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
            </div>
            ; Unordered List of colors:
            <ul>
                <li>pink</li>
                <li>blue</li>
                <li>silver</li>
            </ul>
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
            <p>
                Hello World Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>
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
        </div>
    );
}

export default App;
