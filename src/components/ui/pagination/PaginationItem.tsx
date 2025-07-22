'use client';

import { cn } from '@/lib/utils';
import { LiHTMLAttributes, ReactNode } from 'react';

type Props = LiHTMLAttributes<HTMLLIElement> & {
  children?: ReactNode;
};

export default function PaginationItem({ className, children, ...props }: Props) {
  return (
    <li className={cn('', className)} {...props}>
      {children}
    </li>
  );
}
