import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<h4>Warning!</h4>
				Are you sure you want to do this?
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author="Joe"
					timeAgo={faker.date.past().toUTCString()}
					content={faker.random.words()}
					image={faker.random.image()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author="Anthony"
					timeAgo={faker.date.past().toUTCString()}
					content={faker.random.words()}
					image={faker.random.image()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author="Tiffany"
					timeAgo={faker.date.past().toUTCString()}
					content={faker.random.words()}
					image={faker.random.image()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
