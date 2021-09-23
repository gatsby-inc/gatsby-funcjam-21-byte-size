const { GoogleSpreadsheet } = require('google-spreadsheet');

export default async function handler(req, res) {
  const { userAnswer } = req.body;

  try {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n')
    });

    await doc.getInfo();

    const sheet = doc.sheetsByIndex[0];

    await sheet.addRows([{ [userAnswer]: 1 }]);

    res.status(200).json({ message: '🎉 Ten-four Good Buddy' });
  } catch (error) {
    res.status(500).json({ message: '🤯 What A Nightmare!' });
  }
}
