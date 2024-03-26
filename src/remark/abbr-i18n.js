const genders = {
  'm.': {
    'en': ['m.', 'masculine'],
    'ru': ['м.р.', 'мужской род'],
    'be': ['м.р.', 'мужчынскі род'],
    'uk': ['ч.р.', 'чоловічий рід'],
    'pl': ['m.', 'męski'],
    'cs': ['m.r.', 'mužský rod'],
    'sk': ['m.r.', 'mužský rod'],
    'sl': ['m.s.', 'moški spol'],
    'sr-Cyrl': ['м.р.', 'мушки род'],
    'hr': ['m.r.', 'muški rod'],
    'bs': ['m.r.', 'muški rod'],
    'mk': ['м.р.', 'машки род'],
    'bg': ['м.р.', 'мъжки род'],
  },
  'f.': {
    'en': ['f.', 'feminine'],
    'ru': ['ж.р.', 'женский род'],
    'be': ['ж.р.', 'жаночы род'],
    'uk': ['ж.р.', 'жіночий рід'],
    'pl': ['ż.', 'żeński'],
    'cs': ['ž.r.', 'ženský rod'],
    'sk': ['ž.r.', 'ženský rod'],
    'sl': ['ž.s.', 'ženski spol'],
    'sr-Cyrl': ['ж.р.', 'женски род'],
    'hr': ['ž.r.', 'ženski rod'],
    'bs': ['ž.r.', 'ženski rod'],
    'mk': ['ж.р.', 'женски род'],
    'bg': ['ж.р.', 'женски род'],
  },
  'n.': {
    'en': ['n.', 'neuter'],
    'ru': ['с.р.', 'средний род'],
    'be': ['н.р.', 'ніякі род'],
    'uk': ['с.р.', 'середній рід'],
    'pl': ['n.', 'nijaki'],
    'cs': ['s.r.', 'střední rod'],
    'sk': ['s.r.', 'stredný rod'],
    'sl': ['s.s.', 'srednji spol'],
    'sr-Cyrl': ['с.р.', 'средњи род'],
    'hr': ['s.r.', 'srednji rod'],
    'bs': ['s.r.', 'srednji rod'],
    'mk': ['с.р.', 'среден род'],
    'bg': ['с.р.', 'среден род'],
  },
};

genders['masc.'] = {
  ...genders['m.'],
  en: ['masc.', 'masculine'],
};
genders['fem.'] = {
  ...genders['f.'],
  en: ['fem.', 'feminine'],
};
genders['neut.'] = {
  ...genders['n.'],
  en: ['neut.', 'neuter'],
};


