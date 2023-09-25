export const getvideo = async (id) =>{
    const url_video = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=fcce835c96d12e0fcb23e6a67acdc5c4`
    const response = await fetch(url_video)   
    const data = await response.json()
    return data.results
   
    }
    
    
    
    
    