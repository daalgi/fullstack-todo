const PRIORITY_VALUES = [1, 2, 3]

const apiTodos = [
    {
        _id: 1,
        user: "daalgi",
        text: "5228 - Optimize the shear reinforcement with less bars of greater diameter and higher strength grade. Do not consider the minimum reinforcement accordingto EN1992-1-1.",
        date: {
            created: "2020-12-13",
            due: null,
            done: null
        },
        priority: "2",
        tags: ["foundation", "concrete", "reinforcement"]
    },
    {
        _id: 2,
        user: "daalgi",
        text: "5213 - Check gapping",
        date: {
            created: "2020-11-11",
            due: "2020-12-23",
            done: "2020-11-12"
        },
        priority: "1",
        tags: ["foundation"]
    },
    {
        _id: 3,
        user: "daalgi",
        text: "5113 - Optimize the shear reinforcement with less bars of greater diameter and higher strength grade. Do not consider the minimum reinforcement accordingto EN1992-1-1. Optimize the shear reinforcement with less bars of greater diameter and higher strength grade. Do not consider the minimum reinforcement accordingto EN1992-1-1. Optimize the shear reinforcement with less bars of greater diameter and higher strength grade. Do not consider the minimum reinforcement accordingto EN1992-1-1.",
        date: {
            created: "2020-10-13",
            due: "2020-12-31",
            done: null
        },
        priority: "3",
        tags: ["foundation", "concrete", "reinforcement"]
    },
    {
        _id: 4,
        user: "daalgi",
        text: "5013 - Check gapping",
        date: {
            created: "2020-10-11",
            due: "2020-12-25",
            done: "2020-11-02"
        },
        priority: "1",
        tags: ["foundation"]
    }
]
for (let i = 0; i < 10; i++) {
    apiTodos.push({
        _id: 5+i, user: "daalgi", text: "Alea iacta est.", priority:"2", tags: ["latin"],
        date: { created: "2020-10-"+String(i), due: "2020-12-2"+String(i), done: null }
    })
}


export {
    PRIORITY_VALUES,
    apiTodos
}