import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, Checkbox, Button } from 'semantic-ui-react'

const questions =  {
  Q1: 'Life is good, great things have happened to you, what alcoholic drink to you pick to celebrate?',
  Q2: 'Favourite Film...of all time?',
  Q3: 'Favourite TV Show you have ever seen?',
  Q4: 'Favourite Item of clothing who have once owned (describe it a little)?',
  Q5: `You're on death row, its you last meal, pick your starter main course, and dessert?`,
  Q6: 'If Brexit gets too much and you move have to move another country, money no object, where do you go?',
  Q7: `That one country you've always wanted to vist, but never made it?`,
  Q8: `Time travel has been invented, which year/period/decade etc do you go to first?`,
  Q9: 'Desert island book?',
  Q10:`The Song you couldn't listening to this year?`
  }

export class App extends Component {

state = {
currentName: '',
Q1: '',
Q2: '',
Q3: '',
Q4: '',
Q5: '',
Q6: '',
Q7: '',
Q8: '',
Q9: '',
Q10:'',
results: null,
showResults: false,
buttonReveal: false,
revealNames: false,
displayResults: false
}

setName = (event) => {
  this.setState({
    currentName: event.target.value
  })
}


setAnswer = (event) => {
  let idQ = event.target.id
  console.log(idQ)

  this.setState({
    [idQ]: event.target.value
  })
}

buttonReveal = (name) => {
let output = ''
  if ( name === 'Chris') {
   output = true
  }else {
    output = false
  }
this.setState({
  buttonReveal:output
})
}


  submitAnswers = (event) => {
//event.preventdefault()
    this.buttonReveal(this.state.currentName)
    const name = this.state.currentName
    const submission = 
      {Q1: this.state.Q1,
      Q2: this.state.Q2,
      Q3: this.state.Q3,
      Q4: this.state.Q4,
      Q5: this.state.Q5,
      Q6: this.state.Q6,
      Q7: this.state.Q7,
      Q8: this.state.Q8,
      Q9: this.state.Q9,
      Q10: this.state.Q10}
      

    this.setState({
      results: {...this.state.results,[this.state.currentName]:submission}
      
    })

    this.setState({
      currentName: '',
      Q1: '',
      Q2: '',
      Q3: '',
      Q4: '',
      Q5: '',
      Q6: '',
      Q7: '',
      Q8: '',
      Q9: '',
      Q10:'',
    })
  }
  showResults = () => {
     // console.log(this.state.results.Object.keys(this.state.results)[0])
       this.setState({
         showResults: true
       })

       let displayQs = {}
       for (let index = 0; index < Object.keys(questions).length; index++) {
         const qKey = Object.keys(questions)[index];
         const qVal =  Object.values(questions)[index]
         
          let toAdd = this.formatResults(qKey)
          console.log(toAdd)
        
         displayQs[qKey] = toAdd

          }

          this.setState({
            displayResults: displayQs
          })

        }
  formatResults = (question) => {
        //let noPeople = Object.keys(this.state.results).length -1
        let peopleArray = Object.keys(this.state.results)
        let order = this.shuffle(peopleArray)
      const inputQ = question
     let outputObj = {}

      console.log(question)
     

    for (let index = 0; index < order.length; index++) {
      const name = order[index];
      let pointInObj = this.state.results[name]
      let answer = pointInObj[inputQ]
      
      outputObj[name] = answer
    }

  
        
    return outputObj
        }
        
        
        
        
        shuffle = (array) => {
          let currentIndex = array.length, temporaryValue, randomIndex;
          
          // While there remain elements to shuffle...
          while (0 !== currentIndex) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }
          
