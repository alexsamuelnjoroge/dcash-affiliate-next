'use client';

import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';

type Props = HTMLAttributes<HTMLTableCaptionElement> & {
  children: ReactNode;
};

export default function TableCaption({ className, children, ...props }: Props) {
  return (
    <caption
      className={cn('text-muted-foreground mt-4 text-sm', className)}
      {...props}
    >
      {children}
    </caption>
  );
}
