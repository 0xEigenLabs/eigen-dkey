export const getLocationParam = (key: string) => {
    var locationHref = window.location.href as any,
    rexp = new RegExp("[&?]{1}" + key + "=([^&?|^#?]*)", "ig");
    return locationHref.match(rexp) ? decodeURI(locationHref.match(rexp)[locationHref.match(rexp).length-1].substr(key.length + 2)) : (locationHref = document.referrer, locationHref.match(rexp) ? decodeURI(locationHref.match(rexp)[locationHref.match(rexp).length-1].substr(key.length + 2)) : "");
}

export const saveToLocalStorage = (obj: Record<string, string>) => {
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object') {
            window.localStorage.setItem(key, JSON.stringify(obj[key]))
        }else {
            window.localStorage.setItem(key, obj[key])
        } 
    })
}

export const getFromStorage = (key: string) => {
    return window.localStorage.getItem(key)
}