const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

const thoughtCount = async () => {
    const numberOfThoughts = await Thought.aggregate()
        .count('studentCount');
    return numberOfThoughts;
}

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();

            const thoughtObject = {
                thoughts,
                thoughtCount: await thoughtCount(),
            };

            res.json(thoughtObject);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
}