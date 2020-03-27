import styled from 'styled-components'

export const SideMenu = styled.div`
    display: fixed;
    position: fixed;
    width: 20VW;
    height: 100VH;
    background-color: #251680;
    z-index: 998;
`;

export const Container = styled.div`
    display: block;
    position: absolute;
    justify-content: space-around;
    top: 15VH;
    width: 20VW;
    height: 60VH;
`;

export const Button = styled.div`
    box-sizing: border-box;
    display: flex;
    top: 15VH;
    width: 20VW;
    height: 10VH;
    justify-content: flex-start;
    background-color: ${props => props.selected ? 'white' : 'transparent'};
    margin-bottom: 2VH;
    font-size: 5VH;
    color: ${props => props.selected ? 'black' : 'white'};
    text-align: center;
    line-height: 9.5VH;
    padding: 0 0 0 1VW;
    border-radius: 50px 0 0 50px;
    cursor: pointer;

    :hover{
        background-color: ${props => props.selected ? 'white' : '#12075A'}
    }
`;