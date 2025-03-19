import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
    const {method, url} = req

    if (method === 'GET' && url === '/users') {
        return res
            .setHeader('Content-type', 'aplication/json')
            .end(JSON.stringify(users))
            // .end(JSON.stringify(users[0].id))
    }

    if (method === 'POST' && url === '/users') {
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
        return res.writeHead(201).end()
    }

    return res.writeHead(404).end()
})

server.listen(3333)