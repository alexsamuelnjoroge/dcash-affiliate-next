'use client';

import { cn } from '@/lib/utils';
import { TableHTMLAttributes, ReactNode } from 'react';

type Props = TableHTMLAttributes<HTMLTableElement> & {
  children: ReactNode;
};

export default function Table({ className, children, ...props }: Props) {
  return (
    <div className="relative w-full overflow-auto">
      <table
        className={cn('w-full caption-bottom text-sm', className)}
        {...props}
      >
        {children}
      </table>
    </div>
  );
}
