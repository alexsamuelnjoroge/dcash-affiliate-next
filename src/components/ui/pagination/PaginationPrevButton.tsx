'use client';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button/buttonVariants';
import { ChevronLeft } from 'lucide-react';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  className?: string;
};

export default function PaginationPrevButton({
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant: 'ghost' }), 'gap-1 pl-2.5', className)}
      {...props}
    >
      {children ?? (
        <>
          <ChevronLeft className="h-4 w-4" />
          <span>Previous</span>
        </>
      )}
    </button>
  );
}
