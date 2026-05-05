const sourceLinks = [
  ["Bijgebouw hoofdcategorie", "https://exzo.be/bijgebouw"],
  ["Eiken bouwpakket met plat dak", "https://exzo.be/bijgebouw/eiken-bijgebouw/bouwpakket-met-plat-dak"],
  ["Eiken bouwpakket met zadeldak", "https://exzo.be/bijgebouw/eiken-bijgebouw/bouwpakket-met-zadeldak"],
  ["Tuinhuis categorie", "https://exzo.be/bijgebouw/tuinhuis"],
  ["Kapschuur categorie", "https://exzo.be/bijgebouw/overkapping/kapschuur"],
  ["4 bouwmethoden keuzehulp", "https://exzo.be/keuzehulp/4-methoden-om-een-bijgebouw-of-tuinhuis-te-bouwen"],
  ["Blokhut, Prima en Pro keuzehulp", "https://exzo.be/keuzehulp/3-houtstapelbouwsystemen-blokhut-prima-pro"],
  ["Dakvormen keuzehulp", "https://exzo.be/keuzehulp/plat-dak-puntdak-zadeldak-of-schilddak-voor-jouw-bijgebouw"]
];

const models = [
  { id: "syrah", name: "Eiken pergola Syrah", type: "overkapping", width: 3, depth: 3, roof: "plat", system: "bouwpakket", style: "landelijk", base: 522.95, includes: ["eiken bouwpakket", "doorloophoogte rond 195 cm"] },
  { id: "saint-martin", name: "Eik/Douglas Gebinte Saint-Martin", type: "eiken", width: 2, depth: 3, roof: "plat", system: "bouwpakket", style: "modern", base: 954.97, includes: ["basisgebinte", "excl. bekleding"] },
  { id: "arles", name: "Eik/Douglas Gebinte Arles", type: "eiken", width: 3, depth: 3, roof: "plat", system: "bouwpakket", style: "modern", base: 3222.06, includes: ["maatwerk mogelijk", "meerdere houtsoorten", "excl. bekleding"] },
  { id: "cannes", name: "Eik/Douglas Gebinte Cannes", type: "eiken", width: 3, depth: 6, roof: "plat", system: "bouwpakket", style: "modern", base: 4638.08, includes: ["maatwerk mogelijk", "meerdere houtsoorten", "excl. bekleding"] },
  { id: "grenoble", name: "Eik/Douglas Gebinte Grenoble", type: "eiken", width: 3, depth: 9, roof: "plat", system: "bouwpakket", style: "modern", base: 6121.73, includes: ["maatwerk mogelijk", "meerdere houtsoorten", "excl. bekleding"] },
  { id: "lyon", name: "Eik/Douglas Gebinte Lyon", type: "eiken", width: 3, depth: 3, roof: "zadeldak", system: "bouwpakket", style: "landelijk", base: 4441.44, includes: ["zadeldak", "excl. bekleding", "basis voor vrije afwerking"] },
  { id: "menton", name: "Eik/Douglas Gebinte Menton", type: "eiken", width: 3, depth: 6, roof: "zadeldak", system: "bouwpakket", style: "landelijk", base: 6582.87, includes: ["zadeldak", "meerdere houtsoorten", "excl. bekleding"] },
  { id: "st-malo", name: "Eik/Douglas Gebinte St-Malo", type: "eiken", width: 3, depth: 9, roof: "zadeldak", system: "bouwpakket", style: "landelijk", base: 8855.19, includes: ["zadeldak", "maatwerk mogelijk", "excl. bekleding"] },
  { id: "troyes", name: "Eik/Douglas Gebinte Troyes", type: "eiken", width: 4.2, depth: 4.2, roof: "zadeldak", system: "bouwpakket", style: "landelijk", base: 6420.67, includes: ["compact vierkant gebinte", "excl. bekleding"] },
  { id: "valence", name: "Eik/Douglas Gebinte Valence", type: "eiken", width: 5, depth: 6, roof: "zadeldak", system: "bouwpakket", style: "landelijk", base: 6012.77, includes: ["ruim landelijk gebinte", "excl. bekleding"] },
  { id: "verdun", name: "Eik/Douglas Gebinte Verdun", type: "eiken", width: 6, depth: 6, roof: "zadeldak", system: "bouwpakket", style: "landelijk", base: 7758.89, includes: ["groot zadeldakmodel", "excl. bekleding"] },
  { id: "louis", name: "Tuinhuis Louis", type: "tuinhuis", width: 4.2, depth: 2.4, roof: "plat", system: "prima", style: "modern", base: 5389.95, includes: ["vuren", "wanddikte 4,4 cm", "PRIMA houtstapelbouw"] },
  { id: "vuren-3x4", name: "Vuren tuinhuis gebinte 3 x 4", type: "tuinhuis", width: 3, depth: 4, roof: "plat", system: "bouwpakket", style: "praktisch", base: 1703.14, includes: ["geschaafde afwerking", "excl. bekleding"] },
  { id: "lux", name: "Poolhouse Lux", type: "poolhouse", width: 6.3, depth: 3.8, roof: "plat", system: "pro", style: "luxe", base: 12090, includes: ["vuren", "wanddikte 2,8 cm", "PRO houtstapelbouw"] },
  { id: "overkapping-4m", name: "Gebinte met overkapping 4 m diep", type: "overkapping", width: 6, depth: 4, roof: "plat", system: "bouwpakket", style: "modern", base: 4283.49, includes: ["meerdere breedtes", "excl. bekleding"] },
  { id: "oslo", name: "Overkapping Oslo XL 1", type: "overkapping", width: 6.78, depth: 4.3, roof: "plat", system: "pakket", style: "praktisch", base: 4129, includes: ["douglas", "excl. wanden", "hoogte 272 cm"] },
  { id: "tarragona", name: "Overkapping Tarragona", type: "overkapping", width: 3, depth: 3, roof: "plat", system: "pakket", style: "modern", base: 3394, includes: ["vuren", "maatwerk mogelijk", "hoogte 245 cm"] },
  { id: "bergen-xl2", name: "Kapschuur Bergen XL2", type: "overkapping", width: 6.75, depth: 4.18, roof: "kapschuur", system: "pakket", style: "landelijk", base: 4319, includes: ["douglas", "staanders 14 x 14 cm", "open kapschuur"] },
  { id: "sloten", name: "Carport Sloten", type: "carport", width: 3.5, depth: 5, roof: "plat", system: "pakket", style: "praktisch", base: 1609, includes: ["douglas", "doorrijhoogte circa 230 cm", "staanders 15 x 15 cm"] },
  { id: "geir", name: "Garage Geir", type: "garage", width: 3.6, depth: 5.4, roof: "zadeldak", system: "blokhut", style: "praktisch", base: 4489, includes: ["vuren", "wanddikte 4,4 cm", "nokhoogte 296 cm"] },
  { id: "soof", name: "Tuinkantoor Soof", type: "woonunit", width: 6, depth: 3.6, roof: "plat", system: "prima", style: "modern", base: 9785, includes: ["vuren", "PRIMA houtstapelbouw", "wanddikte 2,8 cm"] },
  { id: "pod", name: "Camping POD Groot", type: "camping", width: 2.4, depth: 4.8, roof: "gebogen", system: "prefab", style: "praktisch", base: 5639, includes: ["blank vurenhout", "geschaafd", "isolatieglas"] },
  { id: "oval", name: "Camping Oval", type: "camping", width: 4, depth: 4, roof: "gebogen", system: "prefab", style: "luxe", base: 8809.01, includes: ["thermowood", "geschaafd", "isolatieglas"] }
];

