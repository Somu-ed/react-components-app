import html2canvas from "html2canvas";
import { useRef, useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  const qrRef = useRef();

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  function handleDownloadQR() {
    html2canvas(qrRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "qr-code.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  }

  return (
    <div className="qr-container">
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter Content"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
          style={{ backgroundColor: "#2bb1ff" }}
        >
          Generate QR
        </button>
      </div>
      <div ref={qrRef} className="qr-frame">
        <QRCode value={qrCode} size={400} bgColor="transparent" />
      </div>
      <button
        disabled={!qrCode}
        onClick={handleDownloadQR}
        style={{ backgroundColor: "#2bffa7" }}
      >
        Download QR Code
      </button>
    </div>
  );
}
