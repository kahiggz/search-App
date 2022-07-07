import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DebugElement } from '@angular/core';
import { SetComponent } from './set.component';
import { By } from '@angular/platform-browser';
import { mockSetsData } from '../../services/mockData';
describe('SetComponent', () => {
  let component: SetComponent;
  let fixture: ComponentFixture<SetComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SetComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SetComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the set card', () => {
    component.set = mockSetsData.filter(
      (set) => set.id === 'fe88ea3a-0e2c-44b9-9210-35bfdec1e288'
    )[0];

    fixture.detectChanges();

    const card = el.queryAll(By.css('ion-card'));
    const setName = card[0].query(By.css('.set__name'));
    const count = card[0].query(By.css('.set__count'));
    const type = card[0].query(By.css('.set__type'));
    const icon = card[0].query(By.css('ion-img'));

    expect(card).toBeTruthy('Could not find card');
    expect(setName.nativeElement.textContent).toBe(component.set.name);
    expect(icon.nativeElement.src).toBe(component.set.icon_svg_uri);
    expect(count.nativeElement.textContent).toBeDefined();
    expect(type.nativeElement.textContent).toBeDefined();
  });
});
