import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import {userRows} from './alluserdata'
import { useState } from 'react';
import './allusers.css'
export default function DataGridDemo() {

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'کاربر',
      headerName: 'کاربر',
      width: 200,
      renderCell: (params) => {
        return (
          <p  className="link my-3">
            <div className='userListUser'>
              <img src={params.row.avatar} className="userListImg" />
              {params.row.username}
            </div>
          </p>
        )
      }
    },
    {
      field: 'ایمیل',
      headerName: 'ایمیل',
      width: 200
    },
    {
      field: 'وضعیت',
      headerName: 'وضعیت',
      width: 120
    },
    {
      field: 'مقدار',
      headerName: 'مقدار',
      width: 160
    }, 
    {
      field: '/',
      headerName: '/',
      width: 150,
      renderCell: (params) => {
        return (
          <>
        
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => userDelete(params.row.id)}
            />
          </>
        )
      }
    }
  ]
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  const [userDatas, setUserDatas] = useState(userRows)
  const userDelete = userID  => {
    setUserDatas(userDatas.filter(user => user.id != userID))
  }

  return (
<div className='div-asli-user'>
  <div className="title-user-div">
    <div className='title-user' >
      <h4 className='py-5 '>اخرین کاربران عضو شده + خرید و فروش</h4>
    </div>
  </div>
    
    <Box className='box-data mt-5 ' sx={{ height:670, width: '100%' }}>
      <DataGrid
        rows={userDatas}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        className='data-grid'
      />
    </Box>
    <br />
  </div>
  );
}
