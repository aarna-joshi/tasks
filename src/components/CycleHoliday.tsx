// import React, { useState } from "react";
// import { Button } from "react-bootstrap";

// export function CycleHoliday(): React.JSX.Element {
//     return <div>Cycle Holiday</div>;
// }
import React, { useState } from "react";

type Holiday = "🎄" | "🪔" | "🐇" | "🎃" | "💌";

export function CycleHoliday(): React.JSX.Element {
    const [current, setCurrent] = useState<Holiday>("🎃");

    // Next holiday alphabetically
    const nextAlphabet: Record<Holiday, Holiday> = {
        // "🎃": "💌",
        // "💌": "🐇",
        // "🐇": "🎄",
        "🎄": "🪔",
        "🪔": "🐇",
        "🐇": "🎃",
        "🎃": "💌",
        "💌": "🎄",
    };

    // Next holiday in the year (example order)
    const nextYear: Record<Holiday, Holiday> = {
        // "🎃": "🐇",
        // "🐇": "🪔",
        // "🪔": "🎄",
        // "🎄": "💌",
        // "💌": "🎃",
        "💌": "🐇",
        "🐇": "🪔",
        "🪔": "🎃",
        "🎃": "🎄",
        "🎄": "💌",
    };

    return (
        <div>
            <p>Holiday: {current}</p>
            <button
                onClick={() => {
                    setCurrent(nextAlphabet[current]);
                }}
            >
                Advance by Alphabet
            </button>
            <button
                onClick={() => {
                    setCurrent(nextYear[current]);
                }}
            >
                Advance by Year
            </button>
        </div>
    );
}
