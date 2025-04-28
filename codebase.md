# .gitignore

```
node_modules

# Output
.output
.vercel
.netlify
.wrangler
/.svelte-kit
/build

# OS
.DS_Store
Thumbs.db

# Env
.env
.env.*
!.env.example
!.env.test

# Vite
vite.config.js.timestamp-*
vite.config.ts.timestamp-*

```

# .npmrc

```
engine-strict=true

```

# .prettierignore

```
# Package Managers
package-lock.json
pnpm-lock.yaml
yarn.lock
bun.lock
bun.lockb

```

# .prettierrc

```
{
	"useTabs": true,
	"singleQuote": true,
	"trailingComma": "none",
	"printWidth": 100,
	"plugins": ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
	"overrides": [
		{
			"files": "*.svelte",
			"options": {
				"parser": "svelte"
			}
		}
	]
}

```

# package.json

```json
{
	"name": "wiederdabei-homepage",
	"private": true,
	"version": "0.0.1",
	"type": "module",
	"scripts": {
		"dev": "vite dev",
		"build": "vite build",
		"preview": "vite preview",
		"prepare": "svelte-kit sync || echo ''",
		"check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
		"check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch",
		"format": "prettier --write .",
		"lint": "prettier --check ."
	},
	"devDependencies": {
		"@sveltejs/adapter-auto": "^6.0.0",
		"@sveltejs/adapter-netlify": "^5.0.0",
		"@sveltejs/kit": "^2.16.0",
		"@sveltejs/vite-plugin-svelte": "^5.0.0",
		"@tailwindcss/forms": "^0.5.9",
		"@tailwindcss/typography": "^0.5.15",
		"@tailwindcss/vite": "^4.0.0",
		"daisyui": "^5.0.27",
		"prettier": "^3.4.2",
		"prettier-plugin-svelte": "^3.3.3",
		"prettier-plugin-tailwindcss": "^0.6.11",
		"svelte": "^5.0.0",
		"svelte-check": "^4.0.0",
		"svelte-hero-icons": "^5.2.0",
		"tailwindcss": "^4.0.0",
		"typescript": "^5.0.0",
		"vite": "^6.2.5"
	},
	"dependencies": {
		"@hotjar/browser": "^1.0.9",
		"@supabase/supabase-js": "^2.49.4",
		"supabase": "^2.20.12",
		"svelte-flags": "^2.0.1",
		"svelte-typewrite": "^3.0.0",
		"svelte-typewriter": "^3.2.3"
	}
}

```

# README.md

```md
# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

\`\`\`bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
\`\`\`

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

\`\`\`bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
\`\`\`

## Building

To create a production version of your app:

\`\`\`bash
npm run build
\`\`\`

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

```

# src\app.css

```css
@import 'tailwindcss';
@plugin '@tailwindcss/forms';
@plugin '@tailwindcss/typography';
@plugin "daisyui" {
    themes: all
}

```

# src\app.d.ts

```ts
// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

```

# src\app.html

```html
<!doctype html>
<html lang="en" data-theme="dim">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="%sveltekit.assets%/favicon.png" />
		<title>Wieder Dabei - Zurück in den Job</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />

		<!-- Open Graph (Facebook, LinkedIn, ...) -->
		<meta property="og:title" content="Wieder Dabei - Zurück in den Job" />
		<meta
			property="og:description"
			content="Nicht mehr vermittelbar? Schluss damit. Du bist nicht das Problem. 
		Wir finden dir einen passenden Job mit Sinn."
		/>
		<meta property="og:url" content="https://wiederdabei.de/" />
		<meta property="og:type" content="website" />

		%sveltekit.head%

		<!-- Hotjar Tracking Code for Website 6377167 (Name fehlt) -->
		<script>
			(function (h, o, t, j, a, r) {
				h.hj =
					h.hj ||
					function () {
						(h.hj.q = h.hj.q || []).push(arguments);
					};
				h._hjSettings = { hjid: 6377167, hjsv: 6 };
				a = o.getElementsByTagName('head')[0];
				r = o.createElement('script');
				r.async = 1;
				r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
				a.appendChild(r);
			})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
		</script>
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents">%sveltekit.body%</div>
	</body>
</html>

```

# src\lib\i18n\ae.json

```json
{
    "hero": {
      "button": "سوق العمل بحاجة إلى تحديث",
      "title": "أنت لست خارج اللعبة. أنت مطلوب!",
      "subtitle": "\"غير قابل للتوظيف؟\" - كفى بهذا. أنت لست المشكلة. سنجد لك وظيفة مناسبة ذات معنى.",
      "cta": {
        "primary": "ابدأ الآن",
        "secondary": "كيف يعمل ذلك؟"
      }
    },
    "examples": {
      "title1": "\"البدء من جديد في سن الستين؟",
      "subtitle1": "نعم - إذا سمح لي أحد بذلك.",
      "description1": "انضم كـ <strong>مربية أطفال</strong> في مركز مساعدة الحي.",
      "title2": "\"لقد عملت بجد لمدة 20 عامًا.",
      "subtitle2": "أريد أن يكون لعملي قيمة.\"",
      "description2": "انضم كـ <strong>ميكانيكي</strong> في ورشة إصلاح الدراجات.",
      "title3": "\"كفى من الأعمال الورقية.",
      "subtitle3": "أريد أن أعمل - وبشكل صحيح.\"",
      "description3": "انضم كـ <strong>مساعد رعاية</strong> في مركز الرعاية النهارية.",
      "title4": "\"العمل؟ أثق بقدرتي على ذلك مرة أخرى.",
      "subtitle4": "في بيئة عمل عادلة.\"",
      "description4": "انضم كـ <strong>عامل رعاية المساحات الخضراء</strong> في بلديتك.",
      "card": {
        "title": "ما الذي تجيد القيام به؟ ما الذي يناسبك؟",
        "subtitle": "سنجد صاحب عمل يحتاج إليك.",
        "cta": "دعنا نساعدك في التوظيف."
      }
    },
    "form": {
      "title": "كيف يمكننا مساعدتك؟",
      "description1": "هل ترغب في العودة للعمل ولكن لا تحصل على فرصة؟ هل إجراءات مكتب العمل لا تساعدك للمضي قدمًا؟ هل لم تعد تؤمن بأن كتابة طلبات التوظيف ستفيد بشيء؟",
      "description2": "إذا كنت عاطلاً عن العمل <strong>لأكثر من سنتين</strong>، فسنوفر لك:",
      "benefits": {
        "job": "وظيفة مؤمنة اجتماعيًا مع <strong>نشاط</strong> و<strong>ساعات عمل أسبوعية</strong> <strong>تناسبك</strong>.",
        "coach": "<strong>مدرب</strong> يساعدك في <strong>حل المشاكل</strong> في وظيفتك الجديدة.",
        "training": "وإذا أردت <strong>تدريبًا</strong> يعلمك كيفية عيش <strong>حياة أكثر صحة</strong>."
      },
      "cta": "أدخل <strong>عنوان بريدك الإلكتروني</strong> وسنساعدك!"
    },
    "emailForm": {
      "title": "تبدأ بدايتك الجديدة اليوم",
      "description": "<strong>مهما طالت فترة غيابك عن العمل</strong> - سنساعدك في العودة إلى الحياة المهنية. سجل للحصول على <strong>معلومات أولية مجانية</strong>:",
      "email": "البريد الإلكتروني",
      "placeholder": "أدخل عنوان البريد الإلكتروني",
      "submit": "سجل الآن <strong>مجانًا</strong>",
      "privacy": "سيتم التعامل مع بياناتك بسرية. يمكنك إلغاء الاشتراك في أي وقت."
    },
    "callbackForm": {
    "switchButton": "طلب معاودة اتصال مجانية",
    "backToEmail": "العودة إلى نموذج البريد الإلكتروني",
    "name": "الاسم",
    "namePlaceholder": "الاسم الأول والأخير",
    "phone": "رقم الهاتف",
    "phonePlaceholder": "رقم هاتفك",
    "submit": "طلب معاودة اتصال <strong>مجانًا</strong>",
    "privacy": "سيتم التعامل مع بياناتك بسرية. يمكنك إلغاء الاشتراك في أي وقت."
  },
  "successMessages": {
  "email": "شكرًا! سنرد عليك في أقرب وقت ممكن.",
  "callback": "شكرًا! سنعاود الاتصال بك في أقرب وقت ممكن."
},
    "timeline": {
      "step1": {
        "title": "سنتحدث معك لمدة 30 دقيقة.",
        "description": "أخبرنا بما تجيد فعله - وما ترغب في القيام به."
      },
      "step2": {
        "title": "ستحصل على اقتراحات وظيفية.",
        "description": "سنعرض عليك الوظائف التي تناسبك. أنت تقرر ما يثير اهتمامك."
      },
      "step3": {
        "title": "سنجد لك صاحب عمل.",
        "description": "لا تحتاج إلى سيرة ذاتية. لا طلب توظيف. سنتصل نيابة عنك."
      },
      "step4": {
        "title": "ستقدم نفسك شخصيًا.",
        "description": "ستذهب وتتحدث معهم. ببساطة. بشكل شخصي. كما كان الحال في الماضي."
      },
      "step5": {
        "title": "سيتم دعم وظيفتك.",
        "description": "يتحمل المكتب جزءًا من راتبك أو حتى راتبك بالكامل."
      },
      "step6": {
        "title": "سنقوم بملء الطلب معك.",
        "description": "هناك استمارة من المكتب. سنملأها معًا."
      },
      "step7": {
        "title": "ستحصل على الوظيفة.",
        "description": "ستعمل. براتب كامل. وسنستمر في مرافقتك كمدربين!"
      },
      "cta": "دعنا نساعدك في التوظيف"
    },
    "faq": {
      "title": "الأسئلة المتكررة",
      "items": [
        {
          "question": "من يمكنه الاستفادة من خدماتكم؟",
          "answer": "تستهدف خدماتنا جميع الأشخاص الذين يرغبون في العودة إلى الحياة المهنية بعد فترة طويلة (أكثر من عامين) أو الذين يبحثون عن فرصة مهنية جديدة رغم التحديات والرفض. سواء كان ذلك بعد إجازة الأمومة أو المرض أو البطالة أو إعادة التوجيه المهني - نساعدك في العودة."
        },
        {
          "question": "هل يجب علي كتابة طلب توظيف؟",
          "answer": "لا. حقًا لا. لا سيرة ذاتية، لا خطاب تقديم. نتحدث معك، تخبرنا بما يمكنك القيام به - ونتولى الباقي."
        },
        {
          "question": "لا أستطيع أن أتخيل العودة لوظيفة عادية.",
          "answer": "نتفهم ذلك. كثيرون هنا مروا بكل شيء - إجراءات، طلبات توظيف، رفض. الفرق: لدينا وظائف، لأننا نضمن مسبقًا وجود التمويل. وأنت مطلوب، ولست مجرد شخص تتم إدارته. إذا أردت، يمكننا معًا اكتشاف ما هو ممكن."
        },
        {
          "question": "كم تكلف مساعدتكم؟",
          "answer": "لا شيء على الإطلاق. التوظيف مجاني لك. مكتب العمل يتحمل راتبك - صاحب العمل يدفع جزءًا فقط أو حتى لا يدفع شيئًا. بالنسبة لك، هذا يعني: ستحصل على وظيفة حقيقية براتب وتأمين اجتماعي وتأمين تقاعدي - وحتى التدريب، لأننا نعلم مدى صعوبة العودة بعد سنوات عديدة."
        },
        {
          "question": "في أي قطاعات يمكنكم التوظيف؟",
          "answer": "من خلال تعاوننا الخاص مع أصحاب العمل \"الودودين للعائدين\"، تنفتح فرص في مجالات يصعب الوصول إليها عادة. بالمناسبة: إذا كنت لم تعمل (أو عملت قليلاً) لمدة 6 سنوات أو أكثر، فإن مكتب العمل سيدفع لصاحب العمل الجديد راتبك الكامل لمدة عامين - بهذه الحجة نستطيع إقناع أي صاحب عمل بك! سنتولى ذلك نيابة عنك."
        },
        {
          "question": "كم من الوقت يستغرق الأمر حتى أجد وظيفة؟",
          "answer": "يختلف الأمر. أحيانًا يكون سريعًا، وأحيانًا يستغرق بعض الوقت. لكننا سنستمر في المحاولة. ولست مضطرًا أن تكون جاهزًا على الفور - أنت من يحدد الوتيرة. سنساعدك من حيث أنت الآن."
        },
        {
          "question": "ماذا لو لم أعمل لفترة طويلة؟",
          "answer": "إذن أنت بالضبط الشخص الذي صُمم من أجله هذا النظام الجديد. مهما كانت المدة - سنتان، 6 سنوات، 15 سنة - إذا كنت ترغب في العمل، فسنهتم بجعل ذلك ممكنًا مرة أخرى."
        },
        {
          "question": "ماذا لو لم أكن أعرف بعد ما إذا كان العمل مرة أخرى ممكنًا بالنسبة لي؟",
          "answer": "إذن سنكتشف ذلك معًا. لنبدأ بالحديث أولاً. لست مضطرًا للالتزام بأي شيء. هناك أيضًا إمكانية البدء ببطء من خلال تدريب - أو ببساطة قول: \"أريد أن أرى الأمر أولاً\"."
        },
        {
          "question": "أنا أساعد بالفعل في بعض الأماكن، لكنني لا أحصل على أي مال مقابل ذلك.",
          "answer": "إذا كنت عاطلاً عن العمل لأكثر من 6 سنوات (أو عملت قليلاً جدًا)، فربما يمكننا تحويل ذلك إلى وظيفة حقيقية - براتب وتأمين ودعم. اتصل بنا. سندرس الأمر."
        }
      ]
    },
    "vorhaben": {
      "title": "ما نخطط له",
      "description1": "نحن لسنا مجرد إجراء. ولسنا مجرد حركة قصيرة الأجل - نريد إحداث تغيير هيكلي. أن يُرى الأشخاص ذوو الخبرة الحياتية والمهنية مرة أخرى، وأن يكونوا مطلوبين ومدعومين.",
      "description2": "لهذا الغرض، يتم حاليًا إنشاء منصة تربطك مع <strong>الشركات والمنظمات غير الربحية ومراكز مساعدة الحي والبلديات أو الجمعيات</strong>. أي مع أصحاب العمل الذين يمكنهم حقًا الاستفادة منك - <strong>حتى لو لم يكن هناك مال للتوظيف مسبقًا</strong>. لأن: الدولة ستتحمل جزءًا من راتبك. ستعمل، وستكون مطلوبًا - وستظل جزءًا من المجتمع.",
      "description3": "الإطار القانوني لذلك يسمى نقل السلبي-النشط (PAT). الفكرة: بدلاً من دفع إعانة المواطنين لك، يتم استخدام هذه الأموال لتمكينك من الحصول على وظيفة حقيقية مرة أخرى - <strong>مع تأمين اجتماعي، مدفوعة، مع دعم ومع آفاق مستقبلية</strong>.",
      "callout": "لم يكتمل كل شيء بعد. لكننا نعمل على ذلك. وإذا أردت، ستكون من أوائل من سيُقال لهم قريبًا: <i>مرحبًا بعودتك</i>.",
      "pat": {
        "title": "كيف يعمل نظام PAT بالضبط؟",
        "p1": "نقل السلبي-النشط (باختصار: PAT) هو منطق دعم حكومي لا يدير الناس في البطالة بعد الآن - بل يخلق وظائف ذات قيمة مجتمعية لهم. تم تطوير PAT قبل سنوات كمشروع نموذجي من قبل الكنيسة الإنجيلية (دياكوني).",
        "p2": "بدلاً من الاستمرار في دفع إعانات مثل إعانة المواطنين مباشرة للعاطلين عن العمل، يجمع مكتب العمل هذه الأموال ويستخدمها لتحمل جزء من راتبك. وهكذا تنشأ وظائف حقيقية مدفوعة الأجر - حتى في الأماكن التي كان فيها أصحاب العمل يضطرون للقول سابقًا: نود توظيف شخص ما، لكننا لا نستطيع تحمل تكلفة ذلك.",
        "special": "الميزة الخاصة في ذلك:",
        "benefits": [
          "تخلق لنفسك وظيفة منتظمة خاصة بك، مع تأمين اجتماعي، في المجال الذي ترغب في العمل فيه.",
          "لا يتم مجرد 'تشغيلك' أو وضعك في إجراء، بل يتم توظيفك براتب حقيقي.",
          "وأيضًا: يتكون راتبك من حصة صاحب العمل والدعم."
        ],
        "mission": "مهمتنا: من يريد العمل، يجب أن يتمكن من العمل. أخبرنا بما يمكنك القيام به - سنجد أو نخلق الوظيفة المناسبة لذلك."
      }
    },
    "cta": {
      "title": "قد يكون النظام نسيك. نحن لم ننساك.",
      "description": "من يريد العمل، يجب أن يتمكن من العمل. عمرك، أصلك، الفجوات في سيرتك الذاتية أو النكسات من ماضيك لا تحدد مستقبلك. نحن ننظم وظائف حقيقية مدعومة - تتناسب مع اهتماماتك ومهاراتك وظروف حياتك.",
      "button": "دعنا نساعدك في التوظيف"
    },
    "footer": {
      "legal": "الشروط القانونية وسياسة الخصوصية"
    }
  }
```

