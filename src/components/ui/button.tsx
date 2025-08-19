import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-lg hover:-translate-y-0.5",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:shadow-md",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  target?: "_blank" | "_self"; // Support for target="_blank"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, target, ...props }, ref) => {
    const buttonClassName = cn(buttonVariants({ variant, size, className }));

    const createContent = (children: React.ReactNode) => (
      <span className="flex items-center justify-center w-full h-full">
        <span className="flex items-center justify-center w-full transition-all duration-300 ease-in-out transform group-hover:-translate-y-[150%] group-hover:opacity-0">
          {children}
        </span>
        <span className="absolute flex items-center justify-center w-full transition-all duration-300 ease-in-out transform translate-y-[150%] group-hover:translate-y-0 group-hover:opacity-100">
          {children}
        </span>
      </span>
    );

    // If asChild is true, apply button styles to the child element
    if (asChild) {
      const child = React.Children.only(props.children as React.ReactElement);
      const childWithProps = child as React.ReactElement<{ 
        className?: string; 
        children?: React.ReactNode 
      }>;
      
      return React.cloneElement(
        childWithProps,
        {
          className: cn(
            buttonClassName,
            childWithProps.props.className
          ),
        },
        createContent(childWithProps.props.children)
      );
    }

    if (href) {
      if (target === "_blank") {
        // Open external link in a new tab (with animation)
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClassName}
          >
            {createContent(props.children)}
          </a>
        );
      } else {
        // Use Next.js <Link> for internal navigation (with animation)
        return (
          <Link
            href={href}
            className={buttonClassName}
          >
            {createContent(props.children)}
          </Link>
        );
      }
    }

    // Default to a regular <button> if no href (with animation)
    return (
      <button
        className={buttonClassName}
        ref={ref}
        {...props}
      >
        {createContent(props.children)}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
