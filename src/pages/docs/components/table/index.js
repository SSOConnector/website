import React from 'react';
import './index.scss';

class Table extends React.Component {
  render() {
    const headers = this.props.headers;
    const data = this.props.data;

    /**
     * headers -> [header1, header2, header3]
     * data -> [
     *  ["value1", "value2", "value3"]
     * ]
     */

    const headerJsx = [];
    for(let idx in headers) {
      const header = headers[idx];
      headerJsx.push(<th key={idx}>{header}</th>);
    }

    const tableContent = [];
    for(let idx in data) {
      const rowData = data[idx];
      const rowJsx = [];
      for(let rowIdx in rowData) {
        rowJsx.push(<td key={rowIdx}>{rowData[rowIdx]}</td>)
      }
      tableContent.push(<tr key={idx}>{rowJsx}</tr>)
    }
    return (
      <div className="table-content">
        <div className="table-name">{this.props.name}</div>
        <table>
          <tbody>
            <tr>
              {headerJsx}
            </tr>
            {tableContent}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
