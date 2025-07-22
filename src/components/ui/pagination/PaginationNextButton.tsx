'use client';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button/buttonVariants';
import { ChevronRight } from 'lucide-react';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  className?: string;
};

export default function PaginationNextButton({
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant: 'ghost' }), 'gap-1 pr-2.5', className)}
      {...props}
    >
      {children ?? (
        <>
          <span>Next</span>
          <ChevronRight className="h-4 w-4" />
        </>
      )}
    </button>
  );
}


