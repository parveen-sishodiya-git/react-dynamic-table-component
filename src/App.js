import React from 'react';
import logo from './logo.svg';
import './App.css';
import DynamicTable from './components/tableComponents/DynamicTable';
import tableColumns from './components/tableComponents/tableColumns'


function App() {

  return (
    <div className="App">
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-6">
            <DynamicTable cols={tableColumns.defaultCols} />
          </div>
          <div className="col-6">
            <DynamicTable tableClass="table table-dark" cols={tableColumns.defaultCols} excludeColumns={["company", "hello"]} ex="hi" />
          </div>
          <div className="col-6">
            <DynamicTable tableClass="table table-striped" cols={tableColumns.defaultCols} excludeColumns={["company", "hello", "Id"]} appendColumns={["DOB", "Age"]} />
          </div>
          
          <div className="col-6">
            <DynamicTable cols={["Student id","Student name","Student Age","Student class"]} excludeColumns={["company", "hello", "Id"]} appendColumns={["DOB", "Age"]} />
          </div>
          <div className="col-12">
            <DynamicTable theadClass="thead-dark" cols={tableColumns.col7myCustom} excludeColumns={["company", "hello", "Id"]} appendColumns={["DOB", "Age"]} />
          </div>
          <div className="col-6">
            <DynamicTable tableClass="table-striped table-dark" cols={["Hello1","Hello2","Hello3","Hello4"]} excludeColumns={["company", "hello", "Id"]} appendColumns={[]} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
