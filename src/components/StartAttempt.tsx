import React, { useState } from "react";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    const startQuiz = (): void => {
        setInProgress(true);
        setAttempts((prev) => prev - 1);
    };

    const stopQuiz = (): void => {
        setInProgress(false);
    };

    const mulligan = (): void => {
        setAttempts((prev) => prev + 1);
    };

    return (
        <div>
            <p>Attempts: {attempts}</p>
            <button onClick={startQuiz} disabled={inProgress || attempts === 0}>
                Start Quiz
            </button>
            <button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </button>
            <button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </button>
        </div>
    );
}