const cases = {
  'nom.': {
    'en': ['nom.', 'nominative'],
    'ru': ['им.', 'именительный падеж'],
    'be': ['наз.', 'назоўны выпадак'],
    'uk': ['наз.', 'називний відмінок'],
    'pl': ['m.', 'mianownik'],
    'cs': ['1. pád', '1. pád'],
    'sk': ['1. pád', '1. pád'],
    'sl': ['1. sklon', '1. sklon'],
    'sr-Cyrl': ['ном.', 'номинатив'],
    'hr': ['n.', 'nominativ'],
    'bs': ['n.', 'nominativ'],
    'mk': ['н.', 'називен падеж'],
    'bg': ['им.', 'именителен падеж'],
  },
  'gen.': {
    'en': ['gen.', 'genitive'],
    'ru': ['род.', 'родительный падеж'],
    'be': ['род.', 'родны выпадак'],
    'uk': ['род.', 'родовий відмінок'],
    'pl': ['d.', 'dopełniacz'],
    'cs': ['2. pád', '2. pád'],
    'sk': ['2. pád', '2. pád'],
    'sl': ['2. sklon', '2. sklon'],
    'sr-Cyrl': ['ген.', 'генитив'],
    'hr': ['g.', 'genitiv'],
    'bs': ['g.', 'genitiv'],
    'mk': ['р.', 'родителен падеж'],
    'bg': ['р.', 'родителен падеж'],
  },
  'acc.': {
    'en': ['acc.', 'accusative'],
    'ru': ['вин.', 'винительный падеж'],
    'be': ['він.', 'вінавальны выпадак'],
    'uk': ['зн.', 'знахідний відмінок'],
    'pl': ['b.', 'biernik'],
    'cs': ['4. pád', '4. pád'],
    'sk': ['4. pád', '4. pád'],
    'sl': ['4. sklon', '4. sklon'],
    'sr-Cyrl': ['ак.', 'акузатив'],
    'hr': ['a.', 'akuzativ'],
    'bs': ['a.', 'akuzativ'],
    'mk': ['в.', 'винителен падеж'],
    'bg': ['в.', 'винителен падеж'],
  },
  'dat.': {
    'en': ['dat.', 'dative'],
    'ru': ['дат.', 'дательный падеж'],
    'be': ['дав.', 'давальны выпадак'],
    'uk': ['дав.', 'давальний відмінок'],
    'pl': ['c.', 'celownik'],
    'cs': ['3. pád', '3. pád'],
    'sk': ['3. pád', '3. pád'],
    'sl': ['3. sklon', '3. sklon'],
    'sr-Cyrl': ['дат.', 'датив'],
    'hr': ['d.', 'dativ'],
    'bs': ['d.', 'dativ'],
    'mk': ['д.', 'давителен падеж'],
    'bg': ['д.', 'дателен падеж'],
  },
  'loc.': {
    'en': ['loc.', 'locative'],
    'ru': ['пре.', 'предложный падеж'],
    'be': ['мес.', 'месцавы выпадак'],
    'uk': ['міс.', 'місцевий відмінок'],
    'pl': ['msc.', 'miejscownik'],
    'cs': ['6. pád', '6. pád'],
    'sk': ['6. pád', '6. pád'],
    'sl': ['6. sklon', '6. sklon'],
    'sr-Cyrl': ['лок.', 'локатив'],
    'hr': ['l.', 'lokativ'],
    'bs': ['l.', 'lokativ'],
    'mk': ['пр.', 'предложен падеж'],
    'bg': ['м.', 'местен падеж'],
  },
  'ins.': {
    'en': ['ins.', 'instrumental'],
    'ru': ['тв.', 'творительный падеж'],
    'be': ['тв.', 'творны выпадак'],
    'uk': ['ор.', 'орудний відмінок'],
    'pl': ['n.', 'narzędnik'],
    'cs': ['7. pád', '7. pád'],
    'sk': ['7. pád', '7. pád'],
    'sl': ['5. sklon', '5. sklon'],
    'sr-Cyrl': ['инс.', 'инструментал'],
    'hr': ['i.', 'instrumental'],
    'bs': ['i.', 'instrumental'],
    'mk': ['ин.', 'инструментален падеж'],
    'bg': ['д.', 'дателен падеж'],
  },
  'voc.': {
    'en': ['voc.', 'vocative'],
    'ru': ['зва.', 'звательный падеж'],
    'be': ['кліч.', 'клічны выпадак'],
    'uk': ['клич.', 'кличний відмінок'],
    'pl': ['w.', 'wołacz'],
    'cs': ['5. pád', '5. pád'],
    'sk': ['5. pád', '5. pád'],
    'sl': ['zv.', 'zvalnik'],
    'sr-Cyrl': ['вок.', 'вокатив'],
    'hr': ['v.', 'vokativ'],
    'bs': ['v.', 'vokativ'],
    'mk': ['в.', 'викативен падеж'],
    'bg': ['з.', 'звателен падеж'],
  },
};

cases['instr.'] = cases['ins.'];

const numbers = {
  'sg.': {
    'en': ['sg.', 'singular'],
    'ru': ['ед.ч.', 'единственное число'],
    'be': ['адз.л.', 'адзінарнае лікаванне'],
    'uk': ['одн.', 'однина'],
    'pl': ['poj.', 'liczba pojedyncza'],
    'cs': ['j.č.', 'jednotné číslo'],
    'sk': ['j.č.', 'jednotné číslo'],
    'sl': ['ed.', 'ednina'],
    'sr-Cyrl': ['јед.', 'једнина'],
    'hr': ['j.', 'jednina'],
    'bs': ['j.', 'jednina'],
    'mk': ['ед.', 'единствено'],
    'bg': ['ед.ч.', 'единствено число'],
  },
  'pl.': {
    'en': ['pl.', 'plural'],
    'ru': ['мн.ч.', 'множественное число'],
    'be': ['мн.л.', 'множнае лікаванне'],
    'uk': ['мн.', 'множина'],
    'pl': ['lm.', 'liczba mnoga'],
    'cs': ['m.č.', 'množné číslo'],
    'sk': ['m.č.', 'množné číslo'],
    'sl': ['mn.', 'množina'],
    'sr-Cyrl': ['мн.', 'множина'],
    'hr': ['m.', 'množina'],
    'bs': ['m.', 'množina'],
    'mk': ['мн.', 'множествено'],
    'bg': ['мн.ч.', 'множествено число'],
  }
};

