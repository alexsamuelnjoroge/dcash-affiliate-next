'use client';

import { Button } from '@/components/ui/button';
import { AvatarRoot, AvatarImage, AvatarFallback } from '@/components/Avatar';
import { Input } from '@/components/input';
import {
  PaginationRoot,
  PaginationPage,
  PaginationPrev,
  PaginationNext,
  PaginationEllipsis,
  PaginationList,
} from '@/components/pagination';
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
  TableCaption,
  TableFooter,
} from '@/components/table';
import {
  DropdownMenu,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownCheckboxItem,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownSeparator,
  DropdownSubTrigger,
  DropdownSubContent,
  DropdownLabel,
} from '@/components/DropdownMenu';
import { useState } from 'react';

export default function TestComponentsPage() {
  const [page, setPage] = useState(1);

  return (
    <div className="space-y-10 p-8">

      {/* Buttons */}
      <div className="space-x-2">
        <Button>Default</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Destructive</Button>
      </div>

      {/* Avatar */}
      <div className="flex space-x-4">
        <AvatarRoot className="w-12 h-12 border">
          <AvatarImage src="/avatar.png" alt="Avatar" />
          <AvatarFallback>AS</AvatarFallback>
        </AvatarRoot>
      </div>

      {/* Input */}
      <Input placeholder="Type something..." />

      {/* Pagination */}
      <PaginationRoot count={10} perPage={1} page={page} siblingCount={1}>
        <PaginationList>
          <PaginationPrev onClick={() => setPage((p) => Math.max(1, p - 1))} />
          <PaginationPage page={1} isActive={page === 1} onClick={() => setPage(1)} />
          <PaginationEllipsis />
          <PaginationPage page={2} isActive={page === 2} onClick={() => setPage(2)} />
          <PaginationNext onClick={() => setPage((p) => Math.min(10, p + 1))} />
        </PaginationList>
      </PaginationRoot>

      {/* Table */}
      <Table>
        <TableCaption>A simple table caption.</TableCaption>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableHeader>Alex Samuel</TableHeader>
            <TableCell>alex@example.com</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>1</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      {/* Dropdown */}
      <DropdownMenu>
        <DropdownTrigger asChild>
          <Button>Open Dropdown</Button>
        </DropdownTrigger>

        <DropdownContent className="border p-2 w-56 bg-white">
          <DropdownLabel>Actions</DropdownLabel>
          <DropdownItem>Profile</DropdownItem>
          <DropdownCheckboxItem>Subscribe</DropdownCheckboxItem>
          <DropdownSeparator />
          <DropdownRadioGroup value="option1">
            <DropdownRadioItem value="option1">Option 1</DropdownRadioItem>
            <DropdownRadioItem value="option2">Option 2</DropdownRadioItem>
          </DropdownRadioGroup>
          <DropdownSubTrigger>More</DropdownSubTrigger>
          <DropdownSubContent>
            <DropdownItem>Sub-item 1</DropdownItem>
            <DropdownItem>Sub-item 2</DropdownItem>
          </DropdownSubContent>
        </DropdownContent>
      </DropdownMenu>

    </div>
  );
}


