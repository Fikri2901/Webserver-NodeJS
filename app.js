const fs = require('fs');
const http = require('http')

const render = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404)
            res.write('Error: file tidak ada !!')
        } else {
            res.write(data)
        }
        res.end()
    })
}

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/html',
    })

    const url = req.url
    if (url === '/about') {
        render('./about.html', res)
    } else if (url === '/kontak') {
        render('./kontak.html', res)
    } else {
        render('./index.html', res)
    }

}).listen(3000, () => {
    console.log('Server is listening on port 3000...')
})