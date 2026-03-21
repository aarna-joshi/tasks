import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [input, setInput] = useState<string>("");

    function gainAttempts() {
        const value = parseInt(input);
        if (!isNaN(value)) {
            setAttempts(attempts + value);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts: {attempts}</div>

            <Form.Control
                type="number"
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />

            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts <= 0}
            >
                use
            </Button>

            <Button onClick={gainAttempts}>gain</Button>
        </div>
    );
}
