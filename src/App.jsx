import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  // Extract 'cert' parameter from the URL query string
  const params = location.search;

  // Decode the URL to restore the full Firebase link, including the token

  const slicePath = params.split("?cert=")[1];
  console.log("slicePath =", slicePath);

  return (
    <div>
      {params ? (
      <iframe
      src={slicePath}
      height="700px"
      width="100%"
      title="PDF Viewer"
      style={{ overflow: "hidden", border: "none" }}
      scrolling="no" 
    ></iframe>
      ) : (
        <p>No PDF found</p>
      )}
    </div>
  );
}

export default App;