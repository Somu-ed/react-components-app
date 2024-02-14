export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{header ? header : "Modal Header"}</h2>
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
        </div>
        <div className="modal-body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is the Modal Body content</p>
            </div>
          )}
        </div>
        <div className="modal-footer">
          {footer ? footer : <h3>Modal Footer</h3>}
        </div>
      </div>
    </div>
  );
}
