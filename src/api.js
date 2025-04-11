import axios from 'axios'

const searchImages = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=RhS8A6dCApyj2XP0LQY-7_ikDL6-0kCmwhE6hvl4H9U'
    const res = await axios.get(url,{
        params:{
            query: term
        }
    })
    console.log(res)
    return res.data.results
}

export default searchImages