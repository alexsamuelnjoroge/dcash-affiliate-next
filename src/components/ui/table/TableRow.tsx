'use client';

import { cn } from '@/lib/utils';
import { ReactNode, HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLTableRowElement> & {
  children?: ReactNode;
  'data-state'?: unknown;
};

export default function TableRow({ className, children, ...props }: Props) {
  return (
    <tr
      className={cn(
        'hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </tr>
  );
}
