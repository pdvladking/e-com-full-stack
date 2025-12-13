"use client";

const base = 
"block rounded-md border font-medium transition-colors focus:outline-none focus:ring-2 focus-offset-2 disabled:cursor-not-allowed";

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-12 px-6 text-lg",
};

const variants = {
  default: "border-gray-300 focus:ring-yellow-500",
  error: "border-red-500 focus:ring-red-500",
  success: "border-green-500 focus:ring-green-500",
};

export default function Input({
  type = "text",
  size = "md",
  variant = "default",
  placeholder,
  value,
  onChange,
  disabled = false,
  fullWidth = false,
  leftIcon = null,
  rightIcon = null,
  className = "",
  ariaLabel,
  errorMessage,
}) {
  const classes = [
    base,
    sizes[size] || sizes.md,
    variants[variant] || variants.default,
    fullWidth ? "w-full" : "",
    className,
  ]
  .filter(Boolean)
  .join(" ");

  return (
    <div className="flex flex-col">
      <div className="relative flex items-center">
        {leftIcon ? (
        <span className="absolute left-3 inline-flex text-gray-500">
        {leftIcon}
        </span>
        ) : null}

        <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        aria-label={ariaLabel}
        className={`${classes} ${
          leftIcon ? "pl-10" : ""
        } ${rightIcon ? "pr-10" : ""}`}
        />

        {rightIcon ? (
          <span className="absolute right-3 inline-flex text-gray-500">
            {rightIcon}
          </span>
        ) : null}
      </div>

      {errorMessage && (
        <span className="mt-1 text-sm text-red-600">{errorMessage}</span>
      )}
    </div>
  );
}