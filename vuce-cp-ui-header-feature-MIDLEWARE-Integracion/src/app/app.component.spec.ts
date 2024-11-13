import { JsonPipe } from "@angular/common";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterOutlet } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import {
  LanguageService,
  TranslateVuceModule,
} from "@transversal-vuce/translate";
import { environment } from "../environments/environment";
import { SingleSpaService } from "../single-spa/single-spa.service";
import { AppComponent } from "./app.component";
import { DatosServiceService } from "./services/datos-service.services";
import { RolService } from "./services/rol-service.service";
import { SharedModule } from "./shared/shared.module";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let datosServiceSpy: jasmine.SpyObj<DatosServiceService>;
  let rolServiceSpy: jasmine.SpyObj<RolService>;
  let languageServiceSpy: jasmine.SpyObj<LanguageService>;
  let singleSpaServiceSpy: jasmine.SpyObj<SingleSpaService>;
  let translateServiceSpy: jasmine.SpyObj<TranslateService>;

  beforeEach(async () => {
    const datosServiceMock = jasmine.createSpyObj("DatosServiceService", [
      "getData",
    ]);
    const rolServiceMock = jasmine.createSpyObj("RolService", ["getData"]);
    const languageServiceMock = jasmine.createSpyObj("LanguageService", [
      "getLang",
      "setLang",
    ]);
    const singleSpaServiceMock = jasmine.createSpyObj("SingleSpaService", [
      "assetUrl",
    ]);
    const translateServiceMock = jasmine.createSpyObj("TranslateService", [
      "addLangs",
      "setDefaultLang",
      "use",
    ]);

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterOutlet,
        JsonPipe,
        SharedModule,
        TranslateVuceModule,
        AppComponent, // Importar el componente aquí
      ],
      providers: [
        { provide: DatosServiceService, useValue: datosServiceMock },
        { provide: RolService, useValue: rolServiceMock },
        { provide: LanguageService, useValue: languageServiceMock },
        { provide: SingleSpaService, useValue: singleSpaServiceMock },
        { provide: TranslateService, useValue: translateServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    datosServiceSpy = TestBed.inject(
      DatosServiceService
    ) as jasmine.SpyObj<DatosServiceService>;
    rolServiceSpy = TestBed.inject(RolService) as jasmine.SpyObj<RolService>;
    languageServiceSpy = TestBed.inject(
      LanguageService
    ) as jasmine.SpyObj<LanguageService>;
    singleSpaServiceSpy = TestBed.inject(
      SingleSpaService
    ) as jasmine.SpyObj<SingleSpaService>;
    translateServiceSpy = TestBed.inject(
      TranslateService
    ) as jasmine.SpyObj<TranslateService>;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call getRolService on ngOnInit", () => {
    spyOn(component, "getRolService");
    component.ngOnInit();
    expect(component.getRolService).toHaveBeenCalled();
  });

  it("should call getDatosService on ngOnInit", () => {
    spyOn(component, "getDatosService");
    component.ngOnInit();
    expect(component.getDatosService).toHaveBeenCalled();
  });

  it("should set perfilUsuario from localStorage on ngOnInit", () => {
    const perfilUsuario = { perfil: "F", perfilCompleto: "Funcionario" };
    spyOn(localStorage, "getItem").and.returnValue(
      JSON.stringify(perfilUsuario)
    );
    component.ngOnInit();
    expect(component.perfilUsuario).toEqual(perfilUsuario);
  });

  it("should toggle sidebar on onOpenSidebar", () => {
    const sidebar = document.createElement("div");
    sidebar.className = "sidebar";
    document.body.appendChild(sidebar);
    component.onOpenSidebar();
    expect(sidebar.classList).toContain("sidebar__open");
    component.onOpenSidebar();
    expect(sidebar.classList).not.toContain("sidebar__open");
    document.body.removeChild(sidebar);
  });

  it("should switch roles correctly in cambiarPerfil", () => {
    component.cambiarPerfil("F");
    expect(component.perfilUsuario).toEqual({
      perfil: "F",
      perfilCompleto: "Funcionario",
    });
    component.cambiarPerfil("A");
    expect(component.perfilUsuario).toEqual({
      perfil: "A",
      perfilCompleto: "Administrado",
    });
    const storedPerfil = JSON.parse(localStorage.getItem("perfilUsuario")!);
    expect(storedPerfil).toEqual(component.perfilUsuario);
  });

  it("should open administrated account", () => {
    spyOn(window, "open");
    component.openAdministratedAccount();
    expect(window.open).toHaveBeenCalledWith(
      environment.redirect_administrate_account,
      "_self"
    );
  });

  it("should switch roles account", () => {
    spyOn(window, "open");
    component.switchRolAccount();
    expect(window.open).toHaveBeenCalledWith(
      environment.redirect_switch_account,
      "_self"
    );
  });

  it("should format text correctly in formatText", () => {
    const text = 'some""example""text';
    const formattedText = component.formatText(text);
    expect(formattedText).toBe("some example text");
  });

  it("should call setRol() successfully", () => {
    const data = {
      roles: [
        {
          nombre: "MR.USUARIO.PRINCIPAL",
          esFavorito: 1,
          peso: 3,
          menu: [
            {
              idMenu: 1,
              recurso: "FOFT",
              idMenuPadre: null,
              secuencia: 1,
              nombreMenu: "Operaciones",
              rutaMenu: null,
              tipoRuta: null,
              esPaginaInicial: "N",
              icono: "fas fa-ship",
              Nivel2: [
                {
                  idMenu: 2,
                  recurso: "FOFT",
                  idMenuPadre: 1,
                  secuencia: 1,
                  nombreMenu: "Programación",
                  rutaMenu: "programacion",
                  tipoRuta: null,
                  esPaginaInicial: "S",
                  icono: null,
                  Nivel3: [
                    {
                      idMenu: 3,
                      recurso: "FOFT",
                      idMenuPadre: 2,
                      secuencia: 1,
                      nombreMenu: "Mantenimiento Usuarios",
                      rutaMenu: "Mantenimiento-usuarios",
                      tipoRuta: 1,
                      esPaginaInicial: 0,
                      icono: null,
                    },
                    {
                      idMenu: 4,
                      recurso: "FOFT",
                      idMenuPadre: 2,
                      secuencia: 2,
                      nombreMenu: "Pagos",
                      rutaMenu: "https://…/pagos",
                      tipoRuta: 2,
                      esPaginaInicial: 1,
                      icono: null,
                    },
                  ],
                },
                {
                  idMenu: 5,
                  recurso: "FOFT",
                  idMenuPadre: 1,
                  secuencia: 2,
                  nombreMenu: "Consultas",
                  rutaMenu: "consultas",
                  tipoRuta: null,
                  esPaginaInicial: 0,
                  icono: null,
                  Nivel3: [
                    {
                      idMenu: 6,
                      recurso: "FOFT",
                      idMenuPadre: 5,
                      secuencia: 1,
                      nombreMenu: "Trámites",
                      rutaMenu: "tramites",
                      tipoRuta: 1,
                      esPaginaInicial: 0,
                      icono: null,
                    },
                  ],
                },
              ],
            },
          ],
          permisos: [
            {
              idRecurso: 7,
              recurso: "FOFT",
              nombreRecurso: "Ficha Técnica",
              permisos: ["C"],
              rutaMenu: "ficha-tecnica",
              tipoRuta: 1,
              icono: "fas fa-ship",
            },
            {
              idRecurso: 8,
              recurso: "FOFT",
              nombreRecurso: "Imprimir",
              permisos: ["C"],
              rutaMenu: "Imprimir",
              tipoRuta: 1,
              icono: "fas fa-sss",
            },
            {
              idRecurso: 9,
              recurso: "FOFT",
              nombreRecurso: "Tabla roles",
              permisos: ["C", "R", "U", "D"],
              rutaMenu: "Tabla-roles",
              tipoRuta: 1,
              icono: "fas fa-sss",
            },
          ],
        },
        {
          nombre: "MR.USUARIO.OPERADOR",
          esFavorito: 0,
          peso: 4,
          menu: [
            {
              idMenu: 10,
              recurso: "FOFT",
              idMenuPadre: null,
              secuencia: 1,
              nombreMenu: "Nueva solicitud",
              rutaMenu: null,
              tipoRuta: null,
              esPaginaInicial: "N",
              icono: "fas fa-ship",
            },
          ],
          permisos: [
            {
              idRecurso: 8,
              recurso: "FOFT",
              nombreRecurso: "Imprimir",
              permisos: ["C"],
              rutaMenu: "Imprimir",
              tipoRuta: 1,
              icono: "fas fa-sss",
            },
          ],
        },
      ],
      rolesConsolidado: {
        nombre: "CP.ADMINISTRADO.PRINCIPAL",
        menu: [
          {
            idMenu: 1,
            recurso: "FOFT",
            idMenuPadre: null,
            secuencia: 1,
            nombreMenu: "Inicio",
            rutaMenu: null,
            tipoRuta: null,
            esPaginaInicial: "N",
            icono: "fas fa-ship",
          },
          {
            idMenu: 2,
            recurso: "FOFT",
            idMenuPadre: null,
            secuencia: 1,
            nombreMenu: "Gestión de accesos",
            rutaMenu: null,
            tipoRuta: null,
            esPaginaInicial: "N",
            icono: "fas fa-ship",
          },
        ],
        permisos: [
          {
            idRecurso: 1,
            recurso: "",
            nombreRecurso: "Inicio",
            permisos: ["R"],
            rutaMenu: "http://vuce/CP/Dashboard",
            tipoRuta: 1,
            icono: "fas fa-sss",
          },
          {
            idRecurso: 2,
            recurso: "",
            nombreRecurso: "Gestión de accesos",
            permisos: ["R"],
            rutaMenu: "",
            tipoRuta: 1,
            icono: "fas fa-sss",
          },
          {
            idRecurso: 6,
            recurso: "",
            nombreRecurso: "Gestión de la nave",
            permisos: ["R"],
            rutaMenu: "",
            tipoRuta: 1,
            icono: "fas fa-sss",
          },
          {
            idRecurso: 28,
            recurso: "",
            nombreRecurso: "Control Sanitario",
            permisos: ["R"],
            rutaMenu: "",
            tipoRuta: 1,
            icono: "fas fa-sss",
          },
          {
            idRecurso: 31,
            recurso: "",
            nombreRecurso: "Gestión de Puertos",
            permisos: ["R"],
            rutaMenu: "http://vuce/cp/GestióndePuertos",
            tipoRuta: 1,
            icono: "fas fa-sss",
          },
          {
            idRecurso: 32,
            recurso: "",
            nombreRecurso: "Impedimento de Zarpe",
            permisos: ["R"],
            rutaMenu: "http://vuce/cp/ImpedimentodeZarpe",
            tipoRuta: 1,
            icono: "fas fa-sss",
          },
          {
            idRecurso: 54,
            recurso: "",
            nombreRecurso: "Trámites y Pagos",
            permisos: ["R"],
            rutaMenu: "",
            tipoRuta: 1,
            icono: "fas fa-sss",
          },
          {
            idRecurso: 62,
            recurso: "",
            nombreRecurso: "Expediente Electrónico",
            permisos: ["R"],
            rutaMenu: "",
            tipoRuta: 1,
            icono: "fas fa-sss",
          },
        ],
      },
      puertos: ["CLL", "PAI", "CHY"],
    };
    component.setRol(data);
    expect(component.setRol).toBeTruthy();
  });

  it("should call setDatos() successfully", () => {
    const data = [
      {
        id: "1",
        object: {
          idUsuarioVuce1: "2577",
          categoriaPerfil: "ADMINISTRADO",
          tipoAcreditacion: "USUARIOSOL",
          codTipoPersona: "2",
          desTipoPersona: "NATURAL",
          tipoPerfil: "PRINCIPAL",
          tipOrigen: "IT",
          tipoDocumentoPerfil: "RUC",
          numeroDocumentoPerfil: "2424234232",
          estadoRucSunat: "Activo",
          desEstadoRucSunat: "",
          condicionDomicilioFiscal: "Habido",
          desCondicionDomicilioFiscal: "",
          flagNotificacion: "true",
          urlFoto:
            "https://www.landing.vuce.gob.pe/autenticacion2/usuario/123sdkjqiqwek.jpg",
          paginaWeb: "www.transtotal.com",
          usuarioSunat: "",
          contacto: {
            apePaternoContacto: "Torres",
            apeMaternoContacto: "Castro",
            nombresContacto: "Carlos",
            emailNotificacion: "ctorres@fi.com",
            fechaNacimiento: "6/01/1960",
            sexo: "M",
            nacionalidad: "PERU",
            estadoCivil: "SOLTERO",
            telefonoMovil: "9812222",
            telefonoFijo: "35154546",
          },
          residencia: {
            resideEnPeru: "1",
            pais: "PE Perú",
            ciudad: "Lima",
            ubigeo: "150102",
            direccion: "AV. GUARDIA CIVIL 834",
            direccionReferencia: "OVALO QUIÑONES",
            codigoPostal: "15018",
          },
          datosPrincipal: {
            tipoDocumentoPrincipal: "RUC",
            numeroDocumentoPrincipal: "201113122",
            nombreCompletoPrincipal: "",
            tiposLicenciaPrincipal: [
              {
                codigo: "1",
                descripcion: "null",
                tipoVigencia: "",
                descripcionTipoVigencia: "",
                fechaInicioLicencia: "37633",
                fechaFinLicencia: "2958464",
              },
            ],
          },
          datosFuncionario: {
            entidad: "",
            cargo: "",
            equipos: [
              {
                componente: "CP",
                codigoEquipo: "Coord. General",
              },
            ],
          },
          datosEmpresaExterna: {
            tipoDocumentoEmpExt: "RUC",
            nroDocumentoEmpExt: "20212515633",
            razonSocialEmpExt: "AGENCIA ABC",
            estadoAutorizacionEmpExt: {
              codigo: "1",
              descripcion: "HABILITADO",
            },
            tiposEmpExt: [
              {
                codigo: "1",
                descripcion: "Empresa entrega de servicio rápido",
              },
            ],
            flagPlazoEmpExt: "1",
            plazoInicioEmpExt: "1/01/2024",
            plazoFinEmpExt: "31/12/2030",
          },
        },
      },
      {
        id: "d6faac31-e201-401b-ba6b-2a1b28f05fed",
        object: {
          idUsuarioVuce1: "2576",
          categoriaPerfil: "ADMINISTRADO",
          tipoAcreditacion: "DNI",
          codTipoPersona: "1",
          desTipoPersona: "NATURAL",
          tipoPerfil: "PRINCIPAL",
          tipOrigen: "DN",
          tipoDocumentoPerfil: "DNI",
          numeroDocumentoPerfil: "71016825",
          estadoRucSunat: "Activo",
          desEstadoRucSunat: "",
          condicionDomicilioFiscal: "Habido",
          desCondicionDomicilioFiscal: "",
          flagNotificacion: "true",
          urlFoto:
            "https://www.landing.vuce.gob.pe/autenticacion2/usuario/123sdkjqiqwek.jpg",
          paginaWeb: "www.transtotal.com",
          usuarioSunat: "USUMANU",
          contacto: {
            apePaternoContacto: "Torres",
            apeMaternoContacto: "Castro",
            nombresContacto: "Carlos",
            emailNotificacion: "ctorres@fi.com",
            fechaNacimiento: "6/01/1960",
            sexo: "M",
            nacionalidad: "PERU",
            estadoCivil: "SOLTERO",
            telefonoMovil: "9812222",
            telefonoFijo: "35154546",
          },
          residencia: {
            resideEnPeru: "1",
            pais: "PE Perú",
            ciudad: "Lima",
            ubigeo: "140130",
            direccion: "AV. LA ENCALADA 134",
            direccionReferencia: "Vivanda",
            codigoPostal: "15039",
          },
          datosPrincipal: {
            tipoDocumentoPrincipal: "DNI",
            numeroDocumentoPrincipal: "71016825",
            nombreCompletoPrincipal: "",
            tiposLicenciaPrincipal: [
              {
                codigo: "1",
                descripcion: "Agencia Marítima",
                tipoVigencia: "",
                descripcionTipoVigencia: "",
                fechaInicioLicencia: "12/01/2003",
                fechaFinLicencia: "30/12/9999",
              },
            ],
          },
          datosFuncionario: {
            entidad: "",
            cargo: "",
            equipos: [
              {
                componente: "CP",
                codigoEquipo: "Coord. General",
              },
            ],
          },
          datosEmpresaExterna: {
            tipoDocumentoEmpExt: "RUC",
            nroDocumentoEmpExt: "20212515633",
            razonSocialEmpExt: "AGENCIA ABC",
            estadoAutorizacionEmpExt: {
              codigo: "1",
              descripcion: "HABILITADO",
            },
            tiposEmpExt: [
              {
                codigo: "1",
                descripcion: "Empresa entrega de servicio rápido",
              },
            ],
            flagPlazoEmpExt: "1",
            plazoInicioEmpExt: "1/01/2024",
            plazoFinEmpExt: "31/12/2030",
          },
        },
      },
    ];
    component.setDatos(data);
    expect(component.setDatos).toBeTruthy();
  });
});
