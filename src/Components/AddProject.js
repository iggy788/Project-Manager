import React, { Component } from "react";
import uuid from "uuid";
import PropTypes from 'prop-types';

class AddProject extends Component {
	constructor() {
		super();
		this.state = {
			newProject: {}
		};
	}

	static defaultProps = {
		categories: ["Custom Integration", "Custom Reporting", "Custom Salesforce Integration", "Custom SMS SOlution", "Custom IVR", "Custom PCA/IVR Webhook", "Custom Email Notifications", "East Migration", "Custom SourceTrak/Reporting APIs", "Custom Click-to-Call Solution", "Custom Routing Solution"]
		// type:["Central Account","East Account"]
	};

	handleSubmit(e) {
		if (this.refs.title.value === "") {
			alert("Title is required");
		} else {
			this.setState(
				{
					newProject: {
						id: uuid.v4(),
						title: this.refs.title.value,
						category: this.refs.category.value
						// type: this.refs.type.value
					}
				},
				function() {
					//console.log(this.state);
					this.props.addProject(this.state.newProject);
				}
			);
		}
		e.preventDefault();
	}

	render() {
		let categoryOptions = this.props.categories.map(category => {
			return (
				<option key={category} value={category}>
					{category}
				</option>
			);
		});
		// let accountOptions = this.props.types.map(type => {
		// 	return (
		// 		<option key={type} value={type}>
		// 			{type}
		// 		</option>
		// 	);
		// });
		return (
			<div>
				<h3>Add Project</h3>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div>
						<label>Title</label>
						<br />
						<input type="text" ref="title" />
					</div>
					<div>
						<label>Category</label>
						<br />
						<select ref="category">{categoryOptions}</select>
					</div>

					<br />
					<input type="submit" value="Submit" />
					<br />
				</form>
			</div>
		);
	}
}

AddProject.propTypes = {
	categories: PropTypes.array,
	// types: PropTypes.array,
	addProject: PropTypes.func
};

export default AddProject;
