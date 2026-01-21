// ================== CONFIG ==================
const WHATSAPP_NUMBER = "5566992079957"; // seu WhatsApp (55 + DDD + número)
const PIX_KEY = "handersonluca92@gmail.com"; // sua chave Pix

function money(v){
  return v.toLocaleString("pt-BR", { style:"currency", currency:"BRL" });
}

// taxa simples (você pode mudar depois)
function taxaEntrega(entrega){
  return entrega === "Entrega" ? 6.00 : 0.00;
}

// ================== CARDÁPIO ==================
const catalogo = [
  // PIZZAS
  {
    id: "pz-calabresa",
    categoria: "Pizzas",
    nome: "Pizza Calabresa",
    desc: "Molho, mussarela, calabresa e cebola.",
    preco: 44.90,
    tag: "Mais pedida",
    img: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=1200&q=80&auto=format&fit=crop",
    addons: [
      {
        titulo: "Borda (escolha 1)",
        tipo: "radio",
        obrigatorio: true,
        opcoes: [
          { nome: "Sem borda recheada", preco: 0 },
          { nome: "Borda Catupiry", preco: 7.00 },
          { nome: "Borda Cheddar", preco: 7.00 },
        ],
      },
      {
        titulo: "Adicionais (opcional)",
        tipo: "check",
        opcoes: [
          { nome: "Extra mussarela", preco: 6.00 },
          { nome: "Bacon", preco: 7.00 },
          { nome: "Azeitona", preco: 3.00 },
        ],
      }
    ],
  },
  {
    id: "pz-frango",
    categoria: "Pizzas",
    nome: "Pizza Frango com Catupiry",
    desc: "Frango desfiado, catupiry e milho.",
    preco: 49.90,
    tag: "Top",
    img: "https://images.unsplash.com/photo-1548365328-8b849e6f2ee3?w=1200&q=80&auto=format&fit=crop",
    addons: [
      {
        titulo: "Borda (escolha 1)",
        tipo: "radio",
        obrigatorio: true,
        opcoes: [
          { nome: "Sem borda recheada", preco: 0 },
          { nome: "Borda Catupiry", preco: 7.00 },
          { nome: "Borda Cheddar", preco: 7.00 },
        ],
      },
      {
        titulo: "Adicionais (opcional)",
        tipo: "check",
        opcoes: [
          { nome: "Extra catupiry", preco: 6.00 },
          { nome: "Bacon", preco: 7.00 },
          { nome: "Orégano extra", preco: 2.00 },
        ],
      }
    ],
  },
  {
    id: "pz-margherita",
    categoria: "Pizzas",
    nome: "Pizza Margherita",
    desc: "Mussarela, tomate e manjericão.",
    preco: 46.90,
    tag: "Clássica",
    img: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=1200&q=80&auto=format&fit=crop",
    addons: [
      {
        titulo: "Borda (escolha 1)",
        tipo: "radio",
        obrigatorio: true,
        opcoes: [
          { nome: "Sem borda recheada", preco: 0 },
          { nome: "Borda Catupiry", preco: 7.00 },
          { nome: "Borda Cheddar", preco: 7.00 },
        ],
      },
      {
        titulo: "Adicionais (opcional)",
        tipo: "check",
        opcoes: [
          { nome: "Extra mussarela", preco: 6.00 },
          { nome: "Tomate extra", preco: 3.00 },
          { nome: "Azeitona", preco: 3.00 },
        ],
      }
    ],
  },

  // LANCHES
  {
    id: "ln-xburger",
    categoria: "Lanches",
    nome: "X-Burger",
    desc: "Pão, hambúrguer, queijo e molho da casa.",
    preco: 18.90,
    tag: "Rápido",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=80&auto=format&fit=crop",
    addons: [
      {
        titulo: "Ponto da carne (escolha 1)",
        tipo: "radio",
        obrigatorio: true,
        opcoes: [
          { nome: "Ao ponto", preco: 0 },
          { nome: "Bem passada", preco: 0 },
        ],
      },
      {
        titulo: "Adicionais (opcional)",
        tipo: "check",
        opcoes: [
          { nome: "Bacon", preco: 5.00 },
          { nome: "Cheddar", preco: 4.00 },
          { nome: "Ovo", preco: 3.00 },
          { nome: "Hambúrguer extra", preco: 7.00 },
        ],
      }
    ],
  },
  {
    id: "ln-xsalada",
    categoria: "Lanches",
    nome: "X-Salada",
    desc: "Hambúrguer, queijo, alface, tomate e maionese.",
    preco: 21.90,
    tag: "Leve",
    img: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=1200&q=80&auto=format&fit=crop",
    addons: [
      {
        titulo: "Remover (opcional)",
        tipo: "check",
        opcoes: [
          { nome: "Sem cebola", preco: 0 },
          { nome: "Sem tomate", preco: 0 },
          { nome: "Sem alface", preco: 0 },
        ],
      },
      {
        titulo: "Adicionais (opcional)",
        tipo: "check",
        opcoes: [
          { nome: "Bacon", preco: 5.00 },
          { nome: "Cheddar", preco: 4.00 },
          { nome: "Ovo", preco: 3.00 },
        ],
      }
    ],
  },
  {
    id: "ln-xtudo",
    categoria: "Lanches",
    nome: "X-Tudo",
    desc: "Hambúrguer, queijo, bacon, ovo, salada e molho.",
    preco: 29.90,
    tag: "Monstro",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200&q=80&auto=format&fit=crop",
    addons: [
      {
        titulo: "Adicionais (opcional)",
        tipo: "check",
        opcoes: [
          { nome: "Hambúrguer extra", preco: 7.00 },
          { nome: "Cheddar extra", preco: 4.00 },
          { nome: "Bacon extra", preco: 5.00 },
        ],
      }
    ],
  },

  // BEBIDAS
  {
    id: "bb-refri",
    categoria: "Bebidas",
    nome: "Refrigerante Lata",
    desc: "350ml (Coca, Guaraná, etc.)",
    preco: 6.50,
    tag: "Gelado",
    img: "https://images.unsplash.com/photo-1532634896-26909d0d4b6a?w=1200&q=80&auto=format&fit=crop",
    addons: [],
  },
  {
    id: "bb-agua",
    categoria: "Bebidas",
    nome: "Água",
    desc: "500ml sem gás.",
    preco: 4.00,
    tag: "Leve",
    img: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=1200&q=80&auto=format&fit=crop",
    addons: [],
  },
  {
    id: "bb-suco",
    categoria: "Bebidas",
    nome: "Suco Natural",
    desc: "Laranja ou maracujá (300ml).",
    preco: 9.90,
    tag: "Natural",
    img: "https://images.unsplash.com/photo-1542444459-db37a0fdd9c4?w=1200&q=80&auto=format&fit=crop",
    addons: [
      {
        titulo: "Sabor (escolha 1)",
        tipo: "radio",
        obrigatorio: true,
        opcoes: [
          { nome: "Laranja", preco: 0 },
          { nome: "Maracujá", preco: 0 },
        ],
      }
    ],
  },
];

