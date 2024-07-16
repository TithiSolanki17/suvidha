// 'use client';

// import '../donor/stylesheet/style.css';
import React, { useMemo, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Pagination } from "@nextui-org/pagination";
import { users } from "../donors/data/data";
import ImagesSliderDemoAbout from "../../../components/imagedonor";
import { FadeTextDemo } from "@/components/textdonor";

export default function Page() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page]);

  return (
    <main>
      <ImagesSliderDemoAbout />
      <div className='m-10'>
        {/* <div className='m-0 py-11 px-4'><FadeTextDemo/></div> */}
        <div className="m-0 py-11 px-4 text-wrap text-center animate-fadeIn">
          &quot;Your generosity fuels our mission to make a lasting impact. As a donor, you play a crucial role in helping us bring positive change to the communities we serve. Every contribution, no matter the size, helps us provide essential resources, support innovative programs, and create opportunities for those in need. Join us in our journey to make a difference and be a part of something bigger. Together, we can achieve extraordinary things. Thank you for your support!&quot;
        </div>
        <div className='flex justify-center my-20 sticky top-0 text-center text-4xl z-10 bg-blue-200 border rounded-lg'>
          <b>Our Donors</b>
        </div>
        <div className='container mx-auto border border-division border-black my-10 md:my-35 z-10'>
          <div className="text-sm text-gray-600 flex justify-center border border-black">
            Showing {items.length} of {users.length} results ({page} of {pages} pages)
          </div>
          <Table
            fullWidth
            isStriped
            aria-label="Example table with client side pagination"
            bottomContent={
              <div className="flex-col justify-items-center m-4 text-center">
                <Pagination
                  loop
                  classNames={{
                    wrapper: "gap-4 overflow-visible h-8 rounded",
                    cursor: "bg-gradient-to-b shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold",
                    prev: "text-black rounded-full border p-2",
                    next: "text-black rounded-full border p-2",
                    item: "rounded-full border border-black px-4 text-black hover:bg-neutral-300 hover:font-bold transition duration-150 delay-150 ease-in-out hover:px-5 hover:ease-in static"
                  }}
                  isCompact
                  showShadow
                  color="secondary"
                  page={page}
                  total={pages}
                  initialPage={3}
                  onChange={(page) => setPage(page)}
                  className=" rounded p-3 flex justify-center flex-wrap gap-x-10"
                />
              </div>
            }
            classNames={{
              wrapper: "min-h-[222px]",
            }}
          >
            <TableHeader>
              <TableColumn className="bg-slate-500" key="name">NAME</TableColumn>
              <TableColumn className="bg-slate-500" key="role">AMOUNT</TableColumn>
            </TableHeader>
            <TableBody items={items}>
              {(item) => (
                <TableRow key={item.name} className="pointer-events-none overflow-scroll justify-end">
                  <TableCell className='text-center'>{item.name}</TableCell>
                  <TableCell className='text-center'>{item.amount}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
};
