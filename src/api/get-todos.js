import apiService from "../services/api-service";

// cb: callback function to return the data to its source
const getTodos = async (cb) => {
    const response = await apiService.get("todos");
    cb?.(response)

    // apiService.get("todos").then((data) => cb?.(data))
}

export default getTodos