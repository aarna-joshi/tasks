import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}
export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    function rollLeft(): void {
        setLeftDie(d6());
    }

    function rollRight(): void {
        setRightDie(d6());
    }

    const isSnakeEyes = leftDie === 1 && rightDie === 1;
    const isWin = leftDie === rightDie && !isSnakeEyes;

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>{" "}
            <span data-testid="right-die">{rightDie}</span>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            {isSnakeEyes && <div>Lose</div>}
            {isWin && <div>Win</div>}
        </div>
    );
}
// export function TwoDice(): React.JSX.Element {
//     // Initialize two different dice
//     const initialDice = (): [number, number] => {
//         const left = d6();
//         // Ensure right is always different without calling d6() again
//         const right = left === 6 ? 1 : left + 1;
//         return [left, right];
//     };

//     const [left, setLeft] = useState<number>(initialDice()[0]);
//     const [right, setRight] = useState<number>(initialDice()[1]);

//     // Roll functions
//     const rollLeft = (): void => {
//         setLeft(d6());
//     };
//     const rollRight = (): void => {
//         setRight(d6());
//     };

//     // Determine result
//     let result: string | null = null;
//     if (left === right) {
//         result = left === 1 ? "Lose" : "Win";
//     }

//     return (
//         <div>
//             <span data-testid="left-die">{left}</span>
//             <Button onClick={rollLeft}>Roll Left</Button>

//             <span data-testid="right-die">{right}</span>
//             <Button onClick={rollRight}>Roll Right</Button>

//             {result && <p>{result}</p>}
//         </div>
//     );
// }
// export function TwoDice(): React.JSX.Element {
//     // const initialDice = (): [number, number] => {
//     //     const left = d6();
//     //     let right: number;
//     //     do {
//     //         right = d6();
//     //     } while (right === left);
//     //     return [left, right];
//     // };

//     const [initialLeft, initialRight] = initialDice(); // only call once
//     const [left, setLeft] = useState<number>(initialLeft);
//     const [right, setRight] = useState<number>(initialRight);

//     const rollLeft = (): void => {
//         setLeft(d6());
//     };
//     const rollRight = (): void => {
//         setRight(d6());
//     };

//     let result: string | null = null;
//     if (left === right) {
//         result = left === 1 ? "Lose" : "Win";
//     }

//     return (
//         <div>
//             <span data-testid="left-die">{left}</span>
//             <Button onClick={rollLeft}>Roll Left</Button>

//             <span data-testid="right-die">{right}</span>
//             <Button onClick={rollRight}>Roll Right</Button>

//             {result && <p>{result}</p>}
//         </div>
//     );
// }
