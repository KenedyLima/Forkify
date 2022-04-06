export function getRecipeIdFromHash() {
  return window.location.hash.substring(1);
}

export async function getJson(response) {
  const result = await response;
  const data = await result.json();
  return data;
}

export function timeout(s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
}
