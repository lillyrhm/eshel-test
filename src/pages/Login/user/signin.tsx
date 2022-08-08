export const getUser = () => {
    const userStr = localStorage.getItem("phone");
    if (userStr) {
        return JSON.parse(userStr);
    } else {
        return null;
    }
}

export const getToken = () => {
    return localStorage.getItem("token") || null;
}

export const setUserSession = (token: string, phone: number) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(phone));
}

export const removeUserSession = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("phone");
}
