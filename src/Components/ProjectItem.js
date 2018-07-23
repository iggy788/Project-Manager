import React, { Component } from "react";
import PropTypes from 'prop-types';

class ProjectItem extends Component {
	deleteProject(id) {
		this.props.onDelete(id);
	}

	render() {
		return (
			<li className="Project">
				<strong>{this.props.project.title}</strong>:{" "}
				{this.props.project.category}{" "}
				<a
					href = "https://docs.google.com/spreadsheets/d/1xBryP5xOg08teJ2noogYLFjFWJDtr6MninAqzl5ob-E/edit#gid=1391366981"
					onClick={this.deleteProject.bind(this, this.props.project.id)}
				>
					X
				</a>
			</li>
		);
	}
}

ProjectItem.propTypes = {
	project: PropTypes.object,
	onDelete: PropTypes.func
};

export default ProjectItem;
