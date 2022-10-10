import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import "./modal.scss";

const Modal = ({ id, active, children }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  return (
    <div id={id} className={`modal ${isActive ? "active" : ""}`}>
      {children}
    </div>
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  active: PropTypes.bool,
};

export const ModalContent = ({ onClose, children }) => {
  const contentRef = useRef(null);

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (onClose) onClose();
  };

  return (
    <div className="modal__content">
      {children}
      <div className="modal__content__close" onClick={closeModal}>
        <i className="bx bx-x"></i>
      </div>
    </div>
  );
};

ModalContent.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;
