import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "./label";
import { FieldError } from "react-hook-form";

type InputProps = React.ComponentProps<"input"> & {
  label?: string;
  error?: FieldError;
  id: string;
};

function Input({ className, type, id, label, error, ...props }: InputProps) {
  return (
    <div className="flex flex-col items-stretch gap-2">
      <Label htmlFor={id}>{label}</Label>

      <input
        type={type}
        id={id}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className,
        )}
        {...props}
      />

      {error && <div className="text-sm text-red-900">{error.message}</div>}
    </div>
  );
}

export { Input };
