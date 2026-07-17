import { cn } from "../../lib/utils";

export default function BorderBeam({ className, size = 120, duration = 8 }) {
    return (
        <div
            className={cn("border-beam pointer-events-none absolute inset-0 rounded-[inherit]", className)}
            style={{
                "--beam-size": `${size}px`,
                "--beam-duration": `${duration}s`,
            }}
        />
    );
}
