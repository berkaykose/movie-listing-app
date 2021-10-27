export default {
    getMovie(search) {
        const apiUrl = 'https://www.omdbapi.com/?s=' + search + '&y=2020&apikey=da4c7db4'
        return apiUrl;
    }
}