import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';

export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  res.status(200).json({ message: 'A ok!' });
}
