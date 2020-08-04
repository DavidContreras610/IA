import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatchmakingPage } from './matchmaking.page';

describe('MatchmakingPage', () => {
  let component: MatchmakingPage;
  let fixture: ComponentFixture<MatchmakingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchmakingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchmakingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
