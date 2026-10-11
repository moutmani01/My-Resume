import { Fragment } from "react";

/** Splits text into words that slide up from behind a mask (see globals.css). */
export function SplitText({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className="split-word">
            <span style={{ "--i": i } as React.CSSProperties}>{word}</span>
          </span>{" "}
        </Fragment>
      ))}
    </>
  );
}
