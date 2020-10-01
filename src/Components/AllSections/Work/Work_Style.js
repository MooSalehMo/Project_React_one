import styled from 'styled-components'

export const DivWork = styled.div`
    background-color: #e3e3e3;
    padding: 50px 0;
`
export const DivContainer = styled.div`
    display: flex;
`
export const DivBox = styled.div`
    width: 30%;
    padding: 20px;
    border-radius: 5px;
    background-color: #d9d9d9;
    margin-left: 5%;
    margin-left: ${props => props.first === "1" ? "0" : "5%"}
`
export const IIcon = styled.i`
    color: #888;
    display: block;
    text-align: center;
    line-height: 100%;
    margin-bottom: 30px
`
export const Hr = styled.hr`
    border: none;
    height: 1px ;
    width: 70%;
    margin: auto;
    background-color: #888;
    margin-bottom: 40px;
`
export const H3 = styled.h3`
    color: #888;
    font-size: 30px;
`
export const P = styled.p`
    font-size: 18px;
    color: #555;
`