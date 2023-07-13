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
    async getIndividualThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId }).select('-__v');

            if(!thought) {
                return res.status(404).res.json({ message: 'Sorry, there are no thoughts with that ID'});
            } 

            res.json({ thought });

        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });
            
            if (!student) {
                return res.status(404).json({ message: 'There are no thoughts with that Id' });
            }

            res.json({ thought });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async addReaction(req, res) {
        console.log(req.body);

        try {
            const thought = Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true },
            );

            if (!thought) {
                return res.status(404).json({ message: 'sorry, there are no thoughts with that Id' });
            }

            res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async removeReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reaction: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true },
            );

            if (!thought) {
                return res.status(404).json({ message: 'There are no thoughts with that Id' });
            }

            res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
};