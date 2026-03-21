import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>

            <Form.Group controlId="mcq">
                <Form.Select
                    value={selected}
                    onChange={(e) => {
                        setSelected(e.target.value);
                    }}
                >
                    {options.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            <div>{selected === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
