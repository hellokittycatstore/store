/**
 * hk-chat-bubble.js
 * HelloKitty — Floating Chat Bubble Plugin
 * ─────────────────────────────────────────
 * Drop one <script> tag on any page and you get the
 * animated cat avatar + speech-bubble widget, perfectly
 * stacked above the Smartsupp button.
 *
 * BASIC USAGE (zero config — sensible defaults):
 *   <script src="../js/hk-chat-bubble.js"></script>
 *
 * CUSTOM CONFIG (set window.HKChatConfig BEFORE the script tag):
 *   <script>
 *     window.HKChatConfig = {
 *       accentColor:   '#c8860a',          // avatar + button colour
 *       ctaLabel:      'Chat with us 🐾',   // CTA button text
 *       avatar:        '🐱',               // emoji OR an <img> URL
 *       messages:      ['Hello!', 'Need help?'],
 *       firstDelay:    3000,               // ms before first appearance
 *       repeatDelay:   35000,              // ms between re-appearances
 *       autoDismiss:   7000,               // ms before auto-hide (0 = never)
 *       bottomOffset:  90,                 // px above Smartsupp button
 *       rightOffset:   20,                 // px from right edge
 *       onChatOpen:    function() {},      // custom handler — skips Smartsupp
 *     };
 *   </script>
 *   <script src="../js/hk-chat-bubble.js"></script>
 *
 * PUBLIC API (after the script loads):
 *   HKChatBubble.show()       — show speech bubble
 *   HKChatBubble.hide()       — hide speech bubble
 *   HKChatBubble.destroy()    — remove the widget entirely
 *   HKChatBubble.setMessages(['...','...'])  — replace message pool at runtime
 */

