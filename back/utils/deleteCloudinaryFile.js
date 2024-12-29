

// extracting public id to remove the file from cloudinary
const getUniqeId = (url) => {
    const regex = /\/upload\/(?:v\d+\/)?([^\/]+)\.\w+$/;
    const match = url.match(regex);
    const unique =  match ? match[1] : null;
    return unique
}
    






