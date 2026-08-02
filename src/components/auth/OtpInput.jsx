import { useRef } from "react";

export function OtpInput({ value, onChange, length = 6, disabled }) {
  const inputs = useRef([]);

  const chars = value.split("");

  const setCharAt = (index, char) => {
    const next = value.split("");
    next[index] = char;

    return next.join("").slice(0, length);
  };

  const handleChange = (index, e) => {
    const raw = e.target.value.replace(/\D/g, "");
    if (!raw) return;

    const digit = raw[raw.length - 1];
    onChange(setCharAt(index, digit));


    if (index < length - 1) inputs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const next = value.split("");
      if (next[index]) {

        next[index] = "";
        onChange(next.join(""));
      } else if (index > 0) {

        next[index - 1] = "";
        onChange(next.join(""));
        inputs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    onChange(pasted);

    const focusIndex = Math.min(pasted.length, length - 1);
    inputs.current[focusIndex]?.focus();
  };

  return (
    <div className="flex gap-2 sm:gap-3">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => (inputs.current[i] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={chars[i] ?? ""}
          disabled={disabled}
          onChange={(e) => handleChange(i, e)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={handlePaste}
          className="aspect-square w-full min-w-0 rounded-md border border-border bg-card text-center text-xl font-semibold text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      ))}
    </div>
  );
}