(function (global) {
  'use strict';

  /* ── Merge user config with defaults ── */
  const cfg = Object.assign({
    accentColor:  '#C47A35',
    hoverColor:   '#C47A35',
    ctaLabel:     'Chat with us 🐾',
    avatar:       '🐱',
    avatarSize:   58,        // px, diameter of the button
    messages: [
      "👋 Have a question about a kitten or order?<br>We're online and happy to help!",
      "🐾 Thinking about a Persian or Ragdoll? Ask us anything — no pressure!",
      "💬 Our support team typically replies in under 2 minutes.",
      "🐱 New to HelloKitty? We'll walk you through everything, step by step.",
      "❓ Need vet advice or breed info? Hit us up — we love cat talk!",
    ],
    firstDelay:   3000,
    repeatDelay:  35000,
    autoDismiss:  7000,
    bottomOffset: 90,
    rightOffset:  20,
    onChatOpen:   null,      // function() — override default Smartsupp open
  }, global.HKChatConfig || {});

  /* ── Inject CSS ── */
  const STYLE_ID = 'hk-bubble-styles';
  if (!document.getElementById(STYLE_ID)) {
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      #hk-bubble-wrap {
        position: fixed;
        bottom: ${cfg.bottomOffset}px;
        right: ${cfg.rightOffset}px;
        z-index: 1999;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 10px;
        pointer-events: none;
      }

      /* ── Speech card ── */
      #hk-speech {
        background: #fff;
        border-radius: 18px 18px 4px 18px;
        padding: 14px 18px;
        max-width: 240px;
        box-shadow: 0 8px 32px rgba(44,24,16,0.18), 0 2px 8px rgba(44,24,16,0.10);
        font-family: inherit;
        font-size: 13.5px;
        font-weight: 500;
        line-height: 1.55;
        color: #2c1810;
        pointer-events: all;
        opacity: 0;
        transform: translateY(12px) scale(0.93);
        transition: opacity 0.4s cubic-bezier(.34,1.56,.64,1),
                    transform 0.4s cubic-bezier(.34,1.56,.64,1);
        position: relative;
      }
      #hk-speech.hk-visible {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      /* Speech bubble tail */
      #hk-speech::after {
        content: '';
        position: absolute;
        bottom: -8px;
        right: 18px;
        border-left: 8px solid transparent;
        border-top: 8px solid #fff;
      }

      /* Close × */
      #hk-speech .hk-close-btn {
        position: absolute;
        top: 6px; right: 8px;
        background: none; border: none;
        cursor: pointer;
        color: #888;
        font-size: 13px; line-height: 1;
        opacity: 0.55;
        transition: opacity 0.2s;
        pointer-events: all;
        font-family: inherit;
      }
      #hk-speech .hk-close-btn:hover { opacity: 1; }

      /* Message text */
      #hk-speech .hk-msg { padding-right: 16px; }

      /* CTA button */
      #hk-speech .hk-chat-link {
        display: inline-block;
        margin-top: 9px;
        background: ${cfg.accentColor};
        color: #fff;
        border-radius: 20px;
        padding: 5px 15px;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.3px;
        text-decoration: none;
        cursor: pointer;
        border: none;
        font-family: inherit;
        transition: background 0.2s;
        pointer-events: all;
      }
      #hk-speech .hk-chat-link:hover {
        background: ${cfg.hoverColor};
      }

      /* ── Avatar button ── */
      #hk-avatar-btn {
        width: ${cfg.avatarSize}px;
        height: ${cfg.avatarSize}px;
        border-radius: 50%;
        background: linear-gradient(135deg, ${cfg.accentColor} 0%, ${cfg.hoverColor} 100%);
        border: 3px solid #fff;
        box-shadow: 0 6px 22px rgba(44,24,16,0.22);
        cursor: pointer;
        pointer-events: all;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${Math.round(cfg.avatarSize * 0.45)}px;
        position: relative;
        transition: transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.2s;
        overflow: visible;
        padding: 0;
        line-height: 1;
      }
      #hk-avatar-btn img.hk-avatar-img {
        width: 70%; height: 70%;
        border-radius: 50%;
        object-fit: cover;
        pointer-events: none;
      }
      #hk-avatar-btn:hover {
        transform: scale(1.1);
        box-shadow: 0 10px 30px rgba(44,24,16,0.28);
      }
      #hk-avatar-btn:active { transform: scale(0.96); }

      /* Ping ring */
      #hk-avatar-btn::before {
        content: '';
        position: absolute; inset: -6px;
        border-radius: 50%;
        border: 2px solid ${cfg.accentColor};
        opacity: 0;
        animation: hk-ping 2.4s ease-out infinite;
      }
      @keyframes hk-ping {
        0%   { opacity: 0.7; transform: scale(1); }
        100% { opacity: 0;   transform: scale(1.55); }
      }

      /* Online dot */
      #hk-online-dot {
        position: absolute;
        bottom: 3px; right: 3px;
        width: 12px; height: 12px;
        border-radius: 50%;
        background: #22c55e;
        border: 2px solid #fff;
        pointer-events: none;
      }

      /* Bounce-in entry */
      @keyframes hk-bounceIn {
        0%   { opacity: 0; transform: translateY(30px) scale(0.8); }
        60%  { transform: translateY(-6px) scale(1.04); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
      #hk-bubble-wrap.hk-entered {
        animation: hk-bounceIn 0.55s cubic-bezier(.34,1.56,.64,1) forwards;
      }

      /* Message swap fade */
      #hk-speech-msg.hk-fade {
        opacity: 0;
        transition: opacity 0.2s;
      }
      #hk-speech-msg {
        transition: opacity 0.2s;
      }
    `;
    document.head.appendChild(style);
  }

  /* ── Build DOM ── */
  const wrap = document.createElement('div');
  wrap.id = 'hk-bubble-wrap';

  // Avatar content: image URL or emoji
  const isImageAvatar = /^https?:\/\/|^\/|^\.\.|^data:/.test(cfg.avatar);
  const avatarInner = isImageAvatar
    ? `<img class="hk-avatar-img" src="${cfg.avatar}" alt="Support agent">`
    : cfg.avatar;

  wrap.innerHTML = `
    <div id="hk-speech">
      <button class="hk-close-btn" id="hk-dismiss" title="Dismiss" aria-label="Dismiss">✕</button>
      <div class="hk-msg" id="hk-speech-msg"></div>
      <button class="hk-chat-link" id="hk-open-chat">${cfg.ctaLabel}</button>
    </div>
    <button id="hk-avatar-btn" title="Chat with HelloKitty support" aria-label="Open live chat">
      ${avatarInner}
      <span id="hk-online-dot"></span>
    </button>
  `;

  document.body.appendChild(wrap);

  /* ── State ── */
  const speech    = wrap.querySelector('#hk-speech');
  const msgEl     = wrap.querySelector('#hk-speech-msg');
  const dismissBtn = wrap.querySelector('#hk-dismiss');
  const openBtn   = wrap.querySelector('#hk-open-chat');
  const avatarBtn = wrap.querySelector('#hk-avatar-btn');

  let msgIndex      = 0;
  let bubbleVisible = false;
  let dismissed     = false;
  let autoTimer     = null;
  let repeatTimer   = null;

  /* ── Core functions ── */
  function showBubble() {
    if (dismissed) return;

    // Swap message with fade
    msgEl.classList.add('hk-fade');
    setTimeout(() => {
      msgEl.innerHTML = cfg.messages[msgIndex % cfg.messages.length];
      msgIndex++;
      msgEl.classList.remove('hk-fade');
    }, 200);

    speech.classList.add('hk-visible');
    bubbleVisible = true;

    if (cfg.autoDismiss > 0) {
      clearTimeout(autoTimer);
      autoTimer = setTimeout(hideBubble, cfg.autoDismiss);
    }
  }

  function hideBubble() {
    speech.classList.remove('hk-visible');
    bubbleVisible = false;
    clearTimeout(autoTimer);
  }

  function openChat() {
    hideBubble();
    if (typeof cfg.onChatOpen === 'function') {
      cfg.onChatOpen();
    } else if (window.smartsupp) {
      smartsupp('chat:open');
    } else if (typeof showToast === 'function') {
      showToast('Opening live chat… 🐾', 'info');
    }
  }

  /* ── Timers ── */
  // First appearance
  setTimeout(() => {
    wrap.classList.add('hk-entered');
    setTimeout(showBubble, 300);
  }, cfg.firstDelay);

  // Recurring re-appearance
  if (cfg.repeatDelay > 0) {
    repeatTimer = setInterval(() => {
      if (!dismissed) showBubble();
    }, cfg.repeatDelay);
  }

  /* ── Event listeners ── */
  avatarBtn.addEventListener('click', () => {
    if (bubbleVisible) {
      openChat();
    } else {
      dismissed = false;
      showBubble();
    }
  });

  dismissBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dismissed = true;
    hideBubble();
  });

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openChat();
  });

  /* ── Public API ── */
  global.HKChatBubble = {
    show()  { dismissed = false; showBubble(); },
    hide()  { hideBubble(); },
    destroy() {
      hideBubble();
      clearInterval(repeatTimer);
      wrap.remove();
      const s = document.getElementById(STYLE_ID);
      if (s) s.remove();
    },
    setMessages(arr) {
      if (Array.isArray(arr) && arr.length) {
        cfg.messages = arr;
        msgIndex = 0;
      }
    },
  };

})(window);
