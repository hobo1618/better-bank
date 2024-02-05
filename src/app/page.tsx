import { unstable_noStore as noStore } from "next/cache";

import data from "@/dummy-data/verbal.json"
import { type Question } from "@/app/_components/questions";
import { ModeToggle } from "@/components/mode-toggle";
import { columns } from "@/app/_components/columns";
import { DataTable } from "./_components/data-table";

async function getData(): Promise<Question[]> {
    const res = data as Question[];
    return res
}

export default async function Home() {
    noStore();

    const data = await getData();

    return (
        <main className="relative">
            <span className="fixed top-3 right-3">
                <ModeToggle />
            </span>
            <DataTable columns={columns} data={data}/>

        </main>
    );
}

            // <Questions questions={data as Question[]} />
