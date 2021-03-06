import React from 'react';
import Select from 'react-select';

const optionTurnOver = [
  {
    value: '<50k',
    label: '<50k'
  }, {
    value: '50k-100k',
    label: '50k-100k'
  }, {
    value: '100-150k',
    label: '150-250k'
  }, {
    value: '300k +',
    label: '300k +'
  }
];
const optionSizeContract = [
  {
    value: '<50k',
    label: '<50k'
  }, {
    value: '50k-100k',
    label: '50k-100k'
  }, {
    value: '100-150k',
    label: '150-250k'
  }, {
    value: '300k +',
    label: '300k +'
  }
];

const TurnoverComp = (
  { selectedTurnover,
    selectedSizeContract,
    updateTurnover,
    updateSizeContract,
    changeState }
) => {

  return (
    <div >
      <div className = 'topForm'>
        <h3 className = 'title'>The size of your business </h3>
      </div>
      <div className = 'align'>
        <div className = 'grid'>
          <div className = 'business-size'>
            <div className = 'form__input'>
              <input id = 'business-size' type = 'number' name = 'employeesNumber' className = 'business-input'
                placeholder = 'Number of Employees (or FTE)' required = 'required'
                onChange = { changeState }/>
              <label htmlFor = 'business-size'> <span className = 'hidden'/></label>
            </div>
            <Select value = { selectedTurnover } onChange = { updateTurnover }
              options = { optionTurnOver } placeholder = "Last Year's turnover"/>
            <Select value = { selectedSizeContract } onChange = { updateSizeContract }
              options = { optionSizeContract } placeholder = 'Size of contracts you are able to deliver?'/>
          </div>
        </div>
      </div>
    </div>);
};

export default TurnoverComp;
