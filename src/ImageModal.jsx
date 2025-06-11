import React from "react";
import "./ImageModal.css";

const ImageModal = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  if (!images.length) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={images[currentIndex]} alt="project" className="modal-img" />
        <button className="modal-prev" onClick={onPrev}>❮</button>
        <button className="modal-next" onClick={onNext}>❯</button>
        <button className="modal-close" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};

export default ImageModal;
