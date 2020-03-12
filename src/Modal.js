import React from "react";
import ReactDOM from "react-dom";
import { imageArray } from "./models";

const Modal = ({ isShowing, hide }) =>
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
                  {imageArray
                    ? imageArray.map(image => (
                        <React.Fragment key={image.title}>
                          <div>{image.title}</div>
                          <img alt={image.title} src={image.url} />
                        </React.Fragment>
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
