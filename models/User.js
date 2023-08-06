const { Schema, model } = require('mongoose');
const thoughts = require('./Thought')

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
        },
        //thoughts: [thoughts],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
/*
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
}),set( function(v) {
    this.set(v);
});
*/
const User = model('user', userSchema);

module.exports = User;