import React from 'react';
import ReactDOM from 'react-dom';

const appRoot = document.getElementById('app');
const modalRoot = document.getElementById('modal');

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    if (this.props.value) {
      this.el.setAttribute('class', 'ModalForm');
      return (
        <div className="Modal">
          {ReactDOM.createPortal(
            this.props.children,
            this.el,
          )}
        </div>
      );
    }
    this.el.setAttribute('class', '');
    return null;
  }
}
