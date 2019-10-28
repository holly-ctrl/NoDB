const cheese= require('../cheese.json')

const stockDeli = [2]
let id = 0
const cheeseBoard = {
    name: 'ChzBoard',
    cheeses: []
}

module.exports = {
    stockDeli: (req, res) => {
        res.status(200).send(cheese)
    },
    addChz: (req, res) => {
        const newChz = {...req.body}
        cheeseBoard.cheeses.push(newChz)
        res.status(200).send(cheeseBoard)
    },
    chzboard: (req, res) => {
        res.status(200).send(cheeseBoard)
    },
    removeChz: (req, res) => {
        const {id} = req.params
        const index = cheeseBoard.cheeses.findIndex(el =>   el.id === +id)
        cheeseBoard.cheeses.splice(index, 1)
        res.status(200).send(cheeseBoard)
    }, 
    occasion: (req, res) => {
        console.log(req.body)
            cheeseBoard.name = req.body.name
            res.status(200).send(cheeseBoard)  
    }
}