import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AnchorComponent } from './anchor.component';

describe('AnchorComponent', () => {
  let component: AnchorComponent;
  let fixture: ComponentFixture<AnchorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnchorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render SVG', () => {
    const svgElement = fixture.debugElement.query(By.css('svg'));
    expect(svgElement).toBeTruthy();
    expect(svgElement.nativeElement.getAttribute('width')).toBe('18');
    expect(svgElement.nativeElement.getAttribute('height')).toBe('20');
  });

  it('should render correct paths', () => {
    const pathElements = fixture.debugElement.queryAll(By.css('svg path'));
    expect(pathElements.length).toBe(2);

    const firstPath = pathElements[0].nativeElement;
    const secondPath = pathElements[1].nativeElement;

      // Verifica los atributos 'fill' y 'stroke' del primer path
      expect(firstPath.getAttribute('fill')).toBeNull(); 
      expect(firstPath.getAttribute('stroke')).toBe('currentColor'); 
      expect(firstPath.getAttribute('stroke-width')).toBe('0.5'); 
  
      // Verifica los atributos 'fill' y 'stroke' del segundo path
      expect(secondPath.getAttribute('fill')).toBeNull(); 
      expect(secondPath.getAttribute('stroke')).toBe('currentColor'); 
      expect(secondPath.getAttribute('stroke-width')).toBe('0.5'); 
  });
});