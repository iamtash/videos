import axios from 'axios'

const KEY = 'AIzaSyCxXILHXb9J-ZmZjXE5UEGtWPYr_Y2qiHU'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snipppet',
        maxResults: 5,
        key: KEY
    }
})