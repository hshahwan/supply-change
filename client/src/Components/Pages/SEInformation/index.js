import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios'

import BusinessInfo from './BusinessInfo';
import ProgressTracker from './ProgressTracker';
import Turnover from './Turnover';
import Switch from './switchComponents';
import Button from './../../CommonComponents/Button';

import'./style.css'

class SEInofrmation extends Component {
  state = {
    activePageIndex: 0,
    companyLocation: '',
    companyAddress: '',
    SICCode: '',
    director: '',
    companyStructure: '',
    tradeType: '',
    companyDescription: '',
    employeesNumber: '',
    turnover: '',
    contractSize: '',
    socialDescription: '',
    workDistance: '',
    workRegions: '',
    policyArray: [],
    socialImpactArray: [],
    logoLink: '',
    buttonText: 'Continue',
    redirect:false,
    error:'',
    companyInfo:{}
  }

  componentWillMount() {
    if (localStorage.getItem('userInfo')){
        const info = JSON.parse(localStorage.getItem('userInfo'));
        const {se_house_no} = info;
          const companyNumber = se_house_no;
        companyNumber?
        axios.get(`/companyinfo/${companyNumber}`)
          .then(result => {
            if(result.data.errors){
              this.setState({error: result.data.errors[0].error})
            }else{
              console.log('result=>> ', result);

              this.setState({
                  companyInfo:result.data,
                  companyLocation:result.data.registered_office_address.locality,
                  companyAddress:result.data.registered_office_address.address_line_1,
                  error:''})
            }
          this.saveState()
        }):null
    }else{
      this.setState({
        ...this.state,
        redirect: true
      })
    }
}

saveState = () =>{
  const {state} =  this;
  const info = localStorage.setItem('state', JSON.stringify(state))
}

  changeState = ({target}) => {
    const { value, name } = target
    this.setState ({
      ...this.state,
      [name]: value
    })
    this.saveState()
    }

  setImgLink = value => {
    this.setState ({
      ...this.state,
      logoLink: value
    },()=>{
    })


  }
  sendData = () => {
    const info = JSON.parse(localStorage.getItem('userInfo'));
    const SEId = info.id
    axios.post('/userdetails',{...this.state, SEId}).then(response => {
       response.data.msg === 'success' ? this.setState ({
              ...this.state,
              redirect : true
            },()=>{
              localStorage.setItem('userInfo', JSON.stringify(response.data));
            }) : this.setState ({
                    ...this.state,
                    error : 'Sorry, an error in inserting data'
                  })
    });
  }
  indexIncrement = (e) => {
    this.setState({
      ...this.state,
      error: ''
    })
    this.state.activePageIndex === 1 && !this.state.logoLink ? (
      this.setState({
        ...this.state,
        error: 'you should upload your bussiness logo'
      })

    ) : (
        this.setState({
          ...this.state,
          error: ''
        },()=>{


    
      this.state.activePageIndex === 5 ?
        (this.state.policyArray.length < 2 ? (this.setState({
          ...this.state,
          error: 'you should select 2 of your social missions'
        })) : this.sendData()) : (
      this.setState ({
        ...this.state,
        activePageIndex: 1+ this.state.activePageIndex
      },()=>{
        if(this.state.activePageIndex === 5){
          this.setState ({
            ...this.state,
            buttonText: 'Submit'
          })
        }
      })
    )
      })

    )
  }

  render() {
    return (
      this.state.redirect ?
        <Redirect to='/profile' /> :
        (
      <div id='main' className = 'SEForm'>
        <ProgressTracker activePageIndex = { this.state.activePageIndex }/>
        <Switch changeState = { this.changeState } activePageIndex = { this.state.activePageIndex } setImgLink= { this.setImgLink } companyInfo={this.state.companyInfo}/>
        <div className ='errMsg'>{this.state.error}</div>
        {Object.keys(this.state.companyInfo).length > 0?
        <Button children = {this.state.buttonText} className = 'generalButton' onClick = { this.indexIncrement }/>:<img src="https://i.gifer.com/9wcA.gif"/>}
      </div>
    )
    );
  }
}

export default SEInofrmation;