# src\lib\i18n\de.json

```json
{
    "hero": {
      "button": "Der Arbeitsmarkt braucht ein Update",
      "title": "Du bist nicht raus. Du wirst gebraucht!",
      "subtitle": "\"Nicht mehr vermittelbar?\" – Schluss damit. Du bist nicht das Problem. Wir finden dir einen passenden Job mit Sinn.",
      "cta": {
        "primary": "Jetzt durchstarten",
        "secondary": "Wie funktioniert's?"
      }
    },
    "examples": {
      "title1": "„Mit 60 nochmal anfangen?",
      "subtitle1": "Ja – wenn man mich lässt.",
      "description1": "Komm als <strong>Tagesmutter</strong> in eine Nachbarschaftshilfe.",
      "title2": "\"Ich hab 20 Jahre malocht.",
      "subtitle2": "Ich will, dass das was zählt.\"",
      "description2": "Komm als <strong>Mechaniker</strong> in eine Fahrradwerkstatt.",
      "title3": "„Genug Papierkram.",
      "subtitle3": "Ich will arbeiten – und zwar richtig.\"",
      "description3": "Komm als <strong>Betreuungsassistenz</strong> in eine Tagespflege.",
      "title4": "„Arbeiten? Trau ich mir wieder zu.",
      "subtitle4": "In einem fairen Arbeitsumfeld.\"",
      "description4": "Komm als <strong>Grünpflegekraft</strong> in deine Kommune.",
      "card": {
        "title": "Worin bist du gut? Was liegt dir?",
        "subtitle": "Wir finden einen Arbeitgeber, der dich braucht.",
        "cta": "Lass dich von uns vermitteln."
      }
    },
    "form": {
      "title": "Wie helfen wir dir?",
      "description1": "Du möchtest wieder arbeiten, aber bekommst keine Chance? Die Jobcenter Maßnahmen bringen dich nicht weiter? Du glaubst nicht mehr daran, dass Bewerbungen schreiben noch etwas bringt?",
      "description2": "Bist du schon <strong>mehr als 2 Jahre arbeitlos</strong>, besorgen wir dir:",
      "benefits": {
        "job": "Einen sozialversicherten Job mit <strong>Tätigkeit</strong> und <strong>Wochenstunden</strong>, die <strong>zu dir passen</strong>.",
        "coach": "Einen <strong>Coach</strong>, der dir bei <strong>Problemen</strong> im neuen Job <strong>hilft</strong>.",
        "training": "Und (wenn du willst) eine <strong>Schulung</strong>, die dir beibringt, wie du einen <strong>gesünderen Alltag</strong> lebst."
      },
      "cta": "Trag deine <strong>E-Mail Adresse</strong> ein und wir helfen dir!"
    },
    "emailForm": {
      "title": "Dein Neuanfang beginnt heute",
      "description": "<strong>Egal wie lange raus du warst</strong> - wir helfen dir zurück ins Berufsleben. Trag dich ein, um <strong>kostenlose Erstinformationen</strong> zu erhalten:",
      "email": "Email",
      "placeholder": "E-Mail Adresse eintragen",
      "submit": "Jetzt <strong>kostenlos</strong> eintragen",
      "privacy": "Deine Daten werden vertraulich behandelt. Du kannst dich jederzeit abmelden."
    },
    "callbackForm": {
    "switchButton": "Kostenlosen Rückruf anfordern",
    "backToEmail": "Zurück zum E-Mail Formular",
    "name": "Name",
    "namePlaceholder": "Vor- und Nachname",
    "phone": "Telefonnummer",
    "phonePlaceholder": "Deine Telefonnummer",
    "submit": "Rückruf <strong>kostenlos</strong> anfordern",
    "privacy": "Deine Daten werden vertraulich behandelt. Du kannst dich jederzeit abmelden."
  },
  "successMessages": {
  "email": "Danke! Wir werden uns schnellstmöglich bei dir melden.",
  "callback": "Danke! Wir werden dich schnellstmöglich zurückrufen."
},
    "timeline": {
      "step1": {
        "title": "Wir sprechen 30 Minuten mit dir.",
        "description": "Erzähl uns, was du gut kannst - und was du gern machen würdest."
      },
      "step2": {
        "title": "Du bekommst Job-Vorschläge.",
        "description": "Wir zeigen dir Jobs, die zu dir passen. Du entscheidest, was dich interessiert."
      },
      "step3": {
        "title": "Wir finden einen Arbeitgeber für dich.",
        "description": "Du brauchst keinen Lebenslauf. Keine Bewerbung. Wir rufen für dich an."
      },
      "step4": {
        "title": "Du stellst dich persönlich vor.",
        "description": "Du gehst hin und redest mit ihnen. Einfach. Persönlich. So wie früher."
      },
      "step5": {
        "title": "Dein Job wird gefördert.",
        "description": "Das Amt übernimmt einen Teil oder sogar dein ganzes Gehalt."
      },
      "step6": {
        "title": "Wir machen den Antrag mit dir.",
        "description": "Es gibt ein Formular vom Amt. Wir füllen es gemeinsam aus."
      },
      "step7": {
        "title": "Du bekommst den Job.",
        "description": "Du arbeitest. Mit vollem Gehalt. Und wir begleiten dich weiter als Coaches!"
      },
      "cta": "Lass dich vermitteln"
    },
    "faq": {
      "title": "Häufig gestellte Fragen",
      "items": [
        {
          "question": "Wer kann eure Dienste in Anspruch nehmen?",
          "answer": "Unsere Dienste richten sich an alle, die nach einer längeren Pause (mehr als zwei Jahre) wieder ins Berufsleben einsteigen möchten oder trotz Ablehnung und Herausforderungen eine neue berufliche Chance suchen. Egal ob nach Elternzeit, Krankheit, Arbeitslosigkeit oder beruflicher Neuorientierung – wir helfen dir, wieder Fuß zu fassen."
        },
        {
          "question": "Muss ich eine Bewerbung schreiben?",
          "answer": "Nein. Wirklich nicht. Kein Lebenslauf, kein Anschreiben. Wir reden mit dir, du erzählst uns, was du kannst – und wir übernehmen den Rest."
        },
        {
          "question": "Ich kann mir nicht mehr vorstellen einen normalen Job zu haben.",
          "answer": "Verstehen wir. Viele hier sind schon durch alles durch – Maßnahmen, Bewerbungen, Absagen. Der Unterschied: Bei uns gibt's Jobs, weil wir vorher dafür sorgen, dass Geld da ist. Und: Du wirst gebraucht, nicht verwaltet. Wenn du willst, finden wir gemeinsam raus, was möglich ist."
        },
        {
          "question": "Wie viel kostet eure Unterstützung?",
          "answer": "Gar nichts. Die Vermittlung ist für dich kostenlos. Dein Gehalt übernimmt das Jobcenter – dein Arbeitgeber zahlt nur einen Teil oder sogar gar nichts. Für dich heißt das: Du bekommst einen richtigen Job mit Gehalt, Sozialversicherung, Rentenversicherung – und sogar einem Coaching, denn wir wissen wie schwer der Wiedereinstieg nach so vielen Jahren ist."
        },
        {
          "question": "In welchen Branchen könnt ihr vermitteln?",
          "answer": "Durch unsere speziellen Kooperationen mit \"Wiedereinsteiger-freundlichen\" Arbeitgebern eröffnen sich Chancen in Bereichen, die sonst schwer zugänglich wären. Übrigens: Wenn du 6 oder mehr Jahre nicht (oder nur wenig) gearbeitet hast, zahlt das Jobcenter deinem neuen Arbeitgeber zwei Jahre lang dein komplettes Gehalt - mit dem Argument kriegen wir jeden Arbeitgeber von dir überzeugt! Wir übernehmen das für dich."
        },
        {
          "question": "Wie lange dauert es, bis ich einen Job finde?",
          "answer": "Das ist unterschiedlich. Manchmal geht's schnell, manchmal dauert es ein bisschen. Aber wir bleiben dran. Und du musst nicht auf Knopfdruck bereit sein – du gibst das Tempo vor. Wir holen dich da ab, wo du gerade stehst."
        },
        {
          "question": "Was, wenn ich längere Zeit nicht gearbeitet habe?",
          "answer": "Dann bist du genau die Person, für die dieses neue System gemacht wurde. Egal wie lange – 2 Jahre, 6 Jahre, 15 Jahre – wenn du arbeiten willst, kümmern wir uns darum, dass das wieder möglich ist."
        },
        {
          "question": "Was, wenn ich noch nicht weiß, ob wieder arbeiten für mich möglich ist?",
          "answer": "Dann finden wir es gemeinsam heraus. Erstmal ins Gespräch kommen. Du musst dich zu nichts verpflichten. Es gibt auch die Möglichkeit, über ein Praktikum langsam reinzukommen – oder einfach zu sagen: „Ich will mir das erstmal anschauen."
        },
        {
          "question": "Ich helfe schon wo aus, aber ich bekomme kein Geld dafür.",
          "answer": "Wenn du mehr als 6 Jahre arbeitslos warst (oder nur sehr wenig gearbeitet hast), könnte man daraus vielleicht einen richtigen Job machen – mit Gehalt, Versicherung und Unterstützung. Melde dich bei uns. Wir prüfen das."
        }
      ]
    },
    "vorhaben": {
      "title": "Was wir vorhaben",
      "description1": "Wir sind keine Maßnahme. Wir sind auch kein kurzfristiger Aktionismus – wir wollen, dass sich strukturell etwas ändert. Dass Menschen mit Lebens- und Berufserfahrung wieder gesehen, gebraucht und gefördert werden.",
      "description2": "Dafür entsteht gerade eine Plattform, die dich mit <strong>Unternehmen, gemeinnützigen Organisationen, Nachbarschaftshilfen, Kommunen oder Vereinen</strong> zusammenbringt. Also mit Arbeitgebern, die wirklich was mit dir anfangen können - <strong>selbst wenn vorher kein Geld für eine Einstellung da war</strong>. Denn: Der Staat übernimmt einen Teil deines Gehalts. Du arbeitest, wirst gebraucht – und bleibst Teil der Gesellschaft.",
      "description3": "Der rechtliche Rahmen dafür heißt Passiv-Aktiv-Transfer (PAT). Die Idee: Statt dir Bürgergeld zu zahlen, wird dieses Geld genutzt, um dir wieder einen echten Job zu ermöglichen - <strong>sozialversicherungspflichtig, bezahlt, mit Unterstützung und mit Perspektive</strong>.",
      "callout": "Es ist noch nicht alles fertig. Aber wir sind dran. Und wenn du willst, bist du einer der Ersten, für die es bald wieder heißt: <i>Willkommen zurück</i>.",
      "pat": {
        "title": "Wie funktioniert das mit dem PAT genau?",
        "p1": "Der Passiv-Aktiv-Transfer (kurz: PAT) ist eine staatliche Förderlogik, die Menschen nicht mehr in Arbeitslosigkeit verwaltet – sondern Jobs mit gesellschaftlichem Mehrwert für sie schafft. Das PAT wurde vor Jahren als Modellprojekt von der Diakonie entwickelt.",
        "p2": "Statt weiterhin Leistungen wie das Bürgergeld direkt an Arbeitslose auszuzahlen, bündelt das Jobcenter diese Mittel und nutzt sie, um einen Teil deines Gehalts zu übernehmen. So entstehen echte, bezahlte Arbeitsplätze – auch dort, wo Arbeitgeber vorher sagen mussten: Wir würden ja gerne wen einstellen, aber wir können uns das nicht leisten.",
        "special": "Das Besondere daran:",
        "benefits": [
          "Du schaffst dir deinen eigenen regulären, sozialversicherungspflichtigen Job, in dem Bereich, in dem du arbeiten möchtest.",
          "Du wirst nicht einfach 'beschäftigt' oder in eine Maßnahme gesteckt, sondern mit richtigem Gehalt eingestellt.",
          "Und: Dein Gehalt setzt sich aus dem Anteil des Arbeitgebers und der Förderung zusammen."
        ],
        "mission": "Unsere Mission: Wer arbeiten will, soll arbeiten können. Sag uns, was du kannst – wir finden oder schaffen den Job dafür."
      }
    },
    "cta": {
      "title": "Das System hat dich vielleicht vergessen. Wir nicht.",
      "description": "Wer arbeiten will, soll arbeiten können. Dein Alter, deine Herkunft, deine Lücken im Lebenslauf oder die Rückschläge aus deiner Vergangenheit definieren nicht deine Zukunft. Wir organisieren dafür echte, geförderte Jobs – abgestimmt auf deinen Interessen, deinen Fähigkeiten und deiner Lebenssituation.",
      "button": "Lass dich vermitteln"
    },
    "footer": {
      "legal": "Impressum & Datenschutzerklärung"
    }
  }
```

