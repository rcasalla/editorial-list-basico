import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const editorials = [
      { id: 11, name: 'Siruela' },
      { id: 12, name: 'Tusquets' },
      { id: 13, name: 'Planeta' },
      { id: 14, name: 'Plaza y Hanes' },
    ];
    return {editorials};
  }
}