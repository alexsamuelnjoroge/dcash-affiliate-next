'use client';

import { cn } from '@/lib/utils';
import { ReactNode, TableHTMLAttributes } from 'react';

type Props = TableHTMLAttributes<HTMLTableSectionElement> & {
  children?: ReactNode;
};

export default function TableHead({ className, children, ...props }: Props) {
  return (
    <thead
      className={cn('[&_tr]:border-b', className)}
      {...props}
    >
      {children}
    </thead>
  );
}
