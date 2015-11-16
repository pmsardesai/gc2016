import React from 'react';

class ContestCard extends React.Component {
	static propTypes = {
		/*
		* An object that has the contest details
		*/
		contestInfo: React.PropTypes.object
	}

	_renderHow(contest) {
		return (
			<div className="right">
				<span> {contest.howFirst} </span>
				<a href="mailto:goanconvention2016@gmail.com" target="_blank" className='email'>goanconvention2016@gmail.com</a>
				<span>with subject line </span>
				<i>{contest.howSubject}</i>
				<span> {contest.howLast} </span>
			</div>
		);
	}

	_renderTheme(theme) {
		let themeBlock = null;

		if (theme !== undefined) {
			themeBlock = (
				<div className="theme info">
					<div className="left">Theme</div>
					<div className="right">{theme}</div>
				</div>
			);
		}

		return themeBlock;
	}

	_renderRules(contest) {
		let containerBlock = null;
		let rules = contest.rules;

		if (rules) {
			let ruleBlocks = [];

			for (let i = 0; i < rules.length; i++) {
				let rule = rules[i];

				if (rule === 'subrules') {
					ruleBlocks.push(this._renderSubRules(contest.subrules));
				} else {
					ruleBlocks.push(<li> {rule} </li>);
				}
			}

			containerBlock = (
				<div className="rules">
					<ol>
						{ ruleBlocks }
					</ol>
				</div>
			);
		}

		return containerBlock;
	}

	_renderSubRules(subRules) {
		let subruleBlocks = [];

		for (let i = 0; i < subRules.length; i++) {
			subruleBlocks.push(<li> {subRules[i]} </li>);
		}

		return (
			<ol type="a">
				{ subruleBlocks }
			</ol>
		);
	}

	_renderAdditional(additional) {
		let additionalBlock = null;

		if (additional) {
			additionalBlock = (<div className="additional">{additional}</div>);
		}

		return additionalBlock;
	}

	render() {
		const contest = this.props.contestInfo;
		const photoCss = contest.css + ' photo';

		return (
			<div className="contest-card">
				<div className="title">{contest.title}</div>
				<div className="description">{contest.description}</div>

				<div className={photoCss}></div>

				<div className="who info">
					<div className="left">Who may enter</div>
					<div className="right">{contest.who}</div>
				</div>
				<div className="how info">
					<div className="left">How to enter</div>
					{this._renderHow(contest)}
				</div>
				{ this._renderTheme(contest.theme) }
				<div className="deadline info">
					<div className="left">Submission Deadline</div>
					<div className="right">{contest.deadline}</div>
				</div>
				{ this._renderRules(contest) }
				{ this._renderAdditional(contest.additional) }
			</div>
		);
	}
}

export default ContestCard;
