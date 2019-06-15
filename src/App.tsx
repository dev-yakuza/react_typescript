import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Props {}

const App = ({  }: Props) => {
  return <h1>Hello World!</h1>;
};

ReactDOM.render(<App />, document.getElementById('app'));
