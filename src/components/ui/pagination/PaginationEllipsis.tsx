'use client';

import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';
import { Ellipsis } from 'lucide-react';

type Props = HTMLAttributes<HTMLSpanElement>;

export default function PaginationEllipsis({ className, ...props }: Props) {
  return (
    <span
      aria-hidden="true"
      className={cn('flex h-9 w-9 items-center justify-center', className)}
      {...props}
    >
      <Ellipsis className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}
