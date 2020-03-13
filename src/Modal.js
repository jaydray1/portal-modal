import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isShowing, hide, images, modalHandler }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <button
              type="button"
              className="modal-close-button"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hide}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div
              className="modal"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <div className="modal-header">
                <div>
                  {images
                    ? images.map(image => (
                        <div
                          key={image.title}
                          onClick={() => modalHandler(image.title)}
                        >
                          <div>{image.title}</div>
                          <img alt={image.title} src={image.url} />
                        </div>
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
