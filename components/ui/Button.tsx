import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Link, LinkProps } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButtonProps = BaseButtonProps & HTMLMotionProps<"button"> & {
  as?: 'button';
};

type ButtonAsLinkProps = BaseButtonProps & LinkProps & {
  as: 'link';
};

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export const Button = React.forwardRef<HTMLElement, ButtonProps>((props, ref) => {
  const {
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    as = 'button',
    ...rest
  } = props;

  const baseStyles = "relative group font-black uppercase tracking-widest clip-path-button overflow-hidden transition-all duration-500 inline-flex items-center justify-center text-center";

  const sizeStyles = {
    sm: "px-5 py-2 text-[10px]",
    md: "px-8 md:px-10 py-4 md:py-5 text-sm md:text-base",
    lg: "px-10 md:px-12 py-5 md:py-6 text-base md:text-lg"
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return `bg-ikg-gold text-black hover:shadow-[0_0_30px_rgba(197,162,109,0.3)] ${className}`;
      case 'secondary':
      case 'outline':
        return `border border-white/10 text-white hover:border-ikg-gold hover:text-ikg-gold ${className}`;
      case 'ghost':
        return `text-white hover:text-ikg-gold ${className}`;
      default:
        return className;
    }
  };

  const renderInner = () => (
    <>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <>
          <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          {/* Shimmer Effect */}
          <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] group-hover:animate-shimmer" />
        </>
      )}
      {(variant === 'secondary' || variant === 'outline') && (
        <div className="absolute inset-0 bg-ikg-gold/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      )}
    </>
  );

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${getVariantStyles()}`;

  if (as === 'link') {
    const { to, onClick, ...linkProps } = rest as ButtonAsLinkProps;
    return (
      <Link
        to={to}
        onClick={onClick}
        className={combinedStyles}
        {...(linkProps as any)}
      >
        {renderInner()}
      </Link>
    );
  }

  return (
    <motion.button
      ref={ref as any}
      className={combinedStyles}
      {...(rest as HTMLMotionProps<"button">)}
    >
      {renderInner()}
    </motion.button>
  );
});

Button.displayName = 'Button';
