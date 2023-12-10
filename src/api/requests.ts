import { hostURL } from "./config";

async function fetchRequest(method: string, url: string, data: JSON | null) {
  let options: RequestInit = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (data !== null) options.body = JSON.stringify(data);

  let res = await fetch(hostURL + url, options);
  return await res.json();
}

export async function getReq(url: string) {
  return await fetchRequest("GET", url, null);
}

export async function postReq(url: string, data: JSON) {
  return await fetchRequest("POST", url, data);
}

export async function putReq(url: string, data: JSON) {
  return await fetchRequest("PUT", url, data);
}

export async function patchReq(url: string, data: JSON) {
  return await fetchRequest("PATCH", url, data);
}

export async function deleteReq(url: string) {
  return await fetchRequest("DELETE", url, null);
}
