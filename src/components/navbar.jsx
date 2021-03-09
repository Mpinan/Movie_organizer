import AddMovie from "./addMovie"

function Navbar(props) {
	const { movieName, setMovieName } = props

	return (
		<div>
			<div className="navigation-bar">
				<div className="name-form">
					<form>
						<h4
							className="title"
						>
							Welcome to THE move organizer
        	</h4>
						<input
							className="input-field"
							type="text"
							placeholder="Introduce a name, year or director"
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