export const fetchData = async() => {
try {
    const responce = await fetch('https:///api');
    if (!responce.ok){
        throw new Error(`https error! status: ${responce.status}`)
    }
} catch (error) {
    console.error('data acquisition error');
}
}