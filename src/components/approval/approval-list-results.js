/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */

import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';

export const ApprovalListResults = ({ approvals, ...rest }) => {
  const [selectedApprovalIds, setSelectedApprovalIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);


 
  
  const handleSelectAll = (event) => {
    let newSelectedApprovalIds;

    if (event.target.checked) {
      newSelectedApprovalIds = approvals.map((approval) => approval.id);
    } else {
      newSelectedApprovalIds = [];
    }

    setSelectedApprovalIds(newSelectedApprovalIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedApprovalIds.indexOf(id);
    let newSelectedApprovalIds = [];

    if (selectedIndex === -1) {
      newSelectedApprovalIds = newSelectedApprovalIds.concat(selectedApprovalIds, id);
    } else if (selectedIndex === 0) {
      newSelectedApprovalIds = newSelectedApprovalIds.concat(selectedApprovalIds.slice(1));
    } else if (selectedIndex === selectedApprovalIds.length - 1) {
      newSelectedApprovalIds = newSelectedApprovalIds.concat(newSelectedApprovalIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedApprovalIds = newSelectedApprovalIds.concat(
        selectedApprovalIds.slice(0, selectedIndex),
        selectedApprovalIds.slice(selectedIndex + 1)
      );
    }

    setSelectedApprovalIds(newSelectedApprovalIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const optionMenu = document.querySelector("select-menu"),
  selectBtn = optionMenu.querySelector("select-btn"),
  options = optionMenu.querySelector("options"),
  sBtn_text = options.querySelector("sBtn_text");
  
  selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
  
   options.forEach(option => {
      
      option.addEventListener("click", () => {
          let selectedOption = option.querySelector(".option-text").innerText;
          sBtn_text.innerText = selectedOption;
          
  
          optionMenu.classList.remove("active")
      })
  })



  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedApprovalIds.length === approvals.length}
                    color="primary"
                    indeterminate={
                      selectedApprovalIds.length > 0
                      && selectedApprovalIds.length < approvals.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  ID
                </TableCell>
                <TableCell>
                  Approval
                </TableCell>
                <TableCell>
                  Location
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Request date
                </TableCell>
                <TableCell>
                  Confirmations
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {approvals.slice(0, limit).map((approval) => (
                <TableRow
                  hover
                  key={approval.id}
                  selected={selectedApprovalIds.indexOf(approval.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedApprovalIds.indexOf(approval.id) !== -1}
                      onChange={(event) => handleSelectOne(event, approval.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={approval.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(approval.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {approval.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {approval.email}
                  </TableCell>
                  <TableCell>
                    {`${approval.address.city}, ${approval.address.province}`}
                  </TableCell>
                  <TableCell>
                    {approval.phone}
                  </TableCell>
                  <TableCell>
                    {format(approval.createdAt, 'dd/MM/yyyy')}
                  </TableCell>
                  <TableCell>

                  {/* <link rel="stylesheet"
type="text/css"
href="./src/theme/style.css"> */}

                    <div className="select-menu" >
                      <div className="select-btn">
                     <span className="sBtn-text"> Appointments Conclusion </span>
                     {/* < i className="bx bx-chevron-down"></i> */}
                     </div>
                     
                     <ul className="options">
                      <li className="option">
                        {/* <i className="bx bxl-processing-triangle"
style="color: #ffd800;"></i> */}
                        <span className="option-text">In Process</span>
                      </li>
                      <li className="option">
                        {/* <i className="bx bxl-rejected-square"
style="color: #ff0000;"></i> */}
                        <span className="option-text">Rejection</span>
                      </li>
                      <li className="option">
                        {/* <i className="bx bxl-approved-circle"
style="color: #7fff00;"></i> */}
                        <span className="option-text">Approval</span>
                      </li>
                      </ul>
                      </div>
                      <script src="./script.js"></script>
                      {/* </link> */}
                
               
                      </TableCell>
                      

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination 
      
        component="div"
        count={approvals.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

ApprovalListResults.propTypes = {
  approvals: PropTypes.array.isRequired
};
