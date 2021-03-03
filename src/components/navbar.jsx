function Navbar(props) {
	const { movieName, setMovieName, movies } = props

	return (
		<div className="nameForm">
			<form>
				<h4
					className="inputTitle"
				>
					Introduce a name
        </h4>
				<input
					className="inputField"
					type="text"
					value={movieName}
					onChange={e => {
						e.preventDefault();
						setMovieName(e.target.value)
					}}
				/>
				<div className="paddingButton">
					<a>Action</a>
					<a>Drama</a>
					<a>Humor</a>
					<a>Fiction</a>
				</div>
			</form>
		</div>
	)
}

export default Navbar