// ================== ESTADO ==================
const state = {
  cart: [], // { key, nome, qty, unitTotal, addons[], obs }
  modalItem: null,
  modalAddons: {}, // por grupo
};

// ================== DOM HELPERS ==================
const $ = (sel) => document.querySelector(sel);
function must(sel){
  const el = $(sel);
  if(!el) console.error("Elemento não encontrado:", sel);
  return el;
}

// ================== CARRINHO ==================
function makeKey(itemId, addons, obs){
  const a = (addons||[]).map(x => `${x.nome}:${x.preco}`).sort().join("|");
  const o = (obs||"").trim().toLowerCase();
  return `${itemId}__${a}__${o}`;
}

function cartSubtotal(){
  return state.cart.reduce((acc, it) => acc + it.unitTotal * it.qty, 0);
}

function renderCart(){
  const cartEl = must("#cart");
  const subtotalEl = must("#subtotal");
  const taxaEl = must("#taxa");
  const totalEl = must("#total");

  if(!cartEl || !subtotalEl || !taxaEl || !totalEl) return;

  if(state.cart.length === 0){
    cartEl.innerHTML = `<p class="muted">Carrinho vazio. Adicione itens no cardápio 👈</p>`;
  } else {
    cartEl.innerHTML = "";
    state.cart.forEach((it, idx) => {
      const addonsText = it.addons.length
        ? `Adicionais: ${it.addons.map(a => `${a.nome} (${money(a.preco)})`).join(", ")}`
        : "Sem adicionais";

      const obsText = it.obs ? `Obs: ${it.obs}` : "";

      const row = document.createElement("div");
      row.className = "cartRow";
      row.innerHTML = `
        <div>
          <div class="name">${it.nome}</div>
          <div class="meta">
            ${addonsText}${obsText ? " • " + obsText : ""}<br/>
            Unit: <strong>${money(it.unitTotal)}</strong>
          </div>
        </div>
        <div class="qty">
          <button type="button" aria-label="Diminuir">-</button>
          <strong>${it.qty}</strong>
          <button type="button" aria-label="Aumentar">+</button>
        </div>
      `;

      const [subBtn, addBtn] = row.querySelectorAll("button");
      subBtn.addEventListener("click", () => {
        it.qty -= 1;
        if(it.qty <= 0) state.cart.splice(idx, 1);
        renderCart();
      });
      addBtn.addEventListener("click", () => {
        it.qty += 1;
        renderCart();
      });

      cartEl.appendChild(row);
    });
  }

  const entrega = must("#entrega")?.value || "Retirar no balcão";
  const sub = cartSubtotal();
  const taxa = taxaEntrega(entrega);
  const total = sub + taxa;

  subtotalEl.textContent = money(sub);
  taxaEl.textContent = money(taxa);
  totalEl.textContent = money(total);
}

