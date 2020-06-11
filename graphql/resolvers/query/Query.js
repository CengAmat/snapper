const Query = {
    user: (parent, args) => {
        return {
            name: 'Ahmet',
            surname: 'Zurnaci'
        }
    }
}

module.exports = Query;