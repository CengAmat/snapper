const Query = {
    user: (parent, args) => {
        return {
            username: 'Ahmet',
            createdAt: '13/06/2020'
        }
    }
}

module.exports = Query;