import React, { Component } from 'react';
interface Props {
  handleSubmit: (value: string) => void
}
interface State {
  itemText: string
}
class TodoItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      itemText: ''
    }
  }
  render() {
    return (
      <div>
        <input type="text" />
      </div>
    );
  }
}

export default TodoItem;