// ================== MENU ==================
function cardHtml(item){
  return `
    <div class="item">
      <div class="img"><img src="${item.img}" alt="${item.nome}"></div>
      <div class="content">
        <h3>
          <span>${item.nome}</span>
          <span class="tag">${item.tag || item.categoria}</span>
        </h3>
        <p>${item.desc}</p>
        <div class="rowBetween">
          <div class="price">${money(item.preco)}</div>
          <div class="actions">
            <button class="btnSmall secondary" type="button" data-quick="${item.id}">+ Rápido</button>
            <button class="btnSmall" type="button" data-custom="${item.id}">Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderMenus(filter=""){
  const pizzasEl = must("#menu-pizzas");
  const lanchesEl = must("#menu-lanches");
  const bebidasEl = must("#menu-bebidas");
  if(!pizzasEl || !lanchesEl || !bebidasEl) return;

  pizzasEl.innerHTML = "";
  lanchesEl.innerHTML = "";
  bebidasEl.innerHTML = "";

  const ft = filter.trim().toLowerCase();

  catalogo
    .filter(i => !ft || i.nome.toLowerCase().includes(ft) || i.desc.toLowerCase().includes(ft))
    .forEach(item => {
      const wrap = document.createElement("div");
      wrap.innerHTML = cardHtml(item);
      const card = wrap.firstElementChild;

      card.querySelector(`[data-quick="${item.id}"]`).addEventListener("click", () => addQuick(item.id));
      card.querySelector(`[data-custom="${item.id}"]`).addEventListener("click", () => openModal(item.id));

      if(item.categoria === "Pizzas") pizzasEl.appendChild(card);
      if(item.categoria === "Lanches") lanchesEl.appendChild(card);
      if(item.categoria === "Bebidas") bebidasEl.appendChild(card);
    });
}

function addQuick(itemId){
  const item = catalogo.find(x => x.id === itemId);
  if(!item) return;

  const addons = [];
  const obs = "";
  const unitTotal = item.preco;

  const key = makeKey(item.id, addons, obs);
  const existing = state.cart.find(x => x.key === key);

  if(existing) existing.qty += 1;
  else state.cart.push({ key, nome:item.nome, qty:1, unitTotal, addons, obs });

  renderCart();
}

// ================== MODAL (SEM BUG) ==================
function openModal(itemId){
  const item = catalogo.find(x => x.id === itemId);
  if(!item) return;

  state.modalItem = item;
  state.modalAddons = {};

  // setar texto
  must("#modalTitle").textContent = item.nome;
  must("#modalDesc").textContent = item.desc;
  must("#itemObs").value = "";

  // render addons
  renderAddons(item);

  // abrir
  const modal = must("#modal");
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");

  updateModalPrice();
}

function closeModal(){
  const modal = must("#modal");
  if(!modal) return;
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  state.modalItem = null;
}

function renderAddons(item){
  const area = must("#addonsArea");
  if(!area) return;

  area.innerHTML = "";

  if(!item.addons || item.addons.length === 0){
    area.innerHTML = `<p class="muted">Sem adicionais para este item.</p>`;
    return;
  }

  item.addons.forEach((group, gi) => {
    const g = document.createElement("div");
    g.className = "addonGroup";

    g.innerHTML = `
      <h4>${group.titulo}${group.obrigatorio ? " <span class='muted small'>(obrigatório)</span>" : ""}</h4>
      <div class="addonList"></div>
    `;

    const list = g.querySelector(".addonList");

    if(group.tipo === "radio"){
      // default (primeira opção)
      if(group.obrigatorio && !state.modalAddons[gi]){
        state.modalAddons[gi] = group.opcoes[0];
      }

      group.opcoes.forEach((op) => {
        const row = document.createElement("div");
        row.className = "addonItem";
        const checked = state.modalAddons[gi]?.nome === op.nome;

        row.innerHTML = `
          <label>
            <input type="radio" name="addon-radio-${gi}" ${checked ? "checked" : ""}/>
            <span>${op.nome}</span>
          </label>
          <span class="aPrice">${op.preco ? "+ " + money(op.preco) : money(0)}</span>
        `;

        row.querySelector("input").addEventListener("change", () => {
          state.modalAddons[gi] = op;
          updateModalPrice();
        });

        list.appendChild(row);
      });
    }

    if(group.tipo === "check"){
      if(!Array.isArray(state.modalAddons[gi])) state.modalAddons[gi] = [];

      group.opcoes.forEach((op) => {
        const row = document.createElement("div");
        row.className = "addonItem";
        const isChecked = state.modalAddons[gi].some(x => x.nome === op.nome);

        row.innerHTML = `
          <label>
            <input type="checkbox" ${isChecked ? "checked" : ""}/>
            <span>${op.nome}</span>
          </label>
          <span class="aPrice">${op.preco ? "+ " + money(op.preco) : money(0)}</span>
        `;

        row.querySelector("input").addEventListener("change", (e) => {
          if(e.target.checked) state.modalAddons[gi].push(op);
          else state.modalAddons[gi] = state.modalAddons[gi].filter(x => x.nome !== op.nome);
          updateModalPrice();
        });

        list.appendChild(row);
      });
    }

    area.appendChild(g);
  });
}

function collectSelectedAddons(item){
  const selected = [];
  (item.addons || []).forEach((group, gi) => {
    const v = state.modalAddons[gi];
    if(group.tipo === "radio"){
      if(v) selected.push({ nome: v.nome, preco: v.preco });
    } else if(group.tipo === "check") {
      (v || []).forEach(op => selected.push({ nome: op.nome, preco: op.preco }));
    }
  });
  return selected;
}

function updateModalPrice(){
  const item = state.modalItem;
  if(!item) return;

  const selected = collectSelectedAddons(item);
  const extra = selected.reduce((acc, a) => acc + (a.preco || 0), 0);
  must("#modalPrice").textContent = money(item.preco + extra);
}

function addModalToCart(){
  const item = state.modalItem;
  if(!item) return;

  // validar obrigatórios
  for(let gi = 0; gi < (item.addons || []).length; gi++){
    const group = item.addons[gi];
    if(group.obrigatorio && group.tipo === "radio" && !state.modalAddons[gi]){
      alert(`Selecione: ${group.titulo}`);
      return;
    }
  }

  const obs = must("#itemObs").value.trim();
  const addons = collectSelectedAddons(item);
  const extra = addons.reduce((acc, a) => acc + (a.preco || 0), 0);
  const unitTotal = item.preco + extra;

  const key = makeKey(item.id, addons, obs);
  const existing = state.cart.find(x => x.key === key);

  if(existing) existing.qty += 1;
  else state.cart.push({ key, nome:item.nome, qty:1, unitTotal, addons, obs });

  closeModal();
  renderCart();
}

// ================== WHATSAPP (PIX) ==================
function montarMensagemWhats(){
  const entrega = must("#entrega").value;
  const endereco = must("#endereco").value.trim();
  const obs = must("#obs").value.trim();
  const pago = must("#pago").value;

  const sub = cartSubtotal();
  const taxa = taxaEntrega(entrega);
  const total = sub + taxa;

  let msg = `Olá! Quero fazer um pedido.%0A%0A`;
  msg += `*Pagamento:* Pix%0A`;
  msg += `*Chave Pix:* ${encodeURIComponent(PIX_KEY)}%0A`;
  msg += `*Status:* ${encodeURIComponent(pago)}%0A%0A`;

  msg += `*Entrega:* ${encodeURIComponent(entrega)}%0A`;
  if(entrega === "Entrega"){
    msg += `*Endereço:* ${encodeURIComponent(endereco || "(não informado)")} %0A`;
  }
  msg += `%0A*Itens:*%0A`;

  state.cart.forEach(it => {
    msg += `- ${it.qty}x ${encodeURIComponent(it.nome)} — ${encodeURIComponent(money(it.unitTotal))}%0A`;
    if(it.addons.length){
      msg += `  • Adicionais: ${encodeURIComponent(it.addons.map(a=>a.nome).join(", "))}%0A`;
    }
    if(it.obs){
      msg += `  • Obs: ${encodeURIComponent(it.obs)}%0A`;
    }
  });

  msg += `%0A*Subtotal:* ${encodeURIComponent(money(sub))}%0A`;
  msg += `*Taxa:* ${encodeURIComponent(money(taxa))}%0A`;
  msg += `*Total:* ${encodeURIComponent(money(total))}%0A`;

  if(obs){
    msg += `%0A*Observações gerais:* ${encodeURIComponent(obs)}%0A`;
  }

  return msg;
}

function finalizarPedido(){
  if(state.cart.length === 0){
    alert("Carrinho vazio 🙂");
    return;
  }

  const entrega = must("#entrega").value;
  const endereco = must("#endereco").value.trim();
  if(entrega === "Entrega" && !endereco){
    alert("Coloque o endereço para entrega 🙂");
    return;
  }

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${montarMensagemWhats()}`;
  window.open(url, "_blank");
}

