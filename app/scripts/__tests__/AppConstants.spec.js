describe('Constants', () => {
	let ActionTypes = require('../constants/AppConstants').ActionTypes;

	it('should have "FETCH_STORIES" attr', () => {
		ActionTypes.FETCH_STORIES.should.be.equal('FETCH_STORIES');
	});

	it('should have "FETCH_STORY" attr', () => {
		ActionTypes.FETCH_STORY.should.be.equal('FETCH_STORY');
	});

	it('should have "SHOW_ALERT" attr', () => {
		ActionTypes.SHOW_ALERT.should.be.equal('SHOW_ALERT');
	});

	it('should have "NAVIGATE" attr', () => {
		ActionTypes.NAVIGATE.should.be.equal('NAVIGATE');
	});
});
