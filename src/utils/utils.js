export const getDate = (date) => {
    const months = [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"
    ];

    const formatedDate = date.slice(0,10);
    
    const day = formatedDate.slice(8, 10);
    const month = formatedDate.slice(5,7)[0] == 0 ? formatedDate.slice(6,7) : formatedDate.slice(5,7);
    const year = formatedDate.slice(0, 4);
    
    const resultDateString = `${months[month-1]} ${day}, ${year}`;
    
    return resultDateString;
} 


export const loadMediumFeed = async () => {
    const feedUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@chaoskid';

    const responseData = await (await fetch(feedUrl)).json();
    
    return responseData.items;
}