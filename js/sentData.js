export const sentData = (formDataObject) => {
try {
    fetch('https://api',{
        method:'POST',
        headers:{
            "Content-Type":'application/json'
        },
        body:JSON.stringify(formDataObject)
    });
if (response.ok){
    allert(`Data successfully sent `);    
}
} catch (error) {
    console.error(`${error}`) 
}
}