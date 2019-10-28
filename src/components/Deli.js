import React, {Component} from 'react'
import axios from 'axios'
import './Deli.css'

export default class Deli extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            origin: '',
            milk_source: '',
            img: '',
            pairings: [],
            cheeseArray: [],
            chzPost: []
        }  
    }
    
    componentDidMount() {
        axios.get('/api/deli')
        .then(res => {
            this.setState({
                cheeseArray: res.data
            })
        })
    }


    render() {
        return (
            <div>
                <h1>Deli</h1>
                {this.state.cheeseArray.map(el => {
                    return (
                    <div class='deliItems'>
                        <h3>{el.name}</h3>
                        <ul>
                            <li>Origin: {el.origin}</li>
                            <li>Milk Source: {el.milk_source}</li>
                            <li>Pairings: {el.pairings}</li>
                        </ul>
                        <div class='button' onClick={() => this.props.addchzfn(el)}>Add</div>
                    </div>
                    )
                })}
            </div>
        )
    }
}