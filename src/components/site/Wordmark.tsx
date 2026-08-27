import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span aria-hidden className="flex h-5 items-end gap-[3px]">
        <span className="block h-2 w-[3px] bg-signal" />
        <span className="block h-3.5 w-[3px] bg-foreground/60" />
        <span className="block h-5 w-[3px] bg-foreground" />
      </span>
      <span className="font-display text-[1.0625rem] font-semibold tracking-[0.14em] uppercase">
        Havantra
      </span>
    </span>
  );
}