# src\lib\i18n\en.json

```json
{
    "hero": {
      "button": "The job market needs an update",
      "title": "You're not out. You're needed!",
      "subtitle": "\"No longer employable?\" – Enough of that. You are not the problem. We'll find you a suitable job with purpose.",
      "cta": {
        "primary": "Get started now",
        "secondary": "How does it work?"
      }
    },
    "examples": {
      "title1": "Starting over at 60?",
      "subtitle1": "Yes – if someone gives me the chance.",
      "description1": "Become a <strong>childminder</strong> in a neighborhood support program.",
      "title2": "I've worked hard for 20 years.",
      "subtitle2": "I want it to count.",
      "description2": "Join a <strong>bicycle workshop</strong> as a mechanic.",
      "title3": "Enough paperwork.",
      "subtitle3": "I want to work – properly.",
      "description3": "Become a <strong>care assistant</strong> in adult daycare.",
      "title4": "Working? I feel ready again.",
      "subtitle4": "In a fair work environment.",
      "description4": "Join your <strong>local community</strong> as a green space maintainer.",
      "card": {
        "title": "What are you good at? What suits you?",
        "subtitle": "We'll find an employer who needs you.",
        "cta": "Let us help with placement."
      }
    },
    "form": {
      "title": "How do we help you?",
      "description1": "Do you want to work again but can't get a chance? Are job center measures not helping you? Do you no longer believe that writing applications will get you anywhere?",
      "description2": "If you've been <strong>unemployed for more than 2 years</strong>, we'll get you:",
      "benefits": {
        "job": "A socially insured job with <strong>activities</strong> and <strong>hours</strong> that <strong>suit you</strong>.",
        "coach": "A <strong>coach</strong> who <strong>helps</strong> you with <strong>problems</strong> in your new job.",
        "training": "And (if you want) <strong>training</strong> that teaches you how to live a <strong>healthier everyday life</strong>."
      },
      "cta": "Enter your <strong>email address</strong> and we'll help you!"
    },
    "emailForm": {
      "title": "Your fresh start begins today",
      "description": "<strong>No matter how long you've been out</strong> - we'll help you back into working life. Sign up to receive <strong>free initial information</strong>:",
      "email": "Email",
      "placeholder": "Enter email address",
      "submit": "Register <strong>for free</strong> now",
      "privacy": "Your data will be treated confidentially. You can unsubscribe at any time."
    },
    "callbackForm": {
      "switchButton": "Request free callback",
      "backToEmail": "Back to email form",
      "name": "Name",
      "namePlaceholder": "First and last name",
      "phone": "Phone number",
      "phonePlaceholder": "Your phone number",
      "submit": "Request callback <strong>for free</strong>",
      "privacy": "Your data will be treated confidentially. You can unsubscribe at any time."
    },
    "successMessages": {
  "email": "Thank you! We will get back to you as soon as possible.",
  "callback": "Thank you! We will call you back as soon as possible."
},
    "timeline": {
      "step1": {
        "title": "We talk with you for 30 minutes.",
        "description": "Tell us what you're good at - and what you'd like to do."
      },
      "step2": {
        "title": "You get job suggestions.",
        "description": "We show you jobs that fit you. You decide what interests you."
      },
      "step3": {
        "title": "We find an employer for you.",
        "description": "You don't need a resume. No application. We call for you."
      },
      "step4": {
        "title": "You introduce yourself in person.",
        "description": "You go and talk to them. Simple. Personal. Like in the old days."
      },
      "step5": {
        "title": "Your job is subsidized.",
        "description": "The agency covers part or even your entire salary."
      },
      "step6": {
        "title": "We complete the application with you.",
        "description": "There's a form from the agency. We fill it out together."
      },
      "step7": {
        "title": "You get the job.",
        "description": "You work. With full pay. And we continue to support you as coaches!"
      },
      "cta": "Let us place you"
    },
    "faq": {
      "title": "Frequently Asked Questions",
      "items": [
        {
          "question": "Who can use your services?",
          "answer": "Our services are aimed at anyone looking to re-enter the workforce after a longer break (more than two years) or seeking a new professional opportunity despite rejection and challenges. Whether after parental leave, illness, unemployment, or career reorientation – we help you get back on your feet."
        },
        {
          "question": "Do I need to write a job application?",
          "answer": "No. Really not. No resume, no cover letter. We talk with you, you tell us what you can do – and we take care of the rest."
        },
        {
          "question": "I can't imagine having a regular job anymore.",
          "answer": "We understand. Many here have been through it all – measures, applications, rejections. The difference: With us, there are jobs because we ensure the funding is there beforehand. And: You're needed, not just managed. If you want, we can find out together what's possible."
        },
        {
          "question": "How much does your support cost?",
          "answer": "Nothing. Placement is free for you. The job center covers your salary – your employer pays only a portion or even nothing. For you, this means: You get a real job with salary, social insurance, pension insurance – and even coaching, because we know how difficult it is to re-enter after so many years."
        },
        {
          "question": "In which industries can you place people?",
          "answer": "Through our special partnerships with 'returner-friendly' employers, opportunities open up in areas that would otherwise be difficult to access. By the way: If you haven't worked (or worked very little) for 6 or more years, the job center pays your new employer your entire salary for two years - with that argument, we can convince any employer about you! We take care of that for you."
        },
        {
          "question": "How long does it take to find a job?",
          "answer": "It varies. Sometimes it's quick, sometimes it takes a bit longer. But we stay on it. And you don't have to be ready at the push of a button – you set the pace. We meet you where you are right now."
        },
        {
          "question": "What if I haven't worked for a long time?",
          "answer": "Then you're exactly the person this new system was made for. No matter how long – 2 years, 6 years, 15 years – if you want to work, we'll make sure it's possible again."
        },
        {
          "question": "What if I don't know yet if working again is possible for me?",
          "answer": "Then we'll find out together. First, let's have a conversation. You don't have to commit to anything. There's also the possibility of easing back in through an internship – or simply saying: I want to check it out first."
        },
        {
          "question": "I already help out somewhere, but I don't get paid for it.",
          "answer": "If you've been unemployed for more than 6 years (or worked very little), we might be able to turn that into a real job – with salary, insurance, and support. Contact us. We'll check it out."
        }
      ]
    },
    "vorhaben": {
      "title": "Our Plan",
      "description1": "We are not a temporary measure. We are not short-term activism – we want structural change. We want people with life and professional experience to be seen, needed, and supported again.",
      "description2": "We're currently developing a platform that connects you with <strong>companies, non-profit organizations, neighborhood support networks, municipalities, or associations</strong>. That means employers who can really use your skills - <strong>even if they previously had no budget for hiring</strong>. Because: The state covers part of your salary. You work, you're needed – and you remain part of society.",
      "description3": "The legal framework for this is called Passive-Active-Transfer (PAT). The idea: Instead of paying you unemployment benefits, this money is used to enable you to have a real job again - <strong>with social security, paid, with support and with perspective</strong>.",
      "callout": "Not everything is ready yet. But we're working on it. And if you want, you'll be among the first to hear: \"<i>Welcome back</i>.\"",
      "pat": {
        "title": "How exactly does PAT work?",
        "p1": "The Passive-Active-Transfer (PAT) is a government funding concept that no longer manages people in unemployment – but creates jobs with social value for them. PAT was developed years ago as a pilot project by Diakonie.",
        "p2": "Instead of continuing to pay benefits like unemployment directly to the unemployed, the job center bundles these funds and uses them to cover part of your salary. This creates real, paid jobs – even in places where employers previously had to say: <em>\"We would like to hire someone, but we can't afford it.\"</em>",
        "special": "What makes it special:",
        "benefits": [
          "You create your own regular, socially insured job in the area where you want to work.",
          "You're not simply \"occupied\" or put into a measure, but hired with a real salary.",
          "And: Your salary is made up of the employer's contribution and the subsidy."
        ],
        "mission": "Our mission: Those who want to work should be able to work. Tell us what you can do – we'll find or create the job for it."
      }
    },
    "cta": {
      "title": "The system might have forgotten you. We haven't.",
      "description": "Those who want to work should be able to work. Your age, your background, gaps in your resume, or setbacks from your past don't define your future. We organize real, subsidized jobs – tailored to your interests, your skills, and your life situation.",
      "button": "Let us place you"
    },
    "footer": {
      "legal": "Imprint & Privacy Policy"
    }
  }
```

