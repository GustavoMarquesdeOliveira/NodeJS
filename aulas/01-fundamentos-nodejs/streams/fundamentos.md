### Aula 3
* Conceito de stream é ler os dados vindo da minha requisição http aos poucos lendo esse arquivo e processando enquanto o arquivo ainda está sendo feito o upload
* Readable streams = lendo aos poucos
* Writeable streams = enviando uma informação aos poucos
* O req e o res são considerados streams
* stdin retorna uma stream conectada ao stdin
* Quando vc utiliza a estrutura process.stdin.pipe(process.stdout) vc está dizendo que tudo que for passado no stdin vai ser agrupado e sair no stdout
* Toda stream Readable tem um metodo obrigatorio que é o _read(), ele vai retornar quais são os dados dessa stream
* push() é um metodo para um stream fornecer informações para quem estiver consumindo ela