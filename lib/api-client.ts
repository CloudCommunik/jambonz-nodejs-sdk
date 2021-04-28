
export class Client {
  constructor(private apiBaseUrl: string,) {
    if (!apiBaseUrl) throw new Error("Jambonz Rest Client: Invalid api base Url");
  }
}

