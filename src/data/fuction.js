const getPathImage = (imageName) => {
    return new URL(`../assets/img/${imageName}.png`, import.meta.url).href
    }
    
    
    export { getPathImage }