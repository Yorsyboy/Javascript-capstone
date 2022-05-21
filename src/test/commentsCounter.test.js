import totalComments from '../modules/commentsCounter.js';

const comment = [
  {
    username: 'Anthony',
    comment: 'Great movie',
  },
  {
    username: 'Jane',
    comment: 'Great movie',
  },
  {
    username: 'Baroka',
    comment: 'Nice movie',
  },
];

describe('test comment count: ', () => {
  test('Return counts of comments', () => {
    expect(totalComments(comment)).toBe(3);
  });
});
