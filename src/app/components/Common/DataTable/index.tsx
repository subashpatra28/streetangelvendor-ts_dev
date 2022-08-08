import { useEffect, useState, Fragment } from "react";
import { Row, Col, Table } from "reactstrap";
import Columns from "./Columns";
import Rows from "./Rows";
import Pagination from "./Pagination";
import Filter from "./Filter";
import PageSize from "./PageSize";
import Counting from "./Counting";
import { like, resolveObjProp } from "./utils";

const DataTable = (props: $TSFixMe) => {
  const [dataFiltered, setDataFiltered] = useState(props.data ?? []);
  const [pageSize, setPageSize] = useState(props.pageSize ?? 10);
  const [maxPage, setMaxPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentRows, setCurrentRows] = useState(props.data?.slice(0, 10));
  const [filter, setFilter] = useState("");
  const [currentSortedCol, setCurrentSortedCol] = useState({
    idx: 0,
    sortedBy: 1,
  });
  let data1 = props.data.sort(function (a: $TSFixMe, b: $TSFixMe) {
    return a.id - b.id;
  });
  const data = data1 || [];
  const columns = props.columns;
  const onClickRow = props.onClickRow || null;

  const handlePageSize = (val: $TSFixMe) => {
    setPageSize(val);
    setMaxPage(Math.ceil(dataFiltered.length / val));
    setCurrentPage(1);
    handleDataFiltered(1, val, dataFiltered);
  };

  const handleFilter = (val: $TSFixMe) => {
    setFilter(val);

    const query =
      "%" + val.toLowerCase().replace(new RegExp(" ", "g"), "%") + "%";

    let results = [];
    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      if (val === "") {
        results.push(row);
        continue;
      }

      const searchRow = columns.map((col: $TSFixMe) => {
        if (col.data) {
          return resolveObjProp(col.data, row);
        } else {
          return "";
        }
      });
      const cols = Object.values(searchRow).join(" ");
      if (like(cols, query)) {
        results.push(row);
      }
    }
    setDataFiltered(results);
    setMaxPage(Math.ceil(results.length / pageSize));
    setCurrentPage(1);
    handleDataFiltered(1, pageSize, results);
  };

  const handleCurrentPage = (page: $TSFixMe) => {
    setCurrentPage(page);
    handleDataFiltered(page, pageSize, dataFiltered);
  };

  const handleDataFiltered = (
    currentPage: $TSFixMe,
    pageSize: $TSFixMe,
    dataFiltered: $TSFixMe
  ) => {
    const a = (currentPage - 1) * pageSize;
    const z = currentPage * pageSize;
    setCurrentRows(dataFiltered.slice(a, z));
  };

  const sortData = (i: number, nextSort: number, passedData: [] = []) => {
    const data = passedData.length
      ? [
          ...passedData.sort((a: $TSFixMe, b: $TSFixMe) => {
            const col = columns[i];
            let keyA = "",
              keyB = "";

            if (col.data) {
              keyA = resolveObjProp(col.data, a);
              keyB = resolveObjProp(col.data, b);
            } else {
              keyA = col.format(a);
              keyB = col.format(b);
            }

            if (keyA < keyB) return -nextSort;
            if (keyA > keyB) return nextSort;
            return 0;
          }),
        ]
      : [
          ...dataFiltered.sort((a: $TSFixMe, b: $TSFixMe) => {
            const col = columns[i];
            let keyA = "",
              keyB = "";

            if (col.data) {
              keyA = resolveObjProp(col.data, a);
              keyB = resolveObjProp(col.data, b);
            } else {
              keyA = col.format(a);
              keyB = col.format(b);
            }

            if (keyA < keyB) return -nextSort;
            if (keyA > keyB) return nextSort;
            return 0;
          }),
        ];
    return data;
  };

  const handleSortColumn = (i: number, nextSort: number) => {
    let data = sortData(i, nextSort);
    setDataFiltered(data);
    setCurrentRows(data.slice(0, 10));
    setCurrentPage(1);
    setCurrentSortedCol({ idx: i, sortedBy: nextSort });
  };

  useEffect(() => {
    console.log("data table changes", currentSortedCol);
    let data = sortData(
      currentSortedCol.idx,
      currentSortedCol.sortedBy,
      props.data
    );
    setMaxPage(Math.ceil(data.length / (pageSize ?? props.pageSize ?? 10)));
    setDataFiltered([...data]);
    const a = (currentPage - 1) * pageSize;
    const z = currentPage * pageSize;
    setCurrentRows([...data.slice(a, z)]);
    return () => {};
  }, [props.data]);

  return (
    <Fragment>
      <Row className="mb-2">
        <Col sm={12} md={6}>
          <PageSize pageSize={pageSize} handlePageSize={handlePageSize} />
        </Col>
        <Col sm={12} md={6} className="pageEnd">
          <Filter filter={filter} handleFilter={handleFilter} />
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <Table
            className="imptab imptab2"
            bordered={props.bordered}
            hover={props.hover}
            borderless={props.borderless}
            responsive={props.responsive}
          >
            <Columns
              columns={columns}
              currentSortedCol={currentSortedCol}
              handleSortColumn={handleSortColumn}
            />
            <Rows
              columns={columns}
              currentRows={currentRows}
              onClickRow={onClickRow}
            />
          </Table>
        </Col>
      </Row>

      <Row>
        <Col xs="12" md="3" className="tableCol">
          <Counting
            currentPage={currentPage}
            pageSize={pageSize}
            currentMax={dataFiltered.length}
          />
        </Col>
        <Col xs="12" md="9" className="text-right">
          <Pagination
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
            maxPage={maxPage}
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default DataTable;
