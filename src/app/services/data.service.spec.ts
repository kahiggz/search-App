import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DataService } from './data.service';
import { mockSetsData } from './mockData';
import { Set } from '../models/set.model';

describe('DataService', () => {
  let service: DataService;
  let httpTestingController: HttpTestingController;
  const baseUrl = 'assets/mockData.json';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all sets', () => {
    service.getSets().subscribe((sets: any) => {
      const testSet = sets.filter(
        (set: Set) => set.id === 'fe88ea3a-0e2c-44b9-9210-35bfdec1e288'
      );

      expect(sets).toBeTruthy('No sets found');
      expect(testSet[0].name).toBe('Game Night 2022', 'Not correct');
      expect(sets).toBe(mockSetsData, 'should return expected results');
    });

    const req = httpTestingController.expectOne(baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockSetsData);
  });

  it('should return a single set', () => {
    const code = 'fe88ea3a-0e2c-44b9-9210-35bfdec1e288';
    service.getSpecificSet(code).subscribe((set: any) => {
      expect(set).toBeTruthy();
      expect(set[0].name).toBe('Game Night 2022');
    });

    const req = httpTestingController.expectOne(baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockSetsData);
  });
});
