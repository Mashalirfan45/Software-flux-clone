"use client";

import { Button } from "@mui/material";

export default function CustomButton({ children, sx, ...props }) {
  // Letter-by-letter effect sirf text (string) ke liye
  const text = typeof children === "string" ? children : null;

  return (
    <Button
      variant="contained"
      disableRipple
      {...props}
      aria-label={text || props["aria-label"]}
      sx={{
        borderRadius: "20px",
        textTransform: "none",
        px: 6,
        py: 1.5,
        backgroundColor: "#8b238e",
        color: "#ffffff",
        fontWeight: 600,
        border: "none",
        boxShadow: "none",

        "&:hover": {
          backgroundColor: "#8b238e",
          boxShadow: "none",
        },

        /* Har letter ka dabba: sirf ek letter dikhta hai */
        "& .char-wrap": {
          display: "inline-block",
          overflow: "hidden",
          height: "1.5em",
          lineHeight: "1.5em",
          verticalAlign: "top",
        },

        /* Andar do letters upar-neeche rakhe hain */
        "& .char-inner": {
          display: "block",
          transition: "transform 0.45s cubic-bezier(0.65, 0, 0.35, 1)",
        },

        "& .char-inner > span": {
          display: "block",
          height: "1.5em",
        },

        /* Hover: har letter upar jata hai, neeche se naya aata hai */
        "&:hover .char-inner": {
          transform: "translateY(-50%)",
        },

        ...sx,
      }}
    >
      {text
        ? text.split("").map((char, i) => (
            <span key={i} className="char-wrap" aria-hidden="true">
              <span
                className="char-inner"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <span>{char === " " ? "\u00A0" : char}</span>
                <span>{char === " " ? "\u00A0" : char}</span>
              </span>
            </span>
          ))
        : children}
    </Button>
  );
}