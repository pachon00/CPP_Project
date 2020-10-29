import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoProveedorComponent } from './tipoproveedor.component';

describe('TipoproveedorComponent', () => {
  let component: TipoProveedorComponent;
  let fixture: ComponentFixture<TipoProveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoProveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
