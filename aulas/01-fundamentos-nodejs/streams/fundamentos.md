### Aula 3
* Conceito de stream é ler os dados vindo da minha requisição http aos poucos lendo esse arquivo e processando enquanto o arquivo ainda está sendo feito o upload
* Readable streams = lendo aos poucos
* Writeable streams = enviando uma informação aos poucos
* O req e o res são considerados streams
* stdin retorna uma stream conectada ao stdin
* Quando vc utiliza a estrutura process.stdin.pipe(process.stdout) vc está dizendo que tudo que for passado no stdin vai ser agrupado e sair no stdout
* Toda stream Readable tem um metodo obrigatorio que é o _read(), ele vai retornar quais são os dados dessa stream
* push() é um metodo para um stream fornecer informações para quem estiver consumindo ela
* Na stream de escrita (Writable) é obrigatório ter o metodo _write()
* O metodo _write() recebe três parametros que seriam os chunk, encoding, callback
* O chunk é o pedaço da stream que a gente leu (this.push(buf))
* Enconding é como essa informação está codificada
* Callback é uma função que a stream de escrita precisa chamar quando ela terminou de fazer o que ela precisava
* Dentro de uma stream de escrita, ela não retorna nada, ela processa o dado
* A stream de transformação ela obrigatoriamente precisa ler dados de algum lugar e escrever em algum lugar, ela é utilizada para a comunicação de duas outras streams
* Existe tbm a stream Duplex, que ela pode receber o metedo tanto de _read, quanto de _write, ela pode ser utilizada para leitura de arquivos (ler do arquivo ou escrever do arquivo)
* 
* 
