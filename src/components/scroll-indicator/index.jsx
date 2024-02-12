import "./scroll.css";
import { useEffect, useState } from "react";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPercent, setScrollPercent] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handleScrollPercent() {
    //// console.log(
    ////   document.body.scrollTop,
    ////   document.documentElement.scrollTop,
    ////   document.documentElement.scrollHeight,
    ////   document.documentElement.clientHeight
    //// );

    const scrolledValue =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercent((scrolledValue / height) * 100);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercent);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  //// console.log(data, scrollPercent);

  if (errorMsg) {
    return <div>Error occurred: {errorMsg}</div>;
  }

  if (loading) {
    return <div>Loading Data... Please wait!</div>;
  }

  return (
    <div className="container-sc">
      <div className="scroll-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-container">
          <div
            className="scroll-progress-bar"
            style={{ width: `${scrollPercent}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
				<h2>Scroll Data</h2>
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}
