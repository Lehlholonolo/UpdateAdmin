import React, { useState } from 'react'
import Swal from 'sweetalert2';
// import Head from 'next/head';
import Header from '../components/payment/Header';
import List from '../components/payment/List';
import Add from '../components/payment/Add';
import Edit from '../components/payment/Edit';
import { DashboardLayout } from '../components/dashboard-layout';

import {
    Box,
    Card,
    TableRow,
    Table,
    TableBody,
    TablePagination,
    TableCell  } from '@mui/material';
import { employeesData } from '../__mocks__/payments';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Payment } from '@mui/icons-material';
function Dashboard() {

    const [employees, setEmployees] = useState(employeesData);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

    const handleEdit = (id) => {
        const [employee] = employees.filter(employee => employee.id === id);

        setSelectedEmployee(employee);
        setIsEditing(true);
    }



    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [employee] = employees.filter(employee => employee.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setEmployees(employees.filter(employee => employee.id !== id));
            }
        });
    }


    return (

        <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
             
        <TableBody>
            <TableRow>
        <div className='container'>
            {/* List */}
            {!isAdding && !isEditing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                    <List
                        employees={employees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>
        </TableRow>
       
         </TableBody>
         </Table>
       </Box>
     </PerfectScrollbar>
     <TablePagination
     component="div"
     count={Payment.length}
     onPageChange={handlePageChange}
     onRowsPerPageChange={handleLimitChange}
     Dashboard={Dashboard}
     rowsPerPage={limit}
     rowsPerPageOptions={[5, 10, 25]}/>
        </Card>
    )
}

Dashboard.getLayout = (Dashboard) => (
    <DashboardLayout>
      {Dashboard}
    </DashboardLayout>
  );
  
export default Dashboard;