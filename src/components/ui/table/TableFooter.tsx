'use client';

import { cn } from '@/lib/utils';
import { ReactNode, HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLTableSectionElement> & {
  children?: ReactNode;
};

export default function TableFooter({ className, children, ...props }: Props) {
  return (
    <tfoot
      className={cn(
        'bg-primary text-primary-foreground font-medium',
        className
      )}
      {...props}
    >
      {children}
    </tfoot>
  );
}
