import React, { Component } from 'react'

class UpdateContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:this.props.data.id,
      title:this.props.data.title,
      desc:this.props.data.desc
    }
    this.inputFormHanlder = this.inputFormHanlder.bind(this)
  }
  inputFormHanlder(e){
    this.setState({[e.target.name]:e.target.value})
  }
  render() {
    return (
      <article>
        <h2>Update</h2>
        <form 
          action="/create_process" 
          method="post" 
          onSubmit={
            function(e){
              e.preventDefault()
              this.props.onSubmit(
                this.state.id,
                this.state.title,
                this.state.desc
              );
            }.bind(this)
          }
        >
          <input 
            type="hidden" 
            name="id" 
            value={this.state.id} 
          />
          <p>
            <input 
              type="text" 
              name="title" 
              placeholder="title" 
              value={this.state.title}
              onChange={
                this.inputFormHanlder
              }
            />
          </p>
          <p>
            <textarea 
              name="desc" 
              placeholder="description" 
              value={this.state.desc}
              onChange={
                this.inputFormHanlder
              }
            />
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      </article>
    );   
  }
}

export default UpdateContent