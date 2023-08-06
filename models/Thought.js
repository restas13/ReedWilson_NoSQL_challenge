const { Schema, model } = require('mongoose');
const reaction = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

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
            get: timestamp => dateFormat(timestamp)
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
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});


const Thought = model('thought', thoughtSchema);

module.exports = Thought;