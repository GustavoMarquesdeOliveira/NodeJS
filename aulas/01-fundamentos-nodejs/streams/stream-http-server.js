import http from 'node:http'
import {Transform} from "node:stream";

class InverseNumberStream extends Transform {
    _transform(chunk,encoding, callback){
        const transformed = Number(chunk.toString()) *-1

        console.log(transformed)
        // A saida de uma stream não pode ser uma string ou um saida normal (boolean). Tem que transformar essa saida em buffer
        // como o Buffer não aceita numero, precisa converter o i que é um numero em uma String
        callback(null, Buffer.from(String(transformed)))
    }
}
// REQ (ReadableStream) e RES (WriteableStream)são stream, tudo que sai de uma resposta do servidor é uma stream
const server = http.createServer(async (req,res)=>{
    // Vamos pegar as streams em pedaços e salvar dentro desse buffers
    const buffers = []
    // Aguarda cada pedaço da stream ser retornado
    // Com esse const chunk of req, ele esta pegando em pedaços o que vem de req. O for await faz só passar quando o carregamento da stream estiver 100%
    for await (const chunk of req ){
       buffers.push(chunk)
    }

    const fullStreamContent = Buffer.concat(buffers).toString()

    console.log(fullStreamContent)

    return res.end(fullStreamContent)

    // Retornando a req e adicionando dois pipe(), um transformando (InverseNumberStream) e outro retornando a res
    // return req
    //     .pipe(new InverseNumberStream)
    //     .pipe(res)
})

server.listen(3334)