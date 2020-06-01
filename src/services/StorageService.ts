class StorageService {
  private ram: Record<string, string | undefined> = {};

  public setItem(key: string, value: {} | string) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn(e);
      this.ram[key] = JSON.stringify(value);
    }
  }

  public removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.warn(e);
      this.ram[key] = undefined;
    }
  }

  public getItem<T>(key: string): T {
    try {
      return JSON.parse(localStorage.getItem(key) as string);
    } catch (e) {
      console.warn(e);
      return JSON.parse(this.ram[key] as string);
    }
  }
}

export default new StorageService();
