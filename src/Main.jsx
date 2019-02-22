import React, { Component } from 'react';
import { list } from './services/api';
import Input from './components/Input';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment } from './providers/store/counter';

const component = connect(({ counter }) => ({
  counter
}), bindActionCreators.bind(undefined, {
  increment
}));

export class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.potato = true;
    return list().then(x => this.potato && this.setState({ x }));
  }

  componentWillUnmount() {
    this.potato = false;
  }

  updateUser(index, title) {
    const { x } = this.state;
    const y = x.slice();
    y[index] = { ...y[index], title };
    this.setState({ x: y });
  }

  updateValue() {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    const { increment, counter } = this.props;
    const { x = [] } = this.state;
    return <>
      {counter}
      Hello World!!
    <button onClick={() => increment(1)}>Test</button>
      {x.slice(0, 10).map((x, i) => <Input key={x.id} value={x.title} onChange={(x, y) => this.updateUser(i, y)} />)}
    </>;

  }
}

export default component(Main);
