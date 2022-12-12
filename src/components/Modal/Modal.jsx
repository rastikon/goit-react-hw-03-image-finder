import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') this.props.closeModal();
  };

  handleBackdrop = e => {
    if (e.target === e.currentTarget) this.props.closeModal();
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <div className="Overlay" onClick={this.handleBackdrop}>
        <div className="Modal">
          <img src={children.modalImg} alt={children.alt} />
        </div>
      </div>,
      modalRoot
    );
  }
}
