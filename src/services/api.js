//Usando o axios para fazer a integração com a API

import axios from 'axios'

const apiLabLuby = axios.create({
    baseURL:'https://autoluby.k8s.luby.me/'
})

//Utilizando axios interceptors para adicionar o token na requisição
apiLabLuby.interceptors.request.use(async config => {
    //pegando os dados do usuário no localStorage
    const userData = await localStorage.getItem('labluby:userData')

    //Só vai procurar o token se tiver algo no localStorage (Para não quebrar a aplicação)
    const token = userData && JSON.parse(userData).token
    //atribuindo o token na URL
    config.headers.authorization = `Bearer ${token}`
    return config
})

export default apiLabLuby 