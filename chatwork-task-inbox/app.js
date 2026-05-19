const statusLabels = {
  candidate: "候補",
  review: "要確認",
  accepted: "採用済",
  held: "保留",
  rejected: "却下",
};

const priorityLabels = {
  high: "高",
  medium: "中",
  low: "低",
};

const sourceLabels = {
  chatwork: "Chatwork",
  zoom: "Zoom記録",
  manual: "手動登録",
};

let candidates = [
  {
    id: "task-001",
    sourceType: "chatwork",
    sourceName: "広告運用 PJ",
    room: "広告運用 PJ",
    company: "北辰フーズ株式会社",
    sender: "佐藤さん",
    time: "09:24",
    registeredAt: "2026-05-19T09:26",
    status: "candidate",
    category: "action_required_for_me",
    confidence: 0.88,
    priority: "high",
    dueText: "木曜午前まで",
    dueDate: "2026-05-21",
    dueInterpreted: "2026-05-21 12:00 JST",
    sourceLinkLabel: "元メッセージを開く",
    title: "週次レポートのたたき台を作成する",
    detail:
      "先方レビュー前に、広告配信結果と改善案を1枚にまとめる。媒体別のCVR差分と次週の予算配分案を含める。",
    reason:
      "相手が資料の必要性を示し、本人が引き受ける返答をしているため。",
    sourceUrl: "https://www.chatwork.com/#!rid123-456",
    destinations: {
      tasks: true,
      calendar: false,
      sheets: true,
    },
    messages: [
      {
        name: "佐藤さん",
        time: "09:20",
        text: "木曜の定例、先方が広告の数字をかなり細かく見たいみたいです。",
      },
      {
        name: "自分",
        isMe: true,
        time: "09:21",
        text: "了解です。前回との差分が見えるようにします。",
      },
      {
        name: "佐藤さん",
        time: "09:24",
        text: "助かります。できれば木曜午前までにたたきがあると安心です。",
      },
    ],
  },
  {
    id: "task-002",
    sourceType: "chatwork",
    sourceName: "請求・契約",
    room: "請求・契約",
    company: "株式会社アークライン",
    sender: "山口さん",
    time: "10:08",
    registeredAt: "2026-05-19T10:10",
    status: "review",
    category: "question_to_me",
    confidence: 0.73,
    priority: "medium",
    dueText: "明日中",
    dueDate: "2026-05-20",
    dueInterpreted: "2026-05-20 23:59 JST",
    sourceLinkLabel: "元メッセージを開く",
    title: "4月分の請求書PDFを確認する",
    detail:
      "請求書の金額、対象期間、宛名を確認する。問題なければ承認連絡を返す。",
    reason:
      "確認依頼に近い文面だが、担当者が明示されていないため要確認。",
    sourceUrl: "https://www.chatwork.com/#!rid456-991",
    destinations: {
      tasks: false,
      calendar: false,
      sheets: true,
    },
    messages: [
      {
        name: "山口さん",
        time: "10:06",
        text: "4月分の請求書、PDFで置いておきました。",
      },
      {
        name: "山口さん",
        time: "10:08",
        text: "金額だけ一度見てもらえるとありがたいです。",
      },
    ],
  },
  {
    id: "task-003",
    sourceType: "chatwork",
    sourceName: "採用サイト改修",
    room: "採用サイト改修",
    company: "ミナト採用支援",
    sender: "森さん",
    time: "11:42",
    registeredAt: "2026-05-19T11:44",
    status: "candidate",
    category: "decision_made",
    confidence: 0.91,
    priority: "high",
    dueText: "今日中",
    dueDate: "2026-05-19",
    dueInterpreted: "2026-05-19 23:59 JST",
    sourceLinkLabel: "元メッセージを開く",
    title: "採用サイトのCTA文言をA案に差し替える",
    detail:
      "ファーストビューと募集要項下部のCTAをA案に統一する。公開前にスマホ表示を確認する。",
    reason:
      "A案で進める合意があり、実装作業が次アクションとして残っているため。",
    sourceUrl: "https://www.chatwork.com/#!rid789-110",
    destinations: {
      tasks: true,
      calendar: true,
      sheets: true,
    },
    messages: [
      {
        name: "森さん",
        time: "11:38",
        text: "CTA、B案は少し強すぎるのでA案の方がよさそうです。",
      },
      {
        name: "自分",
        isMe: true,
        time: "11:40",
        text: "A案でいきましょう。今日中に反映して確認します。",
      },
      {
        name: "森さん",
        time: "11:42",
        text: "お願いします。スマホだけ崩れないか見てもらえると助かります。",
      },
    ],
  },
  {
    id: "task-004",
    sourceType: "chatwork",
    sourceName: "全体連絡",
    room: "全体連絡",
    company: "未確定",
    sender: "小林さん",
    time: "13:05",
    registeredAt: "2026-05-19T13:06",
    status: "review",
    category: "waiting_for_other",
    confidence: 0.61,
    priority: "low",
    dueText: "素材が届いたら",
    dueDate: "2026-05-24",
    dueInterpreted: "2026-05-24 18:00 JST 仮置き",
    sourceLinkLabel: "元メッセージを開く",
    title: "先方からの素材共有を待つ",
    detail:
      "素材が届いたらLP反映の要否を判断する。現時点では自分の即時作業ではない。",
    reason:
      "相手側が送付予定で、自分の明確な作業開始条件がまだ満たされていないため。",
    sourceUrl: "https://www.chatwork.com/#!rid999-782",
    destinations: {
      tasks: false,
      calendar: false,
      sheets: true,
    },
    messages: [
      {
        name: "小林さん",
        time: "13:01",
        text: "素材は明日先方から届く予定です。",
      },
      {
        name: "自分",
        isMe: true,
        time: "13:03",
        text: "届いたら中身見ます。",
      },
      {
        name: "小林さん",
        time: "13:05",
        text: "了解です。届き次第このルームに流します。",
      },
    ],
  },
  {
    id: "task-005",
    sourceType: "chatwork",
    sourceName: "営業資料",
    room: "営業資料",
    company: "WorkAsHobby",
    sender: "田中さん",
    time: "15:18",
    registeredAt: "2026-05-18T15:20",
    status: "accepted",
    category: "action_required_for_me",
    confidence: 0.94,
    priority: "medium",
    dueText: "明日午前まで",
    dueDate: "2026-05-19",
    dueInterpreted: "2026-05-19 12:00 JST",
    sourceLinkLabel: "元メッセージを開く",
    title: "営業資料の料金ページを更新する",
    detail:
      "新プランの価格表に差し替え、注記を最新契約条件に合わせる。",
    reason:
      "自分が更新作業を引き受け、期限も明示されているため。",
    sourceUrl: "https://www.chatwork.com/#!rid555-302",
    destinations: {
      tasks: true,
      calendar: false,
      sheets: true,
    },
    messages: [
      {
        name: "田中さん",
        time: "15:12",
        text: "営業資料の料金ページ、古いままでした。",
      },
      {
        name: "自分",
        isMe: true,
        time: "15:16",
        text: "こちらで明日午前までに差し替えます。",
      },
      {
        name: "田中さん",
        time: "15:18",
        text: "ありがとうございます。新プランの注記もお願いします。",
      },
    ],
  },
  {
    id: "task-006",
    sourceType: "zoom",
    sourceName: "定例MTG録画 2026-05-18",
    room: "Zoom transcript",
    company: "青葉デザイン合同会社",
    sender: "Zoom要約",
    time: "18:05",
    registeredAt: "2026-05-18T18:16",
    status: "candidate",
    category: "meeting_action_item",
    confidence: 0.84,
    priority: "medium",
    dueText: "来週前半くらい",
    dueDate: "2026-05-26",
    dueInterpreted: "2026-05-26 18:00 JST",
    sourceLinkLabel: "録画/文字起こしを開く",
    title: "LP改善案を3パターンに整理する",
    detail:
      "Zoom定例で出たLP改善アイデアを、訴求軸別に3パターンへ整理する。次回MTGで比較できる形にする。",
    reason:
      "会議中に本人が整理を引き受け、期限が曖昧に言及されたため来週前半の営業日末として仮置き。",
    sourceUrl: "https://zoom.us/rec/share/mock-aoba-design",
    destinations: {
      tasks: true,
      calendar: false,
      sheets: true,
    },
    messages: [
      {
        name: "先方",
        time: "00:18:42",
        text: "LPの訴求、価格だけじゃなくて導入後の運用負荷も見せたいですね。",
      },
      {
        name: "自分",
        isMe: true,
        time: "00:19:10",
        text: "そこは一旦こちらで3パターンくらいに整理して持っていきます。",
      },
      {
        name: "先方",
        time: "00:19:48",
        text: "ありがとうございます。来週前半くらいに見られると助かります。",
      },
    ],
  },
  {
    id: "task-007",
    sourceType: "manual",
    sourceName: "手動入力",
    room: "Manual note",
    company: "株式会社ネクストリード",
    sender: "自分",
    time: "08:40",
    registeredAt: "2026-05-19T08:40",
    status: "review",
    category: "manual_task",
    confidence: 1,
    priority: "low",
    dueText: "今週どこか",
    dueDate: "2026-05-22",
    dueInterpreted: "2026-05-22 18:00 JST",
    sourceLinkLabel: "手動メモ",
    title: "契約更新の論点をメモにまとめる",
    detail:
      "次回連絡前に、契約更新で確認したい金額、期間、追加範囲を短く整理する。",
    reason:
      "ユーザーが直接登録したタスク。期限表現は今週末の営業日として仮置き。",
    sourceUrl: "#",
    destinations: {
      tasks: false,
      calendar: false,
      sheets: true,
    },
    messages: [
      {
        name: "自分",
        isMe: true,
        time: "08:40",
        text: "契約更新の確認事項を今週どこかでまとめる。",
      },
    ],
  },
];

