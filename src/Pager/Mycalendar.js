import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import React, {Component} from 'react';
class MyComponent  extends Component {
  handleSelect(ranges){
    console.log(ranges);
   
  }
  render(){
    const selectionRange = {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
    return (
      <div>
       
        <span>From:</span>  <input type="date"    min="04-27-2022"/>
         <span>To:</span>  <input type="date" min="04-27-2022"/>
      </div>
    )
  }
}

export default MyComponent 