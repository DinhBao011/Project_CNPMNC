import React from 'react'
import { WrapperContent, WrapperFilterPrice, WrapperLabelText, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd'

export const NavBarComponent = () => {
    const onChange = () => { }
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return (
                        <WrapperTextValue>
                            {option}                           
                        </WrapperTextValue>
                    )
                })
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                        {options.map((option) => {
                            return (
                                <Checkbox value={option.value}> {option.label} </Checkbox>
                            ) 
                        })}
                    </Checkbox.Group>
                )
            case 'star':
                return options.map((option) => {
                    return (
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <Rate style={{fontSize: '12px'}} disabled defaultValue={option} />
                            <span style={{marginLeft: '4px'}}> {`tu ${option} sao`} </span>
                        </div>
                    ) 
                })
            case 'filterPrice':
                return options.map((option) => {
                    return (
                        <WrapperFilterPrice>
                            {option}                           
                        </WrapperFilterPrice>
                    )
                })
            default:
                return {}
        }
    }
  return (
    <div>
        <WrapperLabelText>
            Lable
        </WrapperLabelText>

        <WrapperContent>
            {renderContent('text', ['TV', 'Màn hình', 'Laptop văn phòng', 'Laptop Gaming', 'PC'])}
        </WrapperContent>

        {/* <WrapperContent>
            {renderContent('checkbox', 
                        [
                            {value: 'a', label: 'A'}, 
                            {value: 'b', label: 'B'},
                            {value: 'c', label: 'C'},
                            {value: 'c', label: 'D'},
                        ]
            )}
        </WrapperContent>

        <WrapperContent>
            {renderContent('star', [3, 4, 5]
            )}
        </WrapperContent>

        <WrapperContent>
            {renderContent('filterPrice', ['Dưới 40.000.000đ', 'Trên 50.000.000đ']
            )}
        </WrapperContent> */}
    </div>
  )
}

export default NavBarComponent
