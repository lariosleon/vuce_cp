import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CashComponent } from './cash.component';

describe('CashComponent', () => {
  let component: CashComponent;
  let fixture: ComponentFixture<CashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CashComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render SVG', () => {
    const svgElement = fixture.debugElement.query(By.css('svg'));
    expect(svgElement).toBeTruthy();
    expect(svgElement.nativeElement.getAttribute('width')).toBe('19');
    expect(svgElement.nativeElement.getAttribute('height')).toBe('19');
  });

  it('should render correct paths', () => {
    const pathElements = fixture.debugElement.queryAll(By.css('svg path'));
    expect(pathElements.length).toBe(1); // Verifica que haya 1 elemento path

    const path = pathElements[0].nativeElement;

    // Verifica los atributos 'fill' del path
    expect(path.getAttribute('fill')).toBe('currentColor');
  });
});