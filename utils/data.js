const usernames = [
    'restas13',
    'poisonGames',
    'TheDestroyer',
    'Diggy.',
    'Alucard',
    'cpt.Rex',
];

const thoughts = [
    'Why is it that stop signs are octagons?',
    'How to you tie a tie?',
    'Where is a good fishing spot for bass?',
    'The Star Wars sequel trilogy is overrated',
    'Pineapple does not belong on pizza',
    'We have too many tourists in Florida',
    'It\'s too hot in Florida right now',
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () => {
    return `${getRandomArrItem(usernames)}`
};

const getRandomThought = (int) => {
    const results = [];
    for (var i = 0; i < int; i++) {
        results.push({
            thought: getRandomArrItem(thoughts),
        })
    }
    return results;
}

module.exports = { getRandomName, getRandomThought };