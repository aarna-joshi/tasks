import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "black",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>

            {COLORS.map((c) => (
                <Form.Check
                    inline
                    key={c}
                    type="radio"
                    name="colors"
                    label={c}
                    value={c}
                    checked={color === c}
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                />
            ))}

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    padding: "10px",
                    marginTop: "10px",
                }}
            >
                {color}
            </div>
        </div>
    );
}