let state = {
  filter: "all",
  sourceFilter: "all",
  search: "",
  selectedId: candidates[0].id,
};

const elements = {
  candidateList: document.querySelector("#candidateList"),
  visibleCount: document.querySelector("#visibleCount"),
  searchInput: document.querySelector("#searchInput"),
  sourceLink: document.querySelector("#sourceLink"),
  sourceMetaGrid: document.querySelector("#sourceMetaGrid"),
  detailRoom: document.querySelector("#detailRoom"),
  detailTitle: document.querySelector("#detailTitle"),
  confidenceRing: document.querySelector("#confidenceRing"),
  aiDecision: document.querySelector("#aiDecision"),
  threadMessages: document.querySelector("#threadMessages"),
  decisionReason: document.querySelector("#decisionReason"),
  decisionCategory: document.querySelector("#decisionCategory"),
  editorStatus: document.querySelector("#editorStatus"),
  taskCompanyInput: document.querySelector("#taskCompanyInput"),
  taskTitleInput: document.querySelector("#taskTitleInput"),
  taskDetailInput: document.querySelector("#taskDetailInput"),
  taskRegisteredInput: document.querySelector("#taskRegisteredInput"),
  taskDueTextInput: document.querySelector("#taskDueTextInput"),
  taskDueInput: document.querySelector("#taskDueInput"),
  taskPriorityInput: document.querySelector("#taskPriorityInput"),
  destTasks: document.querySelector("#destTasks"),
  destCalendar: document.querySelector("#destCalendar"),
  destSheets: document.querySelector("#destSheets"),
  metricCandidates: document.querySelector("#metricCandidates"),
  metricReview: document.querySelector("#metricReview"),
  metricAccepted: document.querySelector("#metricAccepted"),
  metricToday: document.querySelector("#metricToday"),
  manualAddButton: document.querySelector("#manualAddButton"),
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getSafeSourceUrl(value) {
  return value.startsWith("https://") ? value : "#";
}

function formatDateTime(value) {
  return value.replace("T", " ");
}

function getSelectedCandidate() {
  return candidates.find((candidate) => candidate.id === state.selectedId) || candidates[0];
}

function getFilteredCandidates() {
  const normalizedSearch = state.search.trim().toLowerCase();

  return candidates.filter((candidate) => {
    const statusMatches = state.filter === "all" || candidate.status === state.filter;
    const sourceMatches =
      state.sourceFilter === "all" || candidate.sourceType === state.sourceFilter;
    const searchTarget = [
      candidate.room,
      candidate.sourceName,
      sourceLabels[candidate.sourceType],
      candidate.company,
      candidate.sender,
      candidate.title,
      candidate.detail,
      candidate.category,
    ]
      .join(" ")
      .toLowerCase();
    const searchMatches = normalizedSearch === "" || searchTarget.includes(normalizedSearch);

    return statusMatches && sourceMatches && searchMatches;
  });
}

function updateCandidate(id, changes) {
  candidates = candidates.map((candidate) =>
    candidate.id === id
      ? {
          ...candidate,
          ...changes,
          destinations: {
            ...candidate.destinations,
            ...(changes.destinations || {}),
          },
        }
      : candidate,
  );
}

function renderMetrics() {
  const activeItems = candidates.filter((candidate) => candidate.status !== "rejected");

  elements.metricCandidates.textContent = String(
    candidates.filter((candidate) => candidate.status === "candidate").length,
  );
  elements.metricReview.textContent = String(
    candidates.filter((candidate) => candidate.status === "review").length,
  );
  elements.metricAccepted.textContent = String(
    candidates.filter((candidate) => candidate.status === "accepted").length,
  );
  elements.metricToday.textContent = String(
    activeItems.filter((candidate) => Boolean(candidate.dueDate)).length,
  );
}

function renderCandidateList() {
  const filteredCandidates = getFilteredCandidates();
  elements.visibleCount.textContent = `${filteredCandidates.length}件`;

  if (filteredCandidates.length === 0) {
    elements.candidateList.innerHTML =
      '<div class="empty-state">条件に一致する候補はありません。</div>';
    return;
  }

  elements.candidateList.innerHTML = filteredCandidates
    .map((candidate) => {
      const confidence = Math.round(candidate.confidence * 100);
      const activeClass = candidate.id === state.selectedId ? " active" : "";

      return `
        <button class="candidate-card${activeClass}" type="button" data-id="${candidate.id}">
          <div class="candidate-topline">
            <span class="source-pill ${candidate.sourceType}">${sourceLabels[candidate.sourceType]}</span>
            <span class="status-pill ${candidate.status}">${statusLabels[candidate.status]}</span>
          </div>
          <div class="candidate-origin">
            <span>${escapeHtml(candidate.company)}</span>
            <span>${escapeHtml(candidate.sourceName)}</span>
          </div>
          <h4>${escapeHtml(candidate.title)}</h4>
          <p>${escapeHtml(candidate.detail)}</p>
          <div class="candidate-meta">
            <span>登録 ${escapeHtml(formatDateTime(candidate.registeredAt))}</span>
            <span class="candidate-score">${confidence}%</span>
          </div>
          <div class="task-toolbar">
            <span class="priority-pill ${candidate.priority}">優先度 ${priorityLabels[candidate.priority]}</span>
            <span>期限 ${escapeHtml(candidate.dueDate)}</span>
          </div>
          <div class="due-note">${escapeHtml(candidate.dueText)} → ${escapeHtml(candidate.dueInterpreted)}</div>
        </button>
      `;
    })
    .join("");
}

function renderDetail() {
  const candidate = getSelectedCandidate();
  const confidence = Math.round(candidate.confidence * 100);

  elements.sourceLink.href = getSafeSourceUrl(candidate.sourceUrl);
  elements.sourceLink.textContent = candidate.sourceLinkLabel;
  elements.detailRoom.textContent = `${sourceLabels[candidate.sourceType]} / ${candidate.sourceName}`;
  elements.detailTitle.textContent = candidate.title;
  elements.confidenceRing.textContent = `${confidence}%`;
  elements.sourceMetaGrid.innerHTML = `
    <div>
      <dt>企業</dt>
      <dd>${escapeHtml(candidate.company)}</dd>
    </div>
    <div>
      <dt>発生元</dt>
      <dd>${sourceLabels[candidate.sourceType]} / ${escapeHtml(candidate.sourceName)}</dd>
    </div>
    <div>
      <dt>登録日</dt>
      <dd>${escapeHtml(formatDateTime(candidate.registeredAt))}</dd>
    </div>
    <div>
      <dt>期限解釈</dt>
      <dd>${escapeHtml(candidate.dueText)} → ${escapeHtml(candidate.dueInterpreted)}</dd>
    </div>
  `;
  elements.aiDecision.innerHTML = `
    <strong>${statusLabels[candidate.status]} / ${priorityLabels[candidate.priority]}優先度</strong>
    <p>${escapeHtml(candidate.detail)}</p>
  `;
  elements.threadMessages.innerHTML = candidate.messages
    .map((message) => {
      const initial = message.isMe ? "ME" : message.name.slice(0, 1);
      const meClass = message.isMe ? " me" : "";

      return `
        <div class="message-row${meClass}">
          <div class="avatar" aria-hidden="true">${escapeHtml(initial)}</div>
          <div class="message-bubble">
            <div class="message-head">
              <strong>${escapeHtml(message.name)}</strong>
              <span>${escapeHtml(message.time)}</span>
            </div>
            <p>${escapeHtml(message.text)}</p>
          </div>
        </div>
      `;
    })
    .join("");
  elements.decisionReason.textContent = candidate.reason;
  elements.decisionCategory.textContent = candidate.category;
}

function renderEditor() {
  const candidate = getSelectedCandidate();

  elements.editorStatus.textContent = statusLabels[candidate.status];
  elements.taskCompanyInput.value = candidate.company;
  elements.taskTitleInput.value = candidate.title;
  elements.taskDetailInput.value = candidate.detail;
  elements.taskRegisteredInput.value = candidate.registeredAt;
  elements.taskDueTextInput.value = candidate.dueText;
  elements.taskDueInput.value = candidate.dueDate;
  elements.taskPriorityInput.value = candidate.priority;
  elements.destTasks.checked = candidate.destinations.tasks;
  elements.destCalendar.checked = candidate.destinations.calendar;
  elements.destSheets.checked = candidate.destinations.sheets;
}

function renderFilters() {
  document.querySelectorAll(".filter-chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === state.filter);
  });
  document.querySelectorAll(".source-chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.sourceFilter === state.sourceFilter);
  });
}

