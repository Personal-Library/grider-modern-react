import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

// When you use {...formProps.input} it takes all those key value pairs and adds them as properties to the input element. This is the preferred way to give props to redux form input elements as of 02/24/2020.

class StreamCreate extends React.Component {
	constructor(props) {
		super(props);
		this.renderInput = this.renderInput.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className='ui error message'>
					<div className='header'>{error}</div>
				</div>
			);
		}
	}

	renderInput(formProps) {
		const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{formProps.label}</label>
				<input {...formProps.input} autoComplete='off' />
				<div>{this.renderError(formProps.meta)}</div>
			</div>
		);
	}

	onSubmit(formValues) {
		this.props.createStream(formValues);
	}

	render() {
		return (
			<form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<Field name='title' component={this.renderInput} label='Enter Title' />
				<Field name='description' component={this.renderInput} label='Enter Description' />
				<button className='ui button primary'>Submit</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};
	if (!formValues.title) {
		errors.title = 'You must enter a title';
	}
	if (!formValues.description) {
		errors.description = 'You must enter a description';
	}
	return errors;
};

const formWrapped = reduxForm({
	form: 'streamCreate',
	validate: validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
