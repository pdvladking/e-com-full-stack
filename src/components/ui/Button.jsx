"use client";

const base = 
  "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus-offset-2 disabled:cursor-not-allowed whitespace-nowrap";

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-base",
    lg: "h-12 px-6 text-lg",
  };

  const variants = {
    primary:
    "bg-yellow-600 text-white font-semibold shadow-md transition-transform hover:scale-110 hover:bg-yellow-700 focus:ring-2",
    secondary:
    "bg-transparent border-2 border-yellow-500 text-yellow-700 font-semibold transition-colors hover:bg-yellow-500 hover:text-white focus:ring-2",
    danger:
    "bg-red-600 text-white font-semibold shadow-md transition-transform hover:scale-110 hover:bg-red-700 focus:ring-2",
    success:
    "bg-green-600 text-white font-semibold shadow-md transition-transform hover:scale-110 hover:bg-green-700 focus:ring-2",
    ghost:
    "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-2",
  };

  export default function Button({
    children,
    variant = "primary",
    size = "md",
    type = "button",
    onClick,
    targetId,
    disabled = false,
    loading = false,
    fullWidth = false,
    leftIcon = null,
    rightIcon = null,
    className = "",
    ariaLabel,
  })  {
    const classes = [
      base,
      sizes[size] || sizes.md,
      variants[variant] || variants.primary,
      fullWidth ? "w-full" : "",
      className,
    ]
    .filter(Boolean)
    .join(" ");

    const handleClick = (e) => {
      if (onClick) onClick(e);
      if (targetId) {
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    
    return (
      <button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      className={classes}
      >
        {leftIcon ? <span className="mr-2 inline-flex">{leftIcon}</span> : null}
        {loading ? "Loading ..." : children}
        {rightIcon ? <span className="ml-2 inline-flex">{rightIcon}</span> : null}
      </button>
    );
  }