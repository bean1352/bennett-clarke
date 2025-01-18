import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { getAdzunaCategoriesAction, getAdzunaJobStatisticsAction } from '@/app/api/adzuna/actions';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import dotenv from 'dotenv';

dotenv.config();

const mock = new MockAdapter(axios);
const MOCK_BASE_URL = 'https://api.adzuna.com/v1';

describe('Adzuna Actions', () => {
  beforeEach(() => {
    mock.reset();
    // Set a default base URL for all tests
    process.env.ADZUNA_BASE_URL = MOCK_BASE_URL;
  });

  afterEach(() => {
    mock.reset();
    // Clean up environment after each test
    process.env.ADZUNA_BASE_URL = undefined;
  });

  describe('getAdzunaCategoriesAction', () => {
    it('should return categories data on success', async () => {
      const mockData = { results: [{ category: 'IT Jobs' }] };
      mock.onGet(`${MOCK_BASE_URL}/categories`).reply(200, mockData);

      const result = await getAdzunaCategoriesAction();

      expect(result).toEqual({ success: true, data: mockData.results });
    });

    it('should return error message on failure', async () => {
      mock.onGet(`${MOCK_BASE_URL}/categories`).reply(500);

      const result = await getAdzunaCategoriesAction();

      expect(result).toEqual({ success: false, message: 'Internal Server Error' });
    });
  });

  describe('getAdzunaJobStatisticsAction', () => {
    it('should return job statistics data on success', async () => {
      const mockData = { month: [{ month: 'January', count: 100 }] };
      mock.onGet(`${MOCK_BASE_URL}/history`).reply(200, mockData);

      const result = await getAdzunaJobStatisticsAction('IT Jobs', 12);

      expect(result).toEqual({ success: true, data: mockData.month });
    });

    it('should return error message on failure', async () => {
      mock.onGet(`${MOCK_BASE_URL}/history`).reply(500);

      const result = await getAdzunaJobStatisticsAction('IT Jobs', 12);

      expect(result).toEqual({ success: false, message: 'Internal Server Error' });
    });
  });
});