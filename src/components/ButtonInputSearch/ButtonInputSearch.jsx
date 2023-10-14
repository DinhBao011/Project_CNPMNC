import React from 'react'
import {SearchOutlined} from '@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonInputSearch = (props) => {
    const {
      size, 
      placeholder, 
      textButton, 
      bordered,
      colorButton = '#fff',
      backgroundColorInput = "#fff", 
      backgroundColorButton = '#ff5151'} = props

  return (
    <div style={{display: 'flex'}}>
      <InputComponent 
        size= {size} 
        placeholder= {placeholder} 
        bordered= {bordered} 
        style= {{
          backgroundColor: backgroundColorInput, 
          borderRadius: '10px 0 0 10px'}}/>
          
      <ButtonComponent 
        size= {size} 
        styleButton={{
          backgroundColor: backgroundColorButton, 
          borderRadius: '0 10px 10px 0',
          border: !bordered && 'none',
          color: colorButton
        }} 
        icon= {<SearchOutlined style={{color: colorButton}} />}
        textButton={textButton}/>
      
    </div>
  )
}

export default ButtonInputSearch
