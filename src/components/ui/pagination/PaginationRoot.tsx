'use client';

import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

type Props = {
  count: number;
  perPage?: number;
  page: number;
  siblingCount?: number;
  onPageChange?: (page: number) => void;
  className?: string;
  children?: ReactNode; // <-- Add this line
};

export default function PaginationRoot({
  count,
  perPage = 10,
  page,
  //siblingCount,
  onPageChange,
  className,
  children, // <-- Add this line
}: Props) {
  const totalPages = Math.ceil(count / perPage);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={cn('mx-auto flex w-full flex-col items-center', className)}>
      {children}
      {/* Optionally keep your own pagination UI below */}
      <ul className="flex gap-2">
        {pages.map((pg) => (
          <li key={pg}>
            <button
              onClick={() => onPageChange?.(pg)}
              className={cn(
                'px-3 py-1 rounded border',
                pg === page ? 'bg-indigo-600 text-white' : 'bg-white text-black'
              )}
            >
              {pg}
            </button>
          </li>
        ))}
      </ul>
    </nav>
    )};