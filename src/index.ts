const packageJSON = require("../package.json");

import Sequelize = require("sequelize");
const sequelize = new Sequelize("database", "user", "password", {
    dialect: "sqlite",
    storage: "./db.sqlite"
});

interface IssueData{
    org: string;
    repo: string;
    url: string;
    title: string;
    updatedOnGithub: Date;
    state: string;
    type: number;
}

function initialize(sequelize: Sequelize.Sequelize){
    const Issue = sequelize.define<{}, IssueData>("issue", {
        org: {
            type: Sequelize.STRING
        },
        repo: {
            type: Sequelize.STRING
        },
        url: {
            type: Sequelize.STRING
        },
        title: {
            type: Sequelize.STRING
        },
        updatedOnGithub: {
            type: Sequelize.DATE
        },
        state: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.INTEGER
        }
    });

    Issue.create({
        org: "abc",
        repo: "repo1",
        url: "http://aaa",
        title: "this is a issue",
        updatedOnGithub: new Date(),
        state: "open",
        type: 1
    }).then((r:any)=>{
        console.log(r.toJSON())
    }).catch((error)=>{
        console.warn(error);
    });

    Issue.findAll({})
        .then((list)=>{
            list.forEach((r:any)=>{
                console.log(r.toJSON())
            })
        })
        
}

sequelize.authenticate()
    .then(()=>{
        console.log("connected");
        initialize(sequelize);
    }).catch((error)=>{
        console.warn(error);
    });