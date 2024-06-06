const FourOhFour = () => {
  return (
    <div>
      <img src="https://i.ibb.co/r5JnTJW/images-removebg-preview.png" alt="" />
      <button
        onClick={() => (window.location.href = "/")}
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Refresh Page
      </button>
    </div>
  );
};

export default FourOhFour;
