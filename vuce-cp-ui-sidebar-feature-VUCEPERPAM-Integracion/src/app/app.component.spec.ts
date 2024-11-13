import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AnchorComponent } from './components/anchor/anchor.component';
import { Buque2Component } from './components/buque2/buque2.component';
import { BuqueComponent } from './components/buque/buque.component';
import { CashComponent } from './components/cash/cash.component';
import { HealthComponent } from './components/health/health.component';
import { HelmetComponent } from './components/helmet/helmet.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { KeyComponent } from './components/key/key.component';
import { LaptopComponent } from './components/laptop/laptop.component';
import { QuestionComponent } from './components/question/question.component';
import { WspComponent } from './components/wsp/wsp.component';
import { ReportComponent } from './components/report/report.component';  // Importa el componente app-report
import { ICONOS, MenuModel } from './models/menu.model';
import { MENU } from './models/menu.constant';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],  // Importa el RouterTestingModule aquí
      declarations: [
        AppComponent,
        AnchorComponent,
        Buque2Component,
        BuqueComponent,
        CashComponent,
        HealthComponent,
        HelmetComponent,
        InicioComponent,
        KeyComponent,
        LaptopComponent,
        QuestionComponent,
        WspComponent,
        ReportComponent  // Declara el componente app-report
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Agrega CUSTOM_ELEMENTS_SCHEMA si es un Web Component
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct menu list', () => {
    expect(component.listMenu).toEqual(MENU);
  });

  it('should toggle closeSidebar on onCloseSidebar call', () => {
    const initialCloseSidebar = component.closeSidebar;
    component.onCloseSidebar();
    expect(component.closeSidebar).toBe(!initialCloseSidebar);
  });

  it('should open and close submenus correctly when sidebar is open', () => {
    const menu: MenuModel = { id: '1', nombre: 'Test Menu', ruta: '/test', icono: ICONOS.INICIO, submenu: false, permiso: true };
    
    // Asegurarse de que closeSidebar es falso
    component.closeSidebar = false;
    
    component.onOpenSubMenu(menu);
    expect(menu.active).toBeTrue();
  
    component.onOpenSubMenu(menu);
    expect(menu.active).toBeFalse();
  });
  
  it('should open and close submenus correctly when sidebar is closed', () => {
    const menu: MenuModel = { id: '1', nombre: 'Test Menu', ruta: '/test', icono: ICONOS.INICIO, submenu: false, permiso: true };
    
    // Asegurarse de que closeSidebar es verdadero
    component.closeSidebar = true;
    
    component.onOpenSubMenu(menu);
    expect(menu.active).toBeTrue();
  
    component.onOpenSubMenu(menu);
    expect(menu.active).toBeFalse();
  });
  
  it('should close all submenus on onCloseSubMenu call', () => {
    component.listMenu = [
      { id: '1', nombre: 'Menu 1', ruta: '/menu1', icono: ICONOS.INICIO, submenu: false, permiso: true, active: true },
      { id: '2', nombre: 'Menu 2', ruta: '/menu2', icono: ICONOS.BUQUE, submenu: false, permiso: true, active: true },
    ];

    component.onCloseSubMenu();
    component.listMenu.forEach(menu => {
      expect(menu.active).toBeFalse();
    });
  });

  it('should remove "show" class from all elements with class "submenu collapse show" on onCloseSubMenu call', () => {
    // Setup: create elements with the class "submenu collapse show"
    const collapseElement1 = document.createElement('div');
    collapseElement1.className = 'submenu collapse show';
    document.body.appendChild(collapseElement1);

    const collapseElement2 = document.createElement('div');
    collapseElement2.className = 'submenu collapse show';
    document.body.appendChild(collapseElement2);

    // Call the method
    component.onCloseSubMenu();

    // Assertions
    expect(collapseElement1.classList.contains('show')).toBeFalse();
    expect(collapseElement2.classList.contains('show')).toBeFalse();

    // Cleanup
    document.body.removeChild(collapseElement1);
    document.body.removeChild(collapseElement2);
  });


  it('should update MENU permisos based on localStorage data', () => {
    const permisosMock = [
      { idRecurso: '1', permisos: ['R'] },
      { idRecurso: '2', permisos: [] }
    ];
    localStorage.setItem('permiso', JSON.stringify(permisosMock));

    component.ngOnInit();

    const permiso1 = MENU.find(menu => menu.id === '1')?.permiso;
    const permiso2 = MENU.find(menu => menu.id === '2')?.permiso;

    expect(permiso1).toBeTrue();
    expect(permiso2).toBeUndefined();
  });

  it('should open a menu and close sidebar if needed', () => {
    const menu: MenuModel = { id: '1', nombre: 'Test Menu', ruta: '/test', icono: ICONOS.INICIO, submenu: false, permiso: true };
    spyOn(component, 'onCloseSubMenu');
    spyOn(component, 'onCloseSidebarDesktop');

    component.closeSidebar = true;
    component.onOpenMenu(menu);

    expect(component.onCloseSubMenu).toHaveBeenCalled();
    expect(menu.active).toBeTrue();
    expect(component.closeSidebar).toBeFalse();
    expect(component.onCloseSidebarDesktop).toHaveBeenCalled();
  });

  it('should close the sidebar on desktop correctly', () => {
    const mainElement = document.createElement('div');
    mainElement.classList.add('main');
    document.body.appendChild(mainElement);

    component.onCloseSidebarDesktop();

    expect(mainElement.classList.contains('main--desktop')).toBeTrue();
  });

  afterEach(() => {
    localStorage.removeItem('permiso');
  });
});
