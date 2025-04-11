import axios from 'axios'

const searchImages = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=_r-2p6HBqR4RxcQD5ohhgUC4_24V2ualU2OEX2lgWAg'
    const res = await axios.get(url,{
        params:{
            query: term
        }
    })
    console.log(res)
    return res.data.results
}

export default searchImages