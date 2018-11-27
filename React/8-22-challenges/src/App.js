import React, { Component } from 'react';
import './App.css';
import Hello from './Hello';
import Contact from './Contact';

class App extends Component {
  constructor () {
    super()

    this.updateStatus  = this.updateStatus.bind(this);

    this.state={
      firstName: 'Seyfat the SKIPPER',
      contactData: [
        {status: 'orange', first: 'Steve', last: 'Rodgers', cell: '444-444-4444'},
        {status: 'orange', first: 'Tony', last: 'Stark', cell: '111-111-1111'},
        {status: 'orange', first: 'Natasha', last: 'Romanoff', cell: '777-777-7777'},
        {status: 'orange', first: 'Thor', last: 'Son of Oden', cell: '333-333-3333'},
        {status: 'orange', first: 'Thanos', last: '', cell: '666-666-6666'}
      ]
    }
  }

  updateStatus = (index) => {
    var contacts = this.state.contactData;

    if (contacts[index].status === 'orange') {
      contacts[index].status = 'teal'
    } else {
      contacts[index].status = 'orange'
    }

    this.setState({
      contactData: contacts
    });
  }

  render() {

    return (
      <div>
        <Hello 
          header= {this.state.firstName}
        />
        
        {this.state.contactData.map((contactList, index) => {
          return <Contact 
            key={index}
            index={index}
            status={contactList.status}
            first= {contactList.first}
            last= {contactList.last}
            cell= {contactList.cell}
            updateStatus={this.updateStatus}
          />
        })}
      </div>

    )
  }
}

export default App;