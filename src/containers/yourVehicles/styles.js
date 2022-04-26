import styled from 'styled-components'

export const Header = styled.header`
    background: #FFFFFF;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 150px;
`

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;

    h1 {
        font-style: normal;
        font-weight: 600;
        font-size: 38.0001px;
        line-height: 78px;
        letter-spacing: -0.03em;
        color: #F54A48;
    }
`

export const ExitButton = styled.button`
    width: 75px;
    height: 38px;
    background: #F54A48;
    border-radius: 3px;
    border: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: #FFFFFF;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        opacity: 0.6;
    }
`

export const Body = styled.div`
    background: #F9F9F9;
    padding: 50px;

    h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 45px;
        letter-spacing: -0.02em;
        color: #3C3C3C;
        margin-bottom: 38px;
    }
`

export const ContainerEmployees = styled.div`
    display: flex;
    flex-direction: column;
    text-align: justify;
    box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
    border-radius: 3px;
`

export const Table = styled.table`
    background: #FFFFFF;
    padding: 15px;

    caption {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: -0.02em;
        color: #3C3C3C;
        text-align: start;
        background: #FFFFFF;
        padding: 25px 30px;
    }
`

export const Thead = styled.thead`
    background: #F9F9F9;
    border-radius: 3px;
`

export const Tbody = styled.tbody`
    background: #F9F9F9;
    border-radius: 3px;
`

export const Th = styled.th`
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #858585; 
    padding: 25px 35px;
`

export const Td = styled.td`
    background: ${props => props.status === 'Vendido' ? '#FDDBDA' : '#FFFFFF'};
    padding: 15px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #3C3C3C;

    /* ${props => props.status === 'Vendido' ? '2px solid #FA982F' : '1px solid #E6E6E6'} */
    
`