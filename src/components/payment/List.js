import React from 'react'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Button  } from '@mui/material';


function List({ employees, handleEdit, handleDelete }) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null
    });

    return (
        <div className='contain-table' >
            
            <Table className='striped-table'>
                <TablePagination>
                    <TableHead>
                    <TableRow>
                        <TableCell>No.</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Payment</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell colSpan={2}
className="text-center">
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                </TablePagination>
                <TableBody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <TableRow key={employee.id}>
                                <TableCell>{i + 1}</TableCell>
                                <TableCell>{employee.firstName}</TableCell>
                                <TableCell>{employee.lastName}</TableCell>
                                <TableCell>{employee.email}</TableCell>
                                <TableCell>{formatter.format(employee.salary)}</TableCell>
                                <TableCell>{employee.date} </TableCell>
                                <TableCell className="text-right">
                                    <Button
                                        onClick={() => handleEdit(employee.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </Button>
                                </TableCell>
                                <TableCell className="text-left">
                                    T
                                    <Button button
                                        onClick={() => handleDelete(employee.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </Button >
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={7}>No Employees</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

export default List