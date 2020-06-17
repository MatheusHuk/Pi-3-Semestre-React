import styled from 'styled-components'

export const SideMenu = styled.div`
    display: fixed;
    position: relative;
    width: 20VW;
    height: 100VH;
    background-color: #251680;
    z-index: 998;
    transition: 0.2s ease-in;
    left: ${props => props.showMenu ? "0" : "-21%"}
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
    font-size: 3VH;
    color: ${props => props.selected ? 'black' : 'white'};
    text-align: center;
    line-height: 9.5VH;
    padding: 0 0 0 1VW;
    border-radius: 10px 0 0 10px;
    box-shadow: 0 0.5VH 3px black;
    cursor: pointer;
    transition: all 0.5s;

    :hover{
        background-color: ${props => props.selected ? 'white' : '#12075A'}
    }
`;