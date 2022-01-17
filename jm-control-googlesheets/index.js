const express = require("express");

const { google } = require("googleapis");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render("index");
})

app.post("/", async (req, res) => {
    const { request, name } = req.body;

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
                    request, name
                ],
            ],
        }
    });

    res.send("Successfully Submitted. Thankyou !!!!");
});

app.listen(1337, (req, res) => {
    console.log("Server is up and running");
})