const els = {
  form: document.querySelector("#configForm"),
  purpose: document.querySelector("#purpose"),
  width: document.querySelector("#width"),
  depth: document.querySelector("#depth"),
  budget: document.querySelector("#budget"),
  experience: document.querySelector("#experience"),
  style: document.querySelector("#style"),
  roof: document.querySelector("#roof"),
  closedPart: document.querySelector("#closedPart"),
  insulation: document.querySelector("#insulation"),
  doors: document.querySelector("#doors"),
  delivery: document.querySelector("#delivery"),
  cladding: document.querySelector("#cladding"),
  heroPrice: document.querySelector("#heroPrice"),
  adviceTitle: document.querySelector("#adviceTitle"),
  adviceText: document.querySelector("#adviceText"),
  baseModel: document.querySelector("#baseModel"),
  price: document.querySelector("#price"),
  surface: document.querySelector("#surface"),
  visual: document.querySelector("#buildingVisual"),
  tabPanel: document.querySelector("#tabPanel")
};

let current = {};
let activeTab = "parts";

function euro(value) {
  return value.toLocaleString("nl-BE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
}

function chooseMethod(input) {
  if (input.experience === "expert" && input.budget === "lean") return "doe-het-zelf";
  if (input.experience === "beginner" && input.budget === "premium") return "prefab";
  if (input.style === "landelijk" || input.purpose === "car") return "bouwpakket";
  if (input.style === "modern" && input.width <= 4.8 && input.depth <= 4.8) return "prima";
  if (input.width > 4.8 || input.depth > 4.8 || input.purpose === "office") return "pro";
  return "houtstapelbouw";
}

function chooseRoof(input) {
  if (input.roof !== "auto") return input.roof;
  if (input.style === "landelijk" && input.purpose !== "lounge") return "zadeldak";
  if (input.purpose === "lounge" && input.style === "landelijk") return "kapschuur";
  return "plat";
}

function wantedType(purpose) {
  return {
    storage: ["tuinhuis", "eiken"],
    lounge: ["poolhouse", "overkapping", "eiken"],
    car: ["carport", "garage", "eiken"],
    office: ["woonunit", "tuinhuis"],
    camping: ["camping"]
  }[purpose];
}

function scoreModel(model, input, method, roof) {
  const area = input.width * input.depth;
  const modelArea = model.width * model.depth;
  let score = Math.abs(area - modelArea) * 2;
  score += Math.abs(input.width - model.width) + Math.abs(input.depth - model.depth);
  if (!wantedType(input.purpose).includes(model.type)) score += 14;
  if (model.roof !== roof && model.roof !== "gebogen") score += 7;
  if (model.style !== input.style) score += 3;
  if (method === model.system) score -= 2;
  if (input.budget === "lean" && model.base > 7000) score += 5;
  if (input.budget === "premium" && model.base < 2500) score += 3;
  return score;
}

function calculate() {
  const input = {
    purpose: els.purpose.value,
    width: Number(els.width.value),
    depth: Number(els.depth.value),
    budget: els.budget.value,
    experience: els.experience.value,
    style: els.style.value,
    roof: els.roof.value,
    closedPart: els.closedPart.checked,
    insulation: els.insulation.checked,
    doors: els.doors.checked,
    delivery: els.delivery.checked,
    cladding: els.cladding.value
  };
  const area = input.width * input.depth;
  const method = chooseMethod(input);
  const roof = chooseRoof(input);
  const model = [...models].sort((a, b) => scoreModel(a, input, method, roof) - scoreModel(b, input, method, roof))[0];
  const scale = Math.max(0.72, area / (model.width * model.depth));

  const additions = [];
  let options = 0;
  if (input.closedPart) {
    const value = area * 95;
    options += value;
    additions.push(["Afgesloten berging", value]);
  }
  if (input.insulation) {
    const value = area * 145;
    options += value;
    additions.push(["Isolatiepakket dak/wand", value]);
  }
  if (input.doors) {
    const value = input.purpose === "car" ? 950 : 650;
    options += value;
    additions.push(["Ramen en deuren", value]);
  }
  if (input.delivery) {
    const value = Math.max(240, area * 18);
    options += value;
    additions.push(["Levering", value]);
  }
  const claddingRates = { none: 0, vuren: 85, thermo: 135, padouk: 185 };
  const claddingValue = area * (claddingRates[input.cladding] || 0);
  if (claddingValue) {
    options += claddingValue;
    additions.push(["Gevelbekleding", claddingValue]);
  }

  const roofFactor = { plat: 1, zadeldak: 1.12, schilddak: 1.2, kapschuur: 1.08, gebogen: 1.05 }[roof] || 1;
  const methodFactor = { "doe-het-zelf": .82, bouwpakket: 1, houtstapelbouw: 1.05, prima: 1.12, pro: 1.22, prefab: 1.3 }[method];
  const estimate = model.base * scale * roofFactor * methodFactor + options;

  current = { input, area, method, roof, model, estimate, additions };
  render();
}

function methodText(method) {
  return {
    "doe-het-zelf": "Goedkoopste route, maar enkel logisch als je zelf kan zagen, frezen en plannen.",
    bouwpakket: "Past bij Exzo-gebintes: balken en kepers op maat, met montageplan, maar afwerking apart.",
    houtstapelbouw: "Toegankelijk pakket met massieve balken die horizontaal worden gestapeld.",
    prima: "Moderne houtstapelbouw met subtiele hoekprofielen en beperkt maatwerk.",
    pro: "Sterke gleufpalen met aluminium versteviging, geschikt voor vrij maatwerk en grotere volumes.",
    prefab: "Snelle plaatsing met kant-en-klare panelen, vooral handig bij weinig ervaring."
  }[method];
}

function render() {
  const { area, method, roof, model, estimate } = current;
  els.heroPrice.textContent = euro(estimate);
  els.price.textContent = euro(estimate);
  els.surface.textContent = `${area.toFixed(1)} m²`;
  els.baseModel.textContent = model.name;
  els.adviceTitle.textContent = `${model.name} als beste startpunt`;
  els.adviceText.textContent = `Advies: ${method} met ${roof}. ${methodText(method)}`;
  els.visual.className = `visual ${roof}`;
  renderTab();
}

function renderTab() {
  if (!current.model) return;
  const { input, method, roof, model, additions } = current;
  if (activeTab === "parts") {
    const optionRows = additions.length
      ? additions.map(([name, value]) => `<li>${name}: ${euro(value)}</li>`).join("")
      : "<li>Geen extra opties geselecteerd.</li>";
    els.tabPanel.innerHTML = `
      <ul>
        <li>Start vanuit ${model.name}: ${model.includes.join(", ")}.</li>
        <li>Dakadvies: ${roof}. Plat dak is modern en vraagt aandacht voor afwatering; zadeldak/schilddak ogen landelijker.</li>
        <li>Gekozen opties:</li>
        ${optionRows}
        <li>Let op: bij Exzo-gebintes zijn dak- en gevelbekleding, deuren en isolatie vaak aparte keuzes.</li>
      </ul>`;
  }
  if (activeTab === "rules") {
    els.tabPanel.innerHTML = `
      <div class="pill-row">
        <span class="pill">Methode: ${method}</span>
        <span class="pill">Dak: ${roof}</span>
        <span class="pill">Look: ${input.style}</span>
        <span class="pill">Budget: ${input.budget}</span>
      </div>
      <ul>
        <li>Veel ervaring + scherp budget stuurt naar doe-het-zelf; weinig ervaring + premium stuurt naar prefab.</li>
        <li>Landelijke projecten krijgen sneller eik/douglas of zadeldak; moderne projecten krijgen vaker plat dak.</li>
        <li>Grotere volumes of kantoor/wonen krijgen sneller PRO door de vrije maatwerklogica.</li>
        <li>Het model wordt gekozen op type, oppervlakte, dakvorm, stijl en budgetmatch.</li>
      </ul>`;
  }
  if (activeTab === "sources") {
    els.tabPanel.innerHTML = `
      <ul>
        ${sourceLinks.map(([label, href]) => `<li><a href="${href}" target="_blank" rel="noreferrer">${label}</a></li>`).join("")}
      </ul>`;
  }
}

document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
    button.classList.add("active");
    activeTab = button.dataset.tab;
    renderTab();
  });
});

els.form.addEventListener("submit", (event) => {
  event.preventDefault();
  calculate();
});

document.querySelectorAll("input, select").forEach((control) => {
  control.addEventListener("input", calculate);
});

calculate();
