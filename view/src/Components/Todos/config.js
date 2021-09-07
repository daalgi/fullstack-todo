const PRIORITY_VALUES = ['high', 'normal', 'low']

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
        priority: "normal",
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
        priority: "high",
        tags: ["foundation"]
    },
    {
        _id: 3,
        user: "daalgi",
        text: "5113 - Optimize the shear reinforcement with less bars of greater diameter and higher strength grade. Do not consider the minimum reinforcement accordingto EN1992-1-1.",
        date: {
            created: "2020-10-13",
            due: "2020-12-31",
            done: null
        },
        priority: "low",
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
        priority: "normal",
        tags: ["foundation"]
    }
]
/*
for (let i = 0; i < 10; i++) {
    apiTodos.push({
        _id: 5+i, user: "daalgi", text: "Alea iacta est.", priority:"low", tags: ["latin"],
        date: { created: "2020-10-"+String(i), due: "2020-12-2"+String(i), done: null }
    })
}*/


const DEFAULT_TODO = {
    _id: null,
    user: "",
    text: "",
    date: { created: null, due: null, done: null },
    priority: 2,
    tags: []
}

export {
    PRIORITY_VALUES,
    apiTodos,
    DEFAULT_TODO
}