          return array;
        }



        mapDisplayAll = (question) => {
          if (this.state.revealNames){
          return Object.keys(this.state.displayResults[question]).map(key => {
            return <p>{key}: {this.state.displayResults[question][key]}</p> 
          })}else{
          return Object.keys(this.state.displayResults[question]).map(key => {
            return <p>{this.state.displayResults[question][key]}</p> 
          })}



        }
        
         
        render() {
          
          return (

<div style={{padding:'10px'}}>

<header>
<h1>Chris'mas Quiz 2019</h1>

</header>
<br></br>
<div style={{display: `${this.state.showResults ? 'none' : 'block'}`}}>
<Form size='small' key='small' onSubmit={event => this.submitAnswers(event)}>
<Form.Field>
      <label>Name</label>
      <input id='name' type='text' onChange={event => this.setName(event)} value={this.state.currentName} placeholder='Name' />
    </Form.Field>
    <Form.Field>
      <label>Q1. {questions.Q1}</label>
      <input id='Q1' type='text' onChange={event => this.setAnswer(event)} value={this.state.Q1} placeholder='Q1 Answer' />
    </Form.Field>
    <Form.Field>
      <label>Q2. {questions.Q2}</label>
      <input id='Q2' type='text' onChange={event => this.setAnswer(event)} value={this.state.Q2} placeholder='Q2 Answer' />
    </Form.Field>
    <Form.Field>
      <label>Q3. {questions.Q3}</label>
      <input id='Q3' type='text' onChange={event => this.setAnswer(event)} value={this.state.Q3} placeholder='Q3 Answer' />
    </Form.Field>
    <Form.Field>
      <label>Q4. {questions.Q4}</label>
      <input id='Q4' type='text' onChange={event => this.setAnswer(event)} value={this.state.Q4} placeholder='Q4 Answer' />
    </Form.Field>
    <Form.Field>
      <label>Q5. {questions.Q5}</label>
      <input id='Q5' type='text' onChange={event => this.setAnswer(event)} value={this.state.Q5} placeholder='Q5 Answer' />
    </Form.Field>
    <Form.Field>
      <label>Q6. {questions.Q6}</label>
      <input id='Q6' type='text' onChange={event => this.setAnswer(event)} value={this.state.Q6} placeholder='Q6 Answer' />
    </Form.Field>
    <Form.Field>
      <label>Q7. {questions.Q7}</label>
      <input id='Q7' type='text' onChange={event => this.setAnswer(event)} value={this.state.Q7} placeholder='Q7 Answer' />
    </Form.Field>
    <Form.Field>
      <label>Q8. {questions.Q8}</label>
      <input id='Q8' type='text' onChange={event => this.setAnswer(event)} value={this.state.Q8} placeholder='Q8 Answer' />
    </Form.Field>
    <Form.Field>
      <label>Q9. {questions.Q9}</label>
      <input id='Q9' type='text' onChange={event => this.setAnswer(event)} value={this.state.Q9} placeholder='Q9 Answer' />
    </Form.Field>
    <Form.Field>
      <label>Q10. {questions.Q10}</label>
      <input id='Q10' type='text' onChange={event => this.setAnswer(event)} value={this.state.Q10} placeholder='Q10 Answer' />
    </Form.Field>
    
    <Button type='submit'>Submit</Button>
  </Form>
<br></br>
<br></br>
    <Button style={{display: `${this.state.buttonReveal ? 'block' : 'none'}`}} onClick={event => this.showResults()}>Show Results</Button>

</div>


<div style={{display: `${!this.state.showResults ? 'none' : 'block'}`}}>
<Button onClick={event => this.setState({revealNames: !this.state.revealNames})}>Reveal Names</Button>

<h4>Q1. {questions.Q1}</h4>
<p>{this.state.displayResults ? this.mapDisplayAll('Q1') : ''}</p>
<h4>Q2. {questions.Q2}</h4>
<p>{this.state.displayResults ? this.mapDisplayAll('Q2') : ''}</p>
<h4>Q3. {questions.Q3}</h4>
<p>{this.state.displayResults ? this.mapDisplayAll('Q3') : ''}</p>
<h4>Q4. {questions.Q4}</h4>
<p>{this.state.displayResults ? this.mapDisplayAll('Q4') : ''}</p>
<h4>Q5. {questions.Q5}</h4>
<p>{this.state.displayResults ? this.mapDisplayAll('Q5') : ''}</p>
<h4>Q6. {questions.Q6}</h4>
<p>{this.state.displayResults ? this.mapDisplayAll('Q6') : ''}</p>
<h4>Q7. {questions.Q7}</h4>
<p>{this.state.displayResults ? this.mapDisplayAll('Q7') : ''}</p>
<h4>Q8. {questions.Q8}</h4>
<p>{this.state.displayResults ? this.mapDisplayAll('Q8') : ''}</p>
<h4>Q9. {questions.Q9}</h4>
<p>{this.state.displayResults ? this.mapDisplayAll('Q9') : ''}</p>
<h4>Q10. {questions.Q1}</h4>
<p>{this.state.displayResults ? this.mapDisplayAll('Q10') : ''}</p>

</div>


</div>




  );
}
}

export default App;
