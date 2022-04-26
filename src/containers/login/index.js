import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { useUser } from "../../hooks/UserContext";
import { useHistory } from 'react-router-dom';
import api from '../../services/api'

import Car from '../../assets/car-image.svg'
import Logo from '../../assets/logo.svg'

import { Container, ContainerItens, P, Label, Input, ErrorMessage, ContainerForgetPassoword, Button, LastParagraph } from './styles'

function Login() {
    const history = useHistory()
    
    //Apenas para gravar os dados assim que o usuário loga
    const { putUserData } = useUser()

    //Validação do formulário de login com YUP
    const schema = Yup.object().shape({
        email: Yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
        password: Yup.string().required("A senha é obrigatória")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    //Enviar dados do formulário para a API
    const onSubmit = async clientData => {
        const { data } = await toast.promise(
            api.post('login', {
                email: clientData.email,
                password: clientData.password
            }),
            {
                //Popup informando o status do request
                pending: 'Verificando seus dados',
                success: 'Seja bem vindo(a)',
                error: 'Verifique seu e-mail e senha'
            }

        )
        putUserData(data)

        //Depois que o usuário loga na página, espera alguns segundos e depois redireciona para a página Welcome
        setTimeout(() => {
            history.push('welcome')
        }, 1000);
    }


    return (
        <Container>
            <div>
                <h1><img src={Logo} alt='Logo' />AutoLuby</h1>
                <ContainerItens>
                    <h2>Bem-vindo à AutoLuby</h2>
                    <P className='paragraph'>Faça o login para acessar sua conta.</P>

                    <form noValidate onSubmit={handleSubmit(onSubmit)}>
                        <Label>Endereço de email</Label>
                        <Input type='email' {...register("email")} error={errors.email?.message} />
                        <ErrorMessage>{errors.email?.message}</ErrorMessage>

                        <Label>Senha</Label>
                        <Input type='password' {...register("password")} error={errors.password?.message} />
                        <ErrorMessage>{errors.password?.message}</ErrorMessage>

                        <ContainerForgetPassoword>
                            <div>
                                <input type='checkbox' name='forget'/>
                                <p id='forget'>Lembrar minha senha</p>
                                <a href='google.com'>Esqueceu a senha?</a>
                            </div>
                        </ContainerForgetPassoword>
                        <Button type='submit'>Entrar</Button>
                    </form>

                    <LastParagraph>
                        Ainda não tem uma conta? <a href='google.com'>Criar Conta</a>
                    </LastParagraph>
                </ContainerItens>
            </div>
            <img src={Car} alt='Car-Img' />
        </Container>
    )
}

export default Login