# src\lib\i18n\i18n.ts

```ts
import { writable } from 'svelte/store';
import de from './de.json';
import en from './en.json';
import ae from './ae.json';
import ru from './ru.json';
import tr from './tr.json';

// Verfügbare Sprachen mit ihren Display-Namen
export const languages = {
  'de': { name: 'Deutsch', flag: 'De' },
  'en': { name: 'English', flag: 'En' },
  'ae': {name: 'عربي', flag: 'Ae'},
  'ru': { name: 'Русский', flag: 'Ru' },
  'tr': { name: 'Türkçe', flag: 'Tr' }
};

// Überprüfe den Browser oder localStorage für gespeicherte Sprachpräferenz
function getBrowserLanguage(): string {
  // Standard-Sprachcode
  const defaultLang = 'de';
  
  // Wenn wir auf dem Server sind oder window nicht verfügbar ist
  if (typeof window === 'undefined') return defaultLang;

  try {
    // Versuche die Sprache aus localStorage zu holen
    const storedLang = localStorage.getItem('lang');
    if (storedLang && languages[storedLang]) {
      return storedLang;
    }

    // Versuche die Browser-Sprache zu ermitteln
    const browserLang = navigator.language.split('-')[0];
    return languages[browserLang] ? browserLang : defaultLang;
  } catch (e) {
    // Fallback bei Fehlern (z.B. wenn localStorage blockiert ist)
    return defaultLang;
  }
}

// Erstelle den Sprach-Store mit einer sicheren Initialisierung
export const currentLang = writable<string>('de');

// Sicheres Update der Sprache im Browser-Kontext
if (typeof window !== 'undefined') {
  // Setze die Sprache erst nach der Initialisierung im Browser
  setTimeout(() => {
    const browserLang = getBrowserLanguage();
    currentLang.set(browserLang);
  }, 0);
}

// Erstelle ein Dictionary der verfügbaren Übersetzungen
export const translations = {
  de,
  en,
  ae,
  ru,
  tr
};

// Store für den aktuellen Übersetzungs-Text
export const t = writable(translations.de);

// Aktualisiere die Übersetzungen bei Sprachwechsel
currentLang.subscribe((newLang) => {
  // Setze lokale Speicherung nur im Browser-Kontext
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('lang', newLang);
    } catch (e) {
      console.warn('Could not save language preference to localStorage');
    }
  }
  
  // Aktualisiere Übersetzungen
  if (translations[newLang]) {
    t.set(translations[newLang]);
  } else {
    console.warn(`Translation for language '${newLang}' not found, using default`);
    t.set(translations.de);
  }
});

// Funktion zum Ändern der aktuellen Sprache
export function setLanguage(lang: string) {
  if (languages[lang]) {
    currentLang.set(lang);
  }
}
```

# src\lib\i18n\ru.json

