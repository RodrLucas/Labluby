import React from 'react'

import { Header, ContainerLogo, Search, ExitButton, Body, ContainerItems, ContainerCards, Card } from './styles'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import LogOut from '../../assets/log-out.svg'
import carCardOne from '../../assets/car-card-one.svg'
import carCardTwo from '../../assets/car-card-two.svg'
import employeesCardThree from '../../assets/employees-card-three.svg'


function Welcome() {
    //Recuperar o nome do usuário pelo local storage
    const userData = localStorage.getItem('labluby:userData')
    const userName = JSON.parse(userData).user.name
    console.log(userName);
    const soldVehicles = JSON.parse(userData).totalVehiclesLoggedUser
    const totalVehicles = JSON.parse(userData).totalVehicles
    const totalEmployees = JSON.parse(userData).totalEmployees

    return (
        <>
            <Header>
                <ContainerLogo>
                    <img src={Logo} alt='Logo' />
                    <h1>AutoLuby</h1>
                </ContainerLogo>
                <Search placeholder='Pesquisar' />
                <Link style={{textDecoration: 'none', color: 'white'}} to='/login'> <ExitButton>Sair<img src={LogOut} alt='log-out' /></ExitButton></Link>
            </Header>

            <Body>
                <ContainerItems>
                    <h2>Bem-vindo, {userName}</h2>
                    <p>Menu</p>

                    <ContainerCards>
                        <Card>
                            <div>
                                <Link style={{ textDecoration: 'none' }} to='/yourvehicles'>
                                    <h3>Veículos reservados e vendidos </h3>
                                </Link>
                                <p>Veículos reservados e vendidos por você</p>
                                <span>{soldVehicles} Veículos</span>
                            </div>
                            <img src={carCardOne} alt='Car-Card-One' />
                        </Card>
                        <Card>
                            <div>
                                <Link style={{ textDecoration: 'none' }} to='/vehicles'>
                                    <h3>Listagem geral de veículos</h3>
                                </Link>
                                <p>Listagem de veículos de toda a empresa</p>
                                <span>{totalVehicles} Veículos</span>
                            </div>
                            <img src={carCardTwo} alt='Car-Card-Two' />
                        </Card>
                        <Card>
                            <div>
                                <Link style={{ textDecoration: 'none' }} to='/employees'>
                                    <h3>Funcionários da empresa</h3>
                                </Link>
                                <p>Listagem de todos os funcionários da empresa</p>
                                <span>{totalEmployees} Veículos</span>
                            </div>
                            <img src={employeesCardThree} alt='employees-card-three' />
                        </Card>
                    </ContainerCards>
                </ContainerItems>
            </Body>
        </>
    )
}

export default Welcome