import React from "react";

/**
 * @return
 */
function App() {
  function constructor(props) {
    this.state = {
      newitem: "",
      list: [],
    };
  }

  function updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  function addItem() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: "",
    });
  }

  function deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }

  function render() {
    return (
      <div>
        <h1 className="app-title">MY LIST</h1>

        <div className="container">
          <div
            style={{
              padding: 30,
              textAlign: "left",
              maxWidth: 500,
              margin: "auto",
            }}
          >
            Add an Item...
            <br />
            <input
              type="text"
              placeholder="Type item here"
              value={this.state.newItem}
              onChange={(e) => this.updateInput("newItem", e.target.value)}
            />
            <button
              className="add-btn btn-floating"
              onClick={() => this.addItem()}
              disabled={!this.state.newItem.length}
            >
              <i class="material-icons"> + </i>
            </button>
            <br /> <br />
            <ul>
              {this.state.list.map((item) => {
                return (
                  <li key={item.id}>
                    {item.value}
                    <button
                      className="btn btn-floating"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      <i class="material-icons">x</i>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
