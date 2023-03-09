function Email({ email }) {
  const handleClick = () => {
    window.open(`mailto:${email}`, "_blank");
  };

  return (
    <div>
      <button onClick={handleClick} className="btn btn-danger custom-button">
        Send email
      </button>
    </div>
  );
}

export default Email;
