import React, {Component} from 'react'
import Styled from 'styled-components'


class Buttons extends Component {
    constructor(props){
        super(props)
        this.state ={
            text : 0   
        }
    }
    
    clicked1 = () =>{
        this.setState ({text : this.state.text + 1});
    }
    clicked2 = () =>{
        if(this.state.text <= 0){
            window.alert("angka tidak boleh kurang dari nol")
            return this.state.text
        }
        this.setState ({text : this.state.text -1});
    }
    clicked3 = () =>{
        this.setState ({text : 0})
    }
    
    render(){
        return  (
            <div>
                <div>
                    <Button onClick={this.clicked1} primary>tambah</Button>
                    <Input type="text" value={this.state.text}></Input>
                    <Button onClick={this.clicked2} primary>kurang</Button>
                </div>
                <div>
                    <Button onClick={this.clicked3} primary>Reset</Button>
                </div>
            </div>
        )
    }
}

 
export default Buttons



const Input = Styled.input`
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
height : 2.5em;
text-align : center;
height : 2em;
`

const Button  = Styled.button
`
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "palevioletred"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;