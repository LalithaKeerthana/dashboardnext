/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";

type Props = {};
type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>
      );
    }
  },
  {
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order"
  },
  {
    accessorKey: "method",
    header: "Method"
  }
];

const data: Payment[] = [
  {
    name: "user",
    email: "user@example.com",
    lastOrder: "2nd feb 2024",
    method: "Credit Card"
  },
  
  {
    name: "user",
    email: "user@example.com",
    lastOrder: "2nd feb 2024",
    method: "Credit Card"
  },

  {
    name: "user",
    email: "user@example.com",
    lastOrder: "2nd feb 2024",
    method: "Credit Card"
  },
 
  
  {
    name: "user",
    email: "user@example.com",
    lastOrder: "2nd feb 2024",
    method: "Credit Card"
  },
  
 
];

export default function UsersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Users" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}