import Form from "react-bootstrap/Form";
import "../App.css";

function Switch(props) {
  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        className="form-switch"
        onChange={props.onChange}
      />
    </Form>
  );
}

export default Switch;
