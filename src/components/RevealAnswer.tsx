// import React, { useState } from "react";
// import { Button } from "react-bootstrap";

// export function RevealAnswer(): React.JSX.Element {
//     return <div>Reveal Answer</div>;
// }
import React, { useState } from "react";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div>
            <button
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                Reveal Answer
            </button>
            {visible && <span>42</span>}
        </div>
    );
}
