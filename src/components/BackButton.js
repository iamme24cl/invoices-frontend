import { useHistory } from "react-router-dom";

const BackButton = () => {
    let history = useHistory();
    return (
        <>
          <button className="btn btn-dark" onClick={() => history.goBack()}>Back</button>
        </>
    );
};

export default BackButton;