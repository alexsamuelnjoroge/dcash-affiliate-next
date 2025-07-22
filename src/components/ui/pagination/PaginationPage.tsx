'use client';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button/buttonVariants';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  page: number;
  isActive?: boolean;
  size?: 'default' | 'icon' | 'sm' | 'lg'; // Adjust sizes if needed
  children?: ReactNode;
};

export default function PaginationPage({
  page,
  isActive = false,
  size = 'icon',
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        buttonVariants({
          variant: isActive ? 'outline' : 'ghost',
          size,
        }),
        className
      )}
      {...props}
    >
      {children ?? page}
    </button>
  );
}