const animacy = {
  'anim.': {
    'en': ['anim.', 'animate'],
    'ru': ['од.', 'одушевлённое'],
    'be': ['ад.', 'адушэннае'],
    'uk': ['жив.', 'живе'],
    'pl': ['o.', 'ożywiony'],
    'cs': ['ž.', 'životný'],
    'sk': ['ž.', 'životný'],
    'sl': ['ož.', 'oživljen'],
    'sr-Cyrl': ['ож.', 'оживљен'],
    'hr': ['ož.', 'oživljen'],
    'bs': ['ož.', 'oživljen'],
    'mk': ['ож.', 'оживено'],
    'bg': ['од.', 'одушевено'],
  },
  'inanim.': {
    'en': ['inanim.', 'inanimate'],
    'ru': ['неод.', 'неодушевлённое'],
    'be': ['неад.', 'неадушэннае'],
    'uk': ['нежив.', 'неживе'],
    'pl': ['n.', 'nieożywiony'],
    'cs': ['nž.', 'neživotný'],
    'sk': ['nž.', 'neživotný'],
    'sl': ['než.', 'neživljen'],
    'sr-Cyrl': ['неож.', 'неоживљен'],
    'hr': ['než.', 'neživljen'],
    'bs': ['než.', 'neživljen'],
    'mk': ['неож.', 'неоживено'],
    'bg': ['неод.', 'неодушевено'],
  },
};

const partsOfSpeech = {
  'adj.': {
    'en': ['adj.', 'adjective'],
    'ru': ['прил.', 'прилагательное'],
    'be': ['прысл.', 'прыслоўе'],
    'uk': ['прикм.', 'прикметник'],
    'pl': ['przym.', 'przymiotnik'],
    'cs': ['příd.', 'přídavné jméno'],
    'sk': ['príd.', 'prídavné meno'],
    'sl': ['pridev.', 'pridevnik'],
    'sr-Cyrl': ['прид.', 'придев'],
    'hr': ['prid.', 'pridjev'],
    'bs': ['prid.', 'pridjev'],
    'mk': ['прид.', 'придавка'],
    'bg': ['прил.', 'прилагателно'],
  },
  'adv.': {
    'en': ['adv.', 'adverb'],
    'ru': ['нар.', 'наречие'],
    'be': ['накл.', 'наклон'],
    'uk': ['присл.', 'прислівник'],
    'pl': ['przysł.', 'przysłówek'],
    'cs': ['přís.', 'příslovce'],
    'sk': ['prís.', 'príslovka'],
    'sl': ['prislov.', 'prislov'],
    'sr-Cyrl': ['присл.', 'прислов'],
    'hr': ['pris.', 'prislov'],
    'bs': ['pris.', 'prislov'],
    'mk': ['присл.', 'присловка'],
    'bg': ['нар.', 'наречие'],
  },
};

