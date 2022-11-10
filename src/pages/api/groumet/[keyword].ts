const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const {
    query: { keyword },
  } = req;
  if (
    typeof process.env.API_URL_ROOT === 'undefined' ||
    keyword === undefined
  ) {
    return;
  }

};
export default handler;
