import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;

        h1 {
            font-style: normal;
            font-weight: 600;
            font-size: 38.0001px;
            line-height: 78px;
            letter-spacing: -0.03em;
            color: #F54A48;
            margin-bottom: 80px;
            margin-left: 208px;
        }
    }

    img {
        height: 100%;
    }
`

export const ContainerItens = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 274px;
    padding: 20px;

    form {
        display: flex;
        flex-direction: column;
    }

    h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 38.0001px;
        line-height: 120%;
        letter-spacing: -0.03em;
        color: #3C3C3C;
    }

`

export const P = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: #A2A2A2;
    margin-bottom: 70px;
`

export const Label = styled.label`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: #7C7C7C;
    margin-bottom: 6px;
    margin-top: 25px;
`
export const Input = styled.input`
    width: 425px;
    height: 36px;
    padding: 15px;
    background: #F9F9F9;
    border: ${props => props.error ? '2px solid #FA982F' : '1px solid #E6E6E6'};
    box-sizing: border-box;
    border-radius: 3px;

    &::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 120%;
        letter-spacing: -0.03em;
        color: #A2A2A2;
    }
`

export const ErrorMessage = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: #F54A48;
    margin-bottom: 10px;
`

export const ContainerForgetPassoword = styled.div`

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    input {
        width: 24px;
        height: 24px;
        border-radius: 3px;
    }

    p {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 120%;
        letter-spacing: -0.03em;
        color: #F54A48;
        margin-left: 5px;
    }

    a {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 120%;
        letter-spacing: -0.03em;
        color: #F54A48;
        cursor: pointer;
        text-decoration: none;
        margin-left: 90px;
    }
`

export const Button = styled.button`
    width: 425px;
    height: 37px;
    background: #F54A48;
    border-radius: 3px;
    border: none;
    margin-top: 50px;

    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: #FFFFFF;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`

export const LastParagraph = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: #7C7C7C;
    margin-top: 40px;

    a {
        color: #F54A48; 
        text-decoration: none;
        cursor: pointer;
    }
`