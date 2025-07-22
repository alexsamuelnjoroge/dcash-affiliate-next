'use client';

import { cn } from '@/lib/utils';
import { buttonVariants } from './buttonVariants';
import { ButtonHTMLAttributes, ReactNode } from 'react';

import type { Variant, Size } from './buttonVariants';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  builders?: unknown[]; // Replace `unknown` with proper type if needed
  children?: ReactNode;
};

export default function Button({
  variant = 'default',
  size = 'default',
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  builders = [],
  children,
  ...props
}: Props) {
  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}