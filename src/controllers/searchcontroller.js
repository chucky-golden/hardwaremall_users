const axios = require('axios')


// fetch products
const search = async (req, res) => {
    let response = await axios.post('https://admin-dqcw.onrender.com/search/', {
        q: req.body.q,
        tab: req.body.tab,
        start: req.body.start,
        count: req.body.count,
        location: req.body.location
    })
    if(response.data.message !== null){
        res.json({ message: response.data.message })
    }else{
        res.json({ message: 'error processing request' })
    }

}




module.exports = {
    search,
}
