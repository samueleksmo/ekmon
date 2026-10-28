// The email address is stored encoded (each character code shifted by 3) and
// only decoded in the visitor's browser, so it never appears as plain text in
// the HTML, the built JavaScript or this repository. This keeps it away from
// simple spam bots that scrape pages and code for addresses.
const encoded = [100,113,103,104,117,118,49,104,110,118,112,114,67,104,110,112,114,113,49,118,104];

export const EMAIL = String.fromCharCode(...encoded.map((c) => c - 3));
export const LINKEDIN = 'https://www.linkedin.com/company/ekmon-ab';
