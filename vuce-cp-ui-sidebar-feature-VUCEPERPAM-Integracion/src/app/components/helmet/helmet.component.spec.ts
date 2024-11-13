import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HelmetComponent } from './helmet.component';

describe('HelmetComponent', () => {
  let component: HelmetComponent;
  let fixture: ComponentFixture<HelmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelmetComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render SVG', () => {
    const svgElement = fixture.debugElement.query(By.css('svg'));
    expect(svgElement).toBeTruthy();
    expect(svgElement.nativeElement.getAttribute('width')).toBe('20');
    expect(svgElement.nativeElement.getAttribute('height')).toBe('20');
  });

  it('should render correct paths', () => {
    const pathElements = fixture.debugElement.queryAll(By.css('svg path'));
    expect(pathElements.length).toBe(2);

    const firstPath = pathElements[0].nativeElement;
    const secondPath = pathElements[1].nativeElement;

    expect(firstPath.getAttribute('fill')).toBe('currentColor');
    expect(secondPath.getAttribute('fill')).toBe('currentColor');
  });
});