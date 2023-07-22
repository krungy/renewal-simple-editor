import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'App';
import { delay, mockConsoleError } from './utils';

describe('App easy', () => {
  mockConsoleError();
  afterEach(() => {
    jest.clearAllMocks();
  });
});
