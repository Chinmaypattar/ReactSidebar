import React, { Component } from "react";
import Layout from "../../components/SideBar/Layout";
import Button from "@mui/material/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CommonCard from "../../components/CommoCard/CommonCard";
import AccordionComp from "../../components/Accordion/Accordion";
import Loader from "../../components/Loader/Loader";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";
import {
  EnhancedTableHead,
  getComparator,
  stableSort,
} from "../../components/TableComponent/TableComponent";
import './Cluster.scss'
import { BsThreeDotsVertical } from "react-icons/bs";
import { CLUSTER_DETAILS_PATH } from "../../Router/PathConst";

export default class Cluster extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true, clusterList: [],   order: "desc",
    orderBy: "",
    rowsPerPage: 20,
    page: 0, };
  }
  componentDidMount() {
    this.setState({ clusterList: data });
  }
  addCluster = () => {
    // alert("add");
    this.props.history.push("/cluster/add");
  };
  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  };
  handleChangeRowsPerPage = (event) => {
    this.setState({ page: 0, rowsPerPage: parseInt(event.target.value, 10) });
  };
  handleRequestSort = (event, property) => {
    const { order, orderBy } = this.state;
    const isAsc = orderBy === property && order === "asc";

    this.setState({ order: isAsc ? "desc" : "asc", orderBy: property });
  };
  render() {
    const { order, orderBy, rowsPerPage, page, clusterList, loader } =
      this.state;
    console.log("clusterList", clusterList.length);
    return (
      <Layout title="Cluster" {...this.props}>
        <div
          className="text_color cluster-main"
          style={{ paddingTop: "5px", marginBottom: "5px" }}
          
        >
          <div className="row ">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                style={{ marginBottom: "5px", textTransform: "none" }}
                variant="contained"
                startIcon={<AddIcon />}
                onClick={this.addCluster}
              >
                Create Cluster
              </Button>
              {/* <Button style={{ textTransform: "none" }} variant="outlined" startIcon={<DeleteOutlineIcon />}>
                Delete Cluster
              </Button> */}
            </div>
          </div>
          <div className="row ">
            <div className="col-md-12">
              <CommonCard customClass="p-2 py-4">
                <div className="text-left mb-3">
                  <input
                    type="search"
                    placeholder="Search By ID,Name"
                    className="input-boxes"
                  />
                </div>

                <>
                  {loader ? (
                    <Loader />
                  ) : data && data.length > 0 ? (
                    <>
                      <TableContainer id="tableDiv">
                        <Table
                          sx={{
                            minWidth: 750,
                            borderCollapse: "separate",
                          }}
                          aria-labelledby="tableTitle"
                        >
                          <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={this.handleRequestSort}
                            rowCount={data.length}
                            headCells={headCells}
                            textColor='#ACACAC'
                          />

                          <TableBody className="table Table">
                            {stableSort(data, getComparator(order, orderBy))
                              .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                              )
                              .map((row, index) => {
                                console.log();
                                return (
                                  <TableRow hover tabIndex={-1} key={index}>
                                    <TableCell
                                      className="id"
                                      align="start"
                                      onClick={()=>this.props.history.push(`${CLUSTER_DETAILS_PATH}/${row.id}`,row)}
                                    >
                                      {row.id}
                                    </TableCell>
                                    <TableCell align="start">
                                    chinmay
                                    </TableCell>
                                    <TableCell style={{width:'20%'}} align="start">
                                      {row.description}
                                    </TableCell>
                                    <TableCell align="start">
                                      {row.created}
                                    </TableCell>
                                    <TableCell align="start">
                                      {row.updated}
                                    </TableCell>
                                    <TableCell   className="id" align="start">
                                      {row.scale}
                                    </TableCell>{" "}
                                    <TableCell   className="id" align="start">
                                      {row.url}
                                    </TableCell>
                                    <TableCell   className="id" align="start">
                                      {row.prop}
                                    </TableCell>
                                    <TableCell align="start">
                                      {row.status}
                                    </TableCell>
                                    <TableCell>
                                    <BsThreeDotsVertical className="sideBar-icons"/>
                                    </TableCell>
                                  </TableRow>
                                );
                              })}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <TablePagination
                        rowsPerPageOptions={[20, 40, 60, 80, 100]}
                        component="div"
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={this.handleChangePage}
                        onRowsPerPageChange={this.handleChangeRowsPerPage}
                        showLastButton={true}
                        showFirstButton={true}
                      />
                    </>
                  ) : (
                    <p className="text-center">No data Found</p>
                  )}
                </>
              </CommonCard>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const headCells = [
  {
    id: "id",
    numeric: true,
    disablePadding: false,
    label: "Cluster ID",
    sorting:true
  },

  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "Name",
    sorting:true
  },
  {
    id: "description",
    numeric: true,
    disablePadding: false,
    label: "Description",
  },
  {
    id: "created",
    numeric: true,
    disablePadding: false,
    label: "Created",
    sorting:true
  },
  {
    id: "updated",
    numeric: true,
    disablePadding: false,
    label: "Updated",
    sorting:true
  },
  {
    id: "scale",
    numeric: true,
    disablePadding: false,
    label: "Scale",
  },
  {
    id: "url",
    numeric: true,
    disablePadding: false,
    label: "Endpoints",
  },
  {
    id: "prop",
    numeric: true,
    disablePadding: false,
    label: "Properties",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "",

    numeric: true,
    disablePadding: false,
    label: "Action",
  },
];

const data = [
  {
    id: "5cd1a00d-8e69",
    name: "dev-test",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    created: "Feb 1, 2022, 4:30 PM",
    updated: "June 1, 2022, 4:30 PM",
    scale: "ScaleData 02",
    url: "https://csc...",
    prop: "Prop1,...",
    status: "Pending",
  },
];
