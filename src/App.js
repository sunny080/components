import './App.css';
import { optionsList } from './array';
import { ArrowDown } from './assets';
import Cards from './Components/Cards';
import DropDownSelect from './Components/Drop';
import From from './Components/Form';
import Input from './Components/Input';
import Slider from './Components/Slider';
import Table from './Components/Tabel';
import TextAnimation from './Components/Text_Animation';
import Toggle from './Components/Toggle';
import { tableData } from './Data'

function App() {
  const columns = [
    {field:'id',header:'#' },
    { field: "name", header: "Name" },
    { field: "address", header: "Address" },
    { field: "date", header: "Date" },
    { field: "order", header: "Order No" },
  ]

  return (
    <div className="App">
      {/* <From /> */}
      {/* <Slider /> */}
      {/* <Table data={tableData} columns={columns}  /> */}
      <DropDownSelect icon={<ArrowDown />} options={optionsList}/>
      {/* <Toggle /> */}
      {/* <TextAnimation /> */}
    </div>
  );
}

export default App;
