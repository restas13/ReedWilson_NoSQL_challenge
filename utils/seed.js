const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('working');

    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users');
    }

    let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if(thoughtsCheck.length) {
        await connection.dropCollection('thoughts');
    }

    const users = [];

    for (let i = 0; i < 20; i++) {
        const thought = getRandomThought(2);

        const name = getRandomName();

        users.push({
            name,
            thought,
        })
    }

    await User.collection.insertMany(users);

    console.table(users);
    console.info('seeding complete');
    process.exit(0);
})