import React from 'react';
import './index.scss';
import Table from '../table';

class ApiReference extends React.Component {

  render() {
    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const generateTableData = (propsData) => {
      if(typeof propsData === "undefined")
        return [[], []];
      let tableHeaders = [];
      let tableData = [];
      if(propsData.length > 0) {
        for(let idx in propsData[0]) {
          tableHeaders.push(capitalizeFirstLetter(idx));
        }

        for(let idx in propsData) {
          let currTableData = [];
          let dataVal = propsData[idx];
          for(let key in dataVal) {
            currTableData.push(String(dataVal[key]));
          }
          tableData.push(currTableData);
        }
      }
      return [tableHeaders, tableData];
    }

    const [bodyTableHeaders, bodyTableData] = generateTableData(this.props.body);
    const [responseTableHeaders, responseTableData] = generateTableData(this.props.response);
    const [headerTableHeaders, headerTableData] = generateTableData(this.props.headers);
    return (
      <div className="api-ref">
        <div className="api-ref-heading">{this.props.httpMethod} {this.props.endpoint}</div>
        <div className="api-ref-description">{this.props.description}</div>
        {headerTableHeaders.length > 0 && <Table name="HTTP Headers" headers={headerTableHeaders} data={headerTableData} />}
        {bodyTableHeaders.length > 0 && <Table name="Request" headers={bodyTableHeaders} data={bodyTableData} />}
        {responseTableHeaders.length > 0 && <Table name="Response" headers={responseTableHeaders} data={responseTableData} />}
      </div>
    );
  }
}

export default ApiReference;
