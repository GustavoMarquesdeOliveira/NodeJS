import {Readable} from "node:stream";

class OneToHundredStream extends Readable {
    index = 1

    // Usando o metodo obrigatorio do Readable, que é o read. Esse metodo retorna informações da stream
    _read() {
        const i = this.index++
        // Utilizando o push para o envio de informação para quem está consumindo essa Stream
        // Foi adicionado um timeout para acrescentar um delay na saida.
        setTimeout(() => {
            if (i > 100) {
                this.push(null)
            } else {
                // A saida de uma stream não pode ser uma string ou um saida normal (boolean). Tem que transformar essa saida em buffer
                // como o Buffer não aceita numero, precisa converter o i que é um numero em uma String
                const buf = Buffer.from(String(i))
                this.push(buf)
            }
        }, 1000)
    }

}

fetch('http//localhost:3334',{
    // Para simular que está enviando uma informação tem que utilizar o metodo POST ou PUT
    method:'POST',
    body: new OneToHundredStream(),
}).then(response =>{
    response.text().then(data =>{
        console.log(data)
    })
})