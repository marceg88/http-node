const https = require('https');

https.get("https://jsonplaceholder.typicode.com/todos", (res) => {
    let count = [];

    res.on("data", (chunk) => {
        count += chunk;
    });
    res.on("end", () => {
        const newCount = JSON.parse(count)
        for(const key in newCount) {
            const output = `Título ${newCount[key].title} Tarea ${key+1} (completed)
            - id: ${newCount[key].id}
            - userId: ${newCount[key].userId}`
            console.log(output)
        }
    })
})



