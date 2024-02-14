import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalPage() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div className="modal-wrapper">
      <h1>Custom Modal Component</h1>
      <button onClick={handleModalPopup}>Open Modal</button>
      {showModalPopup && (
        <Modal
          onClose={onClose}
          header={<div>Welcome to Our Application!</div>}
          body={
            <div>
              <p>
                {" "}
                We're thrilled to have you on board. Before you dive into the
                full experience, we'd like to remind you of a few things to
                enhance your journey with us.
              </p>{" "}
              <h4>Privacy and Security:</h4>{" "}
              <p>
                Your privacy and the security of your data are our top
                priorities. We continuously work to protect your information and
                ensure a safe and secure environment for all our users. Please
                review our Privacy Policy and Terms of Service for more details.
              </p>{" "}
              <h4>Getting Started:</h4>
              <ul>
                <li>
                  <h5>Explore Features:</h5>
                  <p>
                    Take a moment to explore the various features available to
                    you. From tracking your progress to connecting with friends,
                    there's something for everyone.
                  </p>
                </li>
                <li>
                  <h5>Customize Your Profile:</h5>
                  <p>
                    Make your profile your own by adding a profile picture,
                    setting your preferences, and customizing your settings.
                  </p>
                </li>
                <li>
                  <h5>Support & Feedback:</h5>
                  <p>
                    Your feedback is invaluable to us. If you have any questions
                    or suggestions, please don't hesitate to reach out through
                    our support center.
                  </p>
                </li>
              </ul>{" "}
              <h4> Stay Connected:</h4>{" "}
              <p>
                {" "}
                Don't miss out on updates, tips, and special offers. Subscribe
                to our newsletter and follow us on our social media channels.
              </p>{" "}
              <p>
                <span style={{ color: "blueviolet" }}>
                  [Accept and Continue]
                </span>
                <span style={{ color: "blue" }}>[Review Privacy Policy]</span>
              </p>
              <p>
                Thank you for choosing us, and we look forward to being a part
                of your journey.
              </p>
            </div>
          }
        />
      )}
    </div>
  );
}
