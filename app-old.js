const http = require('http');

//console.log('Hola mundo');

http.createServer((req, res) => {
    //console.log(req);
    //res.writeHead(200, {'Content-Type': 'text/plain'})
    //res.writeHead(200, {'Content-Type': 'application/json'})
    //res.setHeader('Content-Disposition', 'attachmente; filename=lista.csv')
    //res.writeHead(200, {'Content-Type': 'application/csv'})

    /*const persona = {
        id: 1,
        nombre: 'Fernando'
    }*/
   /*res.write('id, nombre\n');
   res.write('1, Fernando\n');
   res.write('2, María\n');
   res.write('3, Juan\n');
   res.write('4, Pedro\n');*/
    //res.write(JSON.stringify(persona));
    //res.write('404 | Page not found');
    res.write('Hola Mundo');
    res.end();
})
.listen(8080);

console.log('Escuchando el puerto ', 8080);
