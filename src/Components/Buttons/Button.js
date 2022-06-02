import { useNavigate } from "react-router-dom";

export default function Button(props) {
	const navigate = useNavigate();
	return (
		<button className="back" onClick={() => navigate(-1)}>
			← Go Back
		</button>
	);
}
