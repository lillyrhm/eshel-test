export const getUser = () => {
    const userStr = sessionStorage.getItem("user");
    if (userStr) {
        return JSON.parse(userStr);
    } else {
        return null;
    }
}

export const getToken = () => {
    return !!sessionStorage.getItem("token") || null;
}

export const setUserSession = (token, user) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(user));
}

export const removeUserSession = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}



//LocalStorage


export const getLocalUser = () => {
    const userLocal = localStorage.getItem("user");
    if (userLocal) {
        return JSON.parse(userLocal);
    } else {
        return null;
    }
}

export const getLocalToken = () => {
    return !!localStorage.getItem("token") || null;
}

export const setLocalUser = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
}

export const removeLocalUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}