```json
{
    "hero": {
      "button": "Рынок труда нуждается в обновлении",
      "title": "Вы не за бортом. Вы нужны!",
      "subtitle": "\"Больше не трудоустраиваемый?\" – Хватит. Проблема не в вас. Мы найдем вам подходящую работу со смыслом.",
      "cta": {
        "primary": "Начать сейчас",
        "secondary": "Как это работает?"
      }
    },
    "examples": {
      "title1": "\"Начинать заново в 60 лет?",
      "subtitle1": "Да – если мне дадут шанс.\"",
      "description1": "Станьте <strong>няней</strong> в программе поддержки соседей.",
      "title2": "\"Я тяжело работал 20 лет.",
      "subtitle2": "Я хочу, чтобы это имело значение.\"",
      "description2": "Присоединяйтесь к <strong>велосипедной мастерской</strong> как механик.",
      "title3": "\"Хватит бумажной работы.",
      "subtitle3": "Я хочу работать – по-настоящему.\"",
      "description3": "Станьте <strong>помощником по уходу</strong> в дневном центре для взрослых.",
      "title4": "\"Работать? Я снова чувствую себя готовым.",
      "subtitle4": "В справедливой рабочей среде.\"",
      "description4": "Присоединяйтесь к <strong>местному сообществу</strong> как смотритель зеленых насаждений.",
      "card": {
        "title": "В чем вы хороши? Что вам подходит?",
        "subtitle": "Мы найдем работодателя, которому вы нужны.",
        "cta": "Позвольте нам помочь с трудоустройством."
      }
    },
    "form": {
      "title": "Как мы помогаем вам?",
      "description1": "Вы хотите снова работать, но не можете получить шанс? Меры центра занятости вам не помогают? Вы больше не верите, что написание заявлений куда-то приведет?",
      "description2": "Если вы <strong>безработны более 2 лет</strong>, мы вам обеспечим:",
      "benefits": {
        "job": "Работу с социальным страхованием с <strong>видами деятельности</strong> и <strong>часами</strong>, которые <strong>подходят вам</strong>.",
        "coach": "<strong>Тренера</strong>, который <strong>поможет</strong> вам с <strong>проблемами</strong> на новой работе.",
        "training": "И (если хотите) <strong>обучение</strong>, которое научит вас вести <strong>более здоровый образ жизни</strong>."
      },
      "cta": "Введите свой <strong>адрес электронной почты</strong>, и мы поможем вам!"
    },
    "emailForm": {
      "title": "Ваш новый старт начинается сегодня",
      "description": "<strong>Не важно, как долго вы были без работы</strong> - мы поможем вам вернуться к трудовой жизни. Зарегистрируйтесь, чтобы получить <strong>бесплатную начальную информацию</strong>:",
      "email": "Email",
      "placeholder": "Введите адрес электронной почты",
      "submit": "Зарегистрироваться <strong>бесплатно</strong> сейчас",
      "privacy": "Ваши данные будут обрабатываться конфиденциально. Вы можете отписаться в любое время."
    },
    "callbackForm": {
      "switchButton": "Запросить бесплатный обратный звонок",
      "backToEmail": "Вернуться к форме электронной почты",
      "name": "Имя",
      "namePlaceholder": "Имя и фамилия",
      "phone": "Номер телефона",
      "phonePlaceholder": "Ваш номер телефона",
      "submit": "Запросить обратный звонок <strong>бесплатно</strong>",
      "privacy": "Ваши данные будут обрабатываться конфиденциально. Вы можете отписаться в любое время."
    },
    "successMessages": {
  "email": "Спасибо! Мы свяжемся с вами в ближайшее время.",
  "callback": "Спасибо! Мы перезвоним вам в ближайшее время."
},
    "timeline": {
      "step1": {
        "title": "Мы поговорим с вами 30 минут.",
        "description": "Расскажите нам, в чем вы хороши - и что бы вы хотели делать."
      },
      "step2": {
        "title": "Вы получаете предложения работы.",
        "description": "Мы показываем вам работу, которая вам подходит. Вы решаете, что вас интересует."
      },
      "step3": {
        "title": "Мы находим для вас работодателя.",
        "description": "Вам не нужно резюме. Никаких заявлений. Мы звоним за вас."
      },
      "step4": {
        "title": "Вы представляетесь лично.",
        "description": "Вы идете и разговариваете с ними. Просто. Лично. Как в старые времена."
      },
      "step5": {
        "title": "Ваша работа субсидируется.",
        "description": "Агентство покрывает часть или даже всю вашу зарплату."
      },
      "step6": {
        "title": "Мы заполняем заявление вместе с вами.",
        "description": "Есть форма от агентства. Мы заполняем ее вместе."
      },
      "step7": {
        "title": "Вы получаете работу.",
        "description": "Вы работаете. С полной оплатой. И мы продолжаем поддерживать вас как тренеры!"
      },
      "cta": "Позвольте нам трудоустроить вас"
    },
    "faq": {
      "title": "Часто задаваемые вопросы",
      "items": [
        {
          "question": "Кто может воспользоваться вашими услугами?",
          "answer": "Наши услуги направлены на всех, кто хочет вернуться к трудовой деятельности после длительного перерыва (более двух лет) или ищет новую профессиональную возможность, несмотря на отказы и вызовы. Будь то после отпуска по уходу за ребенком, болезни, безработицы или смены карьеры – мы поможем вам встать на ноги."
        },
        {
          "question": "Нужно ли мне писать заявление о приеме на работу?",
          "answer": "Нет. Правда нет. Никакого резюме, никакого сопроводительного письма. Мы разговариваем с вами, вы рассказываете нам, что умеете – и мы берем на себя остальное."
        },
        {
          "question": "Я больше не могу представить себе, что у меня будет обычная работа.",
          "answer": "Мы понимаем. Многие здесь прошли через все – меры, заявления, отказы. Разница: У нас есть работа, потому что мы заранее обеспечиваем наличие финансирования. И: Вы нужны, а не просто управляемы. Если хотите, мы можем вместе выяснить, что возможно."
        },
        {
          "question": "Сколько стоит ваша поддержка?",
          "answer": "Ничего. Трудоустройство для вас бесплатно. Центр занятости покрывает вашу зарплату – ваш работодатель платит только часть или даже ничего. Для вас это означает: Вы получаете настоящую работу с зарплатой, социальным страхованием, пенсионным страхованием – и даже коучингом, потому что мы знаем, насколько трудно вернуться после стольких лет."
        },
        {
          "question": "В каких отраслях вы можете трудоустраивать людей?",
          "answer": "Благодаря нашим специальным партнерствам с 'дружественными к возвращающимся' работодателями, открываются возможности в областях, которые иначе были бы труднодоступны. Кстати: Если вы не работали (или работали очень мало) 6 или более лет, центр занятости выплачивает вашему новому работодателю всю вашу зарплату в течение двух лет - с этим аргументом мы можем убедить любого работодателя в вас! Мы позаботимся об этом за вас."
        },
        {
          "question": "Сколько времени требуется, чтобы найти работу?",
          "answer": "Это зависит от случая. Иногда быстро, иногда требуется немного больше времени. Но мы не отступаем. И вам не нужно быть готовыми по нажатию кнопки – вы задаете темп. Мы встречаем вас там, где вы находитесь прямо сейчас."
        },
        {
          "question": "Что, если я не работал долгое время?",
          "answer": "Тогда вы именно тот человек, для которого создана эта новая система. Не важно, сколько времени – 2 года, 6 лет, 15 лет – если вы хотите работать, мы позаботимся о том, чтобы это снова стало возможным."
        },
        {
          "question": "Что, если я еще не знаю, возможна ли для меня снова работа?",
          "answer": "Тогда мы выясним это вместе. Сначала давайте поговорим. Вам не нужно ни к чему обязываться. Также есть возможность постепенного возвращения через стажировку – или просто сказать: \"Я хочу сначала проверить.\""
        },
        {
          "question": "Я уже где-то помогаю, но мне за это не платят.",
          "answer": "Если вы были безработными более 6 лет (или работали очень мало), мы, возможно, сможем превратить это в настоящую работу – с зарплатой, страховкой и поддержкой. Свяжитесь с нами. Мы это проверим."
        }
      ]
    },
    "vorhaben": {
      "title": "Наш план",
      "description1": "Мы не временная мера. Мы не краткосрочный активизм – мы хотим структурных изменений. Мы хотим, чтобы люди с жизненным и профессиональным опытом снова были видны, нужны и поддерживаемы.",
      "description2": "В настоящее время мы разрабатываем платформу, которая связывает вас с <strong>компаниями, некоммерческими организациями, сетями поддержки соседей, муниципалитетами или ассоциациями</strong>. Это означает работодателей, которые действительно могут использовать ваши навыки - <strong>даже если раньше у них не было бюджета для найма</strong>. Потому что: Государство покрывает часть вашей зарплаты. Вы работаете, вы нужны – и вы остаетесь частью общества.",
      "description3": "Правовая основа для этого называется Пассивно-Активный-Трансфер (PAT). Идея: Вместо выплаты пособия по безработице, эти деньги используются, чтобы дать вам возможность снова иметь настоящую работу - <strong>с социальным обеспечением, оплачиваемую, с поддержкой и с перспективой</strong>.",
      "callout": "Еще не все готово. Но мы работаем над этим. И если хотите, вы будете среди первых, кто услышит: \"<i>С возвращением</i>.\"",
      "pat": {
        "title": "Как именно работает PAT?",
        "p1": "Пассивно-Активный-Трансфер (PAT) – это концепция государственного финансирования, которая больше не управляет людьми в безработице, а создает для них рабочие места с социальной ценностью. PAT был разработан много лет назад как пилотный проект Диаконии.",
        "p2": "Вместо того, чтобы продолжать выплачивать пособия по безработице напрямую безработным, центр занятости объединяет эти средства и использует их для покрытия части вашей зарплаты. Это создает реальные, оплачиваемые рабочие места – даже в местах, где работодатели раньше должны были говорить: <em>\"Мы хотели бы нанять кого-то, но мы не можем себе этого позволить.\"</em>",
        "special": "Что делает это особенным:",
        "benefits": [
          "Вы создаете свою собственную регулярную, социально застрахованную работу в той области, где вы хотите работать.",
          "Вас не просто \"занимают\" или помещают в меру, а нанимают с реальной зарплатой.",
          "И: Ваша зарплата состоит из вклада работодателя и субсидии."
        ],
        "mission": "Наша миссия: Те, кто хочет работать, должны иметь возможность работать. Расскажите нам, что вы умеете – мы найдем или создадим для этого работу."
      }
    },
    "cta": {
      "title": "Система, возможно, забыла о вас. Мы нет.",
      "description": "Те, кто хочет работать, должны иметь возможность работать. Ваш возраст, ваше происхождение, пробелы в вашем резюме или неудачи из вашего прошлого не определяют ваше будущее. Мы организуем реальные, субсидируемые рабочие места – адаптированные к вашим интересам, вашим навыкам и вашей жизненной ситуации.",
      "button": "Позвольте нам трудоустроить вас"
    },
    "footer": {
      "legal": "Выходные данные и политика конфиденциальности"
    }
  }
```

# src\lib\i18n\tr.json

