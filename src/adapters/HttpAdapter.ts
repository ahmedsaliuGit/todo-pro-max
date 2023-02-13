export class HttpAdapter {
  private readonly baseUrl: string;

  constructor({ baseUrl }: { baseUrl: string }) {
    this.baseUrl = baseUrl;
  }

  get<T>(url: string): Promise<T> {
    return fetch(this.baseUrl + url).then((response) => response.json());
  }

  post<T>(url: string, data: T) {
    return fetch(this.baseUrl + url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  delete<T>(url: string, data: T) {
    return fetch(this.baseUrl + url, {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }
}
