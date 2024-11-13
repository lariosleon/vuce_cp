import { JsonPipe } from "@angular/common";
import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SingleSpaService } from "../single-spa/single-spa.service";
import { RolService } from "../../src/app/services/rol-service.service";
import { SharedModule } from "./shared/shared.module";
import { environment } from "../environments/environment";
import { DatosServiceService } from "./services/datos-service.services";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import {
  Idiomas,
  LanguageService,
  TranslateVuceModule,
} from "@transversal-vuce/translate";
import { Subscription, debounceTime, distinctUntilChanged } from "rxjs";

// Usa el mock si el módulo real no está disponible
let styleguide: any;

try {
  styleguide = import("@vuce/styleguides");
} catch (e) {
  styleguide = import("../mocks/styleguides.mock");
}

@Component({
  selector: "vuce-header",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  imports: [
    RouterOutlet,
    JsonPipe,
    SharedModule,
    TranslateModule,
    TranslateVuceModule,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  private spaService = inject(SingleSpaService);
  // private languageSubscription!: Subscription;
  urlLogo = this.spaService.assetUrl("images/vuce-logo.svg");
  urlLogoMobile = this.spaService.assetUrl("images/vuce-logo-mobile.svg");
  urlFlagPeru = this.spaService.assetUrl("images/peru.png");
  urlFlagEu = this.spaService.assetUrl("images/eu.png");
  urlProfile = this.spaService.assetUrl("images/profile.png");
  urlShip = this.spaService.assetUrl("images/ship.svg");
  numperfil: any;
  rol: any;
  datos: any;
  nombrecompleto: any;
  ruc: any;
  perfilUsuario = {
    perfil: "",
    perfilCompleto: "",
  };

  languageSubscription!: Subscription;
  currentLang: string = "";
  currentFlagUrl!: string;

  constructor(
    private rolservice: RolService,
    private datosservice: DatosServiceService,
    private languageService: LanguageService,
    private translate: TranslateService
  ) {}

  ngOnDestroy(): void {
    this.languageSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.initLanguage();
    this.getRolService();
    this.getDatosService();
    const storedPerfilUsuario = localStorage.getItem("perfilUsuario");
    this.perfilUsuario = storedPerfilUsuario
      ? JSON.parse(storedPerfilUsuario)
      : { perfil: "A", perfilCompleto: "Administrado" };
    const nombre: string =
      String(localStorage.getItem("nombresContacto")) +
      " " +
      String(localStorage.getItem("apePaternoContacto")) +
      " " +
      String(localStorage.getItem("apeMaternoContacto"));
    this.nombrecompleto = this.formatText(nombre);
    this.ruc = localStorage.getItem("nroDocumentoEmpExt");
    console.log("nombre ::" + nombre);
  }

  initLanguage() {
    // get languages from Idiomas enum
    const LANGUAGES = Object.values(Idiomas);
    this.translate.addLangs(LANGUAGES);
    this.currentLang = this.languageService.getLang();
    this.setFlagUrl();

    this.languageSubscription = this.languageService.language$
      .pipe(debounceTime(100), distinctUntilChanged())
      .subscribe((lang) => {
        this.translate.setDefaultLang(lang);
        this.translate.use(lang);
        this.currentLang = lang;
        this.setFlagUrl();
      });
  }

  setFlagUrl() {
    this.currentFlagUrl =
      this.currentLang === "en" ? this.urlFlagEu : this.urlFlagPeru;
  }

  switchLanguage(lang: string) {
    this.languageService.setLang(lang);
    this.currentLang = lang;
    this.setFlagUrl();
  }

  getRolService() {
    //obtener rol
    this.rolservice.getData().subscribe({
      next: (data: any) => {
        //set data de rol usuario
        this.setRol(data);
      },
      error: (err) => console.log(err),
    });
  }
  setRol(data: any) {
    this.rol = data;
    //Set data localStorage
    localStorage.setItem(
      "rolesConsolidado",
      JSON.stringify(this.rol?.rolesConsolidado || [])
    );
    localStorage.setItem(
      "permiso",
      JSON.stringify(this.rol?.rolesConsolidado.permisos || [])
    );
    localStorage.setItem(
      "menu",
      JSON.stringify(this.rol?.rolesConsolidado.menu || [])
    );
  }

  formatText(text: string): string {
    // Quitar las comillas dobles y dividir el texto por cada ocurrencia de ""
    let parts = text.split('""').map((part) => part.replace(/"/g, ""));
    // Unir las partes con un espacio
    return parts.join(" ");
  }
  getDatosService() {
    this.datosservice.getData().subscribe(
      (data) => {
        //set datos valores
        this.setDatos(data);
      },
      (error) => {
        console.error("Error al obtener los datos:", error);
      }
    );
  }
  setDatos(data: any) {
    this.datos = data;
    console.log(this.datos);
    //set data localStorage
    localStorage.setItem("object", JSON.stringify(this.datos?.[0].object));
    localStorage.setItem(
      "nombresContacto",
      this.formatText(
        String(JSON.stringify(this.datos?.[0].object.contacto.nombresContacto))
      )
    );
    localStorage.setItem(
      "apePaternoContacto",
      this.formatText(
        String(
          JSON.stringify(this.datos?.[0].object.contacto.apePaternoContacto)
        )
      )
    );
    localStorage.setItem(
      "apeMaternoContacto",
      this.formatText(
        String(
          JSON.stringify(this.datos?.[0].object.contacto.apeMaternoContacto)
        )
      )
    );
    localStorage.setItem(
      "categoriaPerfil",
      this.formatText(
        String(JSON.stringify(this.datos?.[0].object.categoriaPerfil))
      )
    );
    localStorage.setItem(
      "urlFoto",
      this.formatText(String(JSON.stringify(this.datos?.[0].object.urlFoto)))
    );
    localStorage.setItem(
      "emailNotificacion",
      this.formatText(
        String(
          JSON.stringify(this.datos?.[0].object.contacto.emailNotificacion)
        )
      )
    );
    localStorage.setItem(
      "entidad",
      this.formatText(
        String(JSON.stringify(this.datos?.[0].object.datosFuncionario.entidad))
      )
    );
    localStorage.setItem(
      "cargo",
      this.formatText(
        String(JSON.stringify(this.datos?.[0].object.datosFuncionario.cargo))
      )
    );
    localStorage.setItem(
      "tipoDocumentoEmpExt",
      this.formatText(
        String(
          JSON.stringify(
            this.datos?.[0].object.datosEmpresaExterna.tipoDocumentoEmpExt
          )
        )
      )
    );
    localStorage.setItem(
      "nroDocumentoEmpExt",
      this.formatText(
        String(
          JSON.stringify(
            this.datos?.[0].object.datosEmpresaExterna.nroDocumentoEmpExt
          )
        )
      )
    );
    localStorage.setItem(
      "razonSocialEmpExt",
      this.formatText(
        String(
          JSON.stringify(
            this.datos?.[0].object.datosEmpresaExterna.razonSocialEmpExt
          )
        )
      )
    );
  }
  onOpenSidebar = () => {
    const sidebar = document.querySelector(".sidebar");

    if (sidebar) sidebar.classList.toggle("sidebar__open");
  };

  loadStyles() {
    styleguide.loadStyles();
  }

  cambiarPerfil(perfilUsuario: string) {
    perfilUsuario != ""
      ? (perfilUsuario = perfilUsuario)
      : (perfilUsuario = "A");

    if (perfilUsuario == "A") {
      this.perfilUsuario.perfil = "A";
      this.perfilUsuario.perfilCompleto = "Administrado";
    }

    if (perfilUsuario == "F") {
      this.perfilUsuario.perfil = "F";
      this.perfilUsuario.perfilCompleto = "Funcionario";
    }

    let perfil = {
      perfil: this.perfilUsuario.perfil,
      perfilCompleto: this.perfilUsuario.perfilCompleto,
    };

    localStorage.setItem("perfilUsuario", JSON.stringify(perfil));
    localStorage.setItem("perfil", JSON.stringify(this.perfilUsuario.perfil));
    localStorage.setItem(
      "perfilCompleto",
      JSON.stringify(this.perfilUsuario.perfilCompleto)
    );
  }

  openAdministratedAccount() {
    window.open(environment.redirect_administrate_account, "_self");
  }

  switchRolAccount() {
    window.open(environment.redirect_switch_account, "_self");
  }
}
