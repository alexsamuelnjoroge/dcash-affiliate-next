// src/app/home/components/StatHistory.tsx

"use client";

import React, { useState } from "react";
import * as Table from "@/components/ui/table";
import * as Pagination from "@/components/ui/pagination";
import type { StatHistory } from "@/models/stat_history";

interface StatHistoryProps {
  data: StatHistory;
}

const StatHistoryComponent: React.FC<StatHistoryProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const formatDate = (dateNum: number): string => {
    const dateStr = dateNum.toString();
    const year = dateStr.slice(0, 4);
    const month = dateStr.slice(4, 6);
    const day = dateStr.slice(6, 8);

    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "KES",
    }).format(amount);
  };

  const totalItems = data.stat_history.length;
  const paginatedData = data.stat_history.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  //const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="space-y-4">
      <Table.Table className="mx-auto max-w-7xl">
        <Table.TableCaption>Statistics History</Table.TableCaption>
        {paginatedData.length > 0 && (
          <Table.TableHeader>
            <Table.TableRow>
              <Table.TableHead className="w-[150px]">Date</Table.TableHead>
              <Table.TableHead>Sign Ups</Table.TableHead>
              <Table.TableHead>Deposits</Table.TableHead>
              <Table.TableHead>Withdrawals</Table.TableHead>
              <Table.TableHead className="text-right">Revenue (KES)</Table.TableHead>
            </Table.TableRow>
          </Table.TableHeader>
        )}
        <Table.TableBody>
          {paginatedData.length > 0 ? (
            paginatedData.map((stat, i) => (
              <Table.TableRow key={i}>
                <Table.TableCell className="font-medium">
                  {formatDate(stat.date)}
                </Table.TableCell>
                <Table.TableCell>{stat.sign_ups}</Table.TableCell>
                <Table.TableCell>{stat.deposits}</Table.TableCell>
                <Table.TableCell>{stat.withdrawals}</Table.TableCell>
                <Table.TableCell className="text-right">
                  {formatCurrency(stat.revenue)}
                </Table.TableCell>
              </Table.TableRow>
            ))
          ) : (
            <Table.TableRow>
              <Table.TableCell colSpan={5} className="text-center">
                No statistics available.
              </Table.TableCell>
            </Table.TableRow>
          )}
        </Table.TableBody>
      </Table.Table>

      {totalItems > itemsPerPage && (
        <div className="flex justify-center">
          <Pagination.PaginationRoot
  count={totalItems}
  perPage={itemsPerPage}
  page={currentPage}
  onPageChange={setCurrentPage}
/>
        </div>
      )}
    </div>
  );
};

export default StatHistoryComponent;
