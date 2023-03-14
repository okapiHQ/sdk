import axios from 'axios';
import { OkapiError } from './okapi-error';

const API_ENDPOINT = 'https://2biawd8s0k.execute-api.us-east-1.amazonaws.com/prod/sdk';

/** TODO: Add a description of the SDK and one for each of the functions with their params. */
class OkapiClientSdk {
  private _isStarted = false;
  private _apiKey = '';

  /** Return if the SDK has been started. */
  public get isStarted() {
    return this._isStarted;
  }

  /** Check if the SDK has been started. */
  private _checkIfStarted() {
    if (!this.isStarted) {
      throw new OkapiError('Missing API key. Please use `.start()` to initialize your client SDK.');
    }
    // Check if the api key has the right format
    if (!this._apiKey.startsWith('OKAPI.')) {
      throw new OkapiError('API key does not start with OKAPI.');
    }
  }

  /** Save the API key. */
  public start(apiKey: string) {
    this._isStarted = true;
    this._apiKey = apiKey;
  }

  /** Get the a wallet data by user */
  public async wallet({ user }: { user: string }) {
    this._checkIfStarted();
    const { data } = await axios.get(`${API_ENDPOINT}/wallet`, {
      params: { user },
      headers: { 'x-okapi-api-key': this._apiKey },
    });
    return data;
  }

  /** Evaluate an objective with user and id */
  public async objective({ id, user }: { id: string; user: string }) {
    this._checkIfStarted();
    const { data } = await axios.post(
      `${API_ENDPOINT}/objective`,
      { id, user },
      { headers: { 'x-okapi-api-key': this._apiKey } },
    );
    return data;
  }

  /** Evaluate a reward with user and id */
  public async reward({ id, user }: { id: string; user: string }) {
    this._checkIfStarted();
    const { data } = await axios.post(
      `${API_ENDPOINT}/reward`,
      { id, user },
      { headers: { 'x-okapi-api-key': this._apiKey } },
    );
    return data;
  }

  /** Get a gate status with user and id */
  public async tokenGating({ id, user }: { id: string; user: string }) {
    this._checkIfStarted();
    const { data } = await axios.get(`${API_ENDPOINT}/token-gating`, {
      params: { id, user },
      headers: { 'x-okapi-api-key': this._apiKey },
    });
    return data;
  }
}

export const okApiClient = new OkapiClientSdk();
