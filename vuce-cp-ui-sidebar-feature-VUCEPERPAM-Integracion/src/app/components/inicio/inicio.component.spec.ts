import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InicioComponent } from './inicio.component';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InicioComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioComponent);
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