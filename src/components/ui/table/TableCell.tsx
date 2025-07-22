'use client';

import { cn } from '@/lib/utils';
import { TdHTMLAttributes, ReactNode } from 'react';

type Props = TdHTMLAttributes<HTMLTableCellElement> & {
  children?: ReactNode;
};

export default function TableCell({ className, children, ...props }: Props) {
  return (
    <td
      className={cn(
        'p-4 align-middle [&:has([role=checkbox])]:pr-0',
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
}