const misc = {
  'fig.': {
    'en': ['fig.', 'figuratively'],
    'ru': ['перен.', 'переносно'],
    'be': ['перан.', 'пераносна'],
    'uk': ['перен.', 'переносно'],
    'pl': ['przen.', 'przenośnie'],
    'cs': ['přen.', 'přenosem'],
    'sk': ['pren.', 'prenosom'],
    'sl': ['pren.', 'preneseno'],
    'sr-Cyrl': ['прен.', 'преносно'],
    'hr': ['pren.', 'preneseno'],
    'bs': ['pren.', 'preneseno'],
    'mk': ['прен.', 'пренесено'],
    'bg': ['прен.', 'преносно'],
  },
  'lit.': {
    'en': ['lit.', 'literally'],
    'ru': ['букв.', 'буквально'],
    'be': ['літ.', 'літаральна'],
    'uk': ['букв.', 'буквально'],
    'pl': ['dosł.', 'dosłownie'],
    'cs': ['dosl.', 'doslovně'],
    'sk': ['dosl.', 'doslovne'],
    'sl': ['dobes.', 'dobesedno'],
    'sr-Cyrl': ['досл.', 'дословно'],
    'hr': ['dosl.', 'doslovno'],
    'bs': ['dosl.', 'doslovno'],
    'mk': ['досл.', 'дословно'],
    'bg': ['досл.', 'дословно'],
  },
  'cf.': {
    'en': ['cf.', 'compare'],
    'ru': ['ср.', 'сравните'],
    'be': ['пар.', 'параўнаць'],
    'uk': ['пор.', 'порівняйте'],
    'pl': ['por.', 'porównaj'],
    'cs': ['srov.', 'srovnejte'],
    'sk': ['por.', 'porovnajte'],
    'sl': ['primerj.', 'primerjaj'],
    'sr-Cyrl': ['пор.', 'пореди'],
    'hr': ['usp.', 'usporedi'],
    'bs': ['usp.', 'usporedi'],
    'mk': ['спор.', 'спореди'],
    'bg': ['ср.', 'сравни'],
  },
};

const aspects = {
  'impf.': {
    'en': ['impf.', 'imperfective'],
    'ru': ['несов.', 'несовершенный вид'],
    'be': ['несов.', 'несовершенный вид'],
    'uk': ['недок.', 'недоконаний вид'],
    'pl': ['niedok.', 'niedokonany'],
    'cs': ['nedok.', 'nedokonavý'],
    'sk': ['nedok.', 'nedokonavý'],
    'sl': ['nedov.', 'nedovršni'],
    'sr-Cyrl': ['недов.', 'недовршени'],
    'hr': ['nedov.', 'nedovršeni'],
    'bs': ['nedov.', 'nedovršeni'],
    'mk': ['недов.', 'недовршен'],
    'bg': ['несв.', 'несвършен вид'],
  },
  'pf.': {
    'en': ['pf.', 'perfective'],
    'ru': ['сов.', 'совершенный вид'],
    'be': ['сов.', 'совершенный вид'],
    'uk': ['док.', 'доконаний вид'],
    'pl': ['dok.', 'dokonany'],
    'cs': ['dok.', 'dokonavý'],
    'sk': ['dok.', 'dokonavý'],
    'sl': ['dov.', 'dovršni'],
    'sr-Cyrl': ['дов.', 'довршени'],
    'hr': ['dov.', 'dovršeni'],
    'bs': ['dov.', 'dovršeni'],
    'mk': ['дов.', 'довршен'],
    'bg': ['св.', 'свършен вид'],
  },
};

function combineAbbr2(abbr1, abbr2) {
  if (!abbr1.endsWith('.') || abbr1.indexOf('.') !== abbr1.lastIndexOf('.')) {
    return abbr1 + ' ' + abbr2;
  } else {
    return abbr1 + abbr2;
  }
}

function combineValues(...values) {
  return [values.map(v => v[0]).reduce(combineAbbr2), values.map(v => v[1]).join(', ')];
}

function combine(...abbrs) {
  const keys = Object.keys(abbrs[0]);
  return keys.reduce((acc, key) => {
    acc[key] = combineValues(...abbrs.map(a => a[key]));
    return acc;
  }, {});
}

const abbreviations = {
  ...animacy,
  ...aspects,
  ...cases,
  ...genders,
  ...misc,
  ...numbers,
  ...partsOfSpeech,
};

for (const g of Object.keys(genders)) {
  for (const n of Object.keys(numbers)) {
    abbreviations[`${g}${n}`] = combine(genders[g], numbers[n]);
  }

  for (const c of Object.keys(cases)) {
    for (const n of Object.keys(numbers)) {
      abbreviations[`${g}${c}${n}`] = combine(genders[g], cases[c], numbers[n]);
    }
  }
}

for (const a of Object.keys(animacy)) {
  abbreviations[`m.${a}`] = combine(genders['m.'], animacy[a]);
  for (const n of Object.keys(numbers)) {
    abbreviations[`m.${a}${n}`] = combine(genders['m.'], animacy[a], numbers[n]);
  }
}

for (const c of Object.keys(cases)) {
  for (const n of Object.keys(numbers)) {
    abbreviations[`${c}${n}`] = combine(cases[c], numbers[n]);
  }
}

module.exports = abbreviations;
