const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

function formatDate(date) {
    const today = new Date(date);

    return today.toDateString();
};

module.exports = reactionSchema;