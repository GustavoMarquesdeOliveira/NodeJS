// process.stdin
//     .pipe(process.stdout)

// Importando o Readble e deixando claro que esse recurso é do proprio node:stream
import {Readable} from 'node:stream'

    // Criando a class One... que é uma extensão do Readable (que é um processo de leitura das informações em partes)
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

// Está lendo a stream e vai mostrar as informações dessa stream em tempo real
new OneToHundredStream().pipe(process.stdout)