import Cors from 'cors';

const allowedOrigins = ['https://gatsbyfuncjam21bytesize.gatsbyjs.io'];

const cors = Cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error());
    }
  }
});

const runCorsMiddleware = (req, res) => {
  return new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export default async function handler(req, res) {
  try {
    await runCorsMiddleware(req, res);

    res.status(200).json({ response: '😎 All is Mondo cool!' });
  } catch (error) {
    res.status(403).json({ response: '🚫 Mind your potatos!' });
  }
}
