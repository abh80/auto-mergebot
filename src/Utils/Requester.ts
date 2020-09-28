const axios = require("axios");
export interface Options {
  token: string;
  body: any;
  method: "POST" | "GET" | "PUT" | "PATCH" | "DELETE";
  url: string;
}
export async function request(options: Options):Promise<any> {
  try {
    const { data: res } = await axios({
      url: options.url,
      method: options.method,
      headers: {
        Authorization: `token ${options.token}`,
        Accept: "application/vnd.github.v3+json",
      },
      data: JSON.stringify(options.body),
    });
    return res;
  } catch (E) {
    throw E;
  }
}
export async function get(url: string): Promise<any> {
  const { data: res } = await axios.get(url);
  return res;
}
