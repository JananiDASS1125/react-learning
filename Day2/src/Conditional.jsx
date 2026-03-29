//Method 1
function Message(props) {
  return (
    <div>
      {props.show === true ? (
        <h2>Welcome User</h2>
      ) : (
        <h2>Please Login</h2>
      )}
    </div>
  );
}

export default Message;

//Method 2
function Message(props) {
  return (
    <div>
      {props.show ? (
        <h2>Welcome User</h2>
      ) : (
        <h2>Please Login</h2>
      )}
    </div>
  );
}

//Method 3
function Message(props) {
  return (
    <div>
      {props.show && <h2>Welcome User</h2>}
    </div>
  );
}

//Method 4
function Message(props) {
  let text;

  if (props.show) {
    text = "Welcome User";
  } else {
    text = "Please Login";
  }

  return <h2>{text}</h2>;
}
