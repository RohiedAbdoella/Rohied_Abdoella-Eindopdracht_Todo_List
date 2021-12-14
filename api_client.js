//LOCAL API
const BASE_URL = "http://localhost:3000/";

//Fetch data from API
const getData = async () => {

    const APIEndpoint = `${BASE_URL}`;
    try {
        const res = await fetch(APIEndpoint, {
            method: "GET",
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
        });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

//Post data to API
const postToDo = async (task) => {

    const APIEndpoint = `${BASE_URL}`;
    const data = { description: task, done: false };

    try {
        const res = await fetch(APIEndpoint, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
        });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

//Delete data from API
const deleteToDo = async (id) => {

    const APIEndpoint = `${BASE_URL}${id}`;

    const res = await fetch(APIEndpoint, {
        method: "DELETE"

    });

}
