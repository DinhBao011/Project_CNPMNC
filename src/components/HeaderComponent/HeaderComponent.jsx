import { Col } from 'antd'
import React from 'react'
import {WrapperHeader, 
        WrapperHeaderAccout, 
        WrapperTextHeader, 
        WrapperTextHeaderSmall } from './style';
import {UserOutlined, 
        CaretDownOutlined,
        ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';


const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>
            GearT
          </WrapperTextHeader>
        </Col>

        <Col span={12}>
          <ButtonInputSearch
            size = "large"
            textButton = "Tìm kiếm"
            placeholder = "Input search text"

          />
        </Col>
        
        <Col span={6} style={{display: 'flex', gap: '20px'}}> 
          <WrapperHeaderAccout>
            <UserOutlined style={{fontSize: '30px', marginLeft: '10px'}}/>
            <div>
              <WrapperTextHeaderSmall>
                Đăng nhập/Đăng ký
              </WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>
                  Tài khoản 
                </WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccout>
          <div>
            <ShoppingCartOutlined style={{fontSize: '30px', color: '#fff', marginLeft: '10px', alignItems: 'center'}}/>
            <WrapperTextHeaderSmall>
              Giỏ hàng
            </WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent
