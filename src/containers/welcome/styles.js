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
export const Search = styled.input`
    width: 430px;
    height: 44px;
    background: #F9F9F9;
    border: 1px solid #E6E6E6;
    box-sizing: border-box;
    box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
    border-radius: 3px;
    padding: 15px;
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
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerItems = styled.div`
    width: 800px;
    margin-top: 65px;

    p {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: -0.02em;
        color: #7C7C7C;
        margin-top: 5px;
        margin-bottom: 30px;
    }
`

export const ContainerCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    h3{
        font-style: normal;
        font-weight: 600;
        font-size: 26px;
        line-height: 39px;
        letter-spacing: -0.02em;
        color: #3C3C3C;

        &:hover {
            font-weight: 900;
            opacity: 0.6;
        }

        &:active {
            opacity: 0.6;
        }
    }

    p{
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: -0.02em;
        color: #7C7C7C;
    }

    span{
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 20px;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        color: #F54A48;
    }
`

export const Card = styled.div`
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #E6E6E6;
    box-sizing: border-box;
    box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
    border-radius: 3px;
    margin-bottom: 20px;


    div{
        padding: 30px;
    }

`