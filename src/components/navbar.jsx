import "../styles/navbar.css"
import AddMovie from "./addMovie"

function Navbar(props) {
	const { movieName, setMovieName  } = props

	return (
		<div>
			<div className="navigation-bar">
				<div className="name-form">
					<form>
						<h4
							className="title"
						>
							Introduce a name
        	</h4>
						<input
							className="input-field"
							type="text"
							value={movieName}
							onChange={e => {
								e.preventDefault();
								setMovieName(e.target.value)
							}}
						/>
					</form>
				</div>
				<AddMovie />
			</div>
		</div>
	)
}

export default Navbar