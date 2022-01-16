const express = require("express");

const { google } = require("googleapis");

const app = express();

app.get("/", async (req, res) => {

    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    //Create client instance for auth
    const client = await auth.getClient();

    //Create instance of Google Sheet API
    const googleSheets = google.sheets({
        version: "v4", auth: client
    });


    const spreadsheetId = "1Un61O_iwsqpoWl6yOT1TZ0oNoreZ6gS1rF7QVWlQnbM";

    //Get metadata of spreadsheet
    const metaData = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,
    })

    // Read rows from spreadsheet

    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Sheet1!A:A",
    })

    // Write row(s) to spreadsheet

    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Sheet1!A:B",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                [
                    "Make a tutorial 1", "test"
                ],
                [
                    "Make a tutorial 2", "test2"
                ]
            ],
        }
    });

    res.send(getRows.data);
});

app.listen(1337, (req, res) => {
    console.log("Server is up and running");
})