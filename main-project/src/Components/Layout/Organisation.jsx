import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";


const Organisation = ({ orgData }) => {
  const columns = [
    {
      field: "name",
      headerName: (
        <h1 className=" text-base font-bold text-shadow-[0_4px_3px_#000] text-white ">
          Organisation Name
        </h1>
      ),
      width: 350,
      hideable: false,
      renderCell: (params) => (
        <div className="flex items-center  text-white ">
          <img
            src={params.row.image_url}
            alt={params.row.name}
            className="w-20 h-20  mr-8 object-contain"
            style={{ objectPosition: "center" }}
          />
          <span>{params.row.name}</span>
        </div>
      ),
    },
    {
      field: "description",
      headerName: (
        <h1 className=" text-base font-bold text-shadow-[0_4px_3px_#000] text-white ">
          Description
        </h1>
      ),
      width: 400,
      renderCell: (params) => (
        <div className=" text-white ">{params.value}</div>
      ),
    },
    {
      field: "num_projects",
      headerName: (
        <h1 className=" text-base font-bold text-shadow-[0_4px_3px_#000] text-white ">
          Total Projects
        </h1>
      ),
      width: 150,
      hideable: false,
      renderCell: (params) => (
        <div className=" text-white ">{params.value}</div>
      ),
    },
    {
      field: "technologies",
      headerName: (
        <h1 className=" text-base font-bold text-shadow-[0_4px_3px_#000] text-white ">
          Technologies
        </h1>
      ),
      width: 400,
      renderCell: (params) => (
        <div className=" text-white ">{params.value.join(", ")}</div>
      ),
    },
    {
      field: "url",
      headerName: (
        <h1 className=" text-base font-bold text-shadow-[0_4px_3px_#000] text-white  ">
          Visit Organization
        </h1>
      ),
      width: 150,
      renderCell: (params) => (
        <a
          href={params.row.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Visit
        </a>
      ),
    },
  ];

  return (
    <div className="w-full bg-gray-900 text-white min-h-screen py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">
          Google Summer of Code Organizations
        </h1>

      </div>
      <div className="mx-4 text-4xl text-white ">
        <DataGrid
          rows={orgData}
          columns={columns}
          pageSize={10}
          rowHeight={100}
          rowsPerPageOptions={[10, 25, 50, 100]}
          pagination
          autoHeight
          disableSelectionOnClick
          stickyHeader
          className="bg-footer  rounded-md"
        />
      </div>
    </div>
  );
};

export default Organisation;
