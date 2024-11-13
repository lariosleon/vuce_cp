import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionComponent } from './question.component';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render SVG', () => {
    const compiled = fixture.nativeElement;
    const svgElement = compiled.querySelector('svg');
    expect(svgElement).toBeTruthy();
  });

  it('should have correct viewBox attribute in SVG', () => {
    const compiled = fixture.nativeElement;
    const svgElement = compiled.querySelector('svg');
    expect(svgElement.getAttribute('viewBox')).toBe('0 0 20 20');
  });

  it('should render correct path in SVG', () => {
    const compiled = fixture.nativeElement;
    const pathElement = compiled.querySelector('svg path');
    expect(pathElement).toBeTruthy();
    expect(pathElement.getAttribute('d')).toContain('M10 0C4.47648 0 0 4.47648 0 10C0 15.5235 4.47648 20 10 20C15.5235 20 20 15.5235 20 10C20 4.47648 15.4969 0 10 0ZM10 19.0305C5.02665 19.0305 0.969458 14.9734 0.969458 10C0.969458 5.02665 5.00002 0.969458 10 0.969458C15 0.969458 19.0305 5.02665 19.0305 10C19.0305 14.9734 14.9734 19.0305 10 19.0305ZM10.4193 14.8425C10.4193 15.1309 10.1842 15.366 9.8958 15.366C9.60737 15.366 9.3723 15.1309 9.3723 14.8425C9.3723 14.554 9.6074 14.319 9.8958 14.319C10.1818 14.319 10.4193 14.5541 10.4193 14.8425ZM12.5909 7.72178C12.5909 8.63791 12.0674 9.4765 11.0979 10.0509C10.3902 10.4702 10.4169 10.967 10.4169 10.9937C10.4169 10.9937 10.4169 11.0204 10.4169 11.047V12.2516C10.4169 12.5134 10.2084 12.7218 9.94667 12.7218C9.68491 12.7218 9.44984 12.5134 9.44984 12.2516V11.0737C9.42317 10.6544 9.63403 9.84247 10.5744 9.26806C11.0446 8.97963 11.5948 8.4828 11.5948 7.75086C11.5948 6.86139 10.8628 6.127 9.97092 6.127C9.079 6.127 8.34706 6.85894 8.34706 7.75086C8.34706 8.01263 8.13862 8.22106 7.87686 8.22106C7.61509 8.22106 7.40665 8.01263 7.40665 7.75086C7.40665 6.3112 8.55789 5.15996 9.99755 5.15996C11.4372 5.15996 12.5909 6.28212 12.5909 7.72178Z');
  });
});