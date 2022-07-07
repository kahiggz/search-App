import { mockSetsData } from '../services/mockData';
import { FilterPipe } from './filter.pipe';

fdescribe('FilterPipe', () => {
  it('should return a key word', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(mockSetsData, 'Commander')).toEqual(
      mockSetsData.filter((item) => item.name.includes('Commander'))
    );
  });
});
