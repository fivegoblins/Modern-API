const hapi = require('hapi');
const mongoose = require('mongoose');

mongoose.connect('mongodb://alexswartz:sunnyday4!@ds131814.mlab.com:31814/users');

mongoose.connection.once('open', ()=> {
    console.log('connected to database!');
})

const server = hapi.server({
    port: 4000,
    host: 'localhost'
});

const init = async()=> {
    server.route({
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            return `<h1>My Modern API</h1>`;
        }
    })

    await server.start();
    console.log(`Server running at ${server.info.uri}`);
};

init();