const url =
  "https://spreadsheets.google.com/feeds/cells/1PnsTLMpNN9WsffMnmmTMp-Na7zZlbc1kihDsh7m0mLo/7/public/full?alt=json";
export async function getData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      const error = await response.json();

      throw new Error(error.message);
    }
    return await response.json();
  } catch (err) {
    if (err.name !== "AbortError") {
      throw err;
    }
  }
}
