import React, { Component } from 'react';


class DynamicTable extends Component {

  render() {

    let inputTableHeader = this.props.cols;
    const excludeColumns = this.props.excludeColumns;
    const appendColumns = this.props.appendColumns;
    let tableClass = "table ";
    let theadClass = this.props.theadClass;

    if(this.props.tableClass !== "" && this.props.tableClass !== undefined){
      tableClass = tableClass + this.props.tableClass;
    }

    if (excludeColumns !== undefined && excludeColumns.length !== 0) {
      inputTableHeader = this.getExcludeColumns(inputTableHeader, excludeColumns);
    }

    if (appendColumns !== undefined && appendColumns.length !== 0) {
      inputTableHeader = this.getAppendColumns(inputTableHeader, appendColumns);
    }

    //JSX table header array
    const finalJSXTableHeader = [];

    for (let finalkey in inputTableHeader) {
      finalJSXTableHeader.push(<th scope="col">{inputTableHeader[finalkey]}</th>);
    }

    return <table className={tableClass}>
      <thead className={theadClass}>
        <tr>
          {finalJSXTableHeader}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>

        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>;
  }

  //Excluding Columns
  getExcludeColumns(inputCols, excludeCols) {
    let inputTableHeader = inputCols.filter(function (name) {
      for (let key in excludeCols) {
        if (excludeCols[key].toLowerCase() === name.toLowerCase())
          return false;
      }
      return true;
    });
    return inputTableHeader;
  }

  //Appending Columns
  getAppendColumns(inputCols, appendCols) {
    let inputTableHeader = inputCols;
      for (let key in appendCols) {
        inputTableHeader.push(appendCols[key]);
      }
      return inputTableHeader;
  }


}

export default DynamicTable;


