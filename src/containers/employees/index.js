import React, { useEffect, useState } from "react";

import { Header, ContainerLogo, ExitButton, Body, ContainerEmployees, Table, Thead, Tbody, Th, Td } from "./styles";
import api from '../../services/api'
import Logo from '../../assets/logo.svg';
import LogOut from '../../assets/log-out.svg'
import { Link } from 'react-router-dom'


function Employees() {
        //Utilizando o useState para guardar as informações dos funcionários dentro de uma array
        const [employees, setEmployees] = useState([])

        //assim que a página for carregada irá puxar as informações dos funcionários e guardar no array employees
        useEffect(() => {
            async function loadEmployees() {
                const response = await api.get('employees?noPaginate')
                const arrEmployees = response.data.employees
                setEmployees(arrEmployees)
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
                    <h2>Funcionários</h2>
                    <ContainerEmployees>
                        <Table>
                            <caption>Listagem de funcionários da empresa</caption>
                            <Thead>
                                <tr>
                                    <Th>NOME</Th>
                                    <Th>EMAIL</Th>
                                    <Th>CPF</Th>
                                    <Th>VALOR</Th>
                                    <Th>BIO</Th>
                                </tr>
                            </Thead>

                            <Tbody>
                                {/* Ajudaria MUITO a API retornar somente um array e dentro do array cada funcionário ter um id próprio */}
                                {/* Pela falta de um ID para cada funcionário, precisei concatenar duas informações onde eu imaginei que poderia se repetir */}
                                {/* FALHA BACKEND: Vericando o Local Strorage, conforme solicitado na documentação (Context), para melhorar a segurança deve ser enviado um novo token a cada requisição */}
                                {
                                    employees && employees.map((employee) => (
                                        <tr key={employee.cpf}>
                                            <Td key={employee.name + employee.cpf}>
                                                {employee.name}
                                            </Td>
                                            <Td key={employee.email}>
                                                {employee.email}
                                            </Td>
                                            <Td key={employee.cpf}>
                                                {employee.cpf}
                                            </Td>
                                            <Td key={employee.salary + employee.cpf}>
                                                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(employee.salary)}
                                            </Td>
                                            <Td key={employee.bio + employee.cpf}>
                                                {employee.bio}
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

export default Employees