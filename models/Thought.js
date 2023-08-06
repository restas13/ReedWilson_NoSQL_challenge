const { Schema, model } = require('mongoose');
const reaction = require('./Reaction');
const userSchema = require('./User')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate
        },
        userName: {
            type: String,
            required: true,
        },
        reactions: [reaction],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
/*
userSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
}),set( function(v) {
    this.set(v);
});
*/
function formatDate(date) {
    const today = new Date(date);

    return today.toDateString();
};

const Thought = model('thought', thoughtSchema);

module.exports = Thought;