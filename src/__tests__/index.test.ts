import { okApiClient } from '../index';

const MY_API_KEY = 'OKAPI.MY_API_KEY';

test('Start okApiClient', () => {
  // Simple test to check if okApiClient is being initialized correctly.
  expect(okApiClient).toMatchObject({ _apiKey: '', _isStarted: false });

  okApiClient.start(MY_API_KEY);

  expect(okApiClient).toMatchObject({ _apiKey: MY_API_KEY, _isStarted: true });
});
