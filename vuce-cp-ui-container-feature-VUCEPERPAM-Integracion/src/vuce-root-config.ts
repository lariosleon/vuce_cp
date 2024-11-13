import { BehaviorSubject } from "rxjs";
import { LifeCycles, registerApplication, start } from "single-spa";

(window as any).languageSubject = new BehaviorSubject<string>(
  localStorage.getItem("lang") ?? "es"
);

const LOADING = document.getElementById("loadingModule");

registerApplication({
  name: "@vuce/header",
  app: () => System.import<LifeCycles>("@vuce/header"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@vuce/footer",
  app: () => System.import<LifeCycles>("@vuce/footer"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@vuce/sidebar",
  app: () => System.import<LifeCycles>("@vuce/sidebar"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@vuce/fichatecnica",
  app: () => cargarModulo("@vuce/fichatecnica"),
  activeWhen: ["/cp2/fichatecnica"],
});

registerApplication({
  name: "@vuce/gestionduenave",
  app: () => cargarModulo("@vuce/gestionduenave"),
  activeWhen: ["/cp2/gestionduenave"],
});

registerApplication({
  name: "@vuce/puerto",
  app: () => cargarModulo("@vuce/puerto"),
  activeWhen: ["/cp2/puerto"],
});

registerApplication({
  name: "@vuce/escala",
  app: () => cargarModulo("@vuce/escala"),
  activeWhen: ["/cp2/escala"],
});

registerApplication({
  name: "@vuce/tramiteypago",
  app: () => cargarModulo("@vuce/tramiteypago"),
  activeWhen: ["/cp2/tramiteypago"],
});

registerApplication({
  name: "@vuce/fichasanitaria",
  app: () => cargarModulo("@vuce/fichasanitaria"),
  activeWhen: ["/cp2/fichasanitaria"],
});

registerApplication({
  name: "@vuce/cambioagencia",
  app: () => cargarModulo("@vuce/cambioagencia"),
  activeWhen: ["/cp2/cambioagencia"],
});

registerApplication({
  name: "@vuce/cambioagenciatripulante",
  app: () => cargarModulo("@vuce/cambioagenciatripulante"),
  activeWhen: ["/cp2/cambioagenciatripulante"],
});

function cargarModulo(moduloName: string) {
  if (LOADING) LOADING.style.display = "flex";
  return Promise.resolve()
    .then(() => {
      return System.import<LifeCycles>(moduloName);
    })
    .then((app) => {
      if (LOADING) LOADING.style.display = "none";
      return app;
    });
}

start({
  urlRerouteOnly: true,
});
