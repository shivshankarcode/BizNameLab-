export const fetchData = async (inputs) => {
    try{
        const response = await fetch('/api/fetch-data', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({inputs})
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Re-throw the error for further handling if needed
    }
}