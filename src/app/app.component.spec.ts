import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterTestingModule } from '@angular/router/testing';
import { OuterThingComponent } from './outer-thing/outer-thing.component';
import { InnerThingComponent } from './outer-thing/inner-thing/inner-thing.component';
import { DependencyComponent } from './common/dependency/dependency.component';
import { MyServiceService } from './common/my-service.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        NxWelcomeComponent,
        OuterThingComponent,
        InnerThingComponent,
        DependencyComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
