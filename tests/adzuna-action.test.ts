import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { getAdzunaCategoriesAction, getAdzunaJobStatisticsAction } from '@/app/api/adzuna/actions';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import dotenv from 'dotenv';

dotenv.config();

const mock = new MockAdapter(axios);

describe('Adzuna Actions', () => {
  beforeEach(() => {
    mock.reset();
  });

  afterEach(() => {
    mock.reset();
  });

  describe('getAdzunaCategoriesAction', () => {
    it('should return categories data on success', async () => {
      const mockData = { results: [{ category: 'IT Jobs' }] };
      mock.onGet(`${process.env.ADZUNA_BASE_URL}/categories`).reply(200, mockData);

      const result = await getAdzunaCategoriesAction();

      expect(result).toEqual({ success: true, data: mockData.results });
    });

    it('should return error message on failure', async () => {
      mock.onGet(`${process.env.ADZUNA_BASE_URL}/categories`).reply(500);

      const result = await getAdzunaCategoriesAction();

      expect(result).toEqual({ success: false, message: 'Internal Server Error' });
    });
  });

  describe('getAdzunaJobStatisticsAction', () => {
    it('should return job statistics data on success', async () => {
      const mockData = { month: [{ month: 'January', count: 100 }] };
      mock.onGet(`${process.env.ADZUNA_BASE_URL}/history`).reply(200, mockData);

      const result = await getAdzunaJobStatisticsAction('IT Jobs', 12);

      expect(result).toEqual({ success: true, data: mockData.month });
    });

    it('should return error message on failure', async () => {
      mock.onGet(`${process.env.ADZUNA_BASE_URL}/history`).reply(500);

      const result = await getAdzunaJobStatisticsAction('IT Jobs', 12);

      expect(result).toEqual({ success: false, message: 'Internal Server Error' });
    });

    it('should return error message if ADZUNA_BASE_URL is not defined', async () => {
      delete process.env.ADZUNA_BASE_URL;

      const result = await getAdzunaJobStatisticsAction('IT Jobs', 12);

      expect(result).toEqual({ success: false, message: 'ADZUNA_BASE_URL is not defined' });
    });
  });
});