// ================== INIT (SEM TRAVAR) ==================
function init(){
  must("#year").textContent = new Date().getFullYear();
  must("#pixKey").textContent = PIX_KEY;

  renderMenus();
  renderCart();

  // busca
  must("#search").addEventListener("input", (e) => renderMenus(e.target.value));

  // modal events
  must("#closeModal").addEventListener("click", closeModal);
  must("#addToCart").addEventListener("click", addModalToCart);

  // fechar clicando fora
  must("#modal").addEventListener("click", (e) => {
    if(e.target && e.target.id === "modal") closeModal();
  });

  // fechar com ESC (nunca mais fica preso)
  document.addEventListener("keydown", (e) => {
    if(e.key === "Escape") closeModal();
  });

  // entrega muda taxa
  must("#entrega").addEventListener("change", renderCart);

  // limpar
  must("#clearCart").addEventListener("click", () => {
    if(confirm("Limpar carrinho?")){
      state.cart = [];
      renderCart();
    }
  });

  // copiar pix
  must("#copyPix").addEventListener("click", async () => {
    try{
      await navigator.clipboard.writeText(PIX_KEY);
      alert("Chave Pix copiada ✅");
    } catch {
      alert("Não consegui copiar automaticamente. Copie manualmente 🙂");
    }
  });

  // finalizar
  must("#finish").addEventListener("click", finalizarPedido);
}

init();
