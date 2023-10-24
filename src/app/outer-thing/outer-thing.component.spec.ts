import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OuterThingComponent } from './outer-thing.component';
import { InnerThingComponent } from './inner-thing/inner-thing.component';
import { DependencyComponent } from '../common/dependency/dependency.component';

import { MyServiceService } from '../common/my-service.service';
import { BehaviorSubject } from 'rxjs';

describe('OuterThingComponent', () => {
  let component: OuterThingComponent;
  let fixture: ComponentFixture<OuterThingComponent>;

  const mockMyServiceService = {
    myServiceData$: new BehaviorSubject('Test value'),
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        OuterThingComponent,
        InnerThingComponent,
        DependencyComponent,
      ],
      providers: [
        { provide: MyServiceService, useValue: mockMyServiceService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OuterThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
