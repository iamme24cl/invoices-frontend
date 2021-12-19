import { useHistory } from "react-router-dom";

const BackButton = () => {
    let history = useHistory();
    return (
        <>
          <button style={{width: "75px"}} className="btn btn-dark" onClick={() => history.goBack()}>Back</button>
        </>
    );
};

export default BackButton;