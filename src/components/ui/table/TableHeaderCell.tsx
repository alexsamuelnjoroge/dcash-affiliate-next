'use client';

import { cn } from '@/lib/utils';
import { ReactNode, ThHTMLAttributes } from 'react';

type Props = ThHTMLAttributes<HTMLTableCellElement> & {
  children?: ReactNode;
};

export default function TableHeaderCell({ className, children, ...props }: Props) {
  return (
    <th
      className={cn(
        'text-muted-foreground h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0',
        className
      )}
      {...props}
    >
      {children}
    </th>
  );
}
