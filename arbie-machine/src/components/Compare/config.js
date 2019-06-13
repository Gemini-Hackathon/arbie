module.exports = {
    server: process.env.NODE_ENV === 'production' ? 'https://arbie-back.herokuapp.com' : 'http://localhost:7777'
}