'use client';

import { cn } from '@/lib/utils';
import React from 'react';

type Props = React.HTMLAttributes<HTMLSpanElement>;

export default function HintText({ className, children, ...props }: Props) {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
      {...props}
    >
      {children}
    </span>
  );
}
