import React, { useEffect, useState } from "react";

import { Header, ContainerLogo, ExitButton, Body, ContainerEmployees, Table, Thead, Tbody, Th, Td } from "./styles";
import api from '../../services/api'
import Logo from '../../assets/logo.svg';
import LogOut from '../../assets/log-out.svg'

import { Link } from 'react-router-dom'


function AllVehicles() {
    //Utilizando o useState para guardar as informações dos funcionários dentro de uma array
    const [vehicles, setVehicles] = useState([])

    //assim que a página for carregada irá puxar as informações dos funcionários e guardar no array employees
    useEffect(() => {
        async function loadEmployees() {
            const response = await api.get('vehicles?noPaginate')
            const arrVehicles = response.data.vehicles
            setVehicles(arrVehicles)
        }

        loadEmployees()

    }, [])

    return (
        <>
            <Header>
                <ContainerLogo>
                    <img src={Logo} alt='Logo' />
                    <h1>AutoLuby</h1>
                </ContainerLogo>
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/login'> <ExitButton>Sair<img src={LogOut} alt='log-out' /></ExitButton></Link>
            </Header>

            <Body>
                <h2>Todos Veículos</h2>
                <ContainerEmployees>
                    <Table>
                        <caption>Listagem geral de veículos</caption>
                        <Thead>
                            <tr>
                                <Th>MARCA</Th>
                                <Th>MODELO</Th>
                                <Th>ANO</Th>
                                <Th>KM</Th>
                                <Th>COR</Th>
                                <Th>STATUS</Th>
                                <Th>CHASSI</Th>
                                <Th>VALOR</Th>
                            </tr>
                        </Thead>

                        <Tbody>
                            {
                                vehicles && vehicles.map((car) => (
                                    <tr key={car.chassi}>
                                        <Td key={car.brand + car.chassi}>
                                            {car.brand}
                                        </Td>
                                        <Td key={car.model + car.chassi}>
                                            {car.model}
                                        </Td>
                                        <Td key={car.yer + car.chassi}>
                                            {car.yer}
                                        </Td>
                                        <Td key={car.km + car.chassi}>
                                            {car.km}
                                        </Td>
                                        <Td key={car.color + car.chassi}>
                                            {car.color}
                                        </Td>
                                        <Td status={car.status} key={car.status + car.chassi}>
                                            {car.status}
                                        </Td>
                                        <Td key={car.chassi}>
                                            {car.chassi}
                                        </Td>
                                        <Td key={car.value + car.chassi}>
                                            {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(car.value)}
                                        </Td>
                                    </tr>
                                ))
                            }
                        </Tbody>
                    </Table>
                </ContainerEmployees>
            </Body>
        </>
    )
}

export default AllVehicles