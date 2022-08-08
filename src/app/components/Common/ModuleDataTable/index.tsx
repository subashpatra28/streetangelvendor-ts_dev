import { useEffect, useState, Fragment } from "react";
import { Row, Col, Table } from "reactstrap";
import Columns from "./Columns";
import Rows from "./Rows";
import { like, resolveObjProp } from "./utils";
import COLORS from "../../../colors";

const DataTable = (props: $TSFixMe) => {
  const data = props.data || [];
  const columns = props.columns;
  const onClickRow = props.onClickRow || null;
  const [dataFiltered, setDataFiltered] = useState(data);
  const [pageSize, setPageSize] = useState(props.pageSize || 10);
  const [maxPage, setMaxPage] = useState(
    Math.ceil(data.length / (props.pageSize || 10))
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [currentRows, setCurrentRows] = useState(data.slice(0, 10));
  const [filter, setFilter] = useState("");
  const [currentSortedCol, setCurrentSortedCol] = useState({
    idx: -1,
    sortedBy: 0,
  });
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
  const handleDataFiltered = (currentPage: $TSFixMe, pageSize: $TSFixMe, dataFiltered: $TSFixMe) => {
    const a = (currentPage - 1) * pageSize;
    const z = currentPage * pageSize;
    setCurrentRows(dataFiltered.slice(a, z));
  };

  const handleSortColumn = (i: $TSFixMe, nextSort: $TSFixMe) => {
    const data = [
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

    setDataFiltered(data);
    setCurrentRows(data.slice(0, 50));
    setCurrentPage(1);
    setCurrentSortedCol({ idx: i, sortedBy: nextSort });
  };

  useEffect(() => {
    setDataFiltered(data);
    setCurrentRows(data.slice(0, 50));
    return () => {};
  }, [props.data]);

  return (
    <Fragment>
      <Row>
        <Col xs="12">
          <Table
            className="impModuleTab"
            hover={props.hover}
            bordered={props.bordered}
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
    </Fragment>
  );
};

export default DataTable;
