import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatchupPage } from './matchup.page';

describe('MatchupPage', () => {
  let component: MatchupPage;
  let fixture: ComponentFixture<MatchupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
