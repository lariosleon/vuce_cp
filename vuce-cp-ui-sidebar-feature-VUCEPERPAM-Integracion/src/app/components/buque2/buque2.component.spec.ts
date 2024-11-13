import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Buque2Component } from './buque2.component';

describe('Buque2Component', () => {
  let component: Buque2Component;
  let fixture: ComponentFixture<Buque2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Buque2Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Buque2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render SVG', () => {
    const svgElement = fixture.debugElement.query(By.css('svg'));
    expect(svgElement).toBeTruthy();
    expect(svgElement.nativeElement.getAttribute('width')).toBe('24');
    expect(svgElement.nativeElement.getAttribute('height')).toBe('24');
  });

  it('should render correct paths', () => {
    const pathElements = fixture.debugElement.queryAll(By.css('svg path'));
    expect(pathElements.length).toBe(1); // Verifica que haya 1 elemento path

    const path = pathElements[0].nativeElement;

    // Verifica los atributos 'fill' del path
    expect(path.getAttribute('fill')).toBe('currentColor');
  });
});