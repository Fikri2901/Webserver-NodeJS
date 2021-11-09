const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.sendFile('./index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
    res.sendFile('./about.html', { root: __dirname })
})

app.get('/kontak', (req, res) => {
    res.sendFile('./kontak.html', { root: __dirname })
})

app.get('/kontak/:id', (req, res) => {
    res.send(`kontak id: ${req.params.id}`)
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>Halaman tidak ditemukan !!!</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


// const fs = require('fs');
// const http = require('http')

// const render = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             res.writeHead(404)
//             res.write('Error: file tidak ada !!')
//         } else {
//             res.write(data)
//         }
//         res.end()
//     })
// }

// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-type': 'text/html',
//     })

//     const url = req.url
//     if (url === '/about') {
//         render('./about.html', res)
//     } else if (url === '/kontak') {
//         render('./kontak.html', res)
//     } else {
//         render('./index.html', res)
//     }

// }).listen(3000, () => {
//     console.log('Server is listening on port 3000...')
// })