```json
{
    "hero": {
      "button": "İş piyasası bir güncellemeye ihtiyaç duyuyor",
      "title": "Sen dışarıda değilsin. Sana ihtiyaç var!",
      "subtitle": "\"Artık istihdam edilemez?\" – Buna bir son verelim. Sorun sen değilsin. Sana anlamlı, uygun bir iş bulacağız.",
      "cta": {
        "primary": "Hemen başla",
        "secondary": "Nasıl çalışıyor?"
      }
    },
    "examples": {
      "title1": "\"60 yaşında yeniden başlamak?",
      "subtitle1": "Evet – eğer bana şans verilirse.\"",
      "description1": "Komşuluk destek programında <strong>çocuk bakıcısı</strong> olun.",
      "title2": "\"20 yıl boyunca çok çalıştım.",
      "subtitle2": "Bunun değerli olmasını istiyorum.\"",
      "description2": "Bir <strong>bisiklet atölyesine</strong> tamirci olarak katılın.",
      "title3": "\"Yeterince kağıt işi.",
      "subtitle3": "Çalışmak istiyorum – düzgünce.\"",
      "description3": "Yetişkin gündüz bakımında <strong>bakım asistanı</strong> olun.",
      "title4": "\"Çalışmak? Kendimi tekrar hazır hissediyorum.",
      "subtitle4": "Adil bir çalışma ortamında.\"",
      "description4": "Yeşil alan bakımcısı olarak <strong>yerel topluluğunuza</strong> katılın.",
      "card": {
        "title": "Neyde iyisin? Sana ne uygun?",
        "subtitle": "Sana ihtiyaç duyan bir işveren bulacağız.",
        "cta": "İşe yerleşmende yardımcı olmamıza izin ver."
      }
    },
    "form": {
      "title": "Sana nasıl yardımcı oluyoruz?",
      "description1": "Tekrar çalışmak istiyor ama şans bulamıyor musun? İş merkezi önlemleri sana yardımcı olmuyor mu? Artık iş başvuruları yazmanın bir işe yarayacağına inanmıyor musun?",
      "description2": "<strong>2 yıldan fazla işsiz kaldıysan</strong>, sana şunları sağlayacağız:",
      "benefits": {
        "job": "Sosyal güvenceli, <strong>sana uyan faaliyetlere</strong> ve <strong>çalışma saatlerine</strong> sahip bir iş.",
        "coach": "Yeni işindeki <strong>sorunlarda</strong> sana <strong>yardımcı olacak</strong> bir <strong>koç</strong>.",
        "training": "Ve (istersen) <strong>daha sağlıklı bir günlük yaşam</strong> sürmeyi öğreten bir <strong>eğitim</strong>."
      },
      "cta": "<strong>E-posta adresini</strong> gir ve sana yardım edelim!"
    },
    "emailForm": {
      "title": "Yeni başlangıcın bugün başlıyor",
      "description": "<strong>Ne kadar uzun süredir dışarıda olduğun önemli değil</strong> - seni iş hayatına geri döndürmene yardımcı olacağız. <strong>Ücretsiz ilk bilgileri</strong> almak için kaydol:",
      "email": "E-posta",
      "placeholder": "E-posta adresini gir",
      "submit": "Şimdi <strong>ücretsiz</strong> kaydol",
      "privacy": "Verileriniz gizli tutulacaktır. İstediğiniz zaman abonelikten çıkabilirsiniz."
    },
    "callbackForm": {
    "switchButton": "Ücretsiz geri arama talep et",
    "backToEmail": "E-posta formuna geri dön",
    "name": "İsim",
    "namePlaceholder": "Ad ve soyad",
    "phone": "Telefon numarası",
    "phonePlaceholder": "Telefon numaranız",
    "submit": "<strong>Ücretsiz</strong> geri arama talep et",
    "privacy": "Verileriniz gizli tutulacaktır. İstediğiniz zaman abonelikten çıkabilirsiniz."
  },
  "successMessages": {
  "email": "Teşekkürler! En kısa sürede size geri döneceğiz.",
  "callback": "Teşekkürler! En kısa sürede sizi arayacağız."
},
    "timeline": {
      "step1": {
        "title": "Seninle 30 dakika konuşuyoruz.",
        "description": "Neyde iyi olduğunu - ve ne yapmak istediğini bize anlat."
      },
      "step2": {
        "title": "İş önerileri alıyorsun.",
        "description": "Sana uyan işleri gösteriyoruz. Neyin ilgini çektiğine sen karar veriyorsun."
      },
      "step3": {
        "title": "Senin için bir işveren buluyoruz.",
        "description": "Özgeçmişe ihtiyacın yok. Başvuru yok. Senin için biz arıyoruz."
      },
      "step4": {
        "title": "Kendini şahsen tanıtıyorsun.",
        "description": "Gidip onlarla konuşuyorsun. Basit. Kişisel. Eski günlerdeki gibi."
      },
      "step5": {
        "title": "İşin sübvanse ediliyor.",
        "description": "Kurum maaşının bir kısmını veya tamamını karşılıyor."
      },
      "step6": {
        "title": "Başvuruyu seninle birlikte tamamlıyoruz.",
        "description": "Kurumdan bir form var. Birlikte dolduruyoruz."
      },
      "step7": {
        "title": "İşi alıyorsun.",
        "description": "Çalışıyorsun. Tam maaşla. Ve koç olarak seni desteklemeye devam ediyoruz!"
      },
      "cta": "Seni işe yerleştirelim"
    },
    "faq": {
      "title": "Sık Sorulan Sorular",
      "items": [
        {
          "question": "Hizmetlerinizi kimler kullanabilir?",
          "answer": "Hizmetlerimiz, uzun bir aradan sonra (iki yıldan fazla) işgücüne yeniden girmek isteyen veya ret ve zorluklara rağmen yeni bir profesyonel fırsat arayan herkese yöneliktir. İster ebeveyn izni, hastalık, işsizlik veya kariyer yönelimi değişikliğinden sonra olsun – ayağa kalkmanıza yardımcı oluyoruz."
        },
        {
          "question": "İş başvurusu yazmam gerekiyor mu?",
          "answer": "Hayır. Gerçekten hayır. Özgeçmiş yok, ön yazı yok. Seninle konuşuyoruz, bize ne yapabildiğini anlatıyorsun – ve gerisini biz hallediyoruz."
        },
        {
          "question": "Artık normal bir işim olabileceğini hayal edemiyorum.",
          "answer": "Anlıyoruz. Buradaki birçok kişi her şeyden geçti – önlemler, başvurular, redler. Fark şu: Bizde önceden finansmanı sağladığımız için işler var. Ve: İhtiyaç duyuluyorsun, sadece yönetilmiyorsun. İstersen, neyin mümkün olduğunu birlikte bulabiliriz."
        },
        {
          "question": "Desteğiniz ne kadara mal oluyor?",
          "answer": "Hiçbir şey. Yerleştirme senin için ücretsiz. İş merkezi maaşını karşılıyor – işverenin sadece bir kısmını ödüyor veya hiçbir şey ödemiyor. Bu senin için şu anlama geliyor: Maaşlı, sosyal sigortalı, emeklilik sigortalı gerçek bir iş ve hatta bir koçluk alıyorsun, çünkü bu kadar yıldan sonra yeniden başlamanın ne kadar zor olduğunu biliyoruz."
        },
        {
          "question": "Hangi sektörlerde insan yerleştirebilirsiniz?",
          "answer": "'Geri dönenlere dost' işverenlerle özel ortaklıklarımız sayesinde, normalde erişilmesi zor olacak alanlarda fırsatlar açılıyor. Bu arada: Eğer 6 yıl veya daha fazla çalışmadıysanız (veya çok az çalıştıysanız), iş merkezi yeni işvereninize iki yıl boyunca tüm maaşınızı ödüyor - bu argümanla, herhangi bir işvereni size ikna edebiliriz! Bunu sizin için biz hallediyoruz."
        },
        {
          "question": "İş bulmak ne kadar sürer?",
          "answer": "Değişir. Bazen hızlı olur, bazen biraz daha uzun sürer. Ama peşini bırakmıyoruz. Ve düğmeye basıldığında hazır olmanız gerekmiyor – tempoyu siz belirlersiniz. Sizi şu anda bulunduğunuz yerden alıyoruz."
        },
        {
          "question": "Ya uzun süredir çalışmıyorsam?",
          "answer": "O zaman bu yeni sistemin tam olarak kimin için yapıldığı kişisiniz. Ne kadar uzun olursa olsun – 2 yıl, 6 yıl, 15 yıl – eğer çalışmak istiyorsanız, bunun tekrar mümkün olmasını sağlayacağız."
        },
        {
          "question": "Ya tekrar çalışmanın benim için mümkün olup olmadığını henüz bilmiyorsam?",
          "answer": "O zaman birlikte öğreniriz. Önce bir konuşalım. Hiçbir şeye taahhüt etmek zorunda değilsin. Staj yoluyla yavaşça geri dönme imkanı da var – veya sadece şunu söylemek: \"Önce kontrol etmek istiyorum.\""
        },
        {
          "question": "Zaten bir yerlerde yardım ediyorum, ama bunun için para almıyorum.",
          "answer": "Eğer 6 yıldan fazla işsizseniz (veya çok az çalıştıysanız), bunu belki gerçek bir işe dönüştürebiliriz – maaşlı, sigortalı ve destekli. Bizimle iletişime geçin. Kontrol edeceğiz."
        }
      ]
    },
  "vorhaben": {
  "title": "Planımız",
  "description1": "Biz geçici bir önlem değiliz. Kısa vadeli aktivizm değiliz – yapısal değişiklik istiyoruz. Yaşam ve profesyonel deneyime sahip insanların tekrar görülmesini, ihtiyaç duyulmasını ve desteklenmesini istiyoruz.",
  "description2": "Şu anda sizi <strong>şirketler, kar amacı gütmeyen kuruluşlar, komşuluk destek ağları, belediyeler veya derneklerle</strong> bağlayan bir platform geliştiriyoruz. Bu, becerilerinizi gerçekten kullanabilecek işverenler anlamına gelir - <strong>daha önce işe alım için bütçeleri olmasa bile</strong>. Çünkü: Devlet maaşınızın bir kısmını karşılıyor. Çalışıyorsunuz, size ihtiyaç duyuluyor – ve toplumun bir parçası olarak kalıyorsunuz.",
  "description3": "Bunun yasal çerçevesi Pasif-Aktif-Transfer (PAT) olarak adlandırılır. Fikir: Size işsizlik ödeneği ödemek yerine, bu para size tekrar gerçek bir iş sahibi olmanızı sağlamak için kullanılır - <strong>sosyal güvenlikli, ücretli, destekli ve perspektifli</strong>.",
  "callout": "Henüz her şey hazır değil. Ama üzerinde çalışıyoruz. Ve isterseniz, \"<i>Tekrar hoş geldiniz</i>.\" duyacak ilk kişilerden olacaksınız.",
  "pat": {
    "title": "PAT tam olarak nasıl çalışır?",
    "p1": "Pasif-Aktif-Transfer (PAT), insanları artık işsizlikte yönetmeyen – ancak onlar için sosyal değeri olan işler yaratan bir devlet fonlama konseptidir. PAT, yıllar önce Diakonie tarafından bir pilot proje olarak geliştirildi.",
    "p2": "İşsizlik gibi yardımları doğrudan işsizlere ödemeye devam etmek yerine, iş merkezi bu fonları bir araya getirir ve maaşınızın bir kısmını karşılamak için kullanır. Bu, gerçek, ücretli işler yaratır – işverenlerin daha önce şöyle demek zorunda kaldıkları yerlerde bile: <em>\"Birini işe almak isterdik, ama bunu karşılayamayız.\"</em>",
    "special": "Özel kılan şey:",
    "benefits": [
      "Çalışmak istediğiniz alanda kendi düzenli, sosyal güvenceli işinizi yaratırsınız.",
      "Sadece \"meşgul edilmiyor\" veya bir önleme konulmuyor, gerçek bir maaşla işe alınıyorsunuz.",
      "Ve: Maaşınız işverenin katkısı ve sübvansiyondan oluşuyor."
    ],
    "mission": "Misyonumuz: Çalışmak isteyenler çalışabilmelidir. Bize ne yapabileceğinizi söyleyin – bunun için işi bulacağız veya yaratacağız."
  }
},
"cta": {
  "title": "Sistem seni unutmuş olabilir. Biz unutmadık.",
  "description": "Çalışmak isteyenler çalışabilmelidir. Yaşınız, geçmişiniz, özgeçmişinizdeki boşluklar veya geçmişinizden gelen setbackler geleceğinizi tanımlamaz. İlgi alanlarınıza, becerilerinize ve yaşam durumunuza göre uyarlanmış gerçek, sübvansiyonlu işler organize ediyoruz.",
  "button": "Seni işe yerleştirelim"
},
"footer": {
  "legal": "Künye ve Gizlilik Politikası"
}}
```

# src\lib\index.ts

```ts
// place files you want to import through the `$lib` alias in this folder.

```

# src\lib\supabase.ts

```ts
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_ANON_KEY } from '$env/static/private';

const supabaseUrl = "https://uqpnpkjnzqcvlraohkod.supabase.co";

export const supabase = createClient(supabaseUrl, SUPABASE_ANON_KEY);
```

# src\routes\+layout.svelte

```svelte
<script lang="ts">
	import '../app.css';
	import { De, Gb, Ae, Tr, Ru } from 'svelte-flags';
	import { currentLang, setLanguage } from '$lib/i18n/i18n';
	import { onMount } from 'svelte';

	let { children } = $props();
	let showLanguageBar = $state(true);
	let lastScrollY = $state(0);
	let isAtBottom = $state(false);

	onMount(() => {
		// Prüft, ob der Nutzer am Ende der Seite ist
		function checkIfAtBottom() {
			const tolerance = 50; // Pixel-Toleranz für "am Ende"
			const bottomPosition = document.documentElement.scrollHeight - window.innerHeight - tolerance;
			isAtBottom = window.scrollY >= bottomPosition;
			showLanguageBar = !isAtBottom;
			lastScrollY = window.scrollY;
		}

		window.addEventListener('scroll', checkIfAtBottom);
		
		// Initial einmal prüfen
		checkIfAtBottom();
		
		return () => {
			window.removeEventListener('scroll', checkIfAtBottom);
		};
	});
</script>

<main class="overflow-x-hidden">{@render children()}</main>

{#if showLanguageBar}
<div class="fixed bottom-4 flex w-full items-center justify-around z-50 transition-opacity duration-300" 
     style="opacity: {showLanguageBar ? '1' : '0'}">
	<ul class="menu menu-horizontal bg-base-200 rounded-box shadow-lg max-w-[calc(100vw-2rem)] mx-auto overflow-x-auto">
		<li>
			<button
				class={$currentLang === 'de' ? 'active' : ''}
				onclick={() => setLanguage('de')}
				aria-label="Deutsch"
			>
				<De />
			</button>
		</li>
		<li>
			<button
				class={$currentLang === 'en' ? 'active' : ''}
				onclick={() => setLanguage('en')}
				aria-label="English"
			>
				<Gb />
			</button>
		</li>
		<li>
			<button
				class={$currentLang === 'ae' ? 'active' : ''}
				onclick={() => setLanguage('ae')}
				aria-label="عربي"
			>
				<Ae />
			</button>
		</li>
		<li>
			<button
				class={$currentLang === 'tr' ? 'active' : ''}
				onclick={() => setLanguage('tr')}
				aria-label="Türkçe"
			>
				<Tr />
			</button>
		</li>
		<li>
			<button
				class={$currentLang === 'ru' ? 'active' : ''}
				onclick={() => setLanguage('ru')}
				aria-label="Русский"
			>
				<Ru />
			</button>
		</li>
	</ul>
</div>
{/if}
```

# src\routes\+page.svelte

