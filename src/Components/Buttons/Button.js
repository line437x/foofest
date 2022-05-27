import { useNavigate } from "react-router-dom";

export default function Button() {
	const navigate = useNavigate();
	return (
		<button className="back" onClick={() => navigate(-1)}>
			← Go Back
		</button>
	);
}
