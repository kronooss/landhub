import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, ActivatedRoute, Router } from '@angular/router';
import { HttpModule } from '@angular/http';

import { VillainSearchComponent } from './villain-search.component';
import { VillainService } from '../shared/villain.service';

export const fake_routes = [];

describe('VillainSearchComponent', () => {
  let component: VillainSearchComponent;
  let fixture: ComponentFixture<VillainSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VillainSearchComponent],
      providers: [VillainService],
      imports: [RouterTestingModule.withRoutes(fake_routes), HttpModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