```svelte
<script lang="ts">
	import { TypeWriter } from 'svelte-typewrite';
	import { t, currentLang } from '$lib/i18n/i18n';
	import { onMount } from 'svelte';

	let email = '';
	let name = '';
	let phone = '';
	let showCallbackForm = $state(false);
	let submitted = $state(false);
	let errorMessage = '';
	let successMessage = '';
	let isSubmitting = $state(false);
	let translations = {}; // Lokaler Wert für Übersetzungen

	// Store-Subscription in onMount
	onMount(() => {
		const unsubscribe = t.subscribe(value => {
			translations = value;
		});
		
		return unsubscribe;
	});

	function validateEmail(email: string): boolean {
		const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return pattern.test(email);
	}

	function validatePhone(phone: string): boolean {
		// Einfache Validierung für Telefonnummern
		// Mindestens 5 Zeichen, nur Zahlen, '+', '-', ' ' und '()' erlaubt
		const pattern = /^[0-9\+\-\(\)\s]{5,}$/;
		return pattern.test(phone);
	}

	async function handleEmailSubmit() {
  event?.preventDefault();
  
  if (!validateEmail(email)) {
    errorMessage = 'Bitte gib eine gültige E-Mail-Adresse ein.';
    return;
  }

  errorMessage = '';
  isSubmitting = true;
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email,
        type: 'email',
        language: $currentLang 
      })
    });
    const result = await response.json();
    
    if (!result.success) {
      errorMessage = result.error || 'Fehler beim Speichern der E-Mail.';
      isSubmitting = false;
      return;
    }
    
    successMessage = $t.successMessages.email;
    submitted = true;
    email = '';
  } catch (err) {
    errorMessage = 'Fehler beim Speichern der E-Mail.';
  } finally {
    isSubmitting = false;
  }
}

async function handleCallbackSubmit() {
  event?.preventDefault();
  
  if (!name.trim()) {
    errorMessage = 'Bitte gib deinen Namen ein.';
    return;
  }
  
  if (!validatePhone(phone)) {
    errorMessage = 'Bitte gib eine gültige Telefonnummer ein.';
    return;
  }

  errorMessage = '';
  isSubmitting = true;
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        name,
        phone, 
        type: 'callback',
        language: $currentLang 
      })
    });
    const result = await response.json();
    
    if (!result.success) {
      errorMessage = result.error || 'Fehler beim Speichern der Rückrufanfrage.';
      isSubmitting = false;
      return;
    }
    
    successMessage = $t.successMessages.callback;
    submitted = true;
    name = '';
    phone = '';
  } catch (err) {
    errorMessage = 'Fehler beim Speichern der Rückrufanfrage.';
  } finally {
    isSubmitting = false;
  }
}
	
	function toggleCallbackForm() {
		showCallbackForm = !showCallbackForm;
		// Reset Fehler und Erfolg beim Umschalten
		errorMessage = '';
		successMessage = '';
	}
	
	function scrollToSection(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<div class="min-h-screen">
	<!-- Hero Section -->
	<div
		class="hero min-h-screen pt-16 pb-24 [background:radial-gradient(125%_100%_at_50%_35%,#fff_10%,var(--color-primary)_50%)] md:pt-24 md:pb-32"
	>
		<div class="container mx-auto px-4">
			<div class="text-primary-content mx-auto max-w-4xl text-center">
				<button 
					class="btn btn-outline btn-sm btn-round mb-20"
					onclick={() => scrollToSection('vorhaben')}
				>
					{$t.hero.button} <span aria-hidden="true">&rarr;</span>
				</button>
				<h1 class="mb-15 text-4xl font-bold md:text-5xl lg:text-6xl h-20">
					<TypeWriter texts={[$t.hero.title]} />
				</h1>
				<p class="mx-auto mb-25 max-w-3xl text-xl opacity-90 md:text-2xl">
					{@html $t.hero.subtitle}
				</p>
				<div class="flex flex-col items-center justify-center gap-4 md:flex-row">
					<button 
						class="btn btn-secondary btn-xl btn-wide animate-bounce"
						onclick={() => scrollToSection('email-neuanfang')}
					>
						{$t.hero.cta.primary}
					</button>
					<button 
						class="btn btn-outline btn-lg"
						onclick={() => scrollToSection('email-form')}
					>
						{$t.hero.cta.secondary}
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Beispiele Section -->
	<section class="bg-white py-25">
		<div class="container m-auto w-full max-w-3xl px-6">
			<div class="grid grid-cols-2 gap-4">
				<div class="card text-primary-content bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:10px_10px] shadow-lg">
					<div class="card-body">
						<div class="card-title font-bold">
							{$t.examples.title1}
						</div>
						<div class="card-title">{$t.examples.subtitle1}</div>
						<div class="text-secondary mt-5">{@html $t.examples.description1}</div>
					</div>
				</div>
				
				<div class="card text-primary-content bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:10px_10px] shadow-lg">
					<div class="card-body">
						<div class="card-title font-bold">
							{$t.examples.title2}
						</div>
						<div class="card-title">{$t.examples.subtitle2}</div>
						<div class="text-secondary mt-5">{@html $t.examples.description2}</div>
					</div>
				</div>
				
				<div class="card text-primary-content bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:10px_10px] shadow-lg">
					<div class="card-body">
						<div class="card-title font-bold">
							{$t.examples.title3}
						</div>
						<div class="card-title">{$t.examples.subtitle3}</div>
						<div class="text-secondary mt-5">{@html $t.examples.description3}</div>
					</div>
				</div>
				
				<div class="card text-primary-content bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:10px_10px] shadow-lg">
					<div class="card-body">
						<div class="card-title font-bold">
							{$t.examples.title4}
						</div>
						<div class="card-title">{$t.examples.subtitle4}</div>
						<div class="text-secondary mt-5">{@html $t.examples.description4}</div>
					</div>
				</div>

				<button 
				onclick={() => scrollToSection('email-neuanfang')}
				class="card bg-secondary text-secondary-content col-span-2 mt-5 text-center shadow-lg">
					<div class="card-body">
						<div class="text-lg font-bold">{$t.examples.card.title}</div>
						<div class="text-lg">{$t.examples.card.subtitle}</div>
						<div class="mt-5 text-3xl font-bold">
							{$t.examples.card.cta}
						</div>
					</div>
				</button>
			</div>
		</div>
	</section>

	<!-- Email Form Section -->
	<section id="email-form">
		<div class="bg-primary m-auto w-full py-16">
			<div class="m-auto grid grid-cols-1 gap-12 p-6 lg:grid-cols-2 lg:p-30">
				<div class="card bg-base-100 shadow lg:p-10">
					<div class="card-body">
						<h2 class="card-title mb-6 text-3xl font-bold md:text-4xl">{$t.form.title}</h2>
						<div class="mb-5">
							<p class="mb-3">
								{$t.form.description1}
							</p>
							<p class="text-primary text-lg">
								{@html $t.form.description2}
							</p>
						</div>
						<ul class="mb-5 space-y-4 text-lg">
							<li class="flex items-start">
								<div class="bg-primary/10 mt-1 mr-3 rounded p-1">
									<svg
										class="text-primary h-5 w-5 animate-bounce"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<span>{@html $t.form.benefits.job}</span>
							</li>
							<li class="flex items-start">
								<div class="bg-primary/10 mt-1 mr-3 rounded p-1">
									<svg
										class="text-primary h-5 w-5 animate-bounce"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<span>{@html $t.form.benefits.coach}</span>
							</li>
							<li class="flex items-start">
								<div class="bg-primary/10 mt-1 mr-3 rounded p-1">
									<svg
										class="text-primary h-5 w-5 animate-bounce"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<span>{@html $t.form.benefits.training}</span>
							</li>
						</ul>
						<p class="text-primary text-lg">
							{@html $t.form.cta}
						</p>
					</div>
				</div>
				<div class="card bg-white shadow lg:p-10" id="email-neuanfang">
					<div class="card-body">
						<h2 class="text-primary-content mb-6 h-30 text-3xl font-bold md:text-4xl xl:h-18">
							<TypeWriter texts={[$t.emailForm.title]} />
						</h2>
						<p class="text-primary-content space-y-4 text-lg">
							{@html $t.emailForm.description}
						</p>

						{#if !showCallbackForm}
						<!-- Email Formular -->
						<form onsubmit={handleEmailSubmit}>
							<fieldset class="fieldset p-4">
								<label class="label" for="email">{$t.emailForm.email}</label>
						
								<input
									type="email"
									id="email"
									class="input bg-secondary/10 text-neutral w-full {errorMessage ? 'input-error' : ''}"
									placeholder={$t.emailForm.placeholder}
									bind:value={email}
									required
								/>
								
								{#if errorMessage}
									<div class="text-error text-sm mt-1">{errorMessage}</div>
								{/if}
								
								{#if successMessage}
									<div class="text-success text-sm mt-1">{successMessage}</div>
								{/if}
								
								<div class="grid grid-rows-2 gap-2 mt-6">
									<button 
										type="submit" 
										class="btn btn-secondary btn-lg flex-1"
										disabled={isSubmitting}
									>
										{#if isSubmitting}
											<span class="loading loading-spinner"></span>
										{:else}
											<span>{@html $t.emailForm.submit}</span>
										{/if}
									</button>
									
									<button 
										type="button" 
										class="btn btn-secondary btn-outline flex-1"
										onclick={toggleCallbackForm}
									>
										{$t.callbackForm.switchButton}
									</button>
								</div>
								<p class="mt-2 text-sm text-gray-600">{$t.emailForm.privacy}</p>
							</fieldset>
						</form>
					{:else}
						<!-- Rückruf Formular -->
						<form onsubmit={handleCallbackSubmit}>
							<fieldset class="fieldset p-4">
								<label class="label" for="name">{$t.callbackForm.name}</label>
								<input
									type="text"
									id="name"
									class="input bg-secondary/10 text-neutral w-full {errorMessage && !name ? 'input-error' : ''}"
									placeholder={$t.callbackForm.namePlaceholder}
									bind:value={name}
									required
								/>
								
								<label class="label mt-2" for="phone">{$t.callbackForm.phone}</label>
								<input
									type="tel"
									id="phone"
									class="input bg-secondary/10 text-neutral w-full {errorMessage && !validatePhone(phone) ? 'input-error' : ''}"
									placeholder={$t.callbackForm.phonePlaceholder}
									bind:value={phone}
									required
								/>
								
								{#if errorMessage}
									<div class="text-error text-sm mt-1">{errorMessage}</div>
								{/if}
								
								{#if successMessage}
									<div class="text-success text-sm mt-1">{successMessage}</div>
								{/if}
								
								<div class="grid grid-rows-2 gap-2 mt-6">
									<button 
										type="submit" 
										class="btn btn-secondary btn-lg flex-1"
										disabled={isSubmitting}
									>
										{#if isSubmitting}
											<span class="loading loading-spinner"></span>
										{:else}
											<span>{@html $t.callbackForm.submit}</span>
										{/if}
									</button>
									
									<button 
										type="button" 
										class="btn btn-outline btn-secondary"
										onclick={toggleCallbackForm}
									>
										{$t.callbackForm.backToEmail}
									</button>
								</div>
								<p class="mt-2 text-sm text-gray-600">{$t.callbackForm.privacy}</p>
							</fieldset>
						</form>
					{/if}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Value Chain Section -->
	<section class="bg-white py-25">
		<div class="container m-auto w-full max-w-3xl px-6">
			<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-neutral">
				<li>
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="var(--color-primary)"
							class="h-5 w-5"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="timeline-start mb-10 md:text-end">
						<div class="text-2xl font-bold mb-3">{$t.timeline.step1.title}</div>
						{$t.timeline.step1.description}
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="var(--color-primary)"
							class="h-5 w-5"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="timeline-end mb-10">
						<div class="text-2xl font-bold mb-3">{$t.timeline.step2.title}</div>
						{$t.timeline.step2.description}
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="var(--color-primary)"
							class="h-5 w-5"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="timeline-start mb-10 md:text-end">
						<div class="text-2xl font-bold mb-3">{$t.timeline.step3.title}</div>
						{$t.timeline.step3.description}
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="var(--color-primary)"
							class="h-5 w-5"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="timeline-end mb-10">
						<div class="text-2xl font-bold mb-3">{$t.timeline.step4.title}</div>
						{$t.timeline.step4.description}
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="var(--color-primary)"
							class="h-5 w-5"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="timeline-start mb-10 md:text-end">
						<div class="text-2xl font-bold mb-3">{$t.timeline.step5.title}</div>
						{$t.timeline.step5.description}
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="var(--color-primary)"
							class="h-5 w-5"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="timeline-end mb-10">
						<div class="text-2xl font-bold mb-3">{$t.timeline.step6.title}</div>
						{$t.timeline.step6.description}
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="var(--color-primary)"
							class="h-5 w-5"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="timeline-start mb-10 md:text-end">
						<div class="text-2xl font-bold mb-3">{$t.timeline.step7.title}</div>
						{$t.timeline.step7.description}
					</div>
				</li>
			</ul>
		</div>
		<div class="container text-center mx-auto">
			<button
				class="btn btn-secondary btn-xl btn-wide"
				onclick={() => scrollToSection('email-form')}
			>
				{$t.timeline.cta}
			</button>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="px-6 py-40">
		<div class="container m-auto space-y-2">
			<h2 class="mb-6 text-center text-4xl font-bold xl:text-5xl">{$t.faq.title}</h2>
			{#each $t.faq.items as faq}
				<div class="collapse-arrow border-base-300 text-primary-content collapse border bg-white">
					<input type="radio" name="faq" />
					<div class="collapse-title font-semibold">{faq.question}</div>
					<div class="collapse-content text-sm">{faq.answer}</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Vorhaben Section -->
	<section id="vorhaben" class="relative bg-white py-16">
		<div
			class="absolute inset-0 bg-[radial-gradient(var(--color-neutral-content),transparent_1.5px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]
		[background-size:10px_10px]"
		></div>
		<div
			class="text-primary-content mx-auto space-y-4 px-10 pt-16 pb-24 md:pt-24 md:pb-32 md:text-center xl:max-w-3xl xl:text-lg"
		>
			<h2 class="text-primary mb-6 text-center text-4xl font-bold xl:text-5xl">{$t.vorhaben.title}</h2>
			<p>
				{$t.vorhaben.description1}
			</p>
			<p>
				{@html $t.vorhaben.description2}
			</p>
			<p>
				{@html $t.vorhaben.description3}
			</p>
			<div class="card bg-primary text-primary-content">
				<div class="card-body">
					<p class="text-lg">
						{@html $t.vorhaben.callout}
					</p>
				</div>
			</div>
			<div class="collapse-plus border-base-300 text-primary-content collapse border bg-white">
				<input type="checkbox" name="faq" />
				<div class="collapse-title">{$t.vorhaben.pat.title}</div>
				<div class="collapse-content space-y-2 text-left text-sm">
					<p>
						{$t.vorhaben.pat.p1}
					</p>

					<p>
						{@html $t.vorhaben.pat.p2}
					</p>

					<p class="mt-5"><strong>{$t.vorhaben.pat.special}</strong></p>
					<ul class="list-inside list-disc space-y-2">
						{#each $t.vorhaben.pat.benefits as benefit}
							<li>{benefit}</li>
						{/each}
					</ul>

					<p class="mt-5">
						<strong>{$t.vorhaben.pat.mission}</strong>
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-25 px-4">
		<div class="container m-auto max-w-3xl text-center">
			<h2 class="mb-6 text-3xl font-bold md:text-4xl">{$t.cta.title}</h2>
			<p class="mb-8 text-xl">
				{$t.cta.description}
			</p>
			<button 
				class="btn btn-secondary animate-bounce btn-lg btn-wide"
				onclick={() => scrollToSection('email-form')}
			>
				{$t.cta.button}
			</button>
		</div>
	</section>

	<!-- Footer Section -->
	<section class="bg-base-300 py-5">
		<div class="text-center text-sm">
			<a class="link link-hover" href="/impressum">{$t.footer.legal}</a>
		</div>
	</section>
</div>
```

