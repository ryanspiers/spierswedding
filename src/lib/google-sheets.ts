import { google } from "googleapis";

const auth = new google.auth.JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

export async function appendRow(values: string[]) {
  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    range: `${process.env.GOOGLE_SHEET_NAME || "Sheet1"}!A:A`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [values],
    },
  });
}
