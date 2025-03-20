// Importando o http e deixando claro que esse recurso é do proprio node:http
import http from 'node:http'

// Construindo a array de usuarios
const users = []

// Criando um server com dois parametros (req e res)
const server = http.createServer((req, res) => {
    // Criando uma const que vai receber os dois retornos que vem do servidor
    const {method, url} = req

    // Metodo de GET está buscando informações do servidor
    if (method === 'GET' && url === '/users') {

        return res
            // Colocando um header no retorno do resultado. Esse header é usado para que o front saiba que tipo de informação ele vai receber
            // Esse header pode ser feito tbm na ebtrega das informações do front para o back
            .setHeader('Content-type', 'aplication/json')

            // Como a resposta do servidor não pode ser uma array, estamos transformando essa array em um json
            .end(JSON.stringify(users))
            // .end(JSON.stringify(users[0].id))
    }
    // Metodo POST está criando informação no servidor, se fosse uma atualização dessas informações o metodo seria o PATCH
    if (method === 'POST' && url === '/users') {
        // Está adicionando em users essas informações passadas com o push
        users.push({
                id: 1,
                name: 'John Doe',
                email: 'jonhdoe@example.com',
            },
            {
                id: 2,
                name: 'Mark Doe',
                email: 'markdoe@example.com',
            }
        )
        // Está retornando um status code 201 que seria o status code de sucesso na criação
        return res.writeHead(201).end()
    }
    // Retornando um status code 404 que seria erro de que o servidor não pode encontrar o recurso requisitado.
    return res.writeHead(404).end()
})

// Está alocando o servidor na porta 3333
server.listen(3333)