function renderAll() {
  renderMetrics();
  renderFilters();
  renderCandidateList();
  renderDetail();
  renderEditor();
}

function selectCandidate(id) {
  state = {
    ...state,
    selectedId: id,
  };
  renderAll();
}

function setFilter(filter) {
  state = {
    ...state,
    filter,
  };
  renderAll();
}

function setSourceFilter(sourceFilter) {
  state = {
    ...state,
    sourceFilter,
  };
  renderAll();
}

function setStatus(status) {
  updateCandidate(state.selectedId, { status });
  renderAll();
}

function syncEditorChanges() {
  updateCandidate(state.selectedId, {
    company: elements.taskCompanyInput.value,
    title: elements.taskTitleInput.value,
    detail: elements.taskDetailInput.value,
    registeredAt: elements.taskRegisteredInput.value,
    dueText: elements.taskDueTextInput.value,
    dueDate: elements.taskDueInput.value,
    dueInterpreted: `${elements.taskDueInput.value} 18:00 JST`,
    priority: elements.taskPriorityInput.value,
    destinations: {
      tasks: elements.destTasks.checked,
      calendar: elements.destCalendar.checked,
      sheets: elements.destSheets.checked,
    },
  });
  renderMetrics();
  renderCandidateList();
  renderDetail();
}

