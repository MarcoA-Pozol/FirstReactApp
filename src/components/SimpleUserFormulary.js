import React, {useState} from "react";
import "../styles/SimpleUserFormulary.css"

function SimpleUserFormulary = (props) => {
	const [username, setUsername] = useState(props.username);
	const [email, setEmail] = useState(props.email);
	const [password, setPassword] = useState(props.password);
	
	const user_data = useRef();
	
	def submitFormulary = () => {
		user_data.current = [username, email, password];
	};
	
	return (
		<div>
			<form className="users-formulary" onSubmit="{submitFormulary}">
				<p ref={user_data}></p>
				<button type="submit" onC>Submit</button>
			</form>
		</div>
	);
};

export default SimpleUserFormulary;