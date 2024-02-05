"use client"
import { type ColumnDef } from "@tanstack/react-table";
import { type Question } from "./questions";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const columns: ColumnDef<Omit<
    Question,
    "correct_answer_rationale"
    | "incorrect_answer_rationales"
    | "answer_choices"
    | "correct_answer"
>>[] = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "id",
            header: "ID",
        },
        {
            accessorKey: "domain",
            header: "Domain",
        },
        {
            accessorKey: "skill",
            header: "Skill",
        },
        {
            accessorKey: "difficulty",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => {
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }}
                    >
                        Difficulty
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
        },
        {
            accessorKey: "prompt",
            header: "Prompt",
            cell: ({ row }) => {
                const prompt = row.getValue("prompt");
                const len = prompt.length;
                const preview = len > 20 ? prompt.slice(0, 20) : prompt;
                return <span>{preview}</span>;
            }
        },
        {
            id: "actions",
            cell: ({ row }) => {
                const payment = row.original

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() => navigator.clipboard.writeText(payment.id)}
                            >
                                Copy payment ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View customer</DropdownMenuItem>
                            <DropdownMenuItem>View payment details</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },

    ]