function addManualCandidate() {
  const id = `manual-${Date.now()}`;

  candidates = [
    {
      id,
      sourceType: "manual",
      sourceName: "手動入力",
      room: "Manual note",
      company: "未設定",
      sender: "自分",
      time: "現在",
      registeredAt: "2026-05-19T12:00",
      status: "review",
      category: "manual_task",
      confidence: 1,
      priority: "medium",
      dueText: "未設定",
      dueDate: "2026-05-19",
      dueInterpreted: "2026-05-19 18:00 JST 仮置き",
      sourceLinkLabel: "手動メモ",
      title: "新しい手動タスク",
      detail: "ここにメモを入力して、必要に応じてGoogle TasksやSheetsへ反映する。",
      reason: "手動追加されたため、AI判定ではなくユーザー入力を優先。",
      sourceUrl: "#",
      destinations: {
        tasks: false,
        calendar: false,
        sheets: true,
      },
      messages: [
        {
          name: "自分",
          isMe: true,
          time: "現在",
          text: "手動追加されたタスク。",
        },
      ],
    },
    ...candidates,
  ];
  state = {
    ...state,
    selectedId: id,
    filter: "all",
    sourceFilter: "manual",
  };
  renderAll();
}

document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.filter);
  });
});

document.querySelectorAll(".source-chip").forEach((button) => {
  button.addEventListener("click", () => {
    setSourceFilter(button.dataset.sourceFilter);
  });
});

elements.manualAddButton.addEventListener("click", addManualCandidate);

elements.searchInput.addEventListener("input", (event) => {
  state = {
    ...state,
    search: event.target.value,
  };
  renderCandidateList();
});

elements.candidateList.addEventListener("click", (event) => {
  const card = event.target.closest(".candidate-card");
  if (!card) return;

  selectCandidate(card.dataset.id);
});

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    const nextStatus =
      action === "accept" ? "accepted" : action === "hold" ? "held" : "rejected";

    setStatus(nextStatus);
  });
});

[
  elements.taskCompanyInput,
  elements.taskTitleInput,
  elements.taskDetailInput,
  elements.taskRegisteredInput,
  elements.taskDueTextInput,
  elements.taskDueInput,
  elements.taskPriorityInput,
  elements.destTasks,
  elements.destCalendar,
  elements.destSheets,
].forEach((input) => {
  input.addEventListener("change", syncEditorChanges);
  input.addEventListener("input", syncEditorChanges);
});

renderAll();
