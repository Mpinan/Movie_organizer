import AddMovie from "./addMovie"

function Navbar(props) {
	const { movieName, setMovieName } = props

	return (

		<div className="navigation-bar">
			<div className="name-form">
				<form>
					<h4
						data-testid="title"
						className="title"
					>
						Movie organizer
        	</h4>
					<input
						data-testid="movie-name"
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

	)
}

export default Navbar