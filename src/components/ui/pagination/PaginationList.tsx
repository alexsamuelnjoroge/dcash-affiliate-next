'use client';

import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLUListElement>;

export default function PaginationList({ className, children, ...props }: Props) {
  return (
    <ul className={cn('flex flex-row items-center gap-1', className)} {...props}>
      {children}
    </ul>
  );
}
