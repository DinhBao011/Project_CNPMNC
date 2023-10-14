import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from './style'
import {StarFilled} from '@ant-design/icons';
import logo from '../../assets/images/logo.png';

const CardComponent = () => {
  return (
    <WrapperCardStyle
        hoverable
        style={{ width: 200 }}
        bodyStyle={{}}
        cover={<img alt="example" src="https://salt.tikicdn.com/cache/368x368/ts/product/99/86/04/a61d79dfef28ae865da9bc705e201198.png.webp" />}>
        <img src={logo} 
        style={{
            width: '68px', 
            height: '14px', 
            position: 'absolute', 
            top: 0, 
            left: 0,
            borderTopLeftRadius: '3px'}}/>
        <StyleNameProduct>
            <h3 style={{margin: '0 0 5px 0'}}>
                Iphone 15 Promax 
            </h3>
        </StyleNameProduct>

        <WrapperReportText> 
            <span>
                <span>
                    4.9
                </span>
                <StarFilled style={{marginLeft: '4px', fontSize: '10px', color: 'yellow'}}/>
            </span>
            <span style={{marginLeft: '4px'}}>
                | Đã bán 2000+
            </span>
        </WrapperReportText>
        <WrapperPriceText>
             42.000.000đ
            <span style={{lineHeight: 'center  '}}>
            <WrapperDiscountText>
                -24%
            </WrapperDiscountText>
            </span>
        </WrapperPriceText>
    </WrapperCardStyle>
  )
}

export default CardComponent
