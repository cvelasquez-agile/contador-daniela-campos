/**
 * DIAN calendar for Renta 2026 (personas naturales), keyed by the last two
 * digits of the declarant's cédula. `ts` is midnight (00:00) of the deadline
 * day in the visitor's local time zone. Shared by the Hero calculator and
 * the live countdown so the two never drift apart.
 */
export const CALENDARIO_RENTA: Record<string, { label: string; ts: number }> = {
  "01": { label: "11 Ago 2026", ts: new Date(2026, 7, 11).getTime() },
  "02": { label: "12 Ago 2026", ts: new Date(2026, 7, 12).getTime() },
  "03": { label: "13 Ago 2026", ts: new Date(2026, 7, 13).getTime() },
  "04": { label: "14 Ago 2026", ts: new Date(2026, 7, 14).getTime() },
  "05": { label: "17 Ago 2026", ts: new Date(2026, 7, 17).getTime() },
  "06": { label: "18 Ago 2026", ts: new Date(2026, 7, 18).getTime() },
  "07": { label: "19 Ago 2026", ts: new Date(2026, 7, 19).getTime() },
  "08": { label: "20 Ago 2026", ts: new Date(2026, 7, 20).getTime() },
  "09": { label: "21 Ago 2026", ts: new Date(2026, 7, 21).getTime() },
  "10": { label: "24 Ago 2026", ts: new Date(2026, 7, 24).getTime() },
  "11": { label: "25 Ago 2026", ts: new Date(2026, 7, 25).getTime() },
  "12": { label: "26 Ago 2026", ts: new Date(2026, 7, 26).getTime() },
  "13": { label: "27 Ago 2026", ts: new Date(2026, 7, 27).getTime() },
  "14": { label: "28 Ago 2026", ts: new Date(2026, 7, 28).getTime() },
  "15": { label: "1 Sep 2026",  ts: new Date(2026, 8, 1).getTime()  },
  "16": { label: "2 Sep 2026",  ts: new Date(2026, 8, 2).getTime()  },
  "17": { label: "3 Sep 2026",  ts: new Date(2026, 8, 3).getTime()  },
  "18": { label: "4 Sep 2026",  ts: new Date(2026, 8, 4).getTime()  },
  "19": { label: "7 Sep 2026",  ts: new Date(2026, 8, 7).getTime()  },
  "20": { label: "8 Sep 2026",  ts: new Date(2026, 8, 8).getTime()  },
  "21": { label: "9 Sep 2026",  ts: new Date(2026, 8, 9).getTime()  },
  "22": { label: "10 Sep 2026", ts: new Date(2026, 8, 10).getTime() },
  "23": { label: "11 Sep 2026", ts: new Date(2026, 8, 11).getTime() },
  "24": { label: "14 Sep 2026", ts: new Date(2026, 8, 14).getTime() },
  "25": { label: "15 Sep 2026", ts: new Date(2026, 8, 15).getTime() },
  "26": { label: "16 Sep 2026", ts: new Date(2026, 8, 16).getTime() },
  "27": { label: "17 Sep 2026", ts: new Date(2026, 8, 17).getTime() },
  "28": { label: "18 Sep 2026", ts: new Date(2026, 8, 18).getTime() },
  "29": { label: "21 Sep 2026", ts: new Date(2026, 8, 21).getTime() },
  "30": { label: "22 Sep 2026", ts: new Date(2026, 8, 22).getTime() },
  "31": { label: "23 Sep 2026", ts: new Date(2026, 8, 23).getTime() },
  "32": { label: "24 Sep 2026", ts: new Date(2026, 8, 24).getTime() },
  "33": { label: "25 Sep 2026", ts: new Date(2026, 8, 25).getTime() },
  "34": { label: "28 Sep 2026", ts: new Date(2026, 8, 28).getTime() },
  "35": { label: "29 Sep 2026", ts: new Date(2026, 8, 29).getTime() },
  "36": { label: "30 Sep 2026", ts: new Date(2026, 8, 30).getTime() },
  "37": { label: "1 Oct 2026",  ts: new Date(2026, 9, 1).getTime()  },
  "38": { label: "2 Oct 2026",  ts: new Date(2026, 9, 2).getTime()  },
  "39": { label: "5 Oct 2026",  ts: new Date(2026, 9, 5).getTime()  },
  "40": { label: "6 Oct 2026",  ts: new Date(2026, 9, 6).getTime()  },
  "41": { label: "7 Oct 2026",  ts: new Date(2026, 9, 7).getTime()  },
  "42": { label: "8 Oct 2026",  ts: new Date(2026, 9, 8).getTime()  },
  "43": { label: "9 Oct 2026",  ts: new Date(2026, 9, 9).getTime()  },
  "44": { label: "13 Oct 2026", ts: new Date(2026, 9, 13).getTime() },
  "45": { label: "14 Oct 2026", ts: new Date(2026, 9, 14).getTime() },
  "46": { label: "15 Oct 2026", ts: new Date(2026, 9, 15).getTime() },
  "47": { label: "16 Oct 2026", ts: new Date(2026, 9, 16).getTime() },
  "48": { label: "19 Oct 2026", ts: new Date(2026, 9, 19).getTime() },
  "49": { label: "20 Oct 2026", ts: new Date(2026, 9, 20).getTime() },
  "50": { label: "21 Oct 2026", ts: new Date(2026, 9, 21).getTime() },
  "51": { label: "22 Oct 2026", ts: new Date(2026, 9, 22).getTime() },
  "52": { label: "23 Oct 2026", ts: new Date(2026, 9, 23).getTime() },
  "53": { label: "26 Oct 2026", ts: new Date(2026, 9, 26).getTime() },
  "54": { label: "27 Oct 2026", ts: new Date(2026, 9, 27).getTime() },
  "55": { label: "28 Oct 2026", ts: new Date(2026, 9, 28).getTime() },
  "56": { label: "29 Oct 2026", ts: new Date(2026, 9, 29).getTime() },
  "57": { label: "30 Oct 2026", ts: new Date(2026, 9, 30).getTime() },
  "58": { label: "2 Nov 2026",  ts: new Date(2026, 10, 2).getTime() },
  "59": { label: "3 Nov 2026",  ts: new Date(2026, 10, 3).getTime() },
  "60": { label: "4 Nov 2026",  ts: new Date(2026, 10, 4).getTime() },
  "61": { label: "5 Nov 2026",  ts: new Date(2026, 10, 5).getTime() },
  "62": { label: "6 Nov 2026",  ts: new Date(2026, 10, 6).getTime() },
  "63": { label: "9 Nov 2026",  ts: new Date(2026, 10, 9).getTime() },
  "64": { label: "10 Nov 2026", ts: new Date(2026, 10, 10).getTime() },
  "65": { label: "11 Nov 2026", ts: new Date(2026, 10, 11).getTime() },
  "66": { label: "12 Nov 2026", ts: new Date(2026, 10, 12).getTime() },
  "67": { label: "13 Nov 2026", ts: new Date(2026, 10, 13).getTime() },
  "68": { label: "16 Nov 2026", ts: new Date(2026, 10, 16).getTime() },
  "69": { label: "17 Nov 2026", ts: new Date(2026, 10, 17).getTime() },
  "70": { label: "18 Nov 2026", ts: new Date(2026, 10, 18).getTime() },
  "71": { label: "19 Nov 2026", ts: new Date(2026, 10, 19).getTime() },
  "72": { label: "20 Nov 2026", ts: new Date(2026, 10, 20).getTime() },
  "73": { label: "23 Nov 2026", ts: new Date(2026, 10, 23).getTime() },
  "74": { label: "24 Nov 2026", ts: new Date(2026, 10, 24).getTime() },
  "75": { label: "25 Nov 2026", ts: new Date(2026, 10, 25).getTime() },
  "76": { label: "26 Nov 2026", ts: new Date(2026, 10, 26).getTime() },
  "77": { label: "27 Nov 2026", ts: new Date(2026, 10, 27).getTime() },
  "78": { label: "1 Dic 2026",  ts: new Date(2026, 11, 1).getTime() },
  "79": { label: "2 Dic 2026",  ts: new Date(2026, 11, 2).getTime() },
  "80": { label: "3 Dic 2026",  ts: new Date(2026, 11, 3).getTime() },
  "81": { label: "4 Dic 2026",  ts: new Date(2026, 11, 4).getTime() },
  "82": { label: "7 Dic 2026",  ts: new Date(2026, 11, 7).getTime() },
  "83": { label: "8 Dic 2026",  ts: new Date(2026, 11, 8).getTime() },
  "84": { label: "9 Dic 2026",  ts: new Date(2026, 11, 9).getTime() },
  "85": { label: "10 Dic 2026", ts: new Date(2026, 11, 10).getTime() },
  "86": { label: "11 Dic 2026", ts: new Date(2026, 11, 11).getTime() },
  "87": { label: "14 Dic 2026", ts: new Date(2026, 11, 14).getTime() },
  "88": { label: "15 Dic 2026", ts: new Date(2026, 11, 15).getTime() },
  "89": { label: "16 Dic 2026", ts: new Date(2026, 11, 16).getTime() },
  "90": { label: "17 Dic 2026", ts: new Date(2026, 11, 17).getTime() },
  "91": { label: "18 Dic 2026", ts: new Date(2026, 11, 18).getTime() },
  "92": { label: "21 Dic 2026", ts: new Date(2026, 11, 21).getTime() },
  "93": { label: "22 Dic 2026", ts: new Date(2026, 11, 22).getTime() },
  "94": { label: "23 Dic 2026", ts: new Date(2026, 11, 23).getTime() },
  "95": { label: "28 Dic 2026", ts: new Date(2026, 11, 28).getTime() },
  "96": { label: "29 Dic 2026", ts: new Date(2026, 11, 29).getTime() },
  "97": { label: "11 Ene 2027", ts: new Date(2027, 0, 11).getTime() },
  "98": { label: "12 Ene 2027", ts: new Date(2027, 0, 12).getTime() },
  "99": { label: "13 Ene 2027", ts: new Date(2027, 0, 13).getTime() },
  "00": { label: "14 Ene 2027", ts: new Date(2027, 0, 14).getTime() },
};

const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * The nearest deadline that hasn't fully elapsed yet, treating each deadline
 * as open through the end of that calendar day (23:59:59.999 local time).
 * Returns null once every date in the calendar has passed.
 */
export function getProximoVencimiento(now: number = Date.now()) {
  let best: { label: string; endOfDayTs: number } | null = null;
  for (const key in CALENDARIO_RENTA) {
    const entry = CALENDARIO_RENTA[key];
    const endOfDayTs = entry.ts + DAY_MS - 1;
    if (endOfDayTs >= now && (best === null || endOfDayTs < best.endOfDayTs)) {
      best = { label: entry.label, endOfDayTs };
    }
  }
  return best;
}
