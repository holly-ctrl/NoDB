import React, {Component} from 'react'
import axios from 'axios'
import Deli from './Deli'
import './ChzBoard.css'

export default class ChzBoard extends Component {
    constructor() {
        super()

        this.state = {
            cheeseAdded: [],
            occasionName: '',
            displayName: ''
        }
        this.addChz = this.addChz.bind(this)
    }

    componentDidMount() {
        axios 
            .get('api/chzBoard')
            .then(res => {
                console.log(res)
                this.setState({
                    cheeseAdded: res.data.cheeses,
                    displayName: res.data.name
                })
            })
    }

    addChz(body) {
        axios.post('/api/deli', body)
        .then(res => {
            console.log(res.data)
            this.setState({
                cheeseAdded: res.data.cheeses
            })
        })
    }

    deleteChz(id) {
        const config = {params:{id:id}}
        axios.delete(`/api/chzBoard`, config)
        .then(res => {
            this.setState({
                cheeseAdded: res.data.cheeses
            })
        })
    }

    occasionName() {
        const data = {name: this.state.occasionName}
        axios
        .put(`/api/chzBoard`, data)
        .then(res => {
            console.log({res})
            this.setState({
                displayName: res.data.name
            })
        })
    } 

    occasionHandler(event) {
        const occasionName = event.target.value
        this.setState({
            occasionName
        })
    }



    render() {
        return (
            <div class='CheeseBoard'>
                <div class='title'>{this.state.displayName}</div>
                <input onChange={(event) => this.occasionHandler(event)} value={this.state.occasionName}placeholder='Name the Occasion'></input>
                <div class='occasionButton'
                    onClick={() => this.occasionName()}>edit
                </div>
                {this.state.cheeseAdded.map((el, index) => {
                    return (
                        <div class='container' key={index}>
                            <h2>{el.name}</h2>
                            <img src={el.img} alt={el.name} />
                            <div class='rmButton' onClick={() => this.deleteChz(index)}>Remove</div>
                        </div>
                    )
                })}
                <Deli addchzfn={this.addChz}/>
            </div>
        )
    }
}