# src\routes\api\contact\+server.ts

```ts
import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';

export async function POST({ request }) {
	try {
		const body = await request.json();
		const { email, name, phone, type, language } = body;

		// Validierung basierend auf dem Anfragetyp
		if (type === 'email') {
			if (!email || typeof email !== 'string') {
				return json({ success: false, error: 'Ungültige E-Mail-Adresse' }, { status: 400 });
			}

			// E-Mail in contacts Tabelle speichern mit entsprechendem Typ und Sprache
			const { data, error } = await supabase
				.from('contacts')
				.insert([{ 
					email,
					type: 'email',
					language: language || 'de',
					created_at: new Date().toISOString()
				}]);

			if (error) {
				console.error('Supabase Fehler:', error);
				return json({ success: false, error: error.message || 'Datenbankfehler' }, { status: 500 });
			}

			return json({ success: true, data });
		}
		
		// Rückrufanfrage
		else if (type === 'callback') {
			if (!name || typeof name !== 'string') {
				return json({ success: false, error: 'Name ist erforderlich' }, { status: 400 });
			}
			if (!phone || typeof phone !== 'string') {
				return json({ success: false, error: 'Telefonnummer ist erforderlich' }, { status: 400 });
			}

			// Rückrufanfrage in contacts Tabelle speichern
			const { data, error } = await supabase
				.from('contacts')
				.insert([{ 
					name,
					phone,
					type: 'callback',
					language: language || 'de',
					created_at: new Date().toISOString()
				}]);

			if (error) {
				console.error('Supabase Fehler:', error);
				return json({ success: false, error: error.message || 'Datenbankfehler' }, { status: 500 });
			}

			return json({ success: true, data });
		}
		
		// Unbekannter Anfragetyp
		else {
			return json({ success: false, error: 'Ungültiger Anfragetyp' }, { status: 400 });
		}
	} catch (err) {
		console.error('Fehler bei der Kontaktanfrage:', err);
		return json({ success: false, error: 'Serverfehler' }, { status: 500 });
	}
}
```

# src\routes\api\email\+server.ts

```ts
import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';

export async function POST({ request }) {
	try {
		const body = await request.json();
		const { email } = body;

		if (!email || typeof email !== 'string') {
			return json({ success: false, error: 'Ungültige E-Mail-Adresse' }, { status: 400 });
		}

		// Hier wird die E-Mail in die Tabelle "email_submissions" geschrieben.
		const { data, error } = await supabase
			.from('email_submissions')
			.insert([{ email }]);

		if (error) {
			return json({ success: false, error: error.message || 'Unbekannter Fehler' }, { status: 500 });
		}

		return json({ success: true, data });
	} catch (err) {
		console.error('Fehler beim Speichern der E-Mail:', err);
		return json({ success: false, error: 'Serverfehler' }, { status: 500 });
	}
}

```

# src\routes\impressum\+page.svelte

```svelte
<div data-theme="cupcake" class="min-h-screen p-2 lg:p-20 space-y-5 lg:space-y-50">
    <!-- Impressum -->
    <section id="impressum" class="container">
      <h1 class="text-3xl font-bold mb-4">Impressum</h1>
      <p class="font-semibold">Angaben gemäß § 5 TMG</p>
      <p class="mb-4">
        Jessica Krecker<br>
        Kulmer Straße 24<br>
        10783 Berlin<br>
        Deutschland
      </p>
      <p class="mb-4">
        <span class="font-semibold">Kontakt:</span><br>
        E-Mail: <a class="link link-primary" href="mailto:hallo@jesskreck.de">hallo@jesskreck.de</a>
      </p>
      <p>
        <span class="font-semibold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</span><br>
        Jessica Krecker<br>
        Adresse wie oben
      </p>
    </section>
  
    <!-- Datenschutzerklärung -->
    <section id="datenschutz" class="container">
      <h2 class="text-2xl font-bold mb-4">Datenschutzerklärung</h2>
  
      <p class="mb-4">
        <span class="font-semibold">1. Verantwortlich</span><br>
        Jessica Krecker<br>
        Adresse wie im Impressum<br>
        E-Mail: <a class="link link-primary" href="mailto:hallo@jesskreck.de">hallo@jesskreck.de</a>
      </p>
  
      <p class="mb-4">
        <span class="font-semibold">2. Erhebung und Verarbeitung personenbezogener Daten</span><br>
        Wenn du dich für meinen Newsletter anmeldest oder mir über ein Kontaktformular schreibst, speichere ich deine Angaben (z. B. Name, E-Mail-Adresse), um dir zu antworten oder dir den Newsletter zu schicken.
      </p>
  
      <p class="mb-4">
        <span class="font-semibold">3. Newsletter</span><br>
        Für den Versand nutze ich das sogenannte Double-Opt-In-Verfahren. Du bekommst nach Anmeldung eine E-Mail, in der du deine Anmeldung bestätigen musst. Du kannst dich jederzeit wieder abmelden – jeder Newsletter enthält einen Abmeldelink.
      </p>
  
      <p class="mb-4">
        <span class="font-semibold">4. Weitergabe von Daten</span><br>
        Ich gebe deine Daten nicht ohne deine Einwilligung weiter.
      </p>
  
      <p class="mb-4">
        <span class="font-semibold">5. Deine Rechte</span><br>
        Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch gegen die Verarbeitung deiner Daten. Schreib mir einfach eine E-Mail.
      </p>
  
      <p>
        <span class="font-semibold">6. Hosting & Tools</span><br>
        Falls ich externe Dienste (z. B. Mailchimp, Sendinblue) nutze, wird das hier ergänzt – inkl. Link zur Datenschutzerklärung des jeweiligen Anbieters.
      </p>
    </section>
  </div>
  
```

# src\routes\wiederdabei-homepage.code-workspace

```code-workspace
{
    "folders": [
        {
            "path": "../.."
        }
    ]
}
```

# static\favicon.png

This is a binary file of the type: Image

# svelte.config.js

```js
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// default options are shown
		adapter: adapter({
			// if true, will create a Netlify Edge Function rather
			// than using standard Node-based functions
			edge: false,

			// if true, will split your app into multiple functions
			// instead of creating a single one for the entire app.
			// if `edge` is true, this option cannot be used
			split: false
		})
	}
};

export default config;

```

# tsconfig.json

```json
{
	"extends": "./.svelte-kit/tsconfig.json",
	"compilerOptions": {
		"allowJs": true,
		"checkJs": true,
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"resolveJsonModule": true,
		"skipLibCheck": true,
		"sourceMap": true,
		"strict": true,
		"moduleResolution": "bundler"
	}
	// Path aliases are handled by https://svelte.dev/docs/kit/configuration#alias
	// except $lib which is handled by https://svelte.dev/docs/kit/configuration#files
	//
	// If you want to overwrite includes/excludes, make sure to copy over the relevant includes/excludes
	// from the referenced tsconfig.json - TypeScript does not merge them in
}

```

# vite.config.ts

```ts
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()]
});

```

