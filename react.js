
// A Simple Component


// class HelloMesage extends React.Component {
//     render(){
//         return(
//             <div>
//                 Hello{this.props.name}
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <HelloMesage name="miftah" />,
//     document.getElementById('hello-example')
// );

// detikan
// class Timer extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { seconds: 0 };
//     }
  
//     tick() {
//       this.setState(state => ({
//         seconds: state.seconds + 1
//       }));
//     }
  
//     componentDidMount() {
//       this.interval = setInterval(() => this.tick(), 1000);
//     }
  
//     componentWillUnmount() {
//       clearInterval(this.interval);
//     }
  
//     render() {
//       return (
//         <div>
//           Seconds: {this.state.seconds}
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(
//     <Timer />,
//     document.getElementById('timer-example')
//   );
  

  class TodoApp extends React.Component {
      constructor(props) {
          super(props)
          this.state = { items: [], text: ''}
          this.handChange = this.handChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);

      }

      render() {
          return(
              <div>
                  <h3>TODO</h3>
                  <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
    <label htmlFor="new-todo">
        What needs to be done?
    </label>
    <input 
    id="new-todo"
    onChange={this.handChange}
    value={this.state.text}
    />
    <button>
        Add #{this.state.items.length + 1}
    </button>
</form>
              </div>
          );
      }

      handChange(e) {
          this.setState({ text: e.target.value });
      }

      handleSubmit(e) {
          e.preventDefault();
          if (this.state.text.length === 0){
return;
          }
const newItem = {
    text: this.state.text,
    id: Date.now()
};
  this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

  class TodoList extends React.Component {
      render() {
          return (
              <ul>
                  {this.props.items.map(item =>(
                      <li key={item.id}>{item.text}</li>
                  ))}
              </ul>
          );
      }
  }

  ReactDOM.render(
      <TodoApp />,
      document.getElementById*('todos-example')
  );