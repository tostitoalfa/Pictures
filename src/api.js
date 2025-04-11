import axios from 'axios'

const searchImages = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id='
    const res = await axios.get(url,{
        params:{
            query: term
        }
    })
    console.log(res)
    return res.data.results
}

export default searchImages