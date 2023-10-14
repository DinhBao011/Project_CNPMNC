import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
    width: 200
    $ img {
        width: 200px;
        height: 200px;
    }
    position: relative;
`
export const StyleNameProduct = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgb(56, 56,  61)
`
export const WrapperReportText = styled.div`
    font-size: 11px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
`
export const WrapperPriceText = styled.div`
    margin: 8px 0;
    font-size: 16px;
    color: rgb(255, 66, 78);
    font-weight: 500;
`
export const WrapperDiscountText = styled.span`
    margin-left: 4px;
    line-height: center;
    font-size: 12px;
    color: rgb(255, 66, 78);
    font-